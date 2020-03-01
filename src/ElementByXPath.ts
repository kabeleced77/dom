import { IElementByXPath } from './IElementByXPath'

export class ElementByXPath<TElement extends Element>
  implements IElementByXPath<TElement> {
  private foundElement: Array<TElement>

  /**
   * Encapsulates a XPath string. This XPath is used to look for a matching element in a DOM.
   */
  constructor(private readonly elementXPath: string) {
    this.foundElement = new Array(0)
  }

  /**
   * Returns the encapsulated XPath string.
   */
  public xPath(): string {
    return this.elementXPath
  }
  /**
   * Returns the first found DOM element saved in an array. If the array is empty no element was found.
   * @param document DOM where to look for the element
   */
  public element(document: Document): Array<TElement> {
    if (this.foundElement.length === 0) {
      const firstNode = document.evaluate(
        this.elementXPath,
        document.documentElement,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
      ).singleNodeValue
      if (firstNode) {
        this.foundElement.push(firstNode as TElement)
      }
    }
    return this.foundElement
  }
}
