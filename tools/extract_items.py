#!/usr/bin/env python3
"""Extract Jack of All Trades item data from ItemData.txt into items.js."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path


DATA_PATCH = "Manual data from ItemData.txt"
TARGET_UNIQUE_STATS = 10

STAT_TYPES = {
    "attackDamage": "Attack damage",
    "attackSpeed": "Attack speed",
    "abilityHaste": "Ability haste",
    "abilityPower": "Ability power",
    "armor": "Armor",
    "percentageArmorPenetration": "Percentage armor penetration",
    "criticalStrikeChance": "Critical strike chance",
    "criticalStrikeDamage": "Critical strike damage",
    "goldGeneration": "Gold generation",
    "healAndShieldPower": "Heal and shield power",
    "health": "Health",
    "baseHealthRegeneration": "Base health regeneration",
    "lifeSteal": "Life steal",
    "lethality": "Lethality",
    "flatMagicPenetration": "Flat magic penetration",
    "percentageMagicPenetration": "Percentage magic penetration",
    "magicResistance": "Magic resistance",
    "mana": "Mana",
    "baseManaRegeneration": "Base mana regeneration",
    "flatMovementSpeed": "Flat movement speed",
    "percentageMovementSpeed": "Percentage movement speed",
    "omnivamp": "Omnivamp",
    "tenacity": "Tenacity",
}

SOURCE_STAT_TO_APP_STAT = {
    "ad": "attackDamage",
    "as": "attackSpeed",
    "ah": "abilityHaste",
    "ap": "abilityPower",
    "armor": "armor",
    "armpen": "percentageArmorPenetration",
    "crit": "criticalStrikeChance",
    "critdamage": "criticalStrikeDamage",
    "gp10": "goldGeneration",
    "hsp": "healAndShieldPower",
    "hp": "health",
    "hp5": "baseHealthRegeneration",
    "hp5flat": "baseHealthRegeneration",
    "lifesteal": "lifeSteal",
    "lethality": "lethality",
    "mpenflat": "flatMagicPenetration",
    "mpen": "percentageMagicPenetration",
    "mr": "magicResistance",
    "mana": "mana",
    "mp5": "baseManaRegeneration",
    "msflat": "flatMovementSpeed",
    "ms": "percentageMovementSpeed",
    "omnivamp": "omnivamp",
    "tenacity": "tenacity",
}


def strip_comments(source: str) -> str:
    result = []
    i = 0
    in_string = False
    quote = ""
    escaped = False
    length = len(source)

    while i < length:
        ch = source[i]
        nxt = source[i + 1] if i + 1 < length else ""

        if not in_string and ch == "-" and nxt == "-":
            if source.startswith("--[[", i):
                end = source.find("]]", i + 4)
                if end == -1:
                    break
                i = end + 2
                continue

            newline = source.find("\n", i)
            if newline == -1:
                break
            result.append("\n")
            i = newline + 1
            continue

        result.append(ch)

        if in_string:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == quote:
                in_string = False
                quote = ""
        elif ch in ('"', "'"):
            in_string = True
            quote = ch

        i += 1

    return "".join(result)


def skip_ws(text: str, index: int) -> int:
    while index < len(text) and text[index] in " \t\r\n,":
        index += 1
    return index


def parse_quoted_string(text: str, index: int) -> tuple[str, int]:
    quote = text[index]
    index += 1
    result = []
    escaped = False

    while index < len(text):
        ch = text[index]
        if escaped:
            result.append(ch)
            escaped = False
        elif ch == "\\":
            escaped = True
        elif ch == quote:
            return "".join(result), index + 1
        else:
            result.append(ch)
        index += 1

    raise ValueError("Unterminated string literal")


def find_matching_brace(text: str, start_index: int) -> int:
    if text[start_index] != "{":
        raise ValueError("Expected opening brace")

    depth = 0
    index = start_index
    in_string = False
    quote = ""
    escaped = False

    while index < len(text):
        ch = text[index]
        if in_string:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == quote:
                in_string = False
                quote = ""
        else:
            if ch in ('"', "'"):
                in_string = True
                quote = ch
            elif ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    return index
        index += 1

    raise ValueError("Unbalanced braces")


def parse_value(text: str, index: int) -> tuple[object, int]:
    index = skip_ws(text, index)
    if index >= len(text):
        raise ValueError("Missing value")

    ch = text[index]
    if ch in ('"', "'"):
        return parse_quoted_string(text, index)
    if ch == "{":
        end = find_matching_brace(text, index)
        return text[index + 1 : end], end + 1

    number_match = re.match(r"-?\d+(?:\.\d+)?", text[index:])
    if number_match:
        raw = number_match.group(0)
        value = float(raw) if "." in raw else int(raw)
        return value, index + len(raw)

    identifier_match = re.match(r"[A-Za-z_][A-Za-z_0-9]*", text[index:])
    if identifier_match:
        raw = identifier_match.group(0)
        if raw == "true":
            return True, index + len(raw)
        if raw == "false":
            return False, index + len(raw)
        if raw == "nil":
            return None, index + len(raw)
        return raw, index + len(raw)

    raise ValueError(f"Unsupported value starting at: {text[index:index + 24]!r}")


def find_field_value(block: str, field_name: str) -> tuple[object | None, bool]:
    target = f'["{field_name}"]'
    index = 0
    depth = 0
    in_string = False
    quote = ""
    escaped = False

    while index < len(block):
        ch = block[index]
        if in_string:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == quote:
                in_string = False
                quote = ""
        else:
            if ch in ('"', "'"):
                in_string = True
                quote = ch
            elif ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
            elif depth == 1 and block.startswith(target, index):
                value_start = skip_ws(block, index + len(target))
                if value_start < len(block) and block[value_start] == "=":
                    value, end = parse_value(block, value_start + 1)
                    return value, True
        index += 1

    return None, False


def parse_item_blocks(text: str) -> list[tuple[str, str]]:
    start = text.find("return")
    if start == -1:
        raise ValueError("Missing return table")

    open_brace = text.find("{", start)
    if open_brace == -1:
        raise ValueError("Missing top-level table")

    items = []
    index = skip_ws(text, open_brace + 1)

    while index < len(text):
        index = skip_ws(text, index)
        if index >= len(text) or text[index] == "}":
            break
        if text[index] != "[" or not text.startswith('["', index):
            index += 1
            continue

        item_name, key_end = parse_quoted_string(text, index + 1)
        index = skip_ws(text, key_end)
        if index < len(text) and text[index] == "]":
            index = skip_ws(text, index + 1)
        if index >= len(text) or text[index] != "=":
            raise ValueError(f"Missing assignment for item {item_name}")
        index = skip_ws(text, index + 1)
        if index >= len(text) or text[index] != "{":
            raise ValueError(f"Missing item table for {item_name}")

        end = find_matching_brace(text, index)
        items.append((item_name, text[index : end + 1]))
        index = end + 1

    return items


def parse_stats_table(stats_body: str, unknown_keys: dict[str, int]) -> list[dict[str, object]]:
    stats = []
    seen_types: set[str] = set()
    index = 0

    while index < len(stats_body):
        index = skip_ws(stats_body, index)
        if index >= len(stats_body):
            break
        if not stats_body.startswith('["', index):
            index += 1
            continue

        key, key_end = parse_quoted_string(stats_body, index + 1)
        value_start = skip_ws(stats_body, key_end)
        if value_start < len(stats_body) and stats_body[value_start] == "]":
            value_start = skip_ws(stats_body, value_start + 1)
        if value_start >= len(stats_body) or stats_body[value_start] != "=":
            index = key_end
            continue

        value, value_end = parse_value(stats_body, value_start + 1)
        index = value_end

        app_type = SOURCE_STAT_TO_APP_STAT.get(key)
        if app_type is None:
            unknown_keys[key] = unknown_keys.get(key, 0) + 1
            continue
        if app_type in seen_types:
            continue

        seen_types.add(app_type)
        stats.append(
            {
                "type": app_type,
                "label": STAT_TYPES[app_type],
                "value": value,
                "sourceKey": key,
            }
        )

    return stats


def slugify(name: str) -> str:
    slug = name.lower().replace("'", "")
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    return slug.strip("-")


def format_buy_display(cost: int | None, buy_value: object) -> str:
    if isinstance(cost, int):
        return f"{cost}g"
    return str(buy_value)


def extract_items(source_path: Path, output_path: Path) -> None:
    raw_source = source_path.read_text(encoding="utf-8")
    cleaned_source = strip_comments(raw_source)
    item_blocks = parse_item_blocks(cleaned_source)

    included_items = []
    skipped_not_classic = 0
    skipped_missing_stats = 0
    skipped_missing_buy = 0
    unknown_stat_keys: dict[str, int] = {}

    for item_name, block in item_blocks:
        modes_value, has_modes = find_field_value(block, "modes")
        if not has_modes or not isinstance(modes_value, str):
            skipped_not_classic += 1
            continue
        if '"classic sr 5v5"' not in modes_value or "true" not in modes_value:
            skipped_not_classic += 1
            continue

        stats_value, has_stats = find_field_value(block, "stats")
        if not has_stats or not isinstance(stats_value, str) or not stats_value.strip():
            skipped_missing_stats += 1
            continue

        buy_value, has_buy = find_field_value(block, "buy")
        if not has_buy:
            skipped_missing_buy += 1
            continue

        item_id_value, has_id = find_field_value(block, "id")
        item_id = str(item_id_value) if has_id and item_id_value is not None else None

        stats = parse_stats_table(stats_value, unknown_stat_keys)
        if not stats:
            skipped_missing_stats += 1
            continue

        cost = buy_value if isinstance(buy_value, int) else None
        included_items.append(
            {
                "id": item_id,
                "slug": slugify(item_name),
                "name": item_name,
                "cost": cost,
                "buyDisplay": format_buy_display(cost, buy_value),
                "stats": stats,
            }
        )

    included_items.sort(key=lambda item: item["name"].lower())

    js = [
        f'const DATA_PATCH = {json.dumps(DATA_PATCH)};',
        f"const TARGET_UNIQUE_STATS = {TARGET_UNIQUE_STATS};",
        "",
        f"const STAT_TYPES = {json.dumps(STAT_TYPES, indent=2)};",
        "",
        f"const SOURCE_STAT_TO_APP_STAT = {json.dumps(SOURCE_STAT_TO_APP_STAT, indent=2)};",
        "",
        f"const ITEMS = {json.dumps(included_items, indent=2)};",
        "",
    ]
    output_path.write_text("\n".join(js), encoding="utf-8")

    print(f"Total top-level items found: {len(item_blocks)}")
    print(f"Items included: {len(included_items)}")
    print(f"Items skipped because not classic SR: {skipped_not_classic}")
    print(f"Items skipped because missing stats: {skipped_missing_stats}")
    print(f"Items skipped because missing buy: {skipped_missing_buy}")
    if unknown_stat_keys:
        unknown_details = ", ".join(f"{key} ({count})" for key, count in sorted(unknown_stat_keys.items()))
        print(f"Unknown stat keys encountered: {len(unknown_stat_keys)} unique; {unknown_details}")
    else:
        print("Unknown stat keys encountered: 0")


def main(argv: list[str]) -> int:
    if len(argv) != 3:
        print("Usage: python tools/extract_items.py ItemData.txt items.js", file=sys.stderr)
        return 1

    source_path = Path(argv[1])
    output_path = Path(argv[2])
    extract_items(source_path, output_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))