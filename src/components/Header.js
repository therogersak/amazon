import React, { useState } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { search } from '../features/SearchSlice'

function Header() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <header className="w-full bg-black px-3 py-2 flex text-white flex gap-3 overflow-x-scroll whitespace-nowrap ">
      <div className="header_left flex items-center gap-3">
        <div className="logo-container w-[100px]">
          <Link to="/">
            <img
              className="w-full h-full pt-2"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            />
          </Link>
        </div>
        <div className="location flex items-center gap-1">
          <PlaceOutlinedIcon />
          <div className="flex items-center flex-col">
            <p className="text-[13px] text-gray-400 leading-none">
              Deliver to Name
            </p>
            <h3 className="font-bold text-[13px]">Location 302324</h3>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl search flex items-center h-[45px] bg-white rounded-md">
        <div className="h-full">
          <select
            value="category"
            className="bg-gray-300 h-full rounded-bl-md rounded-tl-md text-black w-14 px-1"
          >
            <option value="all">All</option>
            <option value="all">Laptop</option>
            <option value="all">Mobile</option>
            <option value="wifi">Wi-Fis</option>
            <option value="apple">Apple</option>
            <option value="iphone">iPhone</option>
            <option value="ipad">iPad</option>
            <option value="speakers">Speakers</option>
            <option value="books">Books</option>
            <option value="tv">TV</option>
            <option value="Charger">Charger</option>
          </select>
        </div>
        <input
          type="text"
          name="search"
          className="w-full h-full outline-none text-black pl-2"
          id="search"
          onChange={(e) => dispatch(search(e.target.value))}
        />
        <div className="h-full grid place-items-center px-3 rounded-br-md rounded-tr-md search_icon text-black bg-[#F2A747]">
          <SearchOutlinedIcon />
        </div>
      </div>
      <div className="header_right flex gap-3 items-center">
        <div>
          <h3 className="font-bold">
            💚 HI <ArrowDropDownOutlinedIcon />{" "}
          </h3>
        </div>
        <Link to="/signin">
          <div>
            <p className="text-[13px]">Hello, sign in</p>
            <div className="flex">
              <h3 className="text-[14px] font-bold">Account & Lists</h3>
              <ArrowDropDownOutlinedIcon />
            </div>
          </div>
        </Link>
        <div>
          <p className="text-[13px]">Returns</p>
          <h3 className="text-[14px] font-bold">& Orders</h3>
        </div>
        <Link to="/cart">
          <div className="relative px-5">
            <h3 className="absolute text-[1.2rem] -top-3 right-3 font-bold text-orange-500">
              {cart.length}
            </h3>
            <ShoppingBasketOutlinedIcon className="" />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
