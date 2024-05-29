import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "../Details/Product";

export default function Edit() {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setform] = useState({
    id: "",
    name: "",
    qty: "",
    price: "",
  });

  useEffect(() => {
    setform({ ...location.state.product });
  }, []);

  const updateproduct = (event) => {
    event.preventDefault();
    if (form.name === "" || form.qty === "" || form.price === "") {
      alert("Invalid Data");
      return;
    }
    var obj = {
      id: parseInt(form.id),
      name: form.name,
      qty: parseInt(form.qty),
      price: parseInt(form.price),
    };
    Product.updateProduct(obj);
    setform({ id: "", name: "", qty: "", price: "" });
    navigate("/table");
  };

  useEffect(() => {}, [form]);

  const handlechange = (event) => {
    var { name, value } = event.target;
    setform({ ...form, [name]: value });
  };

  return (
    <div>
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
            value={form.id}
            onChange={handlechange}
            readOnly
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
            value={form.name}
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
            value={form.qty}
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
            value={form.price}
            onChange={handlechange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={updateproduct}
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}
