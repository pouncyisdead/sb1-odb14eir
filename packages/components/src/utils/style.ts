/**
 * Style utility functions
 */

/**
 * Converts a CSS custom property to its value
 */
export const getCSSCustomProperty = (
  propertyName: string,
  element: HTMLElement = document.documentElement,
): string => {
  return getComputedStyle(element).getPropertyValue(propertyName).trim();
};

/**
 * Sets a CSS custom property
 */
export const setCSSCustomProperty = (
  propertyName: string,
  value: string,
  element: HTMLElement = document.documentElement,
): void => {
  element.style.setProperty(propertyName, value);
};
