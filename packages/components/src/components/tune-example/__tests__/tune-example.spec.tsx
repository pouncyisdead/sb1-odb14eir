import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { TuneExample } from '../tune-example';

describe('tune-example', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [TuneExample],
      // Change this to match your template.
      html: `<tune-example example="Hello World!"></tune-example>`,
    });
  });

  test('exists', () => {
    const { root } = page;
    expect(root).toBeTruthy();
  });

  test('renders correctly', () => {
    const { root } = page;
    expect(root).toEqualHtml(`
      <tune-example example="Hello World!">
        <mock:shadow-root>
          <div class="example">
            <p>Hello World!</p>
            <slot></slot>
          </div>
        </mock>
      </tune-example>
    `);
  });

  test('has text', () => {
    const {
      doc: { body },
    } = page;
    const shadowRoot = body.querySelector('tune-example').shadowRoot;
    expect(shadowRoot).not.toBeNull();
    const { textContent } = shadowRoot;
    expect(textContent).toBeTruthy();
    expect(textContent).toEqual('Hello World!');
  });
});
