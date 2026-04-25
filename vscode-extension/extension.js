const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Webecon extension is now active!');

    const iconsJsonPath = path.join(context.extensionPath, 'icons.json');
    let icons = [];
    try {
        icons = JSON.parse(fs.readFileSync(iconsJsonPath, 'utf8'));
    } catch (e) {
        console.error('Failed to load icons.json', e);
    }

    const provider = vscode.languages.registerCompletionItemProvider(
        ['html', 'javascript', 'javascriptreact', 'typescriptreact', 'vue', 'svelte'],
        {
            provideCompletionItems(document, position) {
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (!linePrefix.includes('<webecon-icon')) {
                    return undefined;
                }

                return icons.map(name => {
                    const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.File);
                    item.detail = `Webecon Icon: ${name}`;
                    
                    // Documentation with preview
                    const iconPath = path.join(context.extensionPath, 'icons', `${name}.svg`);
                    let svgContent = '';
                    try {
                        svgContent = fs.readFileSync(iconPath, 'utf8');
                        // Basic cleanup for markdown
                        const base64 = Buffer.from(svgContent).toString('base64');
                        const dataUri = `data:image/svg+xml;base64,${base64}`;
                        
                        const markdown = new vscode.MarkdownString(`### ${name}\n\n![${name}](${dataUri})`);
                        markdown.supportHtml = true;
                        item.documentation = markdown;
                    } catch (err) {
                        item.documentation = `Icon: ${name}`;
                    }

                    item.insertText = name;
                    return item;
                });
            }
        },
        ' ' // trigger on space
    );

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
