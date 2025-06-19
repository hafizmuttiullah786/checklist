import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Billing = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">Billing</div>
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
                            <th>Completed Checklists</th>
                            <th>Total Bill Amount</th>
                            <th>Amount Paid</th>
                            <th>Expiration</th>
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
                            <td>27</td>
                            <td>$200.00</td>
                            <td>$150.00</td>
                            <td className="redtdText">$0.00</td>
                            <td>
                              <div className="flex-gap">
                                <a href="#">
                                  <i className="ri-error-warning-line"></i>
                                </a>
                                <a href="#">
                                  <i className="ri-eye-line"></i>
                                </a>
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
                            <td>27</td>
                            <td>$200.00</td>
                            <td>$150.00</td>
                            <td className="redtdText">$0.00</td>
                            <td>
                              <div className="flex-gap">
                                <a href="#">
                                  <i className="ri-error-warning-line"></i>
                                </a>
                                <a href="#">
                                  <i className="ri-eye-line"></i>
                                </a>
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
                            <td>27</td>
                            <td>$200.00</td>
                            <td>$150.00</td>
                            <td className="redtdText">$0.00</td>
                            <td>
                              <div className="flex-gap">
                                <a href="#">
                                  <i className="ri-error-warning-line"></i>
                                </a>
                                <a href="#">
                                  <i className="ri-eye-line"></i>
                                </a>
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
                            <td>27</td>
                            <td>$200.00</td>
                            <td>$150.00</td>
                            <td className="redtdText">$0.00</td>
                            <td>
                              <div className="flex-gap">
                                <a href="#">
                                  <i className="ri-error-warning-line"></i>
                                </a>
                                <a href="#">
                                  <i className="ri-eye-line"></i>
                                </a>
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

export default Billing;
