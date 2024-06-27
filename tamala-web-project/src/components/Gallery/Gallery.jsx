import React from "react";
import image from "../../assets/About us/Our mission 1_EN.png";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery w-full h-full mt-10 ">
      <div className="row">
        <div className="column">
          <img src={image} alt="Image 1" />
          <img src={image} alt="Image 2" />
        </div>
        <div className="column">
          <img className="w-full" src={image} alt="Image 3" />
          <img className="w-full" src={image} alt="Image 4" />
        </div>
        <div className="column">
          <img src={image} alt="Image 5" />
          <img src={image} alt="Image 6" />
        </div>
        <div className="column">
          <img src={image} alt="Image 7" />
        </div>
      </div>
      <div className=" flex justify-center text-center m-3">
        <h1 className="text-xl p-3  bg-black w-fit h-fit text-white rounded-lg ">
          More
        </h1>
      </div>
    </div>
  );
};

export default Gallery;
