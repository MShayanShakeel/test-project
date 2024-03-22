import React from "react";
import "./Component1.css";
import { MdOutlineEditNotifications } from "react-icons/md";
import { MdSettingsSuggest } from "react-icons/md";

const Component1 = () => {
  return (
    <>
      <div className="MainSidebar row">
        <div className="col-12 Second-main-Sidebar">
          <div className="logo-class  color-white">
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span
                className="input-group-text border-0"
                id="search-addon"
              ></span>
            </div>
            <div>
              <MdOutlineEditNotifications />
            </div>
            <div>
              <MdSettingsSuggest />
            </div>
          </div>
          {/* <div className="recomended-text-class">
            <h4>Recomended Job</h4> <p> See ALL</p>
          </div> */}

          <div className="right-componet-fix-height">
            <div className="card all-card-main">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card all-card-main">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card all-card-main">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="right-bar-Second Second-main-Sidebar">
          <div className="card all-card-main">
            <div className="card all-card-main">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="card all-card-main">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
