# SiteQA Site Diary

Offline daily diary: several activities per day, each with its own workers and hours, plus plant, delays and notes.
Data is saved on the device (IndexedDB). Use Export → Back up everything to move it between devices.

## Add to SiteQA (GitHub Pages)
1. Copy this `diary` folder into the SiteQA repo:
   - Vite / CRA project: put it in `public/diary/` (it gets copied into the build unchanged)
   - Plain static site: put it at the repo root as `diary/`
2. Commit and push. GitHub Pages redeploys in about a minute.
3. The diary is then at `https://<your-github-user>.github.io/<repo>/diary/`
4. Optional: add a link to `diary/` in the SiteQA menu.

## Install on your phone
- Android (Chrome): open the URL → ⋮ menu → Install app (or Add to Home screen)
- iPhone (Safari): open the URL → Share → Add to Home Screen
Open it once while you have signal. After that it works offline.

## Work laptop
- Open the same URL in Edge or Chrome. Optional: ⋯ menu → Apps → Install this site as an app
- The laptop keeps its own copy of the data, so carry your diary across:
  Phone: Export → Back up everything → send the file to yourself (email, OneDrive or Teams)
  Laptop: Export → Import backup → pick the file
- Importing merges entries and never deletes anything. Locked days are never overwritten.

## Exports
- Labour CSV: one row per worker per activity per day (for timesheets and Excel pivots)
- Activities CSV: one row per activity per day
- Print / PDF: choose "Save as PDF" in the print dialog, for one day or a whole date range
- Backup JSON: everything, including your crew list

Back up weekly. The app shows a reminder when the last backup is more than 7 days old.
