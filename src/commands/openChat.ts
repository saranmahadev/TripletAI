import * as vscode from 'vscode';
import { getChatWebviewContent } from '../panels/chatPanel';

export function openChat(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    'tripletChat',
    'Triplet Chat',
    vscode.ViewColumn.One,
    {
      enableScripts: true,
    }
  );

  panel.webview.html = getChatWebviewContent();

  panel.webview.onDidReceiveMessage(
    (message) => {
      if (message.command === 'ping') {
        panel.webview.postMessage({ response: 'pong' });
      }
    },
    undefined,
    context.subscriptions
  );
}

