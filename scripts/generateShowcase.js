const fs = require('fs');
const path = require('path');

// Import the built icon data
const { iconData } = require('../dist/index.js');

// Create the JSON file for the showcase
const showcaseData = JSON.stringify(iconData, null, 2);

// Write to docs folder for GitHub Pages
const docsDir = path.join(__dirname, '../docs');
if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
}

fs.writeFileSync(path.join(docsDir, 'icon-data.json'), showcaseData);

console.log(`✅ Generated icon-data.json with ${Object.keys(iconData).length} icons for GitHub Pages`);
console.log('📁 File saved to: docs/icon-data.json');
console.log('🚀 Ready for GitHub Pages deployment!');
