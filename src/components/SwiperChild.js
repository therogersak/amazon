import React from "react";

function SwiperChild({ img }) {
  return (
    <div
      className="h-[35vh] w-screen"
      style={{
        backgroundImage: `url(${img})`,

        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default SwiperChild;
