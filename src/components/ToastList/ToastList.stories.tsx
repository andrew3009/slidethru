import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToastList from "./ToastList";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/ToastList",
  component: ToastList,
} as ComponentMeta<typeof ToastList>;

type ToastTypeProps =  "success" | "error" | "warning" | "info";

type ToastListStoryProps = {
	id: number;
	type: ToastTypeProps;
	message: string;
}[];

let toastList: ToastListStoryProps = [];

const addToast = (type: ToastTypeProps) => {
	toastList.push({
		id: Math.floor(Math.random() * 100),
		type,
		message: "This is a message!",
	});

	console.log(toastList);
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToastList> = (args) => (
	<>
		<div className="toast-bottons">
			<Button
				label="Success"
				className="success"
				onClick={() => {
					addToast("success");
				}}
			/>
			<Button
				label="Error"
				className="error"
				onClick={() => {
					addToast("error");
				}}
			/>
			<Button
				label="Warning"
				className="warning"
				onClick={() => {
					addToast("warning");
				}}
			/>
			<Button
				label="Info"
				className="info"
				onClick={() => {
					addToast("info");
				}}
			/>
		</div>

		<ToastList toasts={toastList} />
	</>
);

export const List = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
List.args = {
	// toasts: toastList
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