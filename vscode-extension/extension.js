const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const channel = vscode.window.createOutputChannel("Webecon");
    channel.appendLine('Webecon extension is now active!');

    const iconsJsonPath = path.join(context.extensionPath, 'icons.json');
    let icons = [];
    try {
        icons = JSON.parse(fs.readFileSync(iconsJsonPath, 'utf8'));
        channel.appendLine(`Loaded ${icons.length} icons successfully.`);
    } catch (e) {
        channel.appendLine(`Error loading icons.json: ${e.message}`);
    }

    const provider = vscode.languages.registerCompletionItemProvider(
        ['html', 'javascript', 'javascriptreact', 'typescriptreact', 'vue', 'svelte', 'python', 'java', 'kotlin', 'rust', 'go', 'swift', 'dart', 'cpp', 'csharp', 'ruby', 'php', 'c'],
        {
            provideCompletionItems(document, position) {
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                
                // Flexible matching:
                // 1. Inside name attribute: name="...
                // 2. Webecon function: .icon("...
                // 3. Just typing webecon or web
                const isInsideTag = linePrefix.match(/<webecon-icon[^>]*name=['"]$/i);
                const isSDKCall = linePrefix.match(/Webecon(\.icon)?\s*\(['"]?$/i);
                const isTypingPrefix = linePrefix.match(/web[econ-]*$/i);

                if (!isInsideTag && !isSDKCall && !isTypingPrefix) {
                    return undefined;
                }

                return icons.map(name => {
                    const item = new vscode.CompletionItem(`webecon-${name}`, vscode.CompletionItemKind.File);
                    item.detail = `Webecon Icon: ${name}`;
                    
                    const iconPath = path.join(context.extensionPath, 'icons', `${name}.svg`);
                    try {
                        const svgContent = fs.readFileSync(iconPath, 'utf8');
                        const base64 = Buffer.from(svgContent).toString('base64');
                        const dataUri = `data:image/svg+xml;base64,${base64}`;
                        const markdown = new vscode.MarkdownString(`### ${name}\n\n![${name}](${dataUri})`);
                        markdown.supportHtml = true;
                        item.documentation = markdown;
                    } catch (err) {}

                    if (isTypingPrefix && !isInsideTag && !isSDKCall) {
                        // Replace the typed prefix with the full tag
                        const match = linePrefix.match(/web[econ-]*$/i);
                        const start = position.translate(0, -match[0].length);
                        item.range = new vscode.Range(start, position);
                        item.insertText = new vscode.SnippetString(`<webecon-icon name="${name}" size="24" theme="line" animation="none"></webecon-icon>`);
                    } else {
                        item.insertText = name;
                        item.label = name; // Just the name if inside attributes
                    }
                    
                    return item;
                });
            }
        }
        // No trigger characters - let it trigger on every keystroke for better experience
    );

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
