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
                
                // Attribute Completions
                const isTheme = linePrefix.match(/theme=['"][^'"]*$/i);
                if (isTheme) {
                    return ['line', 'solid', 'duo', 'flat', 'neon', 'shine'].map(theme => {
                        return new vscode.CompletionItem(theme, vscode.CompletionItemKind.EnumMember);
                    });
                }
                const isAnimation = linePrefix.match(/animation=['"][^'"]*$/i);
                if (isAnimation) {
                    return ['none', 'pulse', 'spin', 'float', 'shake', 'bounce'].map(anim => {
                        return new vscode.CompletionItem(anim, vscode.CompletionItemKind.EnumMember);
                    });
                }
                const isInteraction = linePrefix.match(/interaction=['"][^'"]*$/i);
                if (isInteraction) {
                    return ['hover', 'click', 'always'].map(inter => {
                        return new vscode.CompletionItem(inter, vscode.CompletionItemKind.EnumMember);
                    });
                }
                const isTrigger = linePrefix.match(/trigger=['"][^'"]*$/i);
                if (isTrigger) {
                    return ['loop', 'hover', 'click', 'morph'].map(trig => {
                        return new vscode.CompletionItem(trig, vscode.CompletionItemKind.EnumMember);
                    });
                }

                // Flexible matching for ALL languages:
                // 1. HTML: <webecon-icon name="...
                // 2. React: <Webecon name="...
                // 3. SDKs: Webecon.icon("... or Webecon("... or Webecon(name: "...
                const isInsideTag = linePrefix.match(/<webecon-icon[^>]*name=['"][^'"]*$/i);
                const isReactTag = linePrefix.match(/<Webecon[^>]*name=['"][^'"]*$/i);
                const isSDKCall = linePrefix.match(/Webecon(\.icon)?\s*\(['"]?[^'"]*$/i);
                const isFlutterCall = linePrefix.match(/Webecon\(\s*name\s*:\s*['"]?[^'"]*$/i);
                const isTypingPrefix = linePrefix.match(/web[econ-]*$/i);

                if (!isInsideTag && !isReactTag && !isSDKCall && !isFlutterCall && !isTypingPrefix) {
                    return undefined;
                }

                return icons.map(name => {
                    const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.File);
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

                    if (isTypingPrefix && !isInsideTag && !isReactTag && !isSDKCall && !isFlutterCall) {
                        item.label = `webecon-${name}`;
                        const match = linePrefix.match(/web[econ-]*$/i);
                        const start = position.translate(0, -match[0].length);
                        item.range = new vscode.Range(start, position);
                        item.insertText = new vscode.SnippetString(`<webecon-icon name="${name}" size="24" theme="line" animation="none"></webecon-icon>`);
                    } else {
                        item.insertText = name;
                        item.label = name; 
                    }
                    
                    return item;
                });
            }
        }
    );

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
