import { IElements } from './IElements'

/**
 * Subtype of IElements<T> describing a list of DOM elements identified by a specific XPath.
 *
 * Type <T> determines the actual type of the elements.
 */
export interface IElementsByXPath<TElement extends Element>
  extends IElements<TElement> {
  xPath(): string
}
