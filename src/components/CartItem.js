import React, { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../features/CartSlice";

function CartItem({ title, price, id, img }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  
  
  return (
    <div className="flex p-5 gap-5 border-b-2 pb-5">
      <div className="w-full max-w-[300px]">
        <img src={img} alt="amazon-product" className="w-full h-full" />
      </div>
      <div>
        <h3>{title} - Amazone Preminium</h3>
        <p className="font-bold">${price}</p>
        <div>
          <div className="py-2">
            <label className="pr-2 font-bold text-yellow-500">Qty:</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="pl-2 border-2 border-gray-800 rounded-md w-14"
              max={10}
              min={1}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
          <button
            className="text-blue-600 text-[13px]"
            onClick={() => {
              dispatch(removeCart(id))
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
