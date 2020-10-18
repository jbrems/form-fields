import { moduleMetadata } from '@storybook/angular';
import { JbrMatCheckboxModule } from './mat-checkbox.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

export default {
  title: 'Checkbox',
  decorators: [moduleMetadata({
    declarations: [],
    imports: [JbrMatCheckboxModule, MatCheckboxModule],
  })],
};

export const general = () => ({
  template: `<jbr-mat-checkbox></jbr-mat-checkbox>`,
  props: {},
});
