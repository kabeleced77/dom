import { IElement } from './IElement'

/**
 * Subtype of IElement<T> describing a DOM element identified by a specific XPath.
 *
 * Type <T> determines the actual type of the elements.
 */
export interface IElementByXPath<TElement extends Element>
  extends IElement<TElement> {
  xPath(): string
}
