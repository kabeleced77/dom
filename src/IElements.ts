/**
 * Type describing a list of DOM elements.
 *
 * Type <T> determines the actual type of the elements.
 */
export interface IElements<TElement extends Element> {
  elements(document: Document): Array<TElement>
}
