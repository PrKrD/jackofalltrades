const state = {
  selectedIds: new Set(),
  searchTerm: "",
  sortMode: "alphabetical"
};

const els = {
  dataPatch: document.getElementById("dataPatch"),
  targetValue: document.getElementById("targetValue"),
  searchInput: document.getElementById("searchInput"),
  sortSelect: document.getElementById("sortSelect"),
  itemList: document.getElementById("itemList"),
  itemCount: document.getElementById("itemCount"),
  selectedItems: document.getElementById("selectedItems"),
  selectedCount: document.getElementById("selectedCount"),
  totalGold: document.getElementById("totalGold"),
  specialCostNote: document.getElementById("specialCostNote"),
  activeStats: document.getElementById("activeStats"),
  activeCount: document.getElementById("activeCount"),
  progressText: document.getElementById("progressText"),
  progressHelp: document.getElementById("progressHelp"),
  progressBar: document.getElementById("progressBar"),
  clearAll: document.getElementById("clearAll")
};

const statOrder = Object.keys(STAT_TYPES);

els.dataPatch.textContent = DATA_PATCH;
els.targetValue.textContent = TARGET_UNIQUE_STATS;

function getItemKey(item) {
  return item.id ?? item.slug;
}

function getSelectedItems() {
  return ITEMS.filter((item) => state.selectedIds.has(getItemKey(item)));
}

function getActiveStatTypes(selectedItems = getSelectedItems()) {
  const activeStatTypes = new Set();
  for (const item of selectedItems) {
    for (const stat of item.stats) {
      activeStatTypes.add(stat.type);
    }
  }
  return activeStatTypes;
}

function getNewStatsForItem(item, activeStatTypes) {
  return item.stats.filter((stat) => !activeStatTypes.has(stat.type));
}

function getTotalGold(selectedItems) {
  return selectedItems.reduce((sum, item) => sum + (typeof item.cost === "number" ? item.cost : 0), 0);
}

function formatCost(item) {
  if (typeof item.cost === "number") {
    return `${item.cost.toLocaleString()}g`;
  }
  return item.buyDisplay || "Special cost";
}

function matchesSearch(item, searchTerm) {
  if (!searchTerm) {
    return true;
  }

  const haystacks = [item.name, item.buyDisplay ?? ""];
  for (const stat of item.stats) {
    haystacks.push(stat.label, stat.sourceKey, String(stat.value));
  }

  return haystacks.some((value) => value.toLowerCase().includes(searchTerm));
}

function costSortValue(item, ascending = true) {
  if (typeof item.cost === "number") {
    return item.cost;
  }
  return ascending ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}

function getVisibleItems() {
  const activeStatTypes = getActiveStatTypes();
  const searchTerm = state.searchTerm.trim().toLowerCase();

  const visibleItems = ITEMS.filter((item) => matchesSearch(item, searchTerm));
  const decorated = visibleItems.map((item) => ({
    item,
    newCount: getNewStatsForItem(item, activeStatTypes).length,
    selected: state.selectedIds.has(getItemKey(item))
  }));

  decorated.sort((left, right) => {
    switch (state.sortMode) {
      case "most-new-stats":
        return right.newCount - left.newCount || left.item.name.localeCompare(right.item.name);
      case "lowest-cost":
        return costSortValue(left.item, true) - costSortValue(right.item, true) || left.item.name.localeCompare(right.item.name);
      case "highest-cost":
        return costSortValue(right.item, false) - costSortValue(left.item, false) || left.item.name.localeCompare(right.item.name);
      default:
        return left.item.name.localeCompare(right.item.name);
    }
  });

  return decorated;
}

