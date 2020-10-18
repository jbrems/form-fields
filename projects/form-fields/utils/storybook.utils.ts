import { FormControl, FormGroup } from '@angular/forms';

export function withAngularForm(storyFn: () => { template: string, props: object }): object {
  const story = storyFn();

  const formControlNames = parseFormControlNames(story.template);
  const form = createFormForFormControlNames(formControlNames);

  return {
    ...story,
    template: `
      <h1>With Angular Form</h1>
      <form [formGroup]="form">
        ${story.template}
      </form>
    `,
    props: {
      form,
      ...story.props,
    }
  };
}

function parseFormControlNames(template: string): string[] {
  const formControlNames: string[] = [];

  const formControlNameRegex = /formControlName\s?=\s?["']([^"\s]*)["']/gm;
  let match = null;

  do {
    match = formControlNameRegex.exec(template);
    if (match !== null) { formControlNames.push(match[1]); }
  } while (match !== null);

  return formControlNames;
}

function createFormForFormControlNames(formControlNames: string[]): FormGroup {
  const form = new FormGroup({});
  formControlNames.forEach((name) => form.addControl(name, new FormControl()));
  return form;
}
