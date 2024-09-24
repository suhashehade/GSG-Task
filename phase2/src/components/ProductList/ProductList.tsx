import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
interface Props {
  productsList: {
    id: number;
    name: string;
    category: string;
    price: number;
    class: string;
  }[];
}
function ProductList(props: Props) {
  const products: {
    id: number;
    name: string;
    category: string;
    price: number;
    class: string;
  }[] = props.productsList;

  return (
    <>
      <h2 className='products-h2'>Results</h2>
      <div className='products-content'>
        {products.map((p, k) => (
          <Product product={p} key={k} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
