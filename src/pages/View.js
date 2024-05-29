import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Product from "../Details/Product";

export default function View() {
  const params = useParams();
  var [prod, setprod] = useState({ id: "", name: "", qty: "", price: "" });

  useEffect(() => {
    var id = parseInt(params.id);
    var arr = Product.getById(id);
    setprod(arr);
  }, []);

  return (
    <div
      className="card mt-5 mx-auto"
      style={{ width: "30%", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <div className="card-body">
        <h5 className="card-title">{prod.name}</h5>
        <p className="card-text">Product ID: {prod.id}</p>
        <p className="card-text">Product Quantity: {prod.qty}</p>
        <p className="card-text">Product Price: {prod.price}</p>
        <Link to="/table" className="btn btn-danger btn-block">
          Back
        </Link>
      </div>
    </div>
  );
}
