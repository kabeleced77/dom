import { IElementsByXPath } from './IElementsByXPath'

export class ElementsByXPath<TElement extends Element>
  implements IElementsByXPath<TElement> {
  private foundElements: Array<TElement>

  /**
   * Encapsulates a XPath string. This XPath is used to look for a matching element in a DOM.
   */
  constructor(private readonly elementXPath: string) {
    this.foundElements = new Array(0)
  }

  /**
   * Returns the encapsulated XPath string.
   */
  public xPath(): string {
    return this.elementXPath
  }
  /**
   * Returns all found DOM elements saved in an array. If the array is empty no element was found.
   * @param document DOM where to look for the elements
   */
  public elements(document: Document): Array<TElement> {
    if (this.foundElements.length === 0) {
      const firstNode = document.evaluate(
        this.elementXPath,
        document.documentElement,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null,
      )
      for (let i = 0, length = firstNode.snapshotLength; i < length; ++i) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.foundElements.push(firstNode.snapshotItem(i)! as TElement)
      }
    }
    return this.foundElements
  }
}
