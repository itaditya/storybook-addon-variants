import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  args: {
    children: "My Button",
  },
  argTypes: {
    children: {
      control: 'text'
    },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  outline: false,
}

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

export const AllVariants = Template.bind({});