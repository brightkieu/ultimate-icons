# Ultimate Icons

A comprehensive React icon library with 3000+ high-quality SVG icons in three variants: regular, bold, and color.

## 🌐 Live Showcase

**[View all icons in our interactive showcase →](https://brightkieu.github.io/ultimate-icons)**

Browse, search, and copy icon names with our beautiful showcase website.

## Installation

```bash
npm install ultimate-icons
```

## Usage

### Basic Usage

```tsx
import React from 'react';
import { Icon } from 'ultimate-icons';

function MyComponent() {
  return (
    <div>
      <Icon name="ArrowButtonCircleLeft" />
      <Icon name="ArrowButtonCircleLeft" type="bold" />
      <Icon name="ArrowButtonCircleLeft" type="color" />
    </div>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | **required** | Name of the icon (PascalCase, e.g., "ArrowButtonCircleLeft") |
| `type` | `'regular' \| 'bold' \| 'color'` | `'regular'` | Type/variant of the icon |
| `color` | `string` | `'currentColor'` | Color of the icon (applied to fill and stroke) |
| `size` | `number` | `24` | Size in pixels (sets both width and height) |
| `width` | `number` | - | Width in pixels (overrides size) |
| `height` | `number` | - | Height in pixels (overrides size) |
| `className` | `string` | - | Additional CSS class |
| `style` | `React.CSSProperties` | - | Additional inline styles |
| `onClick` | `() => void` | - | Click handler |

### Size and Dimensions

You can control the icon size in three ways:

1. **Using `size` prop** - Sets both width and height to the same value:
```tsx
<Icon name="ArrowButtonCircleLeft" size={32} />
```

2. **Using `width` and `height` props** - Allows different width and height:
```tsx
<Icon name="ArrowButtonCircleLeft" width={40} height={20} />
```

3. **Mixed usage** - If you specify `width` or `height`, the `size` prop is ignored:
```tsx
<Icon name="ArrowButtonCircleLeft" size={24} width={40} /> {/* height will be 24, width will be 40 */}
```

### Color Customization

For `regular` and `bold` types, you can customize the color:

```tsx
<Icon name="ArrowButtonCircleLeft" color="red" />
<Icon name="ArrowButtonCircleLeft" color="#3498db" />
<Icon name="ArrowButtonCircleLeft" color="rgb(255, 0, 0)" />
```

**Note:** Color customization doesn't apply to `color` type icons as they have predefined colors.

## Icon Naming Convention

All icon names use **PascalCase** format for consistency with React component naming, and trailing numbers are removed for cleaner names:

- Original SVG: `Arrow Button Circle Left.svg` → `ArrowButtonCircleLeft`
- Original SVG: `Arrow Button Right 1.svg` → `ArrowButtonRight` (number removed)
- Original SVG: `Settings Slider Desktop Horizontal.svg` → `SettingsSliderDesktopHorizontal`
- Original SVG: `Music On Off 1.svg` → `MusicOnOff` (number removed)

The TypeScript `IconName` type provides full auto-completion support, so you'll get suggestions for all available icon names in your IDE.

### Interactive Icons

```tsx
<Icon 
  name="ArrowButtonCircleLeft" 
  onClick={() => console.log('Icon clicked!')}
  style={{ cursor: 'pointer' }}
/>
```

## Utility Functions

The library provides several utility functions to help you work with icons:

```tsx
import { 
  getIconNames, 
  hasIcon, 
  getIconVariants, 
  getIconsByCategory, 
  getCategories, 
  searchIcons,
  type IconName 
} from 'ultimate-icons';

// Get all available icon names
const allIcons = getIconNames(); // IconName[]

// Check if an icon exists
const exists = hasIcon('ArrowButtonCircleLeft'); // boolean

// Get available variants for an icon
const variants = getIconVariants('ArrowButtonCircleLeft'); // ('regular' | 'bold' | 'color')[]

// Get all icons in a specific category
const arrowIcons = getIconsByCategory('Arrows Diagrams'); // IconName[]

// Get all available categories
const categories = getCategories(); // string[]

// Search for icons
const searchResults = searchIcons('arrow'); // IconName[]
```

## Icon Categories

The library includes icons from various categories:

- Arrows Diagrams
- Business Products
- Computers Devices Electronics
- Content
- Design
- Emails
- Entertainment Events Hobbies
- Files Folders
- Food Drinks
- Health Beauty
- Images Photography
- Interface Essential
- Internet Networks Servers
- Logos
- Maps Navigation
- Messages Chat Smileys
- Money Payments Finance
- Music Audio
- Phones Mobile Devices
- Programming Apps Websites
- Science
- Shipping Delivery
- Shopping Ecommerce
- Social Medias Rewards Rating
- Sports
- Transportation
- Users
- Video Movies TV
- Wayfinding
- Weather
- Work Office Companies

## Icon Variants

Each icon may be available in up to three variants:

- **Regular**: Standard weight icons
- **Bold**: Heavier weight icons  
- **Color**: Multi-colored icons with predefined color schemes

## TypeScript Support

The library is fully typed and provides excellent TypeScript support with auto-completion for icon names:

```tsx
import { Icon, IconProps, IconType, type IconName } from 'ultimate-icons';

// TypeScript will auto-complete icon names
const MyIcon: React.FC<{ variant: IconType }> = ({ variant }) => {
  return <Icon name="ArrowButtonCircleLeft" type={variant} />; // Full autocomplete support
};

// Type-safe icon name handling
function renderIcon(iconName: IconName) {
  return <Icon name={iconName} />; // iconName is guaranteed to be valid
}
```

## Examples

### Icon Gallery

```tsx
import { Icon, getIconNames } from 'ultimate-icons';

function IconGallery() {
  const iconNames = getIconNames();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      {iconNames.map(name => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon name={name} size={24} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
```

### Icon Picker

```tsx
import { Icon, searchIcons } from 'ultimate-icons';
import { useState } from 'react';

function IconPicker() {
  const [search, setSearch] = useState('');
  const results = searchIcons(search);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search icons..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '8px' }}>
        {results.slice(0, 50).map(name => (
          <div key={name} style={{ padding: '8px', border: '1px solid #ccc', textAlign: 'center' }}>
            <Icon name={name} size={32} />
            <div style={{ fontSize: '12px', marginTop: '4px' }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
