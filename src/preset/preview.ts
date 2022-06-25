import type { GlobalTypes } from '@storybook/csf';
import { withVariants } from "../withVariants";

export const decorators = [withVariants];

export const globalTypes: GlobalTypes = {
  variantsAddon: {
    name: "Variants",
    description: "Show / Hide Variants",
    defaultValue: false,
    toolbar: {
      icon: "component",
      items: [
        {
          title: "Variants Shown",
          value: true,
        },
        {
          title: "Variants Hidden",
          value: false,
        },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};
