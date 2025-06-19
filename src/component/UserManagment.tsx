import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
const UserManagment = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">User Managment</div>
              <div className="__myTraining">
                <div className="billingTop">
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
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <div className="__defaultTable">
                      <table>
                        <thead>
                          <tr>
                            <th>User Name</th>
                            <th>Email/Phone</th>
                            <th>Registration Date</th>
                            <th>Role</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex-gap">
                                <div className="usernameIcon">U</div>
                                User Name
                              </div>
                            </td>
                            <td>abcd1234@gmail.com</td>
                            <td>25/May/2025</td>
                            <td>
                              <button className="administrator">
                                Administrator
                              </button>
                            </td>
                            <td className="redtdText">
                              <div className="flex-gap">
                                <button className="csv">view</button>
                                <button className="pdf_btn">Accept</button>
                                <button className="csv">Reject</button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex-gap">
                                <div className="usernameIcon">U</div>
                                User Name
                              </div>
                            </td>
                            <td>abcd1234@gmail.com</td>
                            <td>25/May/2025</td>
                            <td>
                              <button className="employee">
                                Administrator
                              </button>
                            </td>
                            <td className="redtdText">
                              <div className="flex-gap">
                                <button className="csv">view</button>
                                <button className="pdf_btn">Accept</button>
                                <button className="csv">Reject</button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex-gap">
                                <div className="usernameIcon">U</div>
                                User Name
                              </div>
                            </td>
                            <td>abcd1234@gmail.com</td>
                            <td>25/May/2025</td>
                            <td>
                              <button className="employee">
                                Administrator
                              </button>
                            </td>
                            <td className="redtdText">
                              <div className="flex-gap">
                                <button className="csv">view</button>
                                <button className="pdf_btn">Accept</button>
                                <button className="csv">Reject</button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flex-gap">
                                <div className="usernameIcon">U</div>
                                User Name
                              </div>
                            </td>
                            <td>abcd1234@gmail.com</td>
                            <td>25/May/2025</td>
                            <td>
                              <button className="employee">
                                Administrator
                              </button>
                            </td>
                            <td className="redtdText">
                              <div className="flex-gap">
                                <button className="csv">view</button>
                                <button className="pdf_btn">Accept</button>
                                <button className="csv">Reject</button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="__NexStep">
                      Next <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagment;
