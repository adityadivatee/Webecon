# Webecon for VS Code
**Professional 1,031+ Animated Icons by adityadivte.com**

Elevate your development workflow with the official **Webecon** snippet library. Access the entire ecosystem of 1,031+ premium icons directly from your editor.

## Features
- **Zero-Search Snippets**: Type `webecon-` followed by the icon name to instantly inject high-performance custom elements using the `<webecon-icon>` tag.
- **Live Previews**: See exactly what each icon looks like in the suggestion list before you select it (Cupertino-style).
- **1,031+ Assets**: The world's most comprehensive animated icon library at your fingertips.
- **Offline Support**: Icons are bundled with the extension, so previews work even without an internet connection.
- **Intelligent Autocomplete**: Context-aware suggestions for all icon names.

## Universal Usage & Implementations
Webecon is a unified iconography system. We provide native, hardware-accelerated SDKs for every major programming language, all using the same professional **Webecon** API.

> **Note:** All languages are compatible natively. **You DO NOT need to download any SDKs to use Webecon if you prefer not to**. The Web CDN approach works perfectly across most web-based stacks. However, native SDKs are provided for a fully integrated, type-safe developer experience if you want them!

### Auto-completion and Previews
Simply start typing in any HTML, JSX, TSX, Python, Java, Go, Dart or other supported files!
- Start typing the icon name inside `<webecon-icon name="..."` or `Webecon("..."` to get an intelligent list of icons complete with live SVG previews.
- Enjoy autocomplete suggestions for all attributes like `theme="..."`, `animation="..."`, `interaction="..."`, and `trigger="..."`.

### Web (HTML/CDN) - No SDK Required
```html
<!-- Load Webecon Engine -->
<script src="https://cdn.jsdelivr.net/gh/adityadivatee/webecon/dist/webicons.js"></script>

<!-- Use Icons -->
<webecon-icon name="activity" theme="neon" animation="pulse"></webecon-icon>
```

### Flutter Native SDK (New)
The official native SDK for Android, iOS, and Web. Supports high-performance SVG rendering and professional themes.
```dart
import 'package:webecon/webecon.dart';

// Inside your build method
Webecon(
  name: 'zap',
  size: 64,
  color: Colors.indigoAccent,
  theme: 'shine',
)
```

### Python
```python
import webecon

# Fluent API
icon = webecon.Webecon("home").size(48).theme("neon").animation("pulse")
print(icon) # Output: <webecon-icon name="home" ...>
```

### Java / Kotlin
```java
import com.adityadivte.webecon.Webecon;

String tag = Webecon.icon("user")
    .size(64)
    .theme("duo")
    .color("#6366f1")
    .build();
```

### Go (Native)
```go
import "webecon"

icon := webecon.Icon("rocket").SetSize(128).SetTheme("shine").Build()
```

## Licensing & Credits
Developed by **Aditya Divte Production**.  
Official Website: [adityadivte.com](https://adityadivte.com)  
Legal & License Details: [webecon.adityadivte.com/docs](https://webecon.adityadivte.com/docs)

**Copyright (c) 2026 Aditya Divte Production. All rights reserved.**  
Commercial use is permitted. Resale or removal of branding is strictly prohibited. For full license terms, please visit the legal link above.

---

**Visit [adityadivte.com](https://adityadivte.com) for more professional tools and elite UI assets for free.**  
**Visit [webecon.adityadivte.com](https://webecon.adityadivte.com) for the full library and live customizer.**
