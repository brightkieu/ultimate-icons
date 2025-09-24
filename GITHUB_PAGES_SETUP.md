# GitHub Pages Deployment Guide

## 🚀 Quick Setup

Your Ultimate Icons showcase is ready for GitHub Pages! Follow these steps:

### 1. Push to GitHub

```bash
git add .
git commit -m "Add Ultimate Icons showcase for GitHub Pages"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/brightkieu/ultimate-icons`
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The site will automatically deploy!

### 3. Access Your Showcase

Your showcase will be available at:
```
https://brightkieu.github.io/ultimate-icons
```

## ⚡ Features

### 🎨 **Beautiful Showcase**
- Modern, responsive design
- Gradient backgrounds and glassmorphism effects
- Mobile-friendly interface

### 🔍 **Search & Filter**
- Real-time search by icon name or category
- Filter by specific categories
- Toggle between icon variants (regular, bold, color)

### 📋 **Click to Copy**
- Click any icon to copy its name to clipboard
- Perfect for developers using the library
- Visual feedback when copying

### 📊 **Statistics**
- Total icon count
- Number of categories
- Variant information

### 📱 **Responsive Design**
- Works on desktop, tablet, and mobile
- Adaptive grid layout
- Touch-friendly controls

## 🛠 Development

### Local Testing

```bash
# Build the library and generate showcase
npm run build

# Serve locally for testing
npm run serve

# Visit http://localhost:3000
```

### Manual Regeneration

```bash
# Generate icon data only
npm run generate-showcase

# Full rebuild
npm run build
```

## 🔄 Automatic Updates

The showcase automatically updates when:

1. **Code changes**: Any push to main branch triggers rebuild
2. **New icons**: Adding SVG files regenerates the showcase
3. **Library updates**: Icon data is automatically refreshed

## 📁 File Structure

```
docs/
├── index.html          # Main showcase page
├── icon-data.json      # Generated icon data
└── README.md          # Documentation

.github/workflows/
└── deploy.yml         # GitHub Actions deployment
```

## 🎯 Usage Examples in Showcase

The showcase demonstrates:

```tsx
// Basic usage
<Icon name="ArrowButtonCircleLeft" />

// With variants
<Icon name="ArrowButtonRight" type="bold" size={32} />

// With colors
<Icon name="MusicOnOff" type="regular" color="blue" />
```

## 🌟 Next Steps

1. **Custom Domain**: Set up a custom domain in GitHub Pages settings
2. **Analytics**: Add Google Analytics for usage tracking
3. **Feedback**: Add GitHub issues integration for feedback
4. **Documentation**: Link to full API documentation

Your showcase is now ready to help developers discover and use your icon library! 🎉
