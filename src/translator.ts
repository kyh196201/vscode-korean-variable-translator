import * as deepl from 'deepl-node';
import { QuickPickItem } from 'vscode';
import { toCamelCase, toConstantCase, toPascalCase, toSnakeCase } from './utils';

function sanitizeTranslatedText(text: string) {
	return text.replace(/[^a-zA-Z0-9\-_\s]/g, '');
}

class Translator {
	translator: deepl.Translator;

	constructor(authKey: string) {
		this.translator = new deepl.Translator(authKey);
	}

	async translate(text: string): Promise<string> {
		const result = await this.translator.translateText(text, 'ko', 'en-US');

		return sanitizeTranslatedText(result.text);
	}

	async getTranslatedOptions(textToTranslate: string): Promise<QuickPickItem[]> {
		const translatedText = await this.translate(textToTranslate.trim());

		return [
			{
				label: toCamelCase(translatedText),
				description: ` : ${textToTranslate}`,
				detail: 'camelCase',
			},
			{
				label: toPascalCase(translatedText),
				detail: 'PascalCase',
			},
			{
				label: toConstantCase(translatedText),
				detail: 'CONSTANT_CASE',
			},
			{
				label: toSnakeCase(translatedText),
				detail: 'snake_case',
			},
		];
	}
}

export default Translator;