import { expect, userEvent, within } from '@storybook/test';
import { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { DsButton } from './ds-button';

const DsButtonMeta = {
  title: 'Components/DsButton',
  component: 'ds-button',
  argTypes: {},
  args: {
    first: 'Hello',
    middle: 'Hello',
    last: 'Hello',
  },
  render: ({ first, ...args }: Args) =>
    html`<ds-button first=${first} ...=${Object.entries(args)}
      >${Object.entries(args)}</ds-button
    >`,
  /* SEE: https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
   * to learn more about using the canvasElement to query the DOM
   */
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    // STEP:
    await step('Does canvas exist', async () => {
      await expect(canvas).not.toBeNull();
      await expect(canvas).toBeTruthy();
    });
    // STEP:
    await step('Does component exist', async () => {
      // The waitFor method is used to run setup code before running the actual interactions
      const components = document.getElementsByTagName('ds-button');
      const component = components[0];
      expect(component).toBeInTheDocument();
      // Create reference to an element in the Story
      const openModalButton = document.getElementById(
        'ds-button',
      ) as HTMLElement;
      // userEvent functions allow you to trigger interactions
      userEvent.click(openModalButton);
    });
  },
} satisfies Meta<DsButton>;

export default DsButtonMeta;

/* SEE: https://storybook.js.org/docs/api/csf#named-story-exports */
export const Primary = {
  args: {},
} satisfies StoryObj<typeof DsButtonMeta>;
