# Apps


# Project Plan: Mac-Style Calculator

A minimalist, responsive web-based calculator inspired by the macOS Calculator app.

---

## 🎯 Project Goals
*   **Aesthetic Accuracy:** Replicate the macOS calculator UI (rounded buttons, specific color palette, clean typography).
*   **Core Functionality:** Standard arithmetic operations ($+$, $-$, $\times$, $\div$), percentages, and toggling positive/negative numbers.
*   **Responsive Design:** Looks great on desktop and mobile, maintaining a fixed aspect ratio or adapting smoothly.

---

## 🛠️ Tech Stack
*   **Frontend:** HTML5, CSS3 (Flexbox/Grid), JavaScript (Vanilla ES6+)
*   **Icons/Fonts:** San Francisco system font stack (or Inter/Helvetica as fallbacks)

---

## 📅 Development Phases

### Phase 1: UI & Layout (HTML/CSS)
*   [ ] **Container:** Create the window frame with macOS-style window controls (red, yellow, green dots).
*   [ ] **Display:** Design the top-aligned, right-justified text area that shrinks font size for long numbers.
*   [ ] **Grid Layout:** Build the $4 \times 5$ button grid using CSS Grid.
*   [ ] **Styling & Colors:**
    *   *Dark Gray:* Standard numbers (e.g., `#333333`)
    *   *Light Gray:* Top row modifiers (AC, +/-, %) (e.g., `#A5A5A5`)
    *   *Orange:* Right column operators ($+$, $-$, etc.) (e.g., `#FF9F0A`)
    *   *Active State:* Add the subtle brighten/flash effect when buttons are clicked.

### Phase 2: Core Logic (JavaScript)
*   [ ] **State Management:** Track `currentInput`, `previousInput`, and the active `operator`.
*   [ ] **Basic Operations:** Implement addition, subtraction, multiplication, and division.
*   [ ] **Modifier Functions:**
    *   `AC` (All Clear) / `C` (Clear current entry).
    *   Toggle positive/negative values.
    *   Percentage calculation.
*   [ ] **Decimal Handling:** Prevent multiple decimals in a single number and fix floating-point precision issues (e.g., $0.1 + 0.2 = 0.3$).

### Phase 3: Polish & UX
*   [ ] **Keyboard Support:** Map physical keyboard keys (NumPad, Enter, Backspace) to calculator actions.
*   [ ] **Button States:** Ensure the active operator button stays highlighted until a new number is pressed (just like Mac).
*   [ ] **Edge Cases:** Handle division by zero gracefully (display "Not a number" or "Error").

---

## 🚀 Future Enhancements (Post-MVP)
*   **Scientific Mode:** Add a toggle to expand the grid into a scientific calculator.
*   **Dark/Light Mode:** Sync with system preferences.
*   **History Tape:** A slide-out panel showing past calculations.
