import React from "react";
import Toast from "../Toast/Toast";
import "./ToastList.css";

// TODO: Add different positions.

export interface ToastListProps {
	toasts: {
		id: number;
		type: "success" | "error" | "warning" | "info";
		message: string;
	}[];
	deleteToast: (id: number) => void;
	setList: React.Dispatch<React.SetStateAction<{
		id: number;
		type: "success" | "error" | "warning" | "info";
		message: string;
	}[]>>;
}

function ToastList(props: ToastListProps) {
	const deleteToast = React.useCallback(id => {
    const toastListItem = props.toasts.filter(e => e.id !== id);
    props.setList(toastListItem);
  }, [props.toasts, props.setList]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if(props.toasts.length) {
        deleteToast(props.toasts[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [props.toasts, deleteToast]);

  return (
		<div className="notification-container bottom-right">
			{props.toasts.map((toast) => {
				return (
					<Toast
						key={toast.id}
						type={toast.type}
						message={toast.message}
						onClose={() => {
							props.deleteToast(toast.id);
						}}
					/>
				);
			})}
		</div>
	);
};

export default ToastList;