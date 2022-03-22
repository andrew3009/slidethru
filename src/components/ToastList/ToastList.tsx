import React from "react";
import Toast from "../Toast/Toast";
import "./ToastList.css";

// TODO : Add different positions.

export interface ToastListProps {
	toasts: {
			id: number;
			type: "success" | "error" | "warning" | "info";
			message: string;
		}[];
}

function ToastList(props: ToastListProps) {
  return (
		<div className="notification-container bottom-right">
			{props.toasts.map((toast) => {
				return (
					<Toast
						key={toast.id}
						type={toast.type}
						message={toast.message}
					/>
				);
			})}
		</div>
	);
};

export default ToastList;