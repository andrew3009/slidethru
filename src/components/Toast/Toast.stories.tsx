import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toast from "./Toast";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
	type: "success",
  message: "This is a success message",
};

export const Error = Template.bind({});
Error.args = {
	type: "error",
  message: "This is an error message",
};

export const Info = Template.bind({});
Info.args = {
	type: "info",
  message: "This is an information message",
};

export const Warning = Template.bind({});
Warning.args = {
	type: "warning",
  message: "This is an warning message",
};