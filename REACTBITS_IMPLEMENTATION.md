# ReactBits Flowing Menu - Implementation Guide

This is the EXACT implementation from [ReactBits Flowing Menu](https://reactbits.dev/components/flowing-menu).

## 🎨 What It Does

The Flowing Menu is a vertical navigation with a stunning marquee animation effect:

1. **Vertical Menu Items** - 4 items stacked vertically, each taking 25% of screen height
2. **Edge Detection** - Detects which edge (top/bottom) your mouse enters from
3. **Marquee Animation** - White marquee with scrolling text and images flows in from that edge
4. **GSAP Powered** - Smooth 0.6s exponential easing animations

## 🌊 How The Animation Works

### On Mouse Enter
1. Calculates which edge (top or bottom) you entered from
2. Positions the white marquee 101% off-screen in that direction
3. Animates it to 0% (visible) using GSAP timeline
4. The text inside animates in the opposite direction for a parallax effect

### On Mouse Leave
1. Detects which edge you're exiting from
2. Animates the marquee back out 101% in that direction
3. Creates a fluid, directional flow

### The Marquee Effect
- White background with scrolling content
- Text + images repeated 4 times
- CSS animation makes it scroll infinitely (15s loop)
- Creates a dynamic, living menu item

## 📐 Structure

```
┌─────────────────────────────────────┐
│  MOJAVE (25% height)                │ ← Hover: marquee flows in
├─────────────────────────────────────┤
│  SONOMA (25% height)                │ ← from top or bottom edge
├─────────────────────────────────────┤
│  MONTEREY (25% height)              │ ← based on mouse position
├─────────────────────────────────────┤
│  SEQUOIA (25% height)               │
└─────────────────────────────────────┘
```

## 🎯 Key Features

### 1. Edge Detection Algorithm
```typescript
const findClosestEdge = (mouseX, mouseY, width, height) => {
  const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
  const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
  return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
};
```

Calculates distance from mouse position to top and bottom edges, returns the closest one.

### 2. GSAP Timeline
```typescript
gsap
  .timeline({ defaults: { duration: 0.6, ease: 'expo' } })
  .set(marqueeRef.current, { y: '-101%' }, 0)      // Position off-screen
  .set(marqueeInnerRef.current, { y: '101%' }, 0)  // Opposite direction
  .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0); // Animate in
```

### 3. Infinite Marquee Scroll
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.marquee__inner {
  animation: marquee 15s linear infinite;
}
```

The content is repeated 4 times and scrolls from right to left continuously.

## 🎨 Styling

### Colors
- **Background**: `#060010` (deep purple/black)
- **Text (inactive)**: `#fff` (white)
- **Text (hover)**: `#060010` (dark)
- **Marquee Background**: `#fff` (white)

### Typography
- **Font Size**: `4vh` (responsive to viewport height)
- **Font Weight**: 600 (bold for links), 400 (regular for marquee)
- **Transform**: Uppercase

### Layout
- **Height**: 100vh (full screen)
- **Menu Items**: flex: 1 (equal distribution)
- **Overflow**: hidden (clean edges)

## 🖼️ Images

Uses Picsum for random placeholder images:
```typescript
{ image: 'https://picsum.photos/600/400?random=1' }
```

Images are:
- 200px wide
- 7vh tall
- Rounded (50px border-radius)
- Cover fit with center position

## 🔧 Customization

### Change Menu Items
```typescript
const demoItems = [
  { link: '#page1', text: 'Your Text 1', image: 'your-image-1.jpg' },
  { link: '#page2', text: 'Your Text 2', image: 'your-image-2.jpg' },
  // Add more items
];
```

### Change Colors
In `FlowingMenu.css`:
```css
/* Background color */
.menu__item-link { color: #fff; }

/* Hover color */
.menu__item-link:hover { color: #060010; }

/* Marquee background */
.marquee { background: #fff; }
```

### Change Animation Speed
```typescript
// In FlowingMenu.tsx
const animationDefaults = { 
  duration: 0.6,  // Change this (in seconds)
  ease: 'expo'    // Or: 'power2', 'back', 'elastic'
};
```

### Change Marquee Speed
```css
/* In FlowingMenu.css */
.marquee__inner {
  animation: marquee 15s linear infinite; /* Change 15s */
}
```

## 🎭 Use Cases

Perfect for:
- **Portfolio sites** - Showcase projects with impact
- **Creative agencies** - Demonstrate animation skills
- **Product launches** - Each item represents a product
- **Event pages** - Different event sections
- **Photography** - Image-heavy navigation

## ⚡ Performance

- **GSAP** - Hardware accelerated, 60fps animations
- **CSS Animations** - Infinite marquee uses CSS (GPU accelerated)
- **Transform-based** - Uses translate3d for smooth performance
- **Will-change** - Optimizes animation performance

## 🎯 User Experience

1. **Visual Hierarchy** - Large text, clear sections
2. **Directional Feedback** - Animation direction matches mouse movement
3. **Dynamic Content** - Moving marquee creates energy
4. **Clear States** - Distinct hover vs default states
5. **Smooth Transitions** - Exponential easing feels natural

## 📱 Responsive Considerations

- Uses `vh` units for font sizes (scales with height)
- Full-screen design works best on desktop
- Consider media queries for mobile:
  - Smaller font sizes
  - Static menu (no hover effects)
  - Horizontal layout option

## 🐛 Troubleshooting

### Animation not working?
- Check GSAP is installed: `npm install gsap`
- Verify refs are properly attached
- Console log to check mouse events firing

### Marquee not scrolling?
- Check CSS animation is applied
- Verify `.marquee__inner` has the animation
- Ensure content is repeated (4x minimum)

### Images not showing?
- Verify image URLs are accessible
- Check `backgroundImage` style is applied
- Test with Picsum URLs first

## 🎉 Result

You now have a stunning, interactive vertical menu that:
- ✨ Flows dynamically based on mouse direction
- 🖼️ Displays content in an engaging marquee
- ⚡ Uses professional GSAP animations
- 🎨 Looks like a high-end creative portfolio

---

**This is the exact ReactBits implementation** - no modifications, pure recreation in TypeScript/Next.js! 🚀

