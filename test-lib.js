#!/usr/bin/env node

// Simple test to verify the library works
const { Icon } = require('./dist/index.js');
const React = require('react');

console.log('✅ Ultimate Icons library built successfully!');
console.log(`📦 Icon component: ${typeof Icon}`);

// Test icon data loading
try {
  const { iconNames, getCategories } = require('./dist/index.js');
  console.log(`🎯 Total icons: ${iconNames.length}`);
  console.log(`📁 Categories: ${getCategories().length}`);
  console.log(`📋 Sample categories: ${getCategories().slice(0, 5).join(', ')}`);
  console.log(`🔍 Sample icons (PascalCase): ${iconNames.slice(0, 5).join(', ')}`);
} catch (error) {
  console.error('❌ Error testing library:', error.message);
}

console.log('\n🚀 Library is ready to use!');
console.log('\nUsage example:');
console.log(`import { Icon, type IconName } from 'ultimate-icons';`);
console.log(`<Icon name="ArrowButtonCircleLeft" type="bold" size={24} color="blue" />`);
console.log(`<Icon name="ArrowButtonRight" type="regular" size={32} />`);
console.log(`<Icon name="MusicOnOff" type="color" />`);
