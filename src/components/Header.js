import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <nav className="navbar bg-dark-subtle text-dark-emphasis">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 mx-auto text-center larger-text">
            Product Details
          </span>
        </div>
      </nav>
    </div>
  );
}
