import { IElement } from './IElement'

/**
 * Subtype of IElement<T> describing a DOM element identified by a specific id.
 *
 * Type <T> determines the actual type of the elements.
 */
export interface IElementById<TElement extends Element>
  extends IElement<TElement> {
  id(): string
}
