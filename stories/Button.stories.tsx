import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  args: {
    ...Button.defaultProps,
    children: "My Button",
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: "text"
    }
  }
};

const Template = (args) => <Button {...args} />;

export const AllVariants = Template.bind({});
AllVariants.parameters = {
  variants: {
    enable: true
  }
}

export const Primary = Template.bind({});

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
