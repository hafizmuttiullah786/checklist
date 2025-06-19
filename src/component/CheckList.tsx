import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
const CheckList = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">Checklist</div>
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
                    <div className="createChecklist">
                      <button>Create Checklist</button>
                    </div>
                    <div className="__defaultTable">
                      <table>
                        <thead>
                          <tr>
                            <th>User Name</th>
                            <th>Activity</th>
                            <th>Due Date</th>
                            <th>Role</th>
                            <th>Overdue Tasks</th>
                            <th>Tasks Completed</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p> Employee Work </p>
                              <p> Tools Checklist</p>
                            </td>
                            <td>3 hours ago</td>
                            <td>May 30</td>
                            <td>
                              <button className="duesoon">Due Soon</button>
                            </td>
                            <td >
                              <button className="taskbtn">4 Tasks</button>
                            </td>
                            <td>
                              <div className="yellowBar">
                                <div className="percenCompleted"></div>
                              </div>
                              <span>0/5</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p> Employee Work </p>
                              <p> Tools Checklist</p>
                            </td>
                            <td>3 hours ago</td>
                            <td>May 30</td>
                            <td>
                              <button className="archived">Due Soon</button>
                            </td>
                            <td >
                              <button className="taskbtn">4 Tasks</button>
                            </td>
                            <td>
                              <div className="purpleBar">
                                <div className="yellow-completed"></div>
                              </div>
                              <span>2/5</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p> Employee Work </p>
                              <p> Tools Checklist</p>
                            </td>
                            <td>3 hours ago</td>
                            <td>May 30</td>
                            <td>
                              <button className="completed">Due Soon</button>
                            </td>
                            <td >
                              <button className="taskbtn">4 Tasks</button>
                            </td>
                            <td>
                              <div className="greenBar">
                                <div className="green-completed"></div>
                              </div>
                              <span>2/5</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p> Employee Work </p>
                              <p> Tools Checklist</p>
                            </td>
                            <td>3 hours ago</td>
                            <td>May 30</td>
                            <td>
                              <button className="completed">Due Soon</button>
                            </td>
                            <td >
                              <button className="taskbtn">4 Tasks</button>
                            </td> 
                            <td>
                              <div className="greenBar">
                                <div className="green-completed"></div>
                              </div>
                              <span>2/5</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p> Employee Work </p>
                              <p> Tools Checklist</p>
                            </td>
                            <td>3 hours ago</td>
                            <td>May 30</td>
                            <td>
                              <button className="completed">Due Soon</button>
                            </td>
                            <td >
                              <button className="taskbtn">4 Tasks</button>
                            </td>
                            <td>
                              <div className="greenBar">
                                <div className="green-completed"></div>
                              </div>
                              <span>2/5</span>
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

export default CheckList;
