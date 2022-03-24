import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toasts from "./Toasts";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Toasts",
  component: Toasts,
} as ComponentMeta<typeof Toasts>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toasts> = (args) => <Toasts />;

export const T = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
T.args = {
	// toasts: toasts
	toasts: [
		{
			id: 1,
			type: "success",
			message: "This is a success message",
		},
		{
			id: 2,
			type: "info",
			message: "This is a information message",
		},
		{
			id: 3,
			type: "warning",
			message: "This is a warning message",
		}
	]
};