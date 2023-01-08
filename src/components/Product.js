import React from "react";
import { Link } from "react-router-dom";

function Product({  thumbnail , id }) {
  return (
    <div>
      <Link to={`products/${id}`}>
        <div className="w-full max-w-[500px]  shadow-2xl border-2 border-black" onClick={() => {window.scrollTo(0,0)}}>
          <img
            src={thumbnail}
            alt="title"
            className="w-full h-full object-cover aspect-video"
          />
        </div>
      </Link>
    </div>
  );
}

export default Product;
