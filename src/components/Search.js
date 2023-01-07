import React from "react";
import { useSelector } from "react-redux";
import { useGetProductBySearchQuery } from "../services/productApi";

function Search() {
  const { value } = useSelector((state) => state.search);
    const { data } = useGetProductBySearchQuery(value);
    console.log(data);
  return <div></div>;
}

export default Search;
