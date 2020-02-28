
# dom

This package offers interfaces for [TypeScript](https://www.typescriptlang.org/) and implementations for TypeScript and JavaScript helping to interact with the [Document Object Model](https://www.w3.org/DOM/#what) (DOM).

Its main goal is to provide interfaces and implementations used by a TypeScript application like
```
```

## Installation
Add this package as a dependency to your project
```
npm install @kabeleced/webext-dom
```
or as a dev-dependency
```
npm install --save-dev @kabeleced/webext-dom
```

## Usage

### ElementsByXPath

Access to the an element of a DOM by a specific XPath.

Assume you have following simple `DOM`:

```
<p id = "test-id" /p>
```

#### Javascript

```javascript
const e = new ElementsByXpath('//*[@id="test-id"]')
console.log('XPath: ' + e.xPath())
console.log('Tag name of element: ' + e.element(window.document)[0].tagName)
```

The output should be

```sh
XPath: //*[@id="test-id"]
Tag name of Element: P
```

### TypeScript

With TypeScript the usage of the interface `II18nText` is possible:

```typescript
import { II18nText, I18nText } from 'webext-i18n'

function printText(text: II18nText, textWithSubstitution: II18nText) {
  console.log('Text: ' + text.value())
  console.log('Text with substituion: ' + textWithSubstitution.value('World'))
}

printText(new I18nText('text'), new I18nText('text_substitution'))
```

Output should be

```sh
Text: Hello!
Text with substitution: Hello World!
```

## Test

```sh
npm run test
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5ODUyNDgzMTEsMjIzNTYyNzczLC0xNT
YzNDEzNDk5XX0=
-->