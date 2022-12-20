import React from "react";
import bnrImg from "../../../assets/01.jpg";
import bnrImg0 from "../../../assets/02.jpg";
import bnrImg1 from "../../../assets/03.jpg";
import bnrImg2 from "../../../assets/04.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[90vh] text-center">
        <div
          id="slide1"
          className="carousel-item relative bg-cover flex justify-center items-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${bnrImg})` }}
        >
          <div className="max-w-5xl custom-bnnr">
            <h1 className="mb-5 text-6xl font-bold text-primary"> Monsi</h1>
            <h2 className="mb-5 text-5xl font-bold text-primary">
              memory technician
            </h2>
            <button className="btn rounded mt-8 btn-primary w-[220px] pt-2 pb-1 text-white font-bold">
              My Services
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative bg-cover flex justify-center items-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${bnrImg0})` }}
        >
          <div className="max-w-5xl custom-bnnr">
            <h1 className="mb-5 text-6xl font-bold  text-deep-purple-900">
              I’M shakil monsi
            </h1>
            <h2 className="mb-5 text-5xl font-bold text-deep-purple-900">
              pin technician
            </h2>
            <button className="btn rounded mt-8 btn-primary w-[220px] pt-2 pb-1 text-white font-bold">
              My Services
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative bg-cover flex justify-center items-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${bnrImg1})` }}
        >
          <div className="max-w-5xl custom-bnnr">
            <h1 className="mb-5 text-6xl font-boldte text-primary">
              Apon Monsi
            </h1>
            <h2 className="mb-5 text-5xl font-bold text-primary">
              Screne Technician
            </h2>
            <button className="btn rounded mt-8 btn-primary w-[220px] pt-2 pb-1 text-white font-bold">
              My Services
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative bg-cover flex justify-center items-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${bnrImg2})` }}
        >
          <div className="max-w-5xl custom-bnnr">
            <h1 className="mb-5 text-6xl font-bold text-yellow-400">
              I’M sabbir
            </h1>
            <h2 className="mb-5 text-5xl font-bold text-yellow-400 ">
              Button Sechnician
            </h2>
            <button className="btn rounded mt-8 btn-primary w-[220px] pt-2 pb-1 text-white font-bold">
              My Services
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
