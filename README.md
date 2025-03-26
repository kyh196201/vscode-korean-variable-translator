# Korean Variable Translator

🔤 한글로 입력한 변수명을 영문 변수, 함수명으로 변환하는 VsCode 확장 프로그램입니다.

평소 변수명이 떠오르지 않을 때 한글로 작성한 뒤에 영어로 변경하는 경우가 많은데, 이 과정을 간편하게 이용하기 위해서 개발했습니다.

## 주요 기능(Features)

- 선택한 단어 또는 문장을 DeepL API를 사용하여 영어로 번역합니다.
- 번역된 텍스트를 다양한 형태로 변환하여 제공합니다.(카멜 케이스, 파스칼 케이스, 스네이크 케이스, CONSTANT_CASE)

## 사용 방법(Usage Instructions)

1. 한글 텍스트를 입력 후 선택
2. 명령 팔레트(⌘/Ctrl + Shift + P)에서 "한글 → 변수명으로 변환 🔤" 검색 후 실행
	- 또는, 선택한 텍스트에서 우클릭 후 "한글 → 변수명으로 변환 🔤" 메뉴 선택
3. 추천된 변수명 중에서 선택해서 변수명 적용!

## DeepL API

- 월 50만자까지 무료로 번역 API 사용이 가능합니다.
- DeepL API 키 발급 가이드(추가 예정)

## 확장 프로그램 설정(Configuration)

`koreanVariableTranslator.apiKey`: DeepL API 키를 설정합니다.

```json
"koreanVariableTranslator.apiKey": "발급 받은 API 키"
```

## 참고

- https://github.com/DinnerKang/korean_translator
- https://tech.kakaopay.com/post/variable-name-bot-haero-sery-bread/
- https://medium.com/frontend-developers/vs-code-extension-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0-ae933343d2b5
