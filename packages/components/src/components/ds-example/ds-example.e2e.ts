import { E2EElement, newE2EPage, E2EPage } from '@stencil/core/testing';

describe('DsExample E2E', () => {
  let page: E2EPage;
  let component: E2EElement;
  const initialText = 'Hello World!';
  const updatedText = 'OK, World?';
  const addedText = 'Hey, you ';
  const initialContent = `<ds-example text="${initialText}"></ds-example>`;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(initialContent);
    component = await page.find('ds-example');
  });

  it('renders', async () => {
    expect(component).toHaveClass('hydrated');
  });

  it('has initial text', async () => {
    const element = await component.find('>>> .text');
    expect(element.textContent).toEqual('Hello World!');
  });

  it('renders changes to the `textProp` property', async () => {
    component.setProperty('textProp', updatedText);
    await page.waitForChanges();
    const element = await component.find('>>> .text');
    expect(element.textContent).toEqual(updatedText);
  });

  it('renders changes to the `text` attribute', async () => {
    component.setAttribute('text', addedText + updatedText);
    await page.waitForChanges();
    const element = await component.find('>>> .text');
    expect(element.textContent).toEqual(addedText + updatedText);
  });
});
