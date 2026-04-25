import fs from 'fs';
import path from 'path';

const ICON_FILE = './src/icons.js';
const WEB_COMPONENT_FILE = './src/webicons.js';
const OUTPUT_FILE = './dist/webicons.js'; // Keeping filename for CDN compatibility but content is rebranded

async function build() {
    console.log(`\x1b[36m
  ██╗    ██╗███████╗██████╗ ███████╗ ██████╗ ██████╗ ███╗   ██╗
  ██║    ██║██╔════╝██╔══██╗██╔════╝██╔════╝██╔═══██╗████╗  ██║
  ██║ █╗ ██║█████╗  ██████╔╝█████╗  ██║     ██║   ██║██╔██╗ ██║
  ██║███╗██║██╔══╝  ██╔══██╗██╔══╝  ██║     ██║   ██║██║╚██╗██║
  ╚███╔███╔╝███████╗██████╔╝███████╗╚██████╗╚██████╔╝██║ ╚████║
   ╚══╝╚══╝ ╚══════╝╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝
    \x1b[0m`);
    console.log('\x1b[35m%s\x1b[0m', '  🚀 Webecon by Aditya Divte Production (aka Aditya Diwate) - 100% FREE FOR ALL COMMERCIAL PURPOSES');
    console.log('\x1b[35m%s\x1b[0m', '  ✨ Features: 1031+ Icons | 11 Premium Themes | Dual-Tone Accents | 15+ Animations');
    console.log('\x1b[35m%s\x1b[0m', '  🌐 Website: adityadivte.com');
    console.log('\x1b[35m%s\x1b[0m', '  💎 Project Hub: webecon.adityadivte.com');
    console.log('\x1b[35m%s\x1b[0m', '  📧 Support: support@adityadivte.com');
    console.log('\x1b[2m%s\x1b[0m', '  ----------------------------------------------------------------------\n');
    
    console.log('🚀 Starting Webecon Enterprise Build...');

    const distDir = './dist';
    const iconsDir = path.join(distDir, 'icons');
    const zipsDir = path.join(distDir, 'sdks');
    const sdkBase = './sdks';

    // Clean and recreate dist and sdks directory structure
    [distDir, sdkBase].forEach(dir => {
        if (fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true, force: true });
        }
        fs.mkdirSync(dir, { recursive: true });
    });
    fs.mkdirSync(iconsDir, { recursive: true });
    fs.mkdirSync(zipsDir, { recursive: true });

    // Read icon set
    let iconsContent = fs.readFileSync(ICON_FILE, 'utf8');
    const iconsMatch = iconsContent.match(/const icons = (\{[\s\S]*?\});/);
    if (!iconsMatch) return console.error('❌ Could not find icons object');
    
    const rawIconsContent = iconsMatch[1];
    let icons;
    try { icons = eval(`(${rawIconsContent})`); } catch (e) { return console.error('❌ Parse failed'); }

    const iconKeys = Object.keys(icons).sort();
    console.log(`📦 Found ${iconKeys.length} icons. Generating Universal SDKs...`);

    // Helper: Convert to PascalCase (for C#, Unreal)
    const sanitize = (s) => /^\d/.test(s) ? `i_${s}` : s;
    const toPascal = (str) => sanitize(str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(''));
    // Helper: Convert to SCREAMING_SNAKE_CASE (for Kotlin, C)
    const toScreaming = (str) => sanitize(str.replace(/-/g, '_').toUpperCase());

    // --- 1. Generate Universal Web Formats ---
    const VERSION = '17.2.6';
    const GITHUB_REPO = 'adityadivatee/Webecon';
    const jsHeader = `/**\n * Webecon - Premium Animated Icon Engine v${VERSION} PRO\n * Developed by Aditya Divte Production (aka Aditya Diwate)\n * Website: https://adityadivte.com\n * Project Hub: https://webecon.adityadivte.com\n * \n * Free for commercial use. Resale and branding removal forbidden.\n */\n`;
    let componentContent = fs.readFileSync(WEB_COMPONENT_FILE, 'utf8');
    componentContent = componentContent.replace(/import icons from '\.\/icons\.js';/, '');
    fs.writeFileSync(OUTPUT_FILE, `${jsHeader}(function(){const icons=${rawIconsContent};\nwindow.webecon_all_icons = icons;\n${componentContent}\n})();`);
    fs.writeFileSync(path.join(distDir, 'webecon.json'), JSON.stringify(icons, null, 4));

    // --- 2. Generate Dynamic SDKs with Autocomplete ---
    const writeSDK = (dir, file, content, langName, usageExample = '') => {
        const fullDir = path.join(sdkBase, dir);
        if (!fs.existsSync(fullDir)) fs.mkdirSync(fullDir, { recursive: true });
        
        const isHash = file.endsWith('.py') || file.endsWith('.rb');
        const header = isHash 
            ? `#######################################################################\n# Webecon ${langName} SDK - v${VERSION} PRO\n# Developed by Aditya Divte Production (aka Aditya Diwate)\n# Website: https://adityadivte.com\n# Visit https://webecon.adityadivte.com for more info.\n#######################################################################\n\n`
            : `/**\n * Webecon ${langName} SDK - v${VERSION} PRO\n * Developed by Aditya Divte Production (aka Aditya Diwate)\n * Website: https://adityadivte.com\n * Visit https://webecon.adityadivte.com for more info.\n */\n\n`;
        fs.writeFileSync(path.join(fullDir, file), header + content);

        // Generate SDK-specific README
        const readme = `# Webecon ${langName} SDK (v${VERSION} PRO)\n\n## 🚀 Installation\nInclude \`${file}\` in your project's source directory.\n\n## 🛠️ Quick Usage\n\`\`\`${langName.toLowerCase().replace(' / ', '').replace('+', 'pp').replace('dart', 'dart')}\n${usageExample}\n\`\`\`\n\n## ⚖️ Licensing\n- ✅ **Commercial Use Allowed**\n- ❌ **Standalone Resale Forbidden**\n- ❌ **Branding Removal Forbidden**\n\nProduced by **Aditya Divte Production** (adityadivte.com)`;
        fs.writeFileSync(path.join(fullDir, 'README.md'), readme);
    };

    // Python Builder
    const pyUpdateCheck = `
def check_updates():
    import urllib.request, json
    try:
        with urllib.request.urlopen("https://api.github.com/repos/${GITHUB_REPO}/releases/latest", timeout=2) as r:
            data = json.loads(r.read().decode())
            latest = data['tag_name'].replace('v', '')
            if latest > "${VERSION}":
                print(f"\\n\\033[96m🚀 New Webecon version available: v{latest} (Current: v${VERSION})\\033[0m")
                print(f"\\033[94m👉 Update now: https://github.com/${GITHUB_REPO}\\033[0m\\n")
    except: pass

check_updates()
`;
    const pyIcons = `icons = {\n${iconKeys.map(k => `    '${k}': "${icons[k].replace(/"/g, '\\"')}"`).join(',\n')}\n}\n\n`;
    writeSDK('python', 'webecon.py', `from typing import Literal, Optional\n\nIconName = Literal[${iconKeys.map(k => `'${k}'`).join(', ')}]\n\n${pyUpdateCheck}\n${pyIcons}\nclass Webecon:\n    def __init__(self, name: IconName):\n        self._name = name\n        self._size = 24\n        self._stroke = 2.0\n        self._color = 'currentColor'\n        self._secondary_color = 'none'\n        self._secondary_opacity = 0.35\n        self._theme = 'line'\n        self._animation = 'none'\n        self._trigger = 'infinite'\n\n    def size(self, s: int): self._size = s; return self\n    def stroke(self, s: float): self._stroke = s; return self\n    def color(self, c: str): self._color = c; return self\n    def secondary_color(self, c: str): self._secondary_color = c; return self\n    def secondary_opacity(self, o: float): self._secondary_opacity = o; return self\n    def theme(self, t: str): self._theme = t; return self\n    def animation(self, a: str): self._animation = a; return self\n    def trigger(self, t: str): self._trigger = t; return self\n\n    def build(self) -> str:\n        return f'<webecon-icon name="{self._name}" size="{self._size}" stroke="{self._stroke}" color="{self._color}" secondary-color="{self._secondary_color}" secondary-opacity="{self._secondary_opacity}" theme="{self._theme}" animation="{self._animation}" animation-mode="{self._trigger}"></webecon-icon>'\n\n    def __str__(self): return self.build()\n`, 'Python', 'import webecon\nicon = webecon.Webecon("zap").size(48).theme("neon").trigger("hover")\nprint(icon)');

    // Java Builder
    const javaIcons = `    private static final java.util.Map<String, String> ICONS = new java.util.HashMap<>();\n    static {\n${iconKeys.map(k => `        ICONS.put("${k}", "${icons[k].replace(/"/g, '\\"')}");`).join('\n')}\n    }\n\n`;
    const javaPkgPath = 'com/adityadivatee/Webecon';
    const javaFullDir = path.join(sdkBase, 'java', javaPkgPath);
    fs.mkdirSync(javaFullDir, { recursive: true });
    writeSDK('java', path.join(javaPkgPath, 'Webecon.java'), `package com.adityadivte.webecon;\n\npublic class Webecon {\n    private String name;\n    private int size = 24;\n    private double stroke = 2.0;\n    private String color = "currentColor";\n    private String secondaryColor = "none";\n    private double secondaryOpacity = 0.35;\n    private String theme = "line";\n    private String animation = "none";\n    private String trigger = "infinite";\n\n    public Webecon(String name) { this.name = name; }\n    public static Webecon icon(String name) { return new Webecon(name); }\n\n    public Webecon size(int s) { this.size = s; return this; }\n    public Webecon stroke(double s) { this.stroke = s; return this; }\n    public Webecon color(String c) { this.color = c; return this; }\n    public Webecon secondaryColor(String c) { this.secondaryColor = c; return this; }\n    public Webecon secondaryOpacity(double o) { this.secondaryOpacity = o; return this; }\n    public Webecon theme(String t) { this.theme = t; return this; }\n    public Webecon animation(String a) { this.animation = a; return this; }\n    public Webecon trigger(String t) { this.trigger = t; return this; }\n\n    public String build() {\n        return String.format(\n            "<webecon-icon name='%s' size='%d' stroke='%.2f' color='%s' secondary-color='%s' secondary-opacity='%.2f' theme='%s' animation='%s' animation-mode='%s'></webecon-icon>",\n            name, size, stroke, color, secondaryColor, secondaryOpacity, theme, animation, trigger\n        );\n    }\n\n    @Override\n    public String toString() { return build(); }\n\n${javaIcons}\n}`, 'Java', 'import com.adityadivte.webecon.Webecon;\nString svg = Webecon.icon("home").size(48).theme("neon").trigger("hover").build();');

    // Go Builder
    writeSDK('go', 'webecon.go', `package webecon\n\nimport "fmt"\n\ntype Webecon struct {\n    Name             string\n    Size             int\n    Stroke           float64\n    Color            string\n    SecondaryColor   string\n    SecondaryOpacity float64\n    Theme            string\n    Animation        string\n    Trigger          string\n}\n\nfunc Icon(name string) *Webecon {\n    return &Webecon{\n        Name:             name,\n        Size:             24,\n        Stroke:           2.0,\n        Color:            "currentColor",\n        SecondaryColor:   "none",\n        SecondaryOpacity: 0.35,\n        Theme:            "line",\n        Animation:        "none",\n        Trigger:          "infinite",\n    }\n}\n\nfunc (w *Webecon) SetSize(s int) *Webecon { w.Size = s; return w }\nfunc (w *Webecon) SetStroke(s float64) *Webecon { w.Stroke = s; return w }\nfunc (w *Webecon) SetColor(c string) *Webecon { w.Color = c; return w }\nfunc (w *Webecon) SetSecondaryColor(c string) *Webecon { w.SecondaryColor = c; return w }\nfunc (w *Webecon) SetSecondaryOpacity(o float64) *Webecon { w.SecondaryOpacity = o; return w }\nfunc (w *Webecon) SetTheme(t string) *Webecon { w.Theme = t; return w }\nfunc (w *Webecon) SetAnimation(a string) *Webecon { w.Animation = a; return w }\nfunc (w *Webecon) SetTrigger(t string) *Webecon { w.Trigger = t; return w }\n\nfunc (w *Webecon) Build() string {\n    return fmt.Sprintf(\n        "<webecon-icon name='%s' size='%d' stroke='%.2f' color='%s' secondary-color='%s' secondary-opacity='%.2f' theme='%s' animation='%s' animation-mode='%s'></webecon-icon>",\n        w.Name, w.Size, w.Stroke, w.Color, w.SecondaryColor, w.SecondaryOpacity, w.Theme, w.Animation, w.Trigger,\n    )\n}`, 'Go', 'import "webecon"\ntag := webecon.Icon("zap").SetSize(48).SetTheme("neon").Build()');

    // Rust Builder
    writeSDK('rust', 'webecon.rs', `pub struct Webecon {\n    pub name: String, pub size: u32, pub stroke: f32, pub color: String,\n    pub secondary_color: String, pub secondary_opacity: f32, pub theme: String,\n    pub animation: String, pub trigger: String,\n}\n\nimpl Webecon {\n    pub fn icon(name: &str) -> Self {\n        Self {\n            name: name.to_string(), size: 24, stroke: 2.0, color: "currentColor".to_string(),\n            secondary_color: "none".to_string(), secondary_opacity: 0.35, theme: "line".to_string(),\n            animation: "none".to_string(), trigger: "infinite".to_string(),\n        }\n    }\n    pub fn size(mut self, s: u32) -> Self { self.size = s; self }\n    pub fn stroke(mut self, s: f32) -> Self { self.stroke = s; self }\n    pub fn color(mut self, c: &str) -> Self { self.color = c.to_string(); self }\n    pub fn theme(mut self, t: &str) -> Self { self.theme = t.to_string(); self }\n    pub fn trigger(mut self, t: &str) -> Self { self.trigger = t.to_string(); self }\n    pub fn build(&self) -> String {\n        format!("<webecon-icon name='{}' size='{}' stroke='{:.2}' color='{}' secondary-color='{}' secondary-opacity='{:.2}' theme='{}' animation='{}' animation-mode='{}'></webecon-icon>", self.name, self.size, self.stroke, self.color, self.secondary_color, self.secondary_opacity, self.theme, self.animation, self.trigger)\n    }\n}`, 'Rust', 'use webecon::Webecon;\nlet tag = Webecon::icon("zap").size(48).theme("neon").build();');

    // C# Builder
    const csEnums = iconKeys.map(k => `        ${toPascal(k)},`).join('\n');
    writeSDK('csharp', 'Webecon.cs', `/**\n * Webecon C# SDK - v17.2 PRO\n * Developed by Aditya Divte Production (aka Aditya Diwate)\n * Website: https://adityadivte.com\n * Visit https://webecon.adityadivte.com for more info.\n */\nnamespace Webecon {\n    public enum IconName { ${csEnums} }\n\n    public class Webecon {\n        private string _name; private int _size = 24; private float _stroke = 2.0f;\n        private string _color = "currentColor"; private string _secondaryColor = "none";\n        private float _secondaryOpacity = 0.35f; private string _theme = "line";\n        private string _animation = "none"; private string _trigger = "infinite";\n\n        public Webecon(string name) { _name = name; }\n        public static Webecon icon(string name) => new Webecon(name);\n\n        public Webecon size(int s) { _size = s; return this; }\n        public Webecon stroke(float s) { _stroke = s; return this; }\n        public Webecon color(string c) { _color = c; return this; }\n        public Webecon secondaryColor(string c) { _secondaryColor = c; return this; }\n        public Webecon secondaryOpacity(float o) { _secondaryOpacity = o; return this; }\n        public Webecon theme(string t) { _theme = t; return this; }\n        public Webecon animation(string a) { _animation = a; return this; }\n        public Webecon trigger(string t) { _trigger = t; return this; }\n\n        public string build() => $"<webecon-icon name='{_name}' size='{_size}' stroke='{_stroke}' color='{_color}' secondary-color='{_secondaryColor}' secondary-opacity='{_secondaryOpacity}' theme='{_theme}' animation='{_animation}' animation-mode='{_trigger}'></webecon-icon>";\n    }\n}`, 'C#', 'var tag = Webecon.icon("zap").size(64).theme("neon").build();');

    // C++ Builder
    writeSDK('cpp', 'webecon.hpp', `#include <string>\n#include <sstream>\n\nnamespace webecon {\n    class Webecon {\n    private:\n        std::string _name, _color, _secondaryColor, _theme, _animation, _trigger;\n        int _size; float _stroke, _secondaryOpacity;\n    public:\n        Webecon(std::string name) : _name(name), _size(24), _stroke(2.0f), _color("currentColor"), _secondaryColor("none"), _secondaryOpacity(0.35f), _theme("line"), _animation("none"), _trigger("infinite") {}\n        static Webecon icon(std::string name) { return Webecon(name); }\n        Webecon& size(int s) { _size = s; return *this; }\n        Webecon& color(std::string c) { _color = c; return *this; }\n        Webecon& theme(std::string t) { _theme = t; return *this; }\n        Webecon& trigger(std::string t) { _trigger = t; return *this; }\n        std::string build() {\n            std::ostringstream oss;\n            oss << "<webecon-icon name='" << _name << "' size='" << _size << "' stroke='" << _stroke << "' color='" << _color << "' secondary-color='" << _secondaryColor << "' secondary-opacity='" << _secondaryOpacity << "' theme='" << _theme << "' animation='" << _animation << "' animation-mode='" << _trigger << "'></webecon-icon>";\n            return oss.str();\n        }\n    };\n}`, 'C++', 'auto tag = webecon::Webecon::icon("zap").size(64).build();');

    // Dart Builder
    writeSDK('dart', 'webecon.dart', `class Webecon {\n  String name, color, secondaryColor, theme, animation, trigger;\n  int size; double stroke, secondaryOpacity;\n\n  Webecon(this.name) : size=24, stroke=2.0, color='currentColor', secondaryColor='none', secondaryOpacity=0.35, theme='line', animation='none', trigger='infinite';\n  static Webecon icon(String name) => Webecon(name);\n\n  Webecon setSize(int s) { size = s; return this; }\n  Webecon setTheme(String t) { theme = t; return this; }\n  Webecon setTrigger(String t) { trigger = t; return this; }\n\n  String build() => "<webecon-icon name='$name' size='$size' stroke='$stroke' color='$color' secondary-color='$secondaryColor' secondary-opacity='$secondaryOpacity' theme='$theme' animation='$animation' animation-mode='$trigger'></webecon-icon>";\n}`, 'Dart', 'var tag = Webecon.icon("zap").setSize(48).setTheme("neon").build();');

    // Swift Builder
    writeSDK('swift', 'Webecon.swift', `import SwiftUI\n\npublic class Webecon {\n    var name, color, secondaryColor, theme, animation, trigger: String\n    var size: Int; var stroke, secondaryOpacity: Double\n\n    public init(_ name: String) {\n        self.name = name; self.size = 24; self.stroke = 2.0; self.color = "currentColor";\n        self.secondaryColor = "none"; self.secondaryOpacity = 0.35; self.theme = "line";\n        self.animation = "none"; self.trigger = "infinite"\n    }\n    public static func icon(_ name: String) -> Webecon { return Webecon(name) }\n    public func size(_ s: Int) -> Webecon { self.size = s; return self }\n    public func theme(_ t: String) -> Webecon { self.theme = t; return self }\n    public func trigger(_ t: String) -> Webecon { self.trigger = t; return self }\n    public func build() -> String {\n        return "<webecon-icon name='\\(name)' size='\\(size)' stroke='\\(stroke)' color='\\(color)' secondary-color='\\(secondaryColor)' secondary-opacity='\\(secondaryOpacity)' theme='\\(theme)' animation='\\(animation)' animation-mode='\\(trigger)'></webecon-icon>"\n    }\n}`, 'Swift', 'let tag = Webecon.icon("zap").size(48).theme("neon").build()');

    // Kotlin Builder
    const ktPkgPath = 'com/adityadivatee/Webecon';
    const ktFullDir = path.join(sdkBase, 'kotlin', ktPkgPath);
    fs.mkdirSync(ktFullDir, { recursive: true });
    writeSDK('kotlin', path.join(ktPkgPath, 'Webecon.kt'), `package com.adityadivte.webecon\n\nclass Webecon(val name: String) {\n    var size: Int = 24; var stroke: Double = 2.0; var color: String = "currentColor"\n    var secondaryColor: String = "none"; var secondaryOpacity: Double = 0.35; var theme: String = "line"\n    var animation: String = "none"; var trigger: String = "infinite"\n\n    companion object {\n        fun icon(name: String) = Webecon(name)\n    }\n    fun size(s: Int) = apply { size = s }\n    fun theme(t: String) = apply { theme = t }\n    fun trigger(t: String) = apply { trigger = t }\n    fun build() = "<webecon-icon name='$name' size='$size' stroke='$stroke' color='$color' secondary-color='$secondaryColor' secondary-opacity='$secondaryOpacity' theme='$theme' animation='$animation' animation-mode='$trigger'></webecon-icon>"\n}`, 'Kotlin', 'val tag = Webecon.icon("zap").size(48).theme("neon").build()');

    // PHP Builder
    writeSDK('php', 'Webecon.php', `<?php\nnamespace Webecon;\n\nclass Webecon {\n    private $name, $size=24, $stroke=2.0, $color="currentColor", $secondaryColor="none", $secondaryOpacity=0.35, $theme="line", $animation="none", $trigger="infinite";\n\n    public function __construct($name) { $this->name = $name; }\n    public static function icon($name) { return new self($name); }\n    public function size($s) { $this->size = $s; return $this; }\n    public function theme($t) { $this->theme = $t; return $this; }\n    public function trigger($t) { $this->trigger = $t; return $this; }\n    public function build() {\n        return "<webecon-icon name='{$this->name}' size='{$this->size}' stroke='{$this->stroke}' color='{$this->color}' secondary-color='{$this->secondaryColor}' secondary-opacity='{$this->secondaryOpacity}' theme='{$this->theme}' animation='{$this->animation}' animation-mode='{$this->trigger}'></webecon-icon>";\n    }\n}`, 'PHP', '$tag = Webecon::icon("zap")->size(48)->theme("neon")->build();');

    // Ruby Builder
    writeSDK('ruby', 'webecon.rb', `module Webecon\n  class Icon\n    def initialize(name)\n      @name=name; @size=24; @stroke=2.0; @color="currentColor"; @secondary_color="none"; @secondary_opacity=0.35; @theme="line"; @animation="none"; @trigger="infinite"\n    end\n    def self.icon(name); new(name); end\n    def size(s); @size=s; self; end\n    def theme(t); @theme=t; self; end\n    def trigger(t); @trigger=t; self; end\n    def build; "<webecon-icon name='#{@name}' size='#{@size}' stroke='#{@stroke}' color='#{@color}' secondary-color='#{@secondary_color}' secondary-opacity='#{@secondary_opacity}' theme='#{@theme}' animation='#{@animation}' animation-mode='#{@trigger}'></webecon-icon>"; end\n  end\nend`, 'Ruby', 'tag = Webecon::Icon.icon("zap").size(48).build');

    // React
    const jsUpdateCheck = `
try {
    fetch('https://api.github.com/repos/${GITHUB_REPO}/releases/latest')
        .then(r => r.json())
        .then(data => {
            const latest = data.tag_name.replace('v', '');
            if (latest > '${VERSION}') {
                console.log('%c🚀 New Webecon version available: v' + latest + ' (Current: v${VERSION})', 'color: #00f2fe; font-weight: bold;');
                console.log('%c👉 Update: https://github.com/${GITHUB_REPO}', 'color: #6366f1;');
            }
        }).catch(() => {});
} catch(e) {}
`;
    writeSDK('react', 'Webecon.jsx', `import React from 'react';\n${jsUpdateCheck}\nexport const Webecon = ({ name, ...props }) => <webecon-icon name={name} {...props} />;\nexport const Icon = (name) => (props) => <webecon-icon name={name} {...props} />;`, 'React', 'import { Webecon } from "./Webecon";\nconst App = () => <Webecon name="zap" size={48} theme="neon" />;');

    // HTML Reference
    const htmlRef = iconKeys.slice(0, 50).map(k => `<div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:16px; border:1px solid #eee; border-radius:8px;">\n  <webecon-icon name="${k}" size="32"></webecon-icon>\n  <code style="font-size:10px;">${k}</code>\n</div>`).join('\n');
    writeSDK('html', 'index.html', `<!DOCTYPE html>\n<html>\n<head>\n    <title>Webecon Icon Library</title>\n    <script src="https://cdn.adityadivte.com/webecon.js"></script>\n</head>\n<body>\n    <h1 style="text-align:center;">Webecon Icons Reference</h1>\n    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(120px, 1fr)); gap:16px; padding:32px;">\n${htmlRef}\n    </div>\n</body>\n</html>`, 'HTML Reference');

    // --- 3. Standalone SVGs ---
    console.log('🖼️  Generating standalone SVGs...');
    iconKeys.forEach(name => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><!-- Webecon by Aditya Divte Production (aka Aditya Diwate) (adityadivte.com) -->${icons[name]}</svg>`;
        fs.writeFileSync(path.join(iconsDir, `${name}.svg`), svg);
    });

    // --- 4. Marketplace & ZIPs ---
    const { execSync } = await import('child_process');
    try {
        console.log('⏳ Waiting for file system to sync...');
        await new Promise(r => setTimeout(r, 2000)); // 2s delay

        console.log('📦 Packing SDKs...');
        const languages = fs.readdirSync(sdkBase).filter(f => fs.statSync(path.join(sdkBase, f)).isDirectory());
        languages.forEach(lang => {
            const zipPath = path.join(zipsDir, `webecon-${lang}.zip`);
            execSync(`powershell -Command "Compress-Archive -Path '${path.join(sdkBase, lang)}/*' -DestinationPath '${zipPath}' -Force"`);
        });

        // Pack VS Code Extension
        const vscodeZip = path.join(zipsDir, `webecon-vscode.zip`);
        if (fs.existsSync('./vscode-extension')) {
            execSync(`powershell -Command "Compress-Archive -Path './vscode-extension/*' -DestinationPath '${vscodeZip}' -Force"`);
        }

        execSync(`powershell -Command "Compress-Archive -Path '${sdkBase}/*' -DestinationPath '${distDir}/Webecon_Universal_SDKs.zip' -Force"`);
    } catch (e) { console.warn('⚠️ ZIP failed:', e.message); }

    // Marketplace
    const mktBase = path.join(distDir, 'marketplace');
    const unityPack = path.join(mktBase, 'Unity_Webecon');
    const unrealPack = path.join(mktBase, 'Unreal_Webecon');
    [unityPack, unrealPack].forEach(p => {
        if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
        const iconsP = path.join(p, 'Icons');
        if (!fs.existsSync(iconsP)) fs.mkdirSync(iconsP, { recursive: true });
    });
    fs.copyFileSync(path.join(sdkBase, 'csharp', 'Webecon.cs'), path.join(unityPack, 'Webecon.cs'));
    fs.copyFileSync(path.join(sdkBase, 'cpp', 'webecon.hpp'), path.join(unrealPack, 'webecon.hpp'));
    
    console.log(`✅ Build Complete!`);
}

build();
