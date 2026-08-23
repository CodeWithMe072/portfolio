# 🎨 Infinity Circle Preloader Animation — Comprehensive Guide & Math

This guide explains **how the 3 Concentric Circle Pair Preloader Animation works** in your portfolio project, including all geometry formulas, CSS animation math, timing calculations, and step-by-step instructions on how to customize colors, speed, sizes, and delays as per your mind.

---

## 📐 1. SVG Geometry & Circumference Calculations

The preloader consists of **3 horizontal circle pairs** (Left, Center, Right). Each pair contains an **Outer Circle** and an **Inner Circle** (6 circles total).

```
 ┌────────────────────────────────────────────────────────┐
 │ (160, 130)             (340, 130)           (520, 130) │
 │   ◯ Left                 ◯ Center             ◯ Right  │
 └────────────────────────────────────────────────────────┘
```

### 🔹 Geometry Parameters:
- **SVG ViewBox**: `0 0 680 260` (Width = `680px`, Height = `260px`)
- **Center Positions $(c_x, c_y)$**:
  - **Left Pair**: `cx = 160`, `cy = 130`
  - **Center Pair**: `cx = 340`, `cy = 130` (Center distance $\Delta x = 180\text{px}$)
  - **Right Pair**: `cx = 520`, `cy = 130` (Center distance $\Delta x = 180\text{px}$)

### 🔹 Circumference Formula ($C = 2\pi r$):

1. **Outer Circle** ($r = 118\text{px}$):
   $$C_{\text{outer}} = 2 \times \pi \times 118 = 2 \times 3.14159 \times 118 \approx 741.42\text{px} \rightarrow \mathbf{742\text{px}}$$
   - CSS Property: `stroke-dasharray: 742 742;`

2. **Inner Circle** ($r = 95\text{px}$):
   $$C_{\text{inner}} = 2 \times \pi \times 95 = 2 \times 3.14159 \times 95 \approx 596.90\text{px} \rightarrow \mathbf{597\text{px}}$$
   - CSS Property: `stroke-dasharray: 597 597;`

---

## 🔄 2. How the SVG Drawing Animation Works

The line-drawing effect uses SVG `stroke-dasharray` and `stroke-dashoffset`.

### 🔹 Mechanics:
- `stroke-dasharray: 742 742`: Creates a dash segment of 742px followed by a gap of 742px.
- `stroke-dashoffset: 0` $\rightarrow$ The line is **100% Fully Drawn** (Visible).
- `stroke-dashoffset: 742` $\rightarrow$ The line is shifted by its full circumference, making it **100% Erased** (Invisible).

### 🔹 Keyframe Cycle (`@keyframes drawOuter`):
```css
@keyframes drawOuter {
    0%   { stroke-dashoffset: 0; }   /* 100% Fully Drawn Ring */
    50%  { stroke-dashoffset: 742; } /* 100% Erased / Invisible */
    100% { stroke-dashoffset: 0; }   /* 100% Fully Drawn Ring */
}
```

---

## ⏱️ 3. Ripple Stagger & Timing Calculations

To create a **continuous left-to-right wave without any blackout moment** (where the entire screen goes empty), the 3 circle pairs are spread equally across the total animation duration $T$.

### 🔹 Timing Formula:
- **Total Cycle Time ($T$)**: `2.4s`
- **Pair Spacing ($\Delta t_{\text{pair}}$)**: $\frac{1}{3} \times T = \frac{2.4\text{s}}{3} = \mathbf{0.80\text{s}}$ ($120^\circ$ Phase Shift)
- **Inner Ring Offset ($\delta_{\text{inner}}$)**: $8\% \times T = 0.08 \times 2.4\text{s} = \mathbf{0.19\text{s}}$

### 📊 Delay Schedule Table:

| Pair Position | Circle Type | Delay Formula | Calculated `--delay` Value |
| :--- | :--- | :--- | :--- |
| **Left Pair** | Outer | $0.00 \times T$ | `--delay: 0.00s;` |
| **Left Pair** | Inner | $(0.00 + 0.08) \times T$ | `--delay: 0.19s;` |
| **Center Pair** | Outer | $0.333 \times T$ | `--delay: 0.80s;` |
| **Center Pair** | Inner | $(0.333 + 0.08) \times T$ | `--delay: 0.99s;` |
| **Right Pair** | Outer | $0.666 \times T$ | `--delay: 1.60s;` |
| **Right Pair** | Inner | $(0.666 + 0.08) \times T$ | `--delay: 1.79s;` |

