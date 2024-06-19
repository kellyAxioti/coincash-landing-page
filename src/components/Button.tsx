import { MouseEventHandler } from "react";
import "../App.css";

interface ButtonProps {
  label: string;
  variant?: "input";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ label, variant, onClick }: ButtonProps) {
  return (
    <div className={variant ? "input-button-container" : "button-container"}>
      <button className={variant ? "input-button" : ""} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
