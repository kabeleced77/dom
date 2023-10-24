![Build Status](https://app.travis-ci.com/kabeleced77/dom.svg?branch=master)

# @kabeleced/dom

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

### `IElements<TElement extends Element>`
Interface describing a type accessing a list of DOM elements of any type based on `Element`.

### `IElementById<TElement extends Element> extends IElement<TElement>`
Interface subtyping `IElement` describing a type which provides access to a DOM element by an element id.

### `IElementByXPath<TElement extends Element> extends IElement<TElement>`
Interface subtyping `IElement` describing a type which provides access to a DOM element specified by a XPath.

### `IElementsByXPath<TElement extends Element> extends IElements<TElement>`
Interface subtyping `IElements` describing a type which provides access to a list of DOM elements specified by a XPath.

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

### `ElementsByXPath`
Provides a wrapper of the function `document.evaluate()` accessing DOM elements matching a specific XPath.

Assume you have following simple `DOM`:
```HTML
<div class="outer" name="div-01">
  <div class="inner" name="div-01-01">
    <div class="inner" name="div-01-01-01">
      <p /p>
    /<div>
  /<div>
  <div class="inner" name="div-01-02">
    <p /p>
  /<div>
<div name="div-01">
```

#### Javascript

```javascript
const ElementsByXpath = require('@kabeleced/dom').ElementsByXPath;

const elementsByXpath = new ElementsByXpath('//*[@class="inner"]');

console.log('XPath: ' + elementsByXpath.xPath());
console.log('Number of found elements: ' + elementsByXpath.elements(window.document).length);
console.log('Tag name of 2nd element: ' + elementsByXpath.element(window.document)[1].tagName);
console.log('Class name of 2nd element: ' + elementsByXpath.element(window.document)[1].className);
console.log('Value of attribute "name" of 2nd element: ' + elementsByXpath.element(window.document)[1].getAttribute('name');
```
```
// output (tag names are always returned upper-cased)
XPath: //*[@id="test-id"]
Number of found elements: 3
Tag name of 2nd element: P
Class name of 2nd element: inner
Value of attribute "name" of 2nd element: div-01-01-01
```

#### TypeScript

With TypeScript the usage of the interface `IElementByXPath` is possible:
```typescript
import { IElementByXPath, ElementByXPath } from '@kabeleced/dom'

function printElementInformation(elementsByXPath: IElementsByXPath, dom: Document, index: number): void {
  const elements = elementsByXPath.element(dom);
  if(element.length >= index) {
    const xPath = elementByXPath.xPath();
    console.log(`Tag name of ${index+1}. element by XPath '${xPath}': '${element[index].tagName}'.`);
    console.log(`Class name of ${index+1}. element by XPath '${xPath}': '${element[index].className}'.`);
    console.log(`Value of attribute "name" of ${index+1}. element by XPath '${xPath}': '${element[index].getAttribute('name')}'.`);
  }
}

printTagName(new ElementByXPath('//*[@id="test-id"]'), window.document, 1);
```
```
// output (tag names are always returned upper-cased)
Tag name of 2. element by XPath '//*[@id="test-id"]': 'P'.
Class name of 2. element by XPath '//*[@id="test-id"]': 'inner'.
Value of attribute "name" of 2. element by XPath '//*[@id="test-id"]': 'div-01-01-01'.
```
## Test

```sh
npm run test
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcxOTIzMjE1OSwtNzA2NjIyMzU5LDIyMz
U2Mjc3MywtMTU2MzQxMzQ5OV19
-->
