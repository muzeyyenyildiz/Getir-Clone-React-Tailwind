import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import {FaFacebook, FaHourglassStart} from "react-icons/fa"
import {useWindowWidth} from '@react-hook/window-size'

const HeroSection = () => {
  const [selected, setSelected] = useState("TR");

  const windowWidth = useWindowWidth()

  const phones = {
    US: "+1",
    GB: "+44",
    FR: "+33",
    DE: "+49",
    IT: "+39",
    TR: "+90",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:z-10">
      {windowWidth >= 768 && <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
          />
        </div>
      </Slider>}
      <div className="container-none md:container flex  justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="mt-7 text-white text-4xl font-semibold">
            Dakikalar içerisinde <br /> kapınızda!
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color font-semibold text-center mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative group block cursor-pointer ">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-brand-color focus:border-brand-color outline-none peer text-sm pt-2"
                />
                <span
                  className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xsm
              peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xsm"
                >
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2"/>
            <button className="bg-blue-700 bg-opacity-10 text-blue-700  text-opacity-80 transition-colors 
            hover:bg-blue-700 hover:text-white px-4  h-12 flex items-center  rounded-md w-full text-sm  font-semibold relative">
             <FaFacebook size={24} className=""/>
             <span className="mx-auto">Facebook ile devam et</span>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
