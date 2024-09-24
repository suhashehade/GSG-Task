import React from "react";
import "./Product.css";
import image from "../../assets/cloths.avif";
interface Props {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    class: string;
  };
}
function Product(props: Props) {
  const product = props.product;

  return (
    <div className='product-item'>
      <img alt={product.name} src={image} />
      <div className='details'>
        <div className='header'>
          <h3>{product.name}</h3>
          <h4 className={product.class}>{product.category}</h4>
        </div>
        <span className='divider'> </span>
        <p>Price: ${product.price}</p>
        <div className='actions'>
          <button className='cart'>add to cart</button>
          <button className='wishlist'>add to wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
