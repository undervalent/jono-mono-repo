import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DatePicker } from "../date-picker.component";
import { StoryWrapper } from "../../../storybook-helpers";

export default {
  title: "Main/DatePicker",
  component: DatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DatePicker> = (args) => (
  <StoryWrapper>
    <DatePicker {...args}>Label</DatePicker>
  </StoryWrapper>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: "light",
};
