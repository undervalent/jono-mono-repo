import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OriginaDropdown } from "../listbox.component";

export default {
  title: "Main/Dropdown",
  component: OriginaDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    returnValue: { action: "clicked" },
  },
} as ComponentMeta<typeof OriginaDropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OriginaDropdown> = (args) => (
  <OriginaDropdown {...args}>Label</OriginaDropdown>
);

const dropdownOptions = [
  {
    value: "item1",
    displayName: "item 1",
  },
  {
    value: "item2",
    displayName: "item 2",
  },
];

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: "light",
  options: dropdownOptions,
  returnValue: (value: string): string => {
    console.log(value);
    return value;
  },
};
