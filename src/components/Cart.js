import React from "react";
import SubTotal from "./SubTotal";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {cart.length <= 0 ? (
        <div className="bg-white max-w-7xl border p-6 mx-auto">
          <div className="flex items-center justify-center flex-col space-y-1">
            <div className="w-[250px]">
              <img
                src="https://www.seekpng.com/png/detail/35-354177_shopping-cart-cart-ecommerce-shopping-amazon-shopping-cart.png"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-[17px] font-bold">Your cart is empty!</h3>
            <span className="text-sm pb-4">Add Itmes to it Now</span>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="bg-orange-500  p-2 px-10 rounded-sm shadow-2xl text-white"
            >
              Shop Now
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5 flex flex-col-reverse md:gap-5 md:flex-row">
          <div className="p-5 flex-[1] shadow-2xl border">
            <div className="border-b pb-5 border-gray-300">
              <h3 className="text-2xl">Shopping Cart</h3>
              <button className="text-blue-600 text-[14px]">
                Deselect all items
              </button>
            </div>
            <div>
              {cart?.map((data) => (
                <CartItem
                  title={data.name}
                  price={data.price}
                  description={data.description}
                  img={data.img}
                  id={data.id}
                  rating={data.rating}
                />
              ))}
            </div>
          </div>
          <SubTotal cart={cart} />
        </div>
      )}
    </>
  );
}

export default Cart;
