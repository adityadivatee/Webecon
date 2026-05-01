import icons from './src/icons.js';
import fs from 'fs';

const snippets = {};

Object.keys(icons).forEach(name => {
    const previewUrl = `https://raw.githubusercontent.com/adityadivatee/Webecon/main/dist/icons/${name}.svg`;
    const previewMd = `\n\n![Preview](${previewUrl})`;

    // Standard Snippet
    snippets[`Webecon: ${name}`] = {
        "prefix": `webecon-${name}`,
        "body": [
            `<webecon-icon name="${name}" size="\${1:24}" color="\${2:currentColor}" \${3:theme="\${4|line,solid,duo,neon,glass,blob,gradient,sketch,dotted,broken,minimal-dot,3d,soft-shadow,elevated,shadow-box,cyberpunk,brutalist,halo,stamp,retro|}"} \${5:secondary-color="\${6:#ec4899}"} stroke="\${7:2}" animation="\${8|none,spin,spin-slow,pulse,heartbeat,bounce,shake,ring,swing,float,flash,rubber-band,tada,jello,fade,flip,flip-v,rotate-90,zoom-in,zoom-out,slide-up|}" animation-mode="\${9|infinite,hover,click|}"></webecon-icon>`
        ],
        "description": `Insert ${name} webecon${previewMd}`
    };

    // React JSX
    snippets[`Webecon React: ${name}`] = {
        "prefix": `webecon-react-${name}`,
        "body": [`<Webecon name="${name}" size={\${1:24}} theme="\${2:line}" />`],
        "description": `React component for ${name}${previewMd}`
    };

    // Dart/Flutter
    snippets[`Webecon Flutter: ${name}`] = {
        "prefix": `webecon-flutter-${name}`,
        "body": [`Webecon.icon("${name}").setSize(\${1:24}).setTheme("\${2:line}").build()`],
        "description": `Flutter Dart implementation for ${name}${previewMd}`
    };

    // Python
    snippets[`Webecon Python: ${name}`] = {
        "prefix": `webecon-python-${name}`,
        "body": [`webecon.Webecon("${name}").size(\${1:24}).theme("\${2:line}").build()`],
        "description": `Python SDK implementation for ${name}${previewMd}`
    };

    // Java
    snippets[`Webecon Java: ${name}`] = {
        "prefix": `webecon-java-${name}`,
        "body": [`Webecon.icon("${name}").size(\${1:24}).theme("\${2:line}").build()`],
        "description": `Java SDK implementation for ${name}${previewMd}`
    };

    // Kotlin
    snippets[`Webecon Kotlin: ${name}`] = {
        "prefix": `webecon-kotlin-${name}`,
        "body": [`Webecon.icon("${name}").size(\${1:24}).theme("\${2:line}").build()`],
        "description": `Kotlin SDK implementation for ${name}${previewMd}`
    };

    // C#
    snippets[`Webecon C#: ${name}`] = {
        "prefix": `webecon-csharp-${name}`,
        "body": [`Webecon.icon("${name}").size(\${1:24}).theme("\${2:line}").build()`],
        "description": `C# SDK implementation for ${name}${previewMd}`
    };

    // C++
    snippets[`Webecon C++: ${name}`] = {
        "prefix": `webecon-cpp-${name}`,
        "body": [`webecon::Webecon::icon("${name}").size(\${1:24}).theme("\${2:line}").build()`],
        "description": `C++ SDK implementation for ${name}${previewMd}`
    };

    // Go
    snippets[`Webecon Go: ${name}`] = {
        "prefix": `webecon-go-${name}`,
        "body": [`webecon.Icon("${name}").SetSize(\${1:24}).SetTheme("\${2:line}").Build()`],
        "description": `Go SDK implementation for ${name}${previewMd}`
    };

    // Rust
    snippets[`Webecon Rust: ${name}`] = {
        "prefix": `webecon-rust-${name}`,
        "body": [`Webecon::icon("${name}").size(\${1:24}).theme("\${2:line}").build()`],
        "description": `Rust SDK implementation for ${name}${previewMd}`
    };

    // Swift
    snippets[`Webecon Swift: ${name}`] = {
        "prefix": `webecon-swift-${name}`,
        "body": [`Webecon.icon("${name}").size(\${1:24}).theme("\${2:line}").build()`],
        "description": `Swift SDK implementation for ${name}${previewMd}`
    };

    // PHP
    snippets[`Webecon PHP: ${name}`] = {
        "prefix": `webecon-php-${name}`,
        "body": [`Webecon::icon("${name}")->size(\${1:24})->theme("\${2:line}")->build()`],
        "description": `PHP SDK implementation for ${name}${previewMd}`
    };

    // Ruby
    snippets[`Webecon Ruby: ${name}`] = {
        "prefix": `webecon-ruby-${name}`,
        "body": [`Webecon::Icon.icon("${name}").size(\${1:24}).theme("\${2:line}").build`],
        "description": `Ruby SDK implementation for ${name}${previewMd}`
    };

    // Themes (HTML)
    snippets[`Webecon Neon: ${name}`] = {
        "prefix": `webecon-neon-${name}`,
        "body": [`<webecon-icon name="${name}" theme="neon" color="\${1:#6366f1}" size="\${2:32}" animation="\${3:pulse}" animation-mode="infinite"></webecon-icon>`],
        "description": `Insert Neon ${name} icon${previewMd}`
    };

    snippets[`Webecon Glass: ${name}`] = {
        "prefix": `webecon-glass-${name}`,
        "body": [`<webecon-icon name="${name}" theme="glass" color="\${1:#ffffff}" size="\${2:48}" stroke="1.5"></webecon-icon>`],
        "description": `Insert Glassmorphism ${name} icon${previewMd}`
    };

    snippets[`Webecon Duo: ${name}`] = {
        "prefix": `webecon-duo-${name}`,
        "body": [`<webecon-icon name="${name}" theme="duo" color="\${1:#ffffff}" secondary-color="\${2:#ec4899}" size="\${3:32}"></webecon-icon>`],
        "description": `Insert Duo-Tone ${name} icon${previewMd}`
    };
});

fs.writeFileSync('./vscode-extension/snippets/webecon.json', JSON.stringify(snippets, null, 4));
fs.writeFileSync('./vscode-extension/icons.json', JSON.stringify(Object.keys(icons), null, 4));
console.log('Snippets and icons.json generated successfully!');
