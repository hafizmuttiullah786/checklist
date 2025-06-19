import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import inProgress from "../Assets/imgs/progress.webp";
import overdue from "../Assets/imgs/overdue.webp";
import completed_icon from "../Assets/imgs/completed_icon.webp";
import profileAvatar from "../Assets/imgs/profileAvatar.webp";
const TeamOverview = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">Team Overview</div>
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
                <div className="__card__warper">
                  <div className="completed_card">
                    <div className="flex-gap">
                      <div className="__icon">
                        <img src={completed_icon} alt="icon" />
                      </div>
                      <div>
                        <div className="__cardText">Completed</div>
                        <div className="__numbers">25</div>
                      </div>
                    </div>
                    <div className="progress__bar">
                      <div className="Total_progress"></div>
                    </div>
                  </div>
                  <div className="completed_card">
                    <div className="flex-gap">
                      <div className="__icon">
                        <img src={inProgress} alt="icon" />
                      </div>
                      <div>
                        <div className="__cardText">in Progress</div>
                        <div className="__numbers">12</div>
                      </div>
                    </div>
                    <div className="progress__bar">
                      <div className="Total_progress"></div>
                    </div>
                  </div>
                  <div className="completed_card">
                    <div className="flex-gap">
                      <div className="__icon">
                        <img src={overdue} alt="icon" />
                      </div>
                      <div>
                        <div className="__cardText">Overdue</div>
                        <div className="__numbers">07</div>
                      </div>
                    </div>
                    <div className="progress__bar">
                      <div className="overdueProgress"></div>
                    </div>
                  </div>
                </div>
                <div className="__defaultTable">
                  <table>
                    <thead>
                      <tr>
                        <th>Employee</th>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th>Training Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="flex-gap">
                            <div className="__userAvatar">
                              <img src={profileAvatar} alt="user" />
                            </div>
                            <div>
                              <div className="employee-name">Employee Name</div>
                              <p>Ux Designer</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          Designing
                          <p>Designing</p>
                        </td>
                        <td>Designing</td>
                        <td>
                          <div className="__training___progress ist__progressBar">
                            <div className="Progress__Status"></div>
                          </div>
                          <div className="__training___progress">
                            <div className="Progress__Status"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex-gap">
                            <div className="__userAvatar">
                              <img src={profileAvatar} alt="user" />
                            </div>
                            <div>
                              <div className="employee-name">Employee Name</div>
                              <p>Ux Designer</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          Designing
                          <p>Designing</p>
                        </td>
                        <td>Designing</td>
                        <td>
                          <div className="__training___progress ist__progressBar">
                            <div className="Progress__Status"></div>
                          </div>
                          <div className="__training___progress">
                            <div className="Progress__Status"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex-gap">
                            <div className="__userAvatar">
                              <img src={profileAvatar} alt="user" />
                            </div>
                            <div>
                              <div className="employee-name">Employee Name</div>
                              <p>Ux Designer</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          Designing
                          <p>Designing</p>
                        </td>
                        <td>Designing</td>
                        <td>
                          <div className="__training___progress ist__progressBar">
                            <div className="Progress__Status"></div>
                          </div>
                          <div className="__training___progress">
                            <div className="Progress__Status"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex-gap">
                            <div className="__userAvatar">
                              <img src={profileAvatar} alt="user" />
                            </div>
                            <div>
                              <div className="employee-name">Employee Name</div>
                              <p>Ux Designer</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          Designing
                          <p>Designing</p>
                        </td>
                        <td>Designing</td>
                        <td>
                          <div className="__training___progress ist__progressBar">
                            <div className="Progress__Status"></div>
                          </div>
                          <div className="__training___progress">
                            <div className="Progress__Status"></div>
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
      </div>
    </>
  );
};

export default TeamOverview;
