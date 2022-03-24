import React from "react";
import ToastList from "../components/ToastList/ToastList";
import "./Toasts.css";

interface ToastsObject {
	id: number;
	type: "success" | "error" | "warning" | "info";
	message: string;
};

interface ButtonProps {
	onClick: () => void;
	label: string;
	className: string;
};

function Button(props: ButtonProps) {
	return (
		<button
			onClick={props.onClick}
			className={props.className}
			style={{
				color: "white",
				padding: "10px",
				borderRadius: "5px",
				margin: "10px",
				border: "none",
				width: "80px",
				height: "40px",
				cursor: "pointer",
			}}
		>
			{props.label}
		</button>
	);
};

export default function Toasts() {
	const [toastList, setToastList] = React.useState<ToastsObject[]>([]);

	const addToast = (type: "success" | "error" | "warning" | "info") => {
		setToastList([
			...toastList,
			{
				id: Math.floor(Math.random() * 100),
				type,
				message: "This is a message!",
			}
		]);
	};

	const deleteToast = (id: number) => {
		setToastList(toastList.filter((toast) => toast.id !== id));
	};

  return (
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

			<ToastList toasts={toastList} deleteToast={deleteToast} setList={setToastList} />
		</>
	);
};