# Jack of All Trades Calculator

This repository contains a plain static HTML/CSS/JavaScript app for planning League of Legends items around the Jack of All Trades rune. Open `index.html` directly in a browser or host the files on GitHub Pages.

The app data is generated from `ItemData.txt`. The helper script at `tools/extract_items.py` is a one-time local utility for building `items.js`; it is not a runtime dependency and is not needed by the deployed site.

## Data generation

The extractor reads `ItemData.txt`, filters only items where `["classic sr 5v5"] = true` in the `modes` table, and keeps only items that have both a `stats` table and a `buy` field. It ignores recipes, effects, nicknames, captions, tags, menus, and all other fields.

Generate the data file with:

```bash
python3 tools/extract_items.py ItemData.txt items.js
```

You can then edit `items.js` manually if you want to tweak item data by hand after generation.

## Run locally

Open `index.html` in a browser. No build step, package manager, backend, or remote data fetch is required.

## GitHub Pages deployment

1. Create a GitHub repo named `jackofalltrades`.
2. Push these files.
3. Go to Settings → Pages.
4. Choose “Deploy from branch”.
5. Choose `main` and `/root`.
6. Visit `https://USERNAME.github.io/jackofalltrades/`.
