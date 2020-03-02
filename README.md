[![Build Status](https://travis-ci.org/kabeleced77/dom.svg?branch=master)](https://travis-ci.org/kabeleced77/dom)

# dom

This package offers interfaces for [TypeScript](https://www.typescriptlang.org/) and implementations for TypeScript and JavaScript helping to interact with the [Document Object Model](https://www.w3.org/DOM/#what) (DOM).

Its main goal is to provide interfaces and implementations used by a TypeScript application like following small example:
```HTML
// exmple DOM
<p id="test-id" /p>
```
```TypeScript
// foo.ts
import { IElementByXPath, ElementByXPath } from '@kabeleced/dom'

function printTagName(elementByXPath: IElementByXPath, dom: Document): void {
  const element = elementByXPath.element(dom);
  if(element.length > 0) {
    console.log(`Tag name of element by XPath '${elementByXPath.xPath()}': '${element[0].tagName}'.`);
  }
}

printTagName(new ElementByXPath('//*[@id="test-id"]'), window.document);
```
```
// output (tag names are always returned upper-cased)
Tag name of element by XPath '//*[@id="test-id"]': 'P'.
```

## Installation
Add this package as a dependency to your project
```
npm install @kabeleced/dom
```
or as a dev-dependency
```
npm install --save-dev @kabeleced/dom
```

## Interfaces
This section provides an overview of the interfaces of this package.

### `IElement<TElement extends Element>`
Interface describing a type accessing a DOM element of any type based on `Element`.

The actual method returning the wanted element`IElement.element()` specifies as return type `Array<TElement>`. This is to prevent returning something like `null` in case of no element is available. In this case the returned array would be empty otherwise it would contain the actual element. 

### `IElementById<TElement extends Element> extends IElement<TElement>`
Interface subtyping `IElement` describing a type which provides access to a DOM element by an element id.

### `IElementByXPath<TElement extends Element> extends IElement<TElement>`
Interface subtyping `IElement` describing a type which provides access to a DOM element by a XPath.

## Usages
This section provides small examples using the interface implementations.

### `ElementById`
Provides a wrapper of the function `document.getElementById()` accessing a DOM element by a specific id.

Assume you have following simple `DOM`:
```HTML
<p id = "test-id" /p>
```

#### Javascript

```javascript
const ElementById = require('@kabeleced/dom').ElementById;

const elementById = new ElementById('test-id');

console.log('Id: ' + elementById.id());
console.log('Tag name of element: ' + elementById.element(window.document)[0].tagName);
```
```
// output (tag names are always returned upper-cased)
Id: test-id
Tag name of Element: P
```

#### TypeScript

With TypeScript the usage of the interface `IElementById` is possible:
```typescript
import { IElementById, ElementById } from '@kabeleced/dom'

function printTagName(elementById: IElementById, dom: Document): void {
  const element = elementById.element(dom);
  if(element.length > 0) {
    console.log(`Tag name of element by Id '${elementById.id()}': '${element[0].tagName}'.`);
  }
}

printTagName(new ElementById('test-id'), window.document);
```
```
// output (tag names are always returned upper-cased)
Tag name of element by Id 'test-id': 'P'.
```
### `ElementByXPath`
Provides a wrapper of the function `document.evaluate()` accessing a DOM element by a specific XPath.

Assume you have following simple `DOM`:
```HTML
<p id = "test-id" /p>
```

#### Javascript

```javascript
const ElementByXpath = require('@kabeleced/dom').ElementByXPath;

const elementByXpath = new ElementByXpath('//*[@id="test-id"]');

console.log('XPath: ' + elementByXpath.xPath());
console.log('Tag name of element: ' + elementByXpath.element(window.document)[0].tagName);
```
```
// output (tag names are always returned upper-cased)
XPath: //*[@id="test-id"]
Tag name of Element: P
```

#### TypeScript

With TypeScript the usage of the interface `IElementByXPath` is possible:
```typescript
import { IElementByXPath, ElementByXPath } from '@kabeleced/dom'

function printTagName(elementByXPath: IElementByXPath, dom: Document): void {
  const element = elementByXPath.element(dom);
  if(element.length > 0) {
    console.log(`Tag name of element by XPath '${elementByXPath.xPath()}': '${element[0].tagName}'.`);
  }
}

printTagName(new ElementByXPath('//*[@id="test-id"]'), window.document);
```
```
// output (tag names are always returned upper-cased)
Tag name of element by XPath '//*[@id="test-id"]': 'P'.
```
## Test

```sh
npm run test
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNjY0MjUzMDAsMjIzNTYyNzczLC0xNT
YzNDEzNDk5XX0=
-->