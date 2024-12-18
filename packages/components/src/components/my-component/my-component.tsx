import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() text: string;

  private getText(): string {
    return (this.text);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
