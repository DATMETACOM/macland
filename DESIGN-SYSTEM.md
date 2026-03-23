# 🎨 Macland Design System

## ✅ Fixed Issues & Improvements

### 1. **Header Navigation**
- ✅ **Fixed white text on transparent background** - Added proper color states
- ✅ **Improved mobile menu button** - Now visible on all backgrounds
- ✅ **Better spacing** - Consistent gaps and padding
- ✅ **Enhanced hover states** - Scale effects and color transitions

### 2. **Color System**
- ✅ **Transparent state**: White text with drop-shadow
- ✅ **Scrolled state**: Gray-900 text on white background
- ✅ **Contrast ratios**: WCAG AA compliant
- ✅ **Hover effects**: Red-600 for CTAs

### 3. **Spacing & Sizing**
| Element | Size | Notes |
|---------|------|-------|
| Header height | 64px (mobile) / 80px (desktop) | Consistent |
| Logo | 40×40px | Rounded with shadow |
| Nav links gap | 32px (desktop) | Comfortable spacing |
| Buttons | sm: 40px, md: 44px, lg: 48px | Touch-friendly |
| Cards padding | 24px-32px | Balanced white space |

### 4. **Component Improvements**

#### **Button Component**
```tsx
- Rounded corners: xl (12px)
- Shadow: md on primary
- Hover: scale-[1.02]
- Active: scale-95
- Focus: ring-2 red-500
```

#### **Product Cards**
```tsx
- Border: gray-100 (1px)
- Border radius: 16px
- Shadow: md → xl on hover
- Hover lift: -6px
- Image aspect: 4/3
```

#### **Typography**
```tsx
- Font: Plus Jakarta Sans
- Weights: 400 (regular), 600 (semibold), 700 (bold)
- Line heights: tight (snug), normal (relaxed)
- Letter spacing: -0.025em (headings)
```

### 5. **Global Styles**
```css
- Container: max-w-7xl with responsive padding
- Scrollbar: 10px gray (custom styled)
- Focus: ring-2 red-500 (accessibility)
- Smooth scroll: enabled
```

---

## 🎯 Design Tokens

### Colors
```css
--primary: #dc2626 (red-600)
--secondary: #b91c1c (red-700)
--success: #16a34a (green-600)
--warning: #f59e0b (amber-500)
```

### Spacing
```css
--gap-xs: 8px
--gap-sm: 16px
--gap-md: 24px
--gap-lg: 32px
--gap-xl: 48px
```

### Border Radius
```css
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 24px
```

### Shadows
```css
--shadow-sm: 0 1px 2px
--shadow-md: 0 4px 6px
--shadow-lg: 0 10px 15px
--shadow-xl: 0 20px 25px
```

---

## 📐 Responsive Breakpoints

| Breakpoint | Width | Header | Grid | Cards |
|------------|-------|--------|------|-------|
| Mobile | < 640px | 64px | 1 col | Full |
| Tablet | 640px - 1024px | 64px | 2 cols | 2 per row |
| Desktop | > 1024px | 80px | 4 cols | 4 per row |

---

## ✨ Consistent Patterns

### 1. **Section Padding**
- Mobile: py-16 (64px)
- Desktop: py-24 (96px)

### 2. **Container**
- Padding: 16px (mobile) → 32px (desktop)
- Max width: 1280px

### 3. **Buttons**
- Minimum height: 40px (touch-friendly)
- Padding: 12px-16px
- Font weight: 600 (semibold)

### 4. **Cards**
- Padding: 20px-32px
- Border radius: 16px
- Shadow: md → lg on hover

### 5. **Icons**
- Small: 16px (in text)
- Medium: 20px (in buttons)
- Large: 24px (standalone)

---

## 🎨 Common Patterns

### Hero Section
```tsx
<section className="bg-gradient text-white py-20 lg:py-32">
  <h1 className="text-4xl lg:text-6xl font-bold">
    Main heading
  </h1>
  <p className="text-lg lg:text-xl text-gray-300">
    Subtitle
  </p>
  <div className="flex gap-4 mt-8">
    {/* CTAs */}
  </div>
</section>
```

### Stats Grid
```tsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
  {stats.map(stat => (
    <div className="text-center p-4 lg:p-6 bg-white/5 rounded-xl">
      {/* Icon + Value + Label */}
    </div>
  ))}
</div>
```

### Card Grid
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
  {items.map(item => (
    <ProductCard key={item.id} product={item} />
  ))}
</div>
```

---

## 🔧 Accessibility

### Focus States
- All interactive elements: ring-2 ring-red-500 ring-offset-2
- Keyboard navigation: full support
- ARIA labels: where needed

### Color Contrast
- Normal text: 4.5:1 (AA)
- Large text: 3:1 (AA)
- UI components: 3:1 (AA)

### Touch Targets
- Minimum size: 44×44px
- Spacing: 8px between targets

---

## 📱 Mobile Optimizations

1. **Header**
   - 64px height (notch-friendly)
   - Hamburger menu
   - Full-width mobile drawer

2. **Grid**
   - 1 column (mobile)
   - 2 columns (tablet)
   - 4 columns (desktop)

3. **Images**
   - Responsive sizes
   - Lazy loading
   - Mobile-first approach

4. **Typography**
   - Minimum 16px body text
   - Scaled headings
   - Readable line lengths

---

## 🚀 Performance

### Optimizations
- Server components (where possible)
- Image lazy loading
- Code splitting
- Minimal JavaScript
- CSS-in-JS (Tailwind)

### Load Times
- First paint: < 1s
- Interactive: < 2s
- Full load: < 3s

---

## 📝 Checklist

### ✅ Completed
- [x] Header colors fixed
- [x] Spacing consistency
- [x] Icon sizes standardized
- [x] Button styles unified
- [x] Card layouts improved
- [x] Responsive padding
- [x] Focus states
- [x] Hover effects
- [x] Mobile menu
- [x] Typography scale

### 🔄 Continuous
- [ ] Performance monitoring
- [ ] A/B testing
- [ ] User feedback
- [ ] Accessibility audits