function renderItems() {
  const decoratedItems = getVisibleItems();
  const activeStatTypes = getActiveStatTypes();

  els.itemCount.textContent = `${decoratedItems.length} item${decoratedItems.length === 1 ? "" : "s"}`;
  els.itemList.innerHTML = "";

  if (!decoratedItems.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "No items match your search.";
    els.itemList.append(emptyState);
    return;
  }

  const fragment = document.createDocumentFragment();

  for (const { item, newCount, selected } of decoratedItems) {
    const newStats = getNewStatsForItem(item, activeStatTypes);
    const card = document.createElement("article");
    card.className = ["item-card", selected ? "selected" : "", newStats.length ? "new-stats" : "muted-item"].filter(Boolean).join(" ");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", String(selected));

    card.addEventListener("click", () => toggleItem(item));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleItem(item);
      }
    });

    const topRow = document.createElement("div");
    topRow.className = "item-card-header";

    const titleWrap = document.createElement("div");
    titleWrap.className = "item-title-wrap";

    const titleRow = document.createElement("div");
    titleRow.className = "item-title-row";

    const checkboxWrap = document.createElement("label");
    checkboxWrap.className = "card-check";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = selected;
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("change", () => toggleItem(item));

    checkboxWrap.append(input, document.createTextNode("Select"));

    const title = document.createElement("h3");
    title.className = "item-title";
    title.textContent = item.name;

    const cost = document.createElement("span");
    cost.className = "cost-pill";
    cost.textContent = formatCost(item);

    titleRow.append(title, cost);

    const meta = document.createElement("div");
    meta.className = "item-meta";

    const statePill = document.createElement("span");
    statePill.className = `status-pill${typeof item.cost !== "number" ? " special" : ""}`;
    statePill.textContent = selected ? "Selected" : `${newCount} new stat${newCount === 1 ? "" : "s"}`;
    meta.append(statePill);

    if (typeof item.cost !== "number") {
      const special = document.createElement("span");
      special.className = "status-pill special";
      special.textContent = "Special cost";
      meta.append(special);
    }

    titleWrap.append(titleRow, meta);
    topRow.append(titleWrap, checkboxWrap);

    const statList = document.createElement("div");
    statList.className = "item-stats";

    for (const stat of item.stats) {
      const chip = document.createElement("span");
      chip.className = "stat-chip";

      const label = document.createElement("strong");
      label.textContent = stat.label;

      const source = document.createElement("span");
      source.className = "source";
      source.textContent = stat.sourceKey;

      chip.append(label, source);

      if (stat.value !== undefined) {
        const value = document.createElement("span");
        value.className = "value";
        value.textContent = typeof stat.value === "number" ? String(stat.value) : stat.value;
        chip.append(value);
      }

      statList.append(chip);
    }

    card.append(topRow, statList);
    fragment.append(card);
  }

  els.itemList.append(fragment);
}

function renderSelectedItems() {
  const selectedItems = getSelectedItems();
  els.selectedCount.textContent = `${selectedItems.length} selected`;
  els.selectedItems.innerHTML = "";

  if (!selectedItems.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "No items selected yet.";
    els.selectedItems.append(emptyState);
    return;
  }

  const fragment = document.createDocumentFragment();

  for (const item of selectedItems) {
    const row = document.createElement("div");
    row.className = "selected-item";

    const name = document.createElement("span");
    name.className = "selected-name";
    name.textContent = item.name;

    const cost = document.createElement("span");
    cost.className = "selected-cost";
    cost.textContent = formatCost(item);

    row.append(name, cost);
    fragment.append(row);
  }

  els.selectedItems.append(fragment);
}

function renderActiveStats() {
  const activeStatTypes = [...getActiveStatTypes()].sort((left, right) => statOrder.indexOf(left) - statOrder.indexOf(right));
  els.activeCount.textContent = `${activeStatTypes.length} active`;
  els.activeStats.innerHTML = "";

  if (!activeStatTypes.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "Select items to activate unique stats.";
    els.activeStats.append(emptyState);
    return;
  }

  const fragment = document.createDocumentFragment();

  for (const type of activeStatTypes) {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = STAT_TYPES[type] || type;
    fragment.append(chip);
  }

  els.activeStats.append(fragment);
}

function renderProgress() {
  const activeCount = getActiveStatTypes().size;
  const progress = Math.min(100, (activeCount / TARGET_UNIQUE_STATS) * 100);

  els.progressText.textContent = `${activeCount} / ${TARGET_UNIQUE_STATS}`;
  els.progressBar.style.width = `${progress}%`;
  els.progressHelp.textContent = progress >= 100 ? "Target reached." : `${Math.max(0, TARGET_UNIQUE_STATS - activeCount)} more unique stat type${TARGET_UNIQUE_STATS - activeCount === 1 ? "" : "s"} needed.`;
}

function renderSummary() {
  const selectedItems = getSelectedItems();
  const totalGold = getTotalGold(selectedItems);
  const hasSpecialCostItems = selectedItems.some((item) => typeof item.cost !== "number");

  els.totalGold.textContent = `${totalGold.toLocaleString()}g`;
  els.specialCostNote.textContent = hasSpecialCostItems ? "Special-cost items are not included in the total." : "";
}

function renderAll() {
  renderItems();
  renderSelectedItems();
  renderActiveStats();
  renderProgress();
  renderSummary();
}

function toggleItem(item) {
  const itemKey = getItemKey(item);
  if (state.selectedIds.has(itemKey)) {
    state.selectedIds.delete(itemKey);
  } else {
    state.selectedIds.add(itemKey);
  }
  renderAll();
}

function handleSearchAndSort() {
  state.searchTerm = els.searchInput.value;
  state.sortMode = els.sortSelect.value;
  renderAll();
}

els.searchInput.addEventListener("input", handleSearchAndSort);
els.sortSelect.addEventListener("change", handleSearchAndSort);
els.clearAll.addEventListener("click", () => {
  state.selectedIds.clear();
  renderAll();
});

renderAll();