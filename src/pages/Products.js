import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const api_url = "http://localhost:9000";
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch(`${api_url}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }

    const deleteProduct = (id) => {
    fetch(`${api_url}/products/${id}`,{
        method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => getAllProducts());
  };

  return (
    <>
      <h1 className="head">Products Page</h1>
      <Link className="btn btn-success mt-3" to={"/products/add"}>
        Add New Product
      </Link>

      <table className="table table-striped mt-5">
        <thead>
          <tr key="">
            <td>Id</td>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>
          { products.map((product) => {
            return(
              <tr key={product.id}>
            <td> {product.id} </td>
            <td> {product.title} </td>
            <td> {product.description.slice(0, 20)}... </td>
            <td> {product.price} </td>
            <td>
              <button className="btn btn-danger btn-sm button" onClick={() => deleteProduct(product.id)} > Delete </button>
              <button className="btn btn-primary btn-sm button"> Edit </button>
              <Link to={`/products/${product.id}`} className="btn btn-info btn-sm button"> View </Link>
            </td>
          </tr>
            );
          }) }
          
        </tbody>
      </table>
    </>
  );
}

export default Products;
