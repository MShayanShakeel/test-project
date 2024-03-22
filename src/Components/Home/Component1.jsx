import React from "react";
import "./Component1.css";
import { IoHome } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { AiFillSchedule } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoHelpCircle } from "react-icons/io5";
import { FcRemoveImage } from "react-icons/fc";

const Component1 = () => {
  return (
    <>
      <div className="MainSidebar row">
        <div className="col-12 Second-main-Sidebar">
          <div className="logo-class  color-white">Logo</div>
          <div>
            <ul className="menu-list">
              <li>
                <IoHome /> Home
              </li>
              <li>
                <IoMdContact /> Candidates
              </li>
              <li>
                <BiSolidMessage /> Message
              </li>
              <li>
                <AiFillSchedule /> Schedule
              </li>
              <li>
                <BsGraphUpArrow />
                Reports
              </li>
              <li>
                <IoHelpCircle />
                Help
              </li>
            </ul>
          </div>
          <div className="Theam-button">
            <FcRemoveImage />
            <button>Thomas</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
