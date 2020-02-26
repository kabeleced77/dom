
# dom

Interfaces for [TypeScript](https://www.typescriptlang.org/) and implementations for TypeScript and JavaScript helping to interact with the [Document Object Model](https://www.w3.org/DOM/#what) (DOM).

## Installation
Install this package dependency to your project
```
npm install @kabeleced/webext-dom
```
or as dev-dependency
```
npm install --save-dev @kabeleced/webext-dom
```

## Usage
Several interfaces and implementations are or will be provided by this package.

Its main goal is to provide interfaces which can be used by a TypeScript application like

```
import { ElementByXPath } from '../dist/ElementByXPath'
```

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
eyJoaXN0b3J5IjpbLTE1NjM0MTM0OTldfQ==
-->