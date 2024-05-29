import React, { useState } from "react";
import Product from "../Details/Product";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [formdetail, setformdetail] = useState({
    id: "",
    name: "",
    qty: "",
    price: "",
  });

  const handlechange = (event) => {
    var { name, value } = event.target;
    setformdetail({ ...formdetail, [name]: value });
  };

  const addDetails = (event) => {
    event.preventDefault();

    if (
      formdetail.id === "" ||
      formdetail.name === "" ||
      formdetail.qty === "" ||
      formdetail.price === ""
    ) {
      alert("Enter Product Details Properly");
      return;
    }

    var p = {
      id: parseInt(formdetail.id),
      name: formdetail.name,
      qty: parseInt(formdetail.qty),
      price: parseInt(formdetail.price),
    };

    Product.addProduct(p);
    setformdetail({ id: "", name: "", qty: "", price: "" });
    navigate("/table");
  };

  return (
    <form className="m-4 fs-5">
      <div className="mb-3">
        <label for="id" class="form-label">
          Product ID
        </label>
        <input
          type="text"
          class="form-control"
          id="id"
          name="id"
          placeholder="Enter Product ID"
          value={formdetail.id}
          onChange={handlechange}
        />
      </div>
      <div className="mb-3">
        <label for="name" class="form-label">
          Product Name
        </label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          placeholder="Enter Product Name"
          value={formdetail.name}
          onChange={handlechange}
        />
      </div>
      <div className="mb-3">
        <label for="qty" class="form-label">
          Quantity
        </label>
        <input
          type="text"
          class="form-control"
          id="qty"
          name="qty"
          placeholder="Enter Product's Quantity"
          value={formdetail.qty}
          onChange={handlechange}
        />
      </div>
      <div className="mb-3">
        <label for="price" class="form-label">
          Price
        </label>
        <input
          type="text"
          class="form-control"
          name="price"
          id="price"
          placeholder="Enter Product Price"
          value={formdetail.price}
          onChange={handlechange}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary" onClick={addDetails}>
          Add Product
        </button>
      </div>
    </form>
  );
}
