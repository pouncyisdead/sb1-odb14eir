import { newE2EPage } from '@stencil/core/testing';

describe('ds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ds-button></ds-button>');
    const element = await page.find('ds-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ds-button></ds-button>');
    const component = await page.find('ds-button');
    let element = await page.find('ds-button >>> button');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    element = await component.find('>>> button');
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    element = await component.find('>>> button');
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    element = await component.find('>>> button');
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
