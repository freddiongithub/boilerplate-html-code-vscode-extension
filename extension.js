// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Boilerplate HTML Code" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('boilerplate-code.createBoilerplate', function () {
		const htmlFileContent = `<!DOCTYPE HTML>
<html lang='en'>
	<head>
		<meta charset='UTF-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1.0' />
		<meta http-equiv='X-UA-Compatible' content='ie-edge' />
		<title>Title</title>
		<link rel='stylesheet' href='app.css' />
	</head>
	<body>
				
	</body>
	<script src='app.js' defer />
</html>
		`
		const cssFileContent = `body {
	margin: 0;
	padding: 0;
}
		`
		const jsFileContent = `console.log('Hello, world!');`
		let wf = vscode.workspace.workspaceFolders[0].uri.path ;
   		let f = vscode.workspace.workspaceFolders[0].uri.fsPath ; 

    	let folderPath = `${wf} - ${f}` ;

		fs.writeFile(path.join(f, 'index.html'), htmlFileContent, err => {
				if(err) {
					console.error(err);
					return vscode.window.showErrorMessage(
						'Failed to create Boilerplate File(s)'
					);
				}
				vscode.window.showInformationMessage('Created HTML File!')
			}
		);
		fs.writeFile(path.join(f, 'app.css'), cssFileContent, err => {
				if(err) {
					console.error(err);
					return vscode.window.showErrorMessage(
						'Failed to create Boilerplate File(s)'
					);
				}
				vscode.window.showInformationMessage('Created CSS File!')
			}
		);
		fs.writeFile(path.join(f, 'app.js'), jsFileContent, err => {
				if(err) {
					console.error(err);
					return vscode.window.showErrorMessage(
						'Failed to create Boilerplate File(s)'
					);
				}
				vscode.window.showInformationMessage('Created JS File!')
			}
		);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
