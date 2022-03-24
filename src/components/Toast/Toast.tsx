import React from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaRegWindowClose,
} from "react-icons/fa";
import "./Toast.css";

export interface ToastProps {
	type: "success" | "error" | "warning" | "info";
  message: string;
	onClose: () => void;
}

function Toast(props: ToastProps) {
	const generateIcon = (type: "success" | "error" | "warning" | "info") => {
    switch (type) {
      case "info":
        return <FaInfoCircle className="icon" />;
      case "warning":
        return <FaExclamationTriangle className="icon" />;
      case "error":
        return <FaExclamationCircle className="icon" />;
      case "success":
        return <FaCheckCircle className="icon" />;
      default:
        return;
    }
  };
  return (
		<div className={`notification toast ${props.type}`}>
			<div className="icon-container">
				{generateIcon(props.type)}
			</div>

			<div className="text-container">
				<h4>{props.message}</h4>
			</div>

			<button onClick={() => props.onClose()}>
				x
			</button>
		</div>
	);
};

export default Toast;