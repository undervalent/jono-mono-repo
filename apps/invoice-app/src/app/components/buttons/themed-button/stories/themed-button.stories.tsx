import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoryWrapper } from "../../../../storybook-helpers";
import { OriginalButton } from "../themed-button.compnent";

export default {
  title: "Main/ThemedButton",
  component: OriginalButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof OriginalButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OriginalButton> = (args) => (
  <StoryWrapper>
    <OriginalButton {...args}>Button</OriginalButton>
  </StoryWrapper>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: "light",
  type: "primary",
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
