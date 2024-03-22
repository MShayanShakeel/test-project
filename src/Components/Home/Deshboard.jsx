import React from "react";
import Component1 from "./Component1"
import Component2 from "./Component2"
import Component3 from "./Component3"

const Deshboard = () => {
  return (
    <>
      <div className="row deshboard-main">
        <div className="col-md-2"><Component1 /></div>
        <div className="col-md-7">< Component2/></div>
        <div className="col-md-3"><Component3/></div>
      </div>
    </>
  );
};

export default Deshboard;
