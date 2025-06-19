import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const SubmissionReport = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">Form submission reports</div>
              <div className="__defaultCard">
                <div className="department_training">
                  <div className="department_select">
                    <div className="down_arrow">
                      <i className="ri-arrow-down-s-fill"></i>
                    </div>
                    <select name="" id="">
                      <option value="">Type</option>
                      <option value="">Accident Form</option>
                      <option value="">Expense Form</option>
                      <option value="">Holiday Form</option>
                    </select>
                  </div>
                </div>
                <div className="__defaultTable mt-4">
                  <table>
                    <thead>
                      <tr>
                        <th>Employee Name</th>
                        <th>Type</th>
                        <th>Created</th>
                        <th>Records</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Employee Name</td>
                        <td>Accident Form</td>
                        <td>22 Jun 2025</td>
                        <th>
                           134
                        </th>
                      </tr>
                      <tr>
                        <td>Employee Name</td>
                        <td>Accident Form</td>
                        <td>22 Jun 2025</td>
                        <th>
                           134
                        </th>
                      </tr>
                      <tr>
                        <td>Employee Name</td>
                        <td>Accident Form</td>
                        <td>22 Jun 2025</td>
                        <th>
                           134
                        </th>
                      </tr>
                      <tr>
                        <td>Employee Name</td>
                        <td>Accident Form</td>
                        <td>22 Jun 2025</td>
                        <th>
                           134
                        </th>
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

export default SubmissionReport;
