import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import valid from "../Assets/imgs/valid.webp";
import cancel_icon from "../Assets/imgs/cross_icon.webp";
import invalid from "../Assets/imgs/overdue.webp";

const CertificateTracking = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">Certificate Tracking</div>
              <div className="__defaultCard">
                <div className="department_training">
                  <div className="department_select">
                    <div className="down_arrow">
                      <i className="ri-arrow-down-s-fill"></i>
                    </div>
                    <select name="" id="">
                      <option value="">Department</option>
                    </select>
                  </div>
                  <div className="training_status">
                    <div className="down_arrow">
                      <i className="ri-arrow-down-s-fill"></i>
                    </div>
                    <select name="" id="">
                      <option value="">Training Status</option>
                    </select>
                  </div>
                </div>
                <div className="certificateCards-wraper">
                  <div className="cert__card green_card">
                    <img src={valid} alt="icon" />
                    <p>Valid</p>
                    <span>146</span>
                  </div>
                  <div className="cert__card red_card">
                    <img src={invalid} alt="icon" />
                    <p>Valid</p>
                    <span>37</span>
                  </div>
                  <div className="cert__card yellow_card">
                    <img src={cancel_icon} alt="icon" />
                    <p>valid</p>
                    <span>146</span>
                  </div>
                </div>
                <div className="__defaultTable">
                  <table>
                    <thead>
                      <tr>
                        <th>Employee Name</th>
                        <th>Certificate</th>
                        <th>Type</th>
                        <th>Issued Date</th>
                        <th>Expiration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Employee</td>
                        <td>Fire Safety Awarness</td>
                        <td>Safety</td>
                        <td>22 Jun 2025</td>
                        <td className="greentdText">07 Aug 2025</td>
                      </tr>
                      <tr>
                        <td>Employee</td>
                        <td>Fire Safety Awarness</td>
                        <td>Safety</td>
                        <td>22 Jun 2025</td>
                        <td className="redtdText">07 Aug 2025</td>
                      </tr>
                      <tr>
                        <td>Employee</td>
                        <td>Fire Safety Awarness</td>
                        <td>Safety</td>
                        <td>22 Jun 2025</td>
                        <td className="yellowtdText">07 Aug 2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateTracking;
