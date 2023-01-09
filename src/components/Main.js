import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../services/productApi";
import GradeIcon from "@mui/icons-material/Grade";
import Reviews from "./Reviews";
import { useDispatch , useSelector } from "react-redux";
import { addCart } from "../features/CartSlice";

function Main() {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.cart)
  const [img, setImg] = useState("");
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);

  const addToCart = () => {
    dispatch(
        addCart({
        id: data?.id,
        name: data?.title,
        img: data?.thumbnail,
        price: data?.price,
        rating: data?.rating,
        description: data?.description,
        brand: data?.brand,
      })
      );

  };
  return (
    <>
      <div className="">
        <div className="p-5 max-w-7xl mx-auto flex gap-5">
          {/* 1st product section */}

          <div className="p-5">
            {data?.images.map((img) => (
              <div className="w-14 h-14 border border-gray-500 mb-2">
                <img
                  onMouseOver={() => setImg(img)}
                  src={img}
                  className="w-full h-full object-cover cursor-pointer"
                  alt=""
                />
              </div>
            ))}
          </div>

          {/* 2nd product section */}

          <div className="flex gap-10 w-full p-5 items-center flex-col md:flex-row">
            <div className="w-full max-w-[550px]">
              <img
                src={img ? img : data?.thumbnail}
                alt={data?.title}
                title={data?.title}
                className="w-full h-full border shadow-xl object-contain"
              />
            </div>
            <div className="p-5">
              <h1 className="text-[3.5vw]">{data?.title}</h1>
              <div className="flex items-center gap-1">
                <GradeIcon className="text-yellow-600" fontSize="large" />{" "}
                <span className="text-2xl">{data?.rating}</span>
              </div>
              <div className="space-x-3 my-2">
                <span className="text-red-500">
                  -${data?.discountPercentage}%
                </span>
                <span className="font-bold text-2xl">${data?.price}</span>
              </div>
              <div>
                <span>
                  <span className="font-bold">Brand: </span>
                  {data?.brand}
                </span>
              </div>
              <div className="py-2">
                <h3 className="text-lg font-bold">About this item</h3>
                <p>{data?.description}</p>
              </div>
              <div className="flex gap-5 mt-5">
                <button
                  onClick={() => addToCart()}
                  className="bg-yellow-500 text-[13px] w-full py-3 hover:bg-yellow-600"
                >
                  Add to cart
                </button>
                <button className="bg-orange-500 text-[13px] w-full py-3 hover:bg-orange-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl p-5 mx-auto">
          <Reviews />
        </div>
      </div>
    </>
  );
}

export default Main;
