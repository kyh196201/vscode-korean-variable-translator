import * as vscode from 'vscode';
import Translator from './translator';
import { validateText } from './utils';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('korean-variable-translator.translate', async () => {
		const config = vscode.workspace.getConfiguration('koreanVariableTranslator');
		const apiKey = config.get<string>('deeplApiKey');
	
		if (!apiKey) {
			vscode.window.showWarningMessage('Deepl API 키를 등록해주세요.', { modal: true });
	
			return;
		}

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showWarningMessage('에디터가 열려있는 상태에서 시도해주세요!');

			return;
		}

		const selection = editor.selection;
		if (!selection || selection.isEmpty) {
			vscode.window.showWarningMessage('변수명으로 변환할 단어 또는 문장을 선택해주세요!');

			return;
		}

		const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
		const selectedText = editor.document.getText(selectionRange);

		const { valid, failMessage } = validateText(selectedText);

		if (!valid && failMessage) {
			vscode.window.showErrorMessage(failMessage);
			return;
		}

		try {
			const translator = new Translator(apiKey);

			const options = await translator.getTranslatedOptions(selectedText);
	
			const picked = await vscode.window.showQuickPick(options, {
				placeHolder: '적용할 변수명을 선택해주세요.',
			});

			if (picked) {
				editor.edit(edit => {
					edit.replace(selectionRange, picked.label);
				});
			}
		} catch (error) {
			console.error('translation failed', error);
			vscode.window.showErrorMessage('변수명 변환에 실패했습니다. 다시 시도해주세요.');
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
