import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} children="My Button" />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
