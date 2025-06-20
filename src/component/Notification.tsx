import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import newRequest from "../Assets/imgs/newRequest.svg";
import document from "../Assets/imgs/doccument.svg";
import inspection from "../Assets/imgs/inspection.svg";

const Notification = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">Notification</div>
              <div className="__myTraining">
                <div className="billingTop mb-5">
                  <div className="statusSelec">
                    <span>Status</span>
                    <select name="" id="">
                      <option value="">All</option>
                    </select>
                  </div>
                  <div className="csv_pdf">
                    <button className="csv">Export to CSV</button>
                    <button className="pdf_btn">Export to PDF</button>
                  </div>
                </div>
                <div className="notification_card flex">
                  <div className="flex-gap">
                    <div className="notification__icon">
                      <img src={newRequest} alt="" />
                    </div>
                    <p>Khayam has submitted a new request </p>
                  </div>
                  <div className="hoursAgo">1 hour ago </div>
                </div>
                <div className="notification_card flex">
                  <div className="flex-gap">
                    <div className="notification__icon">
                      <img src={document} alt="document" />
                    </div>
                    <p>Khayam has submitted a new request </p>
                  </div>
                  <div className="hoursAgo">1 hour ago </div>
                </div>
                <div className="notification_card flex">
                  <div className="flex-gap">
                    <div className="notification__icon">
                      <img src={inspection} alt="document" />
                    </div>
                    <p>Khayam has submitted a new request </p>
                  </div>
                  <div className="hoursAgo">1 hour ago </div>
                </div>
                <div className="notification_card flex">
                  <div className="flex-gap">
                    <div className="notification__icon">
                      <img src={inspection} alt="document" />
                    </div>
                    <p>Khayam has submitted a new request </p>
                  </div>
                  <div className="hoursAgo">1 hour ago </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
