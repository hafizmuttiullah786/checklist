import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CheckList = () => {
  const [show, setShow] = useState(false);
  const [usershow, setUserShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const UserShowModal = () => setUserShow(true);
  const userhandleClose = () => setUserShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="__modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="__userForm">
            <div className="input_flex">
              <div className="__inputField">
                <label htmlFor="">ID</label>
                <input type="text" />
              </div>
              <div className="__inputField">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="input_flex">
              <div className="__inputField">
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div className="__inputField">
                <label htmlFor="">Department</label>
                <input type="text" />
              </div>
            </div>
            <div className="input_flex">
              <div className="__inputField">
                <label htmlFor="">Status</label>
                <input type="text" />
              </div>
              <div className="__inputField">
                <label htmlFor="">Role</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="submit__btn">Submit</button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={usershow}
        onHide={userhandleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="__modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="__userForm">
            <div className="__inputField">
              <label htmlFor="">ID</label>
              <input type="text" />
            </div>
            <div className="__inputField">
              <label htmlFor="">Title</label>
              <input type="text" />
            </div>
            <div className="__inputField">
              <label htmlFor="">Note</label>
              <input type="text" />
            </div>
            <div className="__inputField">
              <label htmlFor="">Updated At</label>
              <input type="text" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="submit__btn">Submit</button>
        </Modal.Footer>
      </Modal>
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
                            <th>Actions</th>
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
                            <td>
                              <button className="taskbtn">4 Tasks</button>
                            </td>
                            <td>
                              <div className="yellowBar">
                                <div className="percenCompleted"></div>
                              </div>
                              <span>0/5</span>
                            </td>
                            <td>
                              <div className="flex-gap">
                                <a href="#" onClick={UserShowModal}>
                                  <i className="ri-error-warning-line"></i>
                                </a>
                                <a href="#" onClick={handleShow}>
                                  <i className="ri-eye-line"></i>
                                </a>
                              </div>
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
                            <td>
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
                            <td>
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
                            <td>
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
                            <td>
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
