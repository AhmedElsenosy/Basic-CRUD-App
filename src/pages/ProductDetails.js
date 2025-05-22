import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { productID } = useParams();
  const api_url = "http://localhost:9000";
  const [product, setProduct] = useState();

  useEffect((product) => {
    fetch(`${api_url}/products/${productID}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);


  return (
    <>
      <h1 className="head text-center my-4">Product Details #{productID}</h1>
      {product && (
        <div className="card mx-auto mt-5 shadow" style={{ maxWidth: "500px" }}>
          <div className="card-body">
            <h2 className="card-title mb-3">{product.title}</h2>
            <p className="card-text">{product.description}</p>
            <p className="card-text fw-bold text-success">
              Price: ${product.price}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
