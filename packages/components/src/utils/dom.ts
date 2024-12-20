/**
 * DOM manipulation utility functions
 */

/**
 * Safely queries the DOM for an element
 */
export const querySelector = <T extends Element>(
  selector: string,
  context: ParentNode = document,
): T | null => {
  return context.querySelector<T>(selector);
};

/**
 * Creates an element with attributes
 */
export const createElement = <K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  attributes: Record<string, string> = {},
): HTMLElementTagNameMap[K] => {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
};
