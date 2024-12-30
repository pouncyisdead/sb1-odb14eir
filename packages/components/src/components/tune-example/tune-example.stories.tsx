import { expect, within } from '@storybook/test';
import { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const TuneExampleMeta: Meta = {
  title: 'Components/Example',
  component: 'tune-example',
  args: {
    example: 'ok',
  },
  render: ({ example, ...args }: Args) => {
    return html`
      <tune-example example="${example}" ...=${args}>
        ${JSON.stringify(args)}
      </tune-example>
    `;
  },
  /* SEE: https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
   * to learn more about using the canvasElement to query the DOM
   */
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const { example } = args;

    // STEP:
    await step('Does example update text', async () => {
      if (args.content) {
        // 👇 Assert DOM structure
        await expect(canvas.getByText(`${example}`)).toBeTruthy();
      }
    });
  },
};

export default TuneExampleMeta;

/* SEE: https://storybook.js.org/docs/api/csf#named-story-exports */
export const Basic: StoryObj<typeof TuneExampleMeta> = {};
