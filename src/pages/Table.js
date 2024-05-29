import React, { useEffect, useState } from "react";
import Products from "../Details/Product";
import { Link } from "react-router-dom";

export default function Table() {
  const [prodarr, setprodarr] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    var prd = Products.getAllProducts();
    setprodarr([...prd]);
  };
  const deleteProd = (id) => {
    Products.deleteProduct(id);
    fetchData();
  };

  return (
    <div className="fs-5">
      <Link to="/form">
        <button type="button" className="btn btn-primary mt-4 ms-5">
          Add New Product
        </button>
      </Link>
      <table
        className="table table-striped mt-4"
        style={{ width: "95%", margin: "0 auto", tableLayout: "fixed" }}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {prodarr.map((prd) => (
            <tr key={prd.id}>
              <th scope="row">{prd.id}</th>
              <td>{prd.name}</td>
              <td>{prd.qty}</td>
              <td>{prd.price}</td>
              <td>
                <Link to={`/view/${prd.id}`}>
                  <button type="button" className="btn btn-success">
                    View
                  </button>
                </Link>{" "}
                &nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteProd(prd.id);
                  }}
                >
                  Delete
                </button>{" "}
                &nbsp;
                <Link to={`/edit/${prd.id}`} state={{ product: prd }}>
                  <button type="button" className="btn btn-warning">
                    Modify
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
