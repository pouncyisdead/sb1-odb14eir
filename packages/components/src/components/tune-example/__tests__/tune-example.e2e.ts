import { E2EElement, newE2EPage, E2EPage } from '@stencil/core/testing';

describe('tune-example e2e', () => {
  let page: E2EPage;
  let component: E2EElement;
  const initialContent = '<tune-example example="Hello World!"></tune-example>';
  const updatedText = 'OK, World?';

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(initialContent);
    component = await page.find('tune-example');
  });

  it('renders', async () => {
    const element = await page.find('tune-example');
    expect(element).toHaveClass('hydrated');
  });

  it('has initial text', async () => {
    const element = await component.find('>>> .example');
    expect(element.textContent).toEqual('Hello World!');
  });

  it('renders changes to the `exampleProp` property', async () => {
    component.setProperty('exampleProp', updatedText);
    await page.waitForChanges();
    const element = await component.find('>>> .example');
    expect(element.textContent).toEqual(updatedText);
  });

  it('renders changes to the `example` attribute', async () => {
    const addedText = 'Hey, you ';
    component.setAttribute('example', addedText + updatedText);
    await page.waitForChanges();
    const element = await component.find('>>> .example');
    expect(element.textContent).toEqual(addedText + updatedText);
  });
});
