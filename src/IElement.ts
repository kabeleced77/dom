/**
 * Type describing a DOM document element.
 * Preventing null reference exception the element - if any - shall be returned saved in an array instead of null.
 *
 * Type <T> determines the actual type of the element.
 */
export interface IElement<TElement extends Element> {
  element(document: Document): Array<TElement>
}
