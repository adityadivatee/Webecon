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

    // Neon Theme Snippet
    snippets[`Webecon Neon: ${name}`] = {
        "prefix": `webecon-neon-${name}`,
        "body": [
            `<webecon-icon name="${name}" theme="neon" color="\${1:#6366f1}" size="\${2:32}" animation="\${3:pulse}" animation-mode="infinite"></webecon-icon>`
        ],
        "description": `Insert Neon ${name} icon${previewMd}`
    };

    // Glass Theme Snippet
    snippets[`Webecon Glass: ${name}`] = {
        "prefix": `webecon-glass-${name}`,
        "body": [
            `<webecon-icon name="${name}" theme="glass" color="\${1:#ffffff}" size="\${2:48}" stroke="1.5"></webecon-icon>`
        ],
        "description": `Insert Glassmorphism ${name} icon${previewMd}`
    };

    // Duo Theme Snippet
    snippets[`Webecon Duo: ${name}`] = {
        "prefix": `webecon-duo-${name}`,
        "body": [
            `<webecon-icon name="${name}" theme="duo" color="\${1:#ffffff}" secondary-color="\${2:#ec4899}" size="\${3:32}"></webecon-icon>`
        ],
        "description": `Insert Duo-Tone ${name} icon${previewMd}`
    };
});

fs.writeFileSync('./vscode-extension/snippets/webecon.json', JSON.stringify(snippets, null, 4));
fs.writeFileSync('./vscode-extension/icons.json', JSON.stringify(Object.keys(icons), null, 4));
console.log('Snippets and icons.json generated successfully!');
