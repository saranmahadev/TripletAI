import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('TripletAI is now active!');

  const disposable = vscode.commands.registerCommand('tripletai.askQuery', async () => {
    const query = await vscode.window.showInputBox({
      prompt: 'Ask TripletAI something...',
      placeHolder: 'e.g., Explain the current line of code'
    });

    if (query) {
      vscode.window.showInformationMessage(`You asked: "${query}"`);
      console.log(`[TripletAI] User query: ${query}`);
    } else {
      vscode.window.showWarningMessage('No input provided.');
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
