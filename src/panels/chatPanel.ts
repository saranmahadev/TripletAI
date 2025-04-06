export function getChatWebviewContent(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>
        body {
          font-family: 'Roboto', sans-serif;
          padding: 1rem;
          background: #121212;
          color: #ffffff;
        }
        input {
          width: 100%;
          padding: 10px;
          background: transparent;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          outline: none;
        }
        input:focus {
          box-shadow: 0 0 4px #ffa726;
        }
        #chat {
          margin-top: 20px;
          white-space: pre-wrap;
          line-height: 1.5;
          background: #1e1e1e;
          padding: 10px;
          border-radius: 4px;
        }
        .card {
          background: #1e1e1e;
          padding: 10px;
          margin-top: 10px;
          border-radius: 4px;
          color: #ffffff;
        }
        .card input {
          width: calc(100% - 20px);
          background: transparent;
          color: #ffffff;
          border: none;
          outline: none;
        }
      </style>
    </head>
    <body>
      <input id="userInput" type="text" placeholder="Say something..." />
      <div id="chat"></div>
    
      <script>
        const vscode = acquireVsCodeApi();

        const input = document.getElementById('userInput');
        input.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            const text = input.value.trim();
            if (text) {
              appendToChat("You: " + text);
              vscode.postMessage({ command: 'ping', text: text });
              input.value = '';
            }
          }
        });

        function appendToChat(message) {
          const chat = document.getElementById('chat');
          const card = document.createElement('div');
          card.className = 'card';
          card.contentEditable = true;
          card.innerText = message;
          chat.appendChild(card);
        }

        window.addEventListener('message', (event) => {
          const message = event.data;
          if (message.response) {
            appendToChat("AI: " + message.response);
          }
        });
      </script>
    </body>
    </html>
  `;
}