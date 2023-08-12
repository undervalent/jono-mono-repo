import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "../../../../storybook-helpers";
import { Button } from "../button.component";

export default {
  title: "Main/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <StoryWrapper>
    <Button {...args}>Main button</Button>
  </StoryWrapper>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  size: "small",
  icon: false,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   type: "secondary",
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   type: "danger",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
