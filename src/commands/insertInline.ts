import * as vscode from 'vscode';

export async function insertInlineCommand() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage('No active editor found.');
    return;
  }

  // Prompt the user for input
  const query = await vscode.window.showInputBox({
    prompt: 'Ask TripletAI something...',
    placeHolder: 'e.g., Explain the current line of code'
  });

  if (query) {
    vscode.window.showInformationMessage(`You asked: "${query}"`);
    console.log(`[TripletAI] User query: ${query}`);
  } else {
    vscode.window.showInformationMessage('No input provided.');
  }
}