import React from "react";
import Product from "./Product";
import productsData from "./productsData";
import "./style.css";

function App() {
  const productComponents = productsData.map(item => (
    <Product key={item.id} product={item} />
  ));

  return (
    <div>
      {productComponents}
      <br></br>
    </div>
  );
}

export default App;
