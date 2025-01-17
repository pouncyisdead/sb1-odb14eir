import {
  Component,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  h,
  Host, Prop
} from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  shadow: true,
})
export class DsButton {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return (
      <Host>
        <button role="button">
          <span>Hello, World! I'm {this.getText()}</span>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
