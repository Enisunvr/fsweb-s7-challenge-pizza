import React from "react";
import "./Button.css";

export default function Button(props) {
  const { text, style, onClick, type, disabled } = props;
  return (
    <button
      className="button"
      style={{
        ...style,
        ...(disabled ? { opacity: "0.5" } : {}),
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