---

## 💻 4. Current Code Structure in Your Project

### 📄 HTML (`index.html`):
```html
<div id="introRingAnim" class="intro-ring-anim">
  <svg class="infinity-preloader-svg" viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg">
    <g class="infinity-preloader-group">
      <!-- Left Pair -->
      <circle class="preloader-circle preloader-circle-outer" cx="160" cy="130" r="118" style="--delay: 0.00s;"></circle>
      <circle class="preloader-circle preloader-circle-inner" cx="160" cy="130" r="95" style="--delay: 0.19s;"></circle>

      <!-- Center Pair -->
      <circle class="preloader-circle preloader-circle-outer" cx="340" cy="130" r="118" style="--delay: 0.80s;"></circle>
      <circle class="preloader-circle preloader-circle-inner" cx="340" cy="130" r="95" style="--delay: 0.99s;"></circle>

      <!-- Right Pair -->
      <circle class="preloader-circle preloader-circle-outer" cx="520" cy="130" r="118" style="--delay: 1.60s;"></circle>
      <circle class="preloader-circle preloader-circle-inner" cx="520" cy="130" r="95" style="--delay: 1.79s;"></circle>
    </g>
  </svg>
</div>
```

### 🎨 CSS (`assets/CSS/base.css`):
```css
.preloader-circle-outer {
    stroke: rgba(145, 75, 241, 0.95); /* Purple accent */
    stroke-width: 2px;
    stroke-dasharray: 742 742;
    animation: drawOuter 2.4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    animation-delay: var(--delay);
}

.preloader-circle-inner {
    stroke: rgba(255, 255, 255, 0.85); /* White accent */
    stroke-width: 2px;
    stroke-dasharray: 597 597;
    animation: drawInner 2.4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    animation-delay: var(--delay);
}

/* Settle State: Automatically locks to 100% drawn before fading */
.intro-ring-anim.settle .preloader-circle {
    animation-play-state: paused !important;
    stroke-dashoffset: 0 !important;
    transition: stroke-dashoffset 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.6s ease;
}
```

---

## 🛠️ 5. How to Customize the Code as per Your Mind

### ⚡ Case A: Change Animation Speed
If you want a faster (`T = 1.8s`) or slower (`T = 3.0s`) animation:

1. Update CSS animation duration:
   ```css
   animation: drawOuter 3.0s cubic-bezier(0.45, 0, 0.55, 1) infinite;
   ```
2. Recalculate HTML `--delay` values using $T = 3.0\text{s}$:
   - `Left Outer`: $0.00 \times 3.0 = \mathbf{0.00s}$
   - `Left Inner`: $0.08 \times 3.0 = \mathbf{0.24s}$
   - `Center Outer`: $0.333 \times 3.0 = \mathbf{1.00s}$
   - `Center Inner`: $0.413 \times 3.0 = \mathbf{1.24s}$
   - `Right Outer`: $0.666 \times 3.0 = \mathbf{2.00s}$
   - `Right Inner`: $0.746 \times 3.0 = \mathbf{2.24s}$

---

### 🎨 Case B: Change Colors
To change ring colors, update `stroke` in `assets/CSS/base.css`:
- **Outer Ring**: Change `rgba(145, 75, 241, 0.95)` (Purple) to any hex/RGB color (e.g. `#00d2ff` for cyan).
- **Inner Ring**: Change `rgba(255, 255, 255, 0.85)` (White) to matching or complementary color.

---

### 📏 Case C: Change Circle Radius ($r$)
If you change `r="140"` for outer circles in `index.html`:
1. Calculate new circumference: $C = 2 \times 3.14159 \times 140 \approx \mathbf{880\text{px}}$.
2. Update CSS `stroke-dasharray` and `@keyframes`:
   ```css
   .preloader-circle-outer {
       stroke-dasharray: 880 880;
   }

   @keyframes drawOuter {
       0%   { stroke-dashoffset: 0; }
       50%  { stroke-dashoffset: 880; }
       100% { stroke-dashoffset: 0; }
   }
   ```

---

### 🌊 Case D: Change Easing Curve Feel
Change `cubic-bezier` timing function in `.preloader-circle-outer` / `.preloader-circle-inner`:
- `cubic-bezier(0.45, 0, 0.55, 1)`: Smooth organic breathing wave (Current)
- `linear`: Constant mechanical movement
- `cubic-bezier(0.165, 0.84, 0.44, 1)`: Fast draw-out, gentle settle
