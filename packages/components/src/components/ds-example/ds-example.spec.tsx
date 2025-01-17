import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { DsExample } from '../ds-example';

describe('DsExample', () => {
  let page: SpecPage;
  const initialText = 'Hello World!';
  // Change this to match your template.
  const initialContent = `<ds-example text="${initialText}"></ds-example>`;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [DsExample],
      html: initialContent,
    });
  });

  it('SpecPage exists', () => {
    const { root } = page;
    expect(root).toBeTruthy();
  });

  it('ds-example renders correctly', () => {
    const { root } = page;
    expect(root).toEqualHtml(`
      <ds-example text="${initialText}">
        <mock:shadow-root>
         <button class="text" role="button">
           <span>${initialText}</span>
           <slot></slot>
         </button>
        </mock:shadow-root>
      </ds-example>
    `);
  });

  it('ds-example has shadowRoot text', () => {
    const {
      doc: { body },
    } = page;
    const shadowRoot = body.querySelector('ds-example')?.shadowRoot;
    expect(shadowRoot).not.toBeNull();
    const { textContent } = shadowRoot;
    expect(textContent).toBeTruthy();
    expect(textContent).toEqual(initialText);
  });
});
