import { IElementById } from './IElementById'

export class ElementById<TElement extends HTMLElement>
  implements IElementById<TElement> {
  private foundElement: Array<TElement>

  /**
   * Encapsulates an Id string. This Id is used to look for a matching element in a DOM.
   */
  constructor(private readonly elementId: string) {
    this.foundElement = new Array<TElement>(0)
  }

  /**
   * Returns the encapsulated Id string.
   */
  public id(): string {
    return this.elementId
  }
  /**
   * Returns the first found DOM element saved in an array. If the array is empty no element was found.
   * @param document DOM where to look for the element
   */
  public element(document: Document): Array<TElement> {
    if (this.foundElement.length === 0) {
      const element = document.getElementById(this.elementId)
      if (element) {
        this.foundElement.push(element as TElement)
      }
    }
    return this.foundElement
  }
}
