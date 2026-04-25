# Webecon — Universal Animated Icon Engine (Python SDK)

![Webecon Banner](https://raw.githubusercontent.com/adityadivatee/Webecon/main/Webecon.png)

**1,031+ Premium Animated Icons | Universal Logic | 100% Free for Commercial Use**

Webecon is a professional iconography ecosystem. The Python SDK allows you to generate dynamic SVG icon strings with support for multiple themes, animations, and dual-color branding.

## 🚀 Installation

```bash
pip install webecon
```

## 🛠️ Usage

```python
from webecon import Webecon

# Generate a high-performance icon string
icon_svg = Webecon.icon("rocket") \
    .size(64) \
    .color("#6366f1") \
    .theme("shine") \
    .render()

print(icon_svg)
```

## ✨ Supported Themes
- `line` (Classic)
- `shine` (Glassmorphism)
- `neon` (Glow)
- `duo` (Dual-color)
- `glass` (Transparent)

## 📝 License
Webecon is free for commercial use. Resale of icons as standalone assets is prohibited.

Produced by **Aditya Divte Production** (adityadivte.com).