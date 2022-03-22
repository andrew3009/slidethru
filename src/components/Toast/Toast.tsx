import React from "react";
import "./Toast.css";

export interface ToastProps {
	type: "success" | "error" | "warning" | "info";
  message: string;
}

function Toast(props: ToastProps) {
  return (
		<div className={`notification toast ${props.type}`}>
			<button>x</button>

			<div className="icon-container">
				<i className="fas fa-check"></i>
			</div>

			<div className="text-container">
				<p>{props.message}</p>
			</div>
		</div>
	);
};

export default Toast;