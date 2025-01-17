import {
  AttachInternals,
  Component,
  Element,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  h,
  Host,
  Prop,
} from '@stencil/core';

/**
 * @summary This is the ds-example component for Tune DS.
 * @documentation https://^@tuneurl@^/components/ds-example
 * @status in-dev
 * @since 0.0.0
 */
@Component({
  tag: 'ds-example',
  styleUrl: 'ds-example.scss',
  shadow: {
    delegatesFocus: true,
  },
  formAssociated: true,
})
export class DsExample {
  /** `Element` host reference handle. */
  @Element() el!: HTMLElement;

  /**
   * `ElementInternals` provides utils to work with components the way you'd work with a form element,
   * it also exposes the [`Accessibility Object Model`](https://wicg.github.io/aom/) to the element.
   */
  @AttachInternals() internals: ElementInternals;

  /** A text prop for the `ds-example` component. */
  @Prop() text?: string = '';

  render() {
    return (
      <Host>
        <button role="button" class="text">
          <span>{this.text}</span>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
