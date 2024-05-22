import React from "react";
import "./Header.css";
import Logo from "../../Assets/mile1-assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="" className="header-logo" />
    </div>
  );
}
