import React, { useState } from "react";
import "./Component1.css";
import { IoHome } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { AiFillSchedule } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoHelpCircle } from "react-icons/io5";
import { FcRemoveImage } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io";

const Component1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
          {/* <div className="Theam-button">
            <FcRemoveImage />
            <button>Thomas</button>
          </div> */}
          <div className="Theam-button">
            <FcRemoveImage />
            <div className={`dropdown ${isOpen ? "show" : ""}`}>
              <button
                className="btn btn-secondary dropdown-toggle Thomas-button"
                type="button"
                id="dropdownMenuButton"
                onClick={toggleDropdown}
              >
                Thomas
                <IoIosArrowDown
                  style={{ fontSize: "2rem", margin: "0rem 0px -4px 1rem" }}
                />
              </button>
              {/* <div
                className={`dropdown-menu ${isOpen ? "show" : ""}`}
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
