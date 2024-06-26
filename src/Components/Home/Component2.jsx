import React from "react";
import "./Component1.css";
import image1 from "../../images/image-1.png";
import image2 from "../../images/image-2.png";
import image3 from "../../images/image-3.png";
import DountGraph from "./DountGraph";
import admin1 from "../../images/First-Admin.jpeg";
import admin2 from "../../images/Second-admn.png";
import admin3 from "../../images/Thrd0admin.png";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Component2 = () => {
  return (
    <>
      <div className="row">
        <div className="header-section col-12">
          <span className="hamburger-class">Hello,Leslia Alexender 👍</span>
        </div>
        <div className="center-main">
          <div className="center-Second">
            <div className="graph-section-main">
              <div className="graph-section-Second">
                <div className="" style={{ color: "#D4D4D8" , padding : "2rem 1px " }}>
                  <h5>Total Application</h5>
                  <h2 className="custom-height-1px">1202</h2>
                  <span>Duration 3 Months</span>
                </div>
                <div>
                  <DountGraph />
                </div>
              </div>
              <div className="graph-section-Second">
                <div className="" style={{ color: "#D4D4D8" }}>
                  <h5>Total Application</h5>
                  <h2 className="custom-height-1px">1202</h2>
                  <span>Duration 3 Months</span>
                </div>
                <div>
                  <DountGraph />
                </div>
              </div>
              <div className="graph-section-Second">
                <div className="" style={{ color: "#D4D4D8" }}>
                  <h5>Total Application</h5>
                  <h2 className="custom-height-1px">1202</h2>
                  <span>Duration 3 Months</span>
                </div>
                <div>
                  <DountGraph />
                </div>
              </div>
            </div>

            <div className="graph-section-main-1">
              <div className="custom-column " style={{marginRight : "1vh"}}>
                <div className="custom-container">
                  <div className="custom-border custom-rounded-lg custom-shadow">
                    <div className="custom-flex custom-justify-end custom-px-4 custom-pt-4"></div>
                    <div className="custom-flex custom-flex-col custom-items-center custom-pb-10">
                      <img
                        className="custom-w-24 custom-h-24 custom-mb-3 custom-rounded-full custom-shadow-lg"
                        src={image1}
                        alt="Bonnie image"
                      />
                      <h5 className="custom-mb-1 custom-text-xl custom-font-medium custom-text-white">
                        Kristin Watson
                      </h5>
                      <span className="custom-text-sm custom-text-gray-400">
                        alma.lawson@gamil.com
                      </span>
                      <span className="custom-text-sm custom-text-gray-400">
                        Total Point 350
                      </span>
                      <div className="custom-flex custom-mt-4 md:mt-6 component-2-button">
                        <a
                          href="#"
                          className="custom-inline-flex custom-items-center custom-px-4 custom-py-2 custom-text-sm custom-font-medium custom-text-center custom-text-white custom-bg-[#28282B] custom-rounded-lg custom-border-gray-500 custom-border "
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="custom-column" style={{margin : "0px 1vh 0px 1vh"}}>
                <div className="custom-container">
                  <div className="custom-border custom-rounded-lg custom-shadow">
                    <div className="custom-flex custom-justify-end custom-px-4 custom-pt-4"></div>
                    <div className="custom-flex custom-flex-col custom-items-center custom-pb-10">
                      <img
                        className="custom-w-24 custom-h-24 custom-mb-3 custom-rounded-full custom-shadow-lg"
                        src={image2}
                        alt="Bonnie image"
                      />
                      <h5 className="custom-mb-1 custom-text-xl custom-font-medium custom-text-white">
                        Jenny Wilson
                      </h5>
                      <span className="custom-text-sm custom-text-gray-400">
                        kenzi.lawson@gamil.com
                      </span>
                      <span className="custom-text-sm custom-text-gray-400">
                        Total Point 350
                      </span>
                      <div className="custom-flex custom-mt-4 md:mt-6 component-2-button">
                        <a
                          href="#"
                          className="custom-inline-flex custom-items-center custom-px-4 custom-py-2 custom-text-sm custom-font-medium custom-text-center custom-text-white custom-bg-[#28282B] custom-rounded-lg custom-border-gray-500 custom-border "
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="custom-column" style={{marginLeft : "1vh"}}>
                <div className="custom-container">
                  <div className="custom-border custom-rounded-lg custom-shadow">
                    <div className="custom-flex custom-justify-end custom-px-4 custom-pt-4"></div>
                    <div className="custom-flex custom-flex-col custom-items-center custom-pb-10">
                      <img
                        className="custom-w-24 custom-h-24 custom-mb-3 custom-rounded-full custom-shadow-lg"
                        src={image3}
                      />
                      <h5 className="custom-mb-1 custom-text-xl custom-font-medium custom-text-white">
                        Darrell Steward
                      </h5>
                      <span className="custom-text-sm custom-text-gray-400">
                        georgia.young@gamil.com
                      </span>
                      <span className="custom-text-sm custom-text-gray-400">
                        Total Point 350
                      </span>
                      <div className="custom-flex custom-mt-4 md:mt-6 component-2-button">
                        <a
                          href="#"
                          className="custom-inline-flex custom-items-center custom-px-4 custom-py-2 custom-text-sm custom-font-medium custom-text-center custom-text-white custom-bg-[#28282B] custom-rounded-lg custom-border-gray-500 custom-border "
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="table-responsive">
                <h4
                  style={{
                    color: "#E8E8E8",
                    margin: "2rem 2rem",
                    fontWeight: "bolder",
                    fontSize: "25px",
                  }}
                >
                  Interview Schedule
                </h4>
                <table className="table table-dark">
                  <thead>
                    <tr style={{ borderBottom: "3px solid #2F3034" }}>
                      <th scope="col" className="small-width">
                        Candidat Name
                      </th>
                      <th scope="col" className="small-width">
                        Post Name
                      </th>
                      <th scope="col" className="small-width">
                        Designation
                      </th>
                      <th scope="col" className="small-width">
                        Time
                      </th>
                      <th scope="col" className="small-width">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>
                          <img
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "13px",
                              marginRight: "1rem",
                            }}
                            src={admin1}
                            alt=""
                          />
                        </span>
                        Thamas Alav
                      </td>
                      <td>Developer</td>
                      <td>BackEnd</td>
                      <td>11:30</td>
                      <td>
                        <div
                          className="Job-status-button"
                          style={{ color: "blue" }}
                        >
                                  <span style={{backgroundColor : "#2A333A" , padding : "10px 15px" , borderRadius : "6px"}}>
                          Incomplete
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <img
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "13px",
                              marginRight: "1rem",
                            }}
                            src={admin2}
                            alt=""
                          />
                        </span>
                        Masoom Billa
                      </td>
                      <td>Designer</td>
                      <td>UI/UX</td>
                      <td>12:00</td>
                      <td>
                        <div
                          className="Job-status-button"
                          style={{ color: "white" }}
                        >
                               <span style={{backgroundColor : "#2A333A" , padding : "10px 15px" , borderRadius : "6px"}}>
                          Completed</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <img
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "13px",
                              marginRight: "1rem",
                            }}
                            src={admin3}
                            alt=""
                          />
                        </span>
                        Swith Liwes
                      </td>
                      <td>Content Writer</td>
                      <td>Writer</td>
                      <td>12:30</td>
                      <td>
                        <div
                          className="Job-status-button"
                          style={{ color: "orange" }}
                        >
                           <span style={{backgroundColor : "#2A333A" , padding : "10px 15px" , borderRadius : "6px"}}>
                          Processing
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component2;
