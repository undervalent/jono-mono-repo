import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField } from "../text-field.component";
import { StoryWrapper } from "../../../../storybook-helpers";
export default {
  title: "Main/TextField",
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => {
  const { theme } = args;
  return (
    <StoryWrapper theme={theme}>
      <TextField {...args} />
    </StoryWrapper>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  labelValue: "primary label",
  theme: "light",
};
