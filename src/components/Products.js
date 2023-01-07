import React from "react";
import { useGetAllProductsQuery } from "../services/productApi";
import Product from "./Product";

function Products() {
  const { data } = useGetAllProductsQuery();
  console.log(data);
  return (
    <div className="products_grid">
      {data?.products?.map(({ id, thumbnail }) => (
        <Product id={id} key={id} thumbnail={thumbnail} />
      ))}
    </div>
  );
}

export default Products;
