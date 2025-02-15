import { Component, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'super-tab-indicator',
  styleUrl: 'super-tab-indicator.component.scss',
  shadow: true,
})
export class SuperTabIndicatorComponent implements ComponentInterface {
  @Prop() toolbarPosition: 'top' | 'bottom' = 'top';

  hostData() {
    const positionStyle: any = {};

    if (this.toolbarPosition === 'bottom') {
      positionStyle.top = 0;
    } else {
      positionStyle.bottom = 0;
    }

    return {
      style: {
        ...positionStyle,
      },
    };
  }
}
