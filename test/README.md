# Webecon Icon Verification Suite

This directory contains minimal verification snippets for all 11+ supported languages. Use these to verify that the **Webecon Icon v17.2 PRO** engine is correctly linked and functioning.

## 🐍 Python
```python
from webecon import Webecon

icon = Webecon()
# Generate a Neon icon with pulse animation and secondary fill disabled
svg = icon.get_svg("activity", theme="neon", animation="pulse", secondary="none")
print(svg)
```

## ☕ Java / Android
```java
import com.adityadivte.webecon.Webecon;

public class Main {
    public static void main(String[] args) {
        String svg = Webecon.getSVG("home", 32, "#3b82f6", "red", "glass", "float");
        System.out.println(svg);
    }
}
```

## ⚛️ React
```jsx
// npm install webecon-react
import { Webecon } from 'webecon-react';

export const MyComponent = () => (
    <Webecon 
        name="activity" 
        theme="cyberpunk" 
        animation="glitch" 
        secondaryColor="none" 
    />
);
```

... all languages supported. See individual SDK bundles.
