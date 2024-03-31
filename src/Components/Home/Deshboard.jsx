import React, { useEffect, useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import "./Component1.css";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Deshboard = () => {
  const [ComponentShow, setComponentShow] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleComponent = () => {
    setComponentShow(!ComponentShow);
  };
  useEffect(()=> {
    const handleScreenSize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize' , handleScreenSize);

    return ()=> {
      window.addEventListener("resize" , handleScreenSize)
    }
  }, []);


  console.log(screenWidth, "ComponentShow");
  return (
    <>
      {screenWidth <= 500 ? (
        <div className="row deshboard-main">
          <div className="Deshbord-navbar">
          <span className="hamburger-class">
              LOGO
            </span>
            <span className="hamburger-class">
          <FaArrowRightArrowLeft
            onClick={toggleComponent}
            className="hamburger-class"
            />
            </span>
           
            </div>
          <div
            className={`col-md-2 ${
              ComponentShow ? "show-classs" : "hide-classs"
            }`}
          >
            <Component1 />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <Component2 />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Component3 />
          </div>
        </div>
      ) : (
        <div className="row deshboard-main">
          <div className="col-md-2 ">
            <Component1 />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <Component2 />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Component3 />
          </div>
        </div>
      )}
    </>
  );
};

export default Deshboard;
