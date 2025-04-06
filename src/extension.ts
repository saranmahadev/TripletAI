
import * as vscode from 'vscode';
import { insertInlineCommand } from './commands/insertInline';
import { openChat } from './commands/openChat';

export function activate(context: vscode.ExtensionContext) {
  console.log('TripletAI extension is active.');

  context.subscriptions.push(
    vscode.commands.registerCommand('tripletai.insertInlineTextbox', insertInlineCommand),
    vscode.commands.registerCommand('tripletai.openChat', () => openChat(context)),
  );
}

export function deactivate() {}