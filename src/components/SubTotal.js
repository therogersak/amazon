import React from "react";

function SubTotal({ cart }) {
  const total = cart?.reduce((a, b) => a + b.price, 0);
  return (
    <div className="bg-gray-100 shadow-xl p-5 flex-[0.30] border sticky top-0 left-0 h-fit">
      <h3 className="text-lg">
        Subtotal ({cart?.length} item):{" "}
        <span className="font-bold">${total}</span>
      </h3>
      <div className="flex items-center pb-3">
        <input type="checkbox" name="gift" id="gift" />
        <label className="pl-2">This order contain a gift</label>
      </div>
      <button className="w-full bg-yellow-500 py-2 text-[13px] px-2 rounded-sm">
        Proceed to checkout
      </button>
    </div>
  );
}

export default SubTotal;
