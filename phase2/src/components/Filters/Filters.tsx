import React from "react";
import "./Filters.css";

interface Props {
  filters: { id: number; name: string; class: string }[];
  setProductsList: Function;
  products: {
    id: number;
    name: string;
    category: string;
    price: number;
    class: string;
  }[];
  productsList: {
    id: number;
    name: string;
    category: string;
    price: number;
    class: string;
  }[];
}

function Filters(props: Props) {
  const filters: { id: number; name: string; class: string }[] = props.filters;
  const filterByCategory = (category: string) => {
    if (category === "all") {
      props.setProductsList(props.products);
    } else {
      const filteredProducts = props.products.filter(
        (p) => p.category === category,
      );
      props.setProductsList([...filteredProducts]);
    }
  };
  return (
    <div className='filters'>
      <div className='filters-content'>
        {filters.map((f: { id: number; name: string; class: string }, k) => (
          <button
            key={k}
            className={`${f.class}`}
            onClick={() => filterByCategory(f.name)}
          >
            {f.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;
