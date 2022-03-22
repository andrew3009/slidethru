import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
	className: string;
	onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return <button className={props.className} onClick={props.onClick}>{props.label}</button>;
};

export default Button;