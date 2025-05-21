function Products() {
  return (
    <>
      <h1 className="head">Products Page</h1>

      <table className="table table-striped">
        <thead>
            <tr key="">
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            <tr key="">
                <td>1</td>
                <td>Product 1</td>
                <td>1000</td>
            </tr>
        </tbody>

      </table>
    </>
  );
}

export default Products;
