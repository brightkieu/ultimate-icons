# Ultimate Icons Showcase

This directory contains the GitHub Pages showcase website for the Ultimate Icons library.

## 🌐 Live Demo

Visit the live showcase: https://brightkieu.github.io/ultimate-icons

## 📁 Files

- `index.html` - Main showcase page with all icons
- `icon-data.json` - Generated icon data (auto-generated)

## 🔄 Automatic Updates

The showcase is automatically updated when:
1. Changes are pushed to the main branch
2. The GitHub Actions workflow runs
3. New icons are added or existing ones are modified

## 🛠 Manual Generation

To manually regenerate the showcase data:

```bash
npm run build
npm run generate-showcase
```

## 📋 Features

- **Search & Filter**: Find icons by name or category
- **Variant Toggle**: Switch between regular, bold, and color variants
- **Click to Copy**: Click any icon to copy its name
- **Responsive Design**: Works on all device sizes
- **Real-time Preview**: See actual SVG icons as they appear in your app

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the main branch.
