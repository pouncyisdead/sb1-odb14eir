import { getElement } from '@stencil/core';

/** Testing utility functions */

export const createTestElement = async (
  tagName: string,
  props: Record<string, unknown> = {}
): Promise<HTMLElement> => {
  const element = document.createElement(tagName);
  Object.entries(props).forEach(([key, value]) => {
    element[key] = value;
  });
  document.body.appendChild(element);
  await getElement(element).componentOnReady();
  return element;
};

export const removeTestElement = (element: HTMLElement): void => {
  if (document.body.contains(element)) {
    document.body.removeChild(element);
  }
};