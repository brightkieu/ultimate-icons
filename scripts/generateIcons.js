const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, '../packages');
const srcDir = path.join(__dirname, '../src');

// Icon types mapping
const typeMapping = {
  'ultimate-regular': 'regular',
  'ultimate-bold': 'bold',
  'ultimate-colos': 'color'
};

// Function to convert SVG filename to PascalCase component name
function getIconName(filename) {
  return filename
    .replace('.svg', '')
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
    .replace(/^\d/, '_$&') // Prefix with underscore if starts with number
    .replace(/\d+$/, ''); // Remove trailing numbers
}

// Function to ensure unique icon names
function getUniqueIconName(baseName, usedNames, originalFilename) {
  if (!usedNames.has(baseName)) {
    usedNames.add(baseName);
    return baseName;
  }
  
  // If duplicate, try to extract meaningful suffix from original filename
  const numberMatch = originalFilename.match(/(\d+)(?=\.svg$)/);
  if (numberMatch) {
    const withNumber = baseName + numberMatch[1];
    if (!usedNames.has(withNumber)) {
      usedNames.add(withNumber);
      return withNumber;
    }
  }
  
  // Fallback: add incremental number
  let counter = 2;
  let uniqueName = baseName + counter;
  while (usedNames.has(uniqueName)) {
    counter++;
    uniqueName = baseName + counter;
  }
  usedNames.add(uniqueName);
  return uniqueName;
}

// Function to process SVG content
function processSvgContent(content) {
  // Remove the xmlns and id attributes, and normalize viewBox
  let processed = content
    .replace(/xmlns="[^"]*"/, '')
    .replace(/id="[^"]*"/, '')
    .trim();
  
  // Extract viewBox if exists, default to "0 0 24 24"
  const viewBoxMatch = processed.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  // Remove the opening and closing svg tags
  processed = processed
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim();
  
  return {
    viewBox,
    content: processed
  };
}

// Generate icon data
const iconData = {};
const usedNames = new Set();

// Process each package type
Object.keys(typeMapping).forEach(packageName => {
  const packagePath = path.join(packagesDir, packageName);
  const iconType = typeMapping[packageName];
  
  if (!fs.existsSync(packagePath)) return;
  
  // Recursively find all SVG files
  function findSvgFiles(dir, category = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Use the directory name as category
        findSvgFiles(filePath, file);
      } else if (file.endsWith('.svg')) {
        const baseName = getIconName(file);
        const iconName = getUniqueIconName(baseName, usedNames, file);
        const svgContent = fs.readFileSync(filePath, 'utf-8');
        const processed = processSvgContent(svgContent);
        
        if (!iconData[iconName]) {
          iconData[iconName] = {
            name: iconName,
            category: category || 'general',
            variants: {}
          };
        }
        
        iconData[iconName].variants[iconType] = {
          viewBox: processed.viewBox,
          content: processed.content
        };
      }
    });
  }
  
  findSvgFiles(packagePath);
});

// Generate TypeScript file with icon data
const iconDataTs = `// Auto-generated icon data
export interface IconVariant {
  viewBox: string;
  content: string;
}

export interface IconData {
  name: string;
  category: string;
  variants: {
    regular?: IconVariant;
    bold?: IconVariant;
    color?: IconVariant;
  };
}

export const iconData: Record<string, IconData> = ${JSON.stringify(iconData, null, 2)};

export const iconNames = Object.keys(iconData);

// TypeScript union type for all icon names
export type IconName = ${Object.keys(iconData).map(name => `'${name}'`).join(' | ')};
`;

fs.writeFileSync(path.join(srcDir, 'iconData.ts'), iconDataTs);

console.log(`Generated ${Object.keys(iconData).length} icons`);
console.log('Icon data generated successfully!');
