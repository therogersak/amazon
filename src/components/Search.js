import React from "react";
import { useSelector } from "react-redux";
import { useGetProductBySearchQuery } from "../services/productApi";
import Product from "./Product";

function Search() {
  const { value } = useSelector((state) => state.search);
  const { data } = useGetProductBySearchQuery(value);

  return (
    <div>
      <div className="p-5">
        <h1 className="text-[3rem] capitalize font-bold border-b-4">Search - {value}</h1>
      </div>
      <div className="products_grid p-5">
        {data?.products?.map((product) => (
          <Product
            key={product.id}
            thumbnail={product.thumbnail}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
