/**
 * 주어진 문자열을 camelCase로 변환합니다
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(/[-_]+/g, '');
}

/**
 * 주어진 문자열을 snake_case로 변환합니다
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/\s+/g, '_')
    .replace(/([A-Z])/g, '_$1')
    .replace(/^_/, '')
    .replace(/-/g, '_')
    .replace(/_+/g, '_')
    .toLowerCase();
}

/**
 * 주어진 문자열을 CONSTANT_CASE로 변환합니다
 */
export function toConstantCase(str: string): string {
  return str
    .replace(/\s+/g, '_')
    .replace(/([A-Z])/g, '_$1')
    .replace(/^_/, '')
    .replace(/-/g, '_')
    .replace(/_+/g, '_')
    .toUpperCase();
}

/**
 * 주어진 문자열을 PascalCase로 변환합니다
 */
export function toPascalCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word) {
      return word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(/[-_]+/g, '');
}

export function validateText(textToTranslate: string): { valid: boolean; failMessage?: string } {
	if (textToTranslate.match(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9\-_\s]/)) {
		return {
			valid: false,
			failMessage: '변환할 수 없는 문자가 포함되어 있습니다.\n올바른 변환을 위해 한글, 숫자, 띄어쓰기, 특수문자(-_)만 입력해주세요!',
		};
	}

	if (!textToTranslate.match(/[가-힣]/)) {
		return {
			valid: false,
			failMessage: '변환할 수 있는 단어가 없습니다!',
		};
	}

	return {
		valid: true
	};
}
