import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { DsButton } from '../ds-button';

// DsButton Unit Tests.
describe('DsButton', () => {
  let page: SpecPage;
  const initialText = 'Hello World!';
  // Change this to match your template.
  const initialContent = `<ds-button text="${initialText}"></ds-button>`;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [DsButton],
      html: initialContent,
    });
  });

  it('SpecPage exists', () => {
    const { root } = page;
    expect(root).toBeTruthy();
  });

  it('ds-button renders correctly', () => {
    const { root } = page;
    expect(root).toEqualHtml(`
      <ds-button text="${initialText}">
        <mock:shadow-root>
         <button class="text" role="button">
           <span>${initialText}</span>
           <slot></slot>
         </button>
        </mock:shadow-root>
      </ds-button>
    `);
  });

  it('ds-button has shadowRoot text', () => {
    const {
      doc: { body },
    } = page;
    const shadowRoot = body.querySelector('ds-button')?.shadowRoot;
    expect(shadowRoot).not.toBeNull();
    const { textContent } = shadowRoot;
    expect(textContent).toBeTruthy();
    expect(textContent).toEqual(initialText);
  });
});
