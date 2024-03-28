import React from "react";
import "./Component1.css";
import { MdOutlineEditNotifications } from "react-icons/md";
import { MdSettingsSuggest } from "react-icons/md";
import profileImage from "../../images/profileeeee.png";
import admin1 from "../../images/First-Admin.jpeg";
import admin2 from "../../images/Second-admn.png";
import admin3 from "../../images/Thrd0admin.png";
import admin4 from "../../images/fourthadmin.webp";
import { FaEllipsisH } from "react-icons/fa";
import Graph from "./Graph";

const Component1 = () => {
  return (
    <>
      <div className="MainSidebar row">
        <div className="col-12 Second-main-Sidebar">
          <div
            className="logo-class  color-white"
            style={{ justifyContent: "space-between" }}
          >
            <div className="input-group rounded input-field-3">
              <input
                type="search"
                className="form-control rounded custom-bg"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="srting-icons">
              <MdOutlineEditNotifications />
            </div>
            <div className="srting-icons">
              <MdSettingsSuggest />
            </div>
          </div>
          <div className="recomended-text-class">
            <h4>Recomended Job</h4> <p style={{color  : "#765856"}}> SEE ALL</p>
          </div>

          <div className="right-componet-fix-height">
            <div className="card all-card-main">
              <div className="card-body" style={{ marginBottom: "1rem" }}>
                <div className="card-content">
                  <div
                    className="user-profile-image"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={profileImage} alt="Profile" />
                  </div>
                  <div style={{ flex: 1, marginTop: "10px" }}>
                    <h5 className="card-title" style={{ color: "#DDDDDD" }}>
                      UI/UX Designer
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Job Description
                    </h6>
                  </div>
                  <div className="user-profile-icon">
                    <FaEllipsisH />
                  </div>
                </div>

                <div className="card-text card-buttons">
                  <button style={{ color: "#7A6D57" }}>Remote</button>
                  <button style={{ color: "#DDDDDD" }}>Full Time</button>
                </div>
              </div>
            </div>

            <div className="card all-card-main">
              <div className="card-body" style={{ marginBottom: "1rem" }}>
                <div className="card-content">
                  <div
                    className="user-profile-image"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={profileImage} alt="Profile" />
                  </div>
                  <div style={{ flex: 1, marginTop: "10px" }}>
                    <h5 className="card-title" style={{ color: "#DDDDDD" }}>
                      UI/UX Designer
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Job Description
                    </h6>
                  </div>
                  <div className="user-profile-icon">
                    <FaEllipsisH />
                  </div>
                </div>

                <div className="card-text card-buttons">
                  <button style={{ color: "#7A6D57" }}>Remote</button>
                  <button style={{ color: "#DDDDDD" }}>Full Time</button>
                </div>
              </div>
            </div>

            <div className="card all-card-main">
              <div className="card-body" style={{ marginBottom: "1rem" }}>
                <div className="card-content">
                  <div
                    className="user-profile-image"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={profileImage} alt="Profile" />
                  </div>
                  <div style={{ flex: 1, marginTop: "10px" }}>
                    <h5 className="card-title" style={{ color: "#DDDDDD" }}>
                      UI/UX Designer
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Job Description
                    </h6>
                  </div>
                  <div className="user-profile-icon">
                    <FaEllipsisH />
                  </div>
                </div>

                <div className="card-text card-buttons">
                  <button style={{ color: "#7A6D57" }}>Remote</button>
                  <button style={{ color: "#DDDDDD" }}>Full Time</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="right-bar-Second Second-main-Sidebar"> */}
        <div className="Second-right-componet-fix-height">
          <div className="card all-card-main" style={{ marginBottom: "1rem" }}>
            <div className="card-body">
              <div className="card-content">
                <h4
                  className="card-title"
                  style={{ color: "#B6B7BB", fontWeight: "bolder" }}
                >
                  Board Instructer
                </h4>
                <FaEllipsisH style={{ marginRight: "1.5rem" }} />
              </div>
              <div className="Instructer-picture">
                <img src={admin1} alt="Profile" />
                <img src={admin2} alt="Profile" />
                <img src={admin3} alt="Profile" />
                <img src={admin4} alt="Profile" />
              </div>
            </div>
          </div>
          <div className="card all-card-main">
            <div className="card-body">
              <Graph />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
