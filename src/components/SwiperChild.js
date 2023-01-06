import React from "react";

function SwiperChild({ img }) {
  return (
    <div
      className="h-[30vh] w-[100vw]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default SwiperChild;
