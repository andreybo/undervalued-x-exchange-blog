# Quick Reference - New Design System

## 🎨 Color Variables

### Using in SCSS
```scss
// Primary colors
background-color: $primary;      // Navy: hsl(209, 100%, 14%)
background-color: $accent;       // Gold: hsl(42, 44%, 60%)
color: $white;                   // White
color: $dark;                    // Same as $primary

// With HSL for transparency
background-color: hsl(209, 100%, 14%);
background-color: hsla(209, 100%, 14%, 0.8); // 80% opacity
```

### Using CSS Custom Properties
```css
/* In your CSS/SCSS */
.my-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

/* With opacity */
.my-element {
  background-color: hsl(var(--primary) / 0.8);
}
```

### Utility Classes
```html
<!-- Background colors -->
<div className="bg-primary">Navy background</div>
<div className="bg-accent">Gold background</div>

<!-- Text colors -->
<p className="text-primary">Navy text</p>
<p className="text-accent">Gold text</p>
```

## 📝 Typography

### Font Families
```scss
// Headings - Spectral
h1, h2, h3 {
  font-family: var(--font-brand); // 'Spectral', serif
}

// Body - Open Sans
body, p {
  font-family: var(--font-sans); // 'Open Sans', sans-serif
}
```

### Available Weights
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (Semi-bold)
- 700 (Bold)

## 🌈 Gradients

### Using Gradient Mixins
```scss
.hero-section {
  @include hero-gradient;
}

.stats-box {
  @include stats-gradient;
}

.gold-button {
  @include gold-gradient;
}
```

### Using Utility Classes
```html
<div className="bg-hero-gradient">Hero with gradient</div>
<div className="bg-stats-gradient">Stats with gradient</div>
<h1 className="text-hero-gradient">Gradient text</h1>
```

### Using CSS Variables
```scss
.custom-gradient {
  background: var(--hero-gradient);
}
```

### Animated Gradient
```html
<div className="bg-gold-gradient gradient-animated">
  Animated gold gradient
</div>
```

## ✨ Effects

### Glow/Shadow Effects
```html
<!-- Navy glow -->
<div className="shadow-glow">Primary glow</div>

<!-- Gold glow -->
<div className="shadow-glow-accent">Accent glow</div>

<!-- Hero gradient glow -->
<div className="shadow-hero-glow">Hero glow</div>

<!-- Strong glow -->
<div className="shadow-strong-glow">Strong effect</div>
```

### Animations
```html
<!-- Marquee scroll -->
<div className="animate-marquee">Scrolling text...</div>
```

## 🖼️ Images

### Hero Backgrounds
```jsx
import heroBackground from '../images/hero-background.jpg';
import heroLuxury from '../images/hero-background-luxury.jpg';

<div style={{ backgroundImage: `url(${heroBackground})` }}>
  ...
</div>
```

### Blog Images
Available in `src/images/`:
- `blog-market-trends.jpg`
- `blog-negotiation.jpg`
- `blog-portfolio.jpg`
- `blog-roi-distressed.jpg`

## 🌙 Dark Mode

The design system supports dark mode automatically. To implement:

```jsx
// Add dark class to body or root element
<body className="dark">
  <!-- All colors will adapt -->
</body>
```

## 📦 Import Statements

```scss
// In your SCSS files
@import './design-system.css';    // Design system variables
@import './gradients.scss';        // Gradient utilities
```

## 🎯 Common Patterns

### Button with Gradient
```scss
.cta-button {
  @include hero-gradient;
  color: hsl(var(--primary-foreground));
  padding: 1rem 2rem;
  border-radius: var(--radius);
  
  &:hover {
    @include stats-gradient;
    box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
  }
}
```

### Card with Accent
```scss
.card {
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  
  &:hover {
    border-color: hsl(var(--accent));
    box-shadow: 0 0 20px hsl(var(--accent) / 0.3);
  }
}
```

### Text with Gradient
```scss
.gradient-heading {
  @include text-gradient(var(--hero-gradient));
  font-family: var(--font-brand);
  font-weight: 700;
}
```

## 🔧 Customization

### Override Colors
```css
:root {
  --primary: 220 100% 20%;  /* Custom navy */
  --accent: 45 100% 50%;    /* Custom gold */
}
```

### Create Custom Gradient
```scss
.custom {
  background: linear-gradient(
    135deg, 
    hsl(var(--primary)) 0%, 
    hsl(var(--accent)) 100%
  );
}
```

## 📱 Responsive Usage

```scss
.element {
  background-color: $primary;
  
  @include media-breakpoint-down(md) {
    background-color: $accent;
  }
}
```

## ⚠️ Important Notes

1. **HSL Benefits**: Use HSL for easy opacity: `hsl(var(--primary) / 0.5)`
2. **CSS Variables**: Prefer CSS variables for theme switching
3. **SCSS Variables**: Use for static values that don't change
4. **Gradients**: Import `gradients.scss` where needed
5. **Fonts**: Automatically loaded via Gatsby config

## 🚀 Quick Start Checklist

- [x] Colors migrated (HSL-based)
- [x] Fonts configured (Spectral + Open Sans)
- [x] Gradients created
- [x] Images copied
- [x] Utilities available
- [ ] Update components to use new system
- [ ] Test dark mode
- [ ] Verify responsive design
