/**
 * Safely queries the DOM for an element
 */
export const querySelector = <T extends Element>(
  selector: string, 
  context: ParentNode = document
): T | null => {
  return context.querySelector<T>(selector);
};