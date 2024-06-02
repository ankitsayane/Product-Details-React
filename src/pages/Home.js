import React from "react";
import img from "../Images/sale.jpg";

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mt-5">React Product Management</h1>
      <img
        src={img}
        className="img-fluid mt-3"
        alt="Sale"
        style={{ maxWidth: "80%", height: "auto", maxHeight: "60vh" }}
      />
    </div>
  );
}
