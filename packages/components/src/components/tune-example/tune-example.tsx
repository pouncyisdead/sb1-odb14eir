import {
  AttachInternals,
  Component,
  Element,
  Host,
  Prop,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h,
} from '@stencil/core';

/**
 * @summary This is an example component for Tune DS. It is not intended to be included in our projects.
 * @documentation https://^@tuneurl@^/components/tune-example
 * @status in-dev
 * @since 0.0.0
 */
@Component({
  tag: 'tune-example',
  styleUrl: 'tune-example.scss',
  shadow: {
    delegatesFocus: true,
  },
  formAssociated: true,
})
export class TuneExample {
  /** `Element` host reference handle. */
  @Element() el!: HTMLElement;

  /**
   * `ElementInternals` provides utils to work with components the way you'd work with a form element,
   * it also exposes the [`Accessibility Object Model`](https://wicg.github.io/aom/) to the element.
   * */
  @AttachInternals() internals: ElementInternals;

  /** An example prop for the `tune-example` component. */
  @Prop({ attribute: 'example' }) exampleProp?: string;

  render() {
    return (
      <Host>
        <div class="example">
          <p>{this.exampleProp}</p>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
