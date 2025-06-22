import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import dayjs from "dayjs";
// import { FaBell, FaRegEye, FaInfoCircle, FaPaperclip } from "react-icons/fa";

interface Props {
  show?: boolean;
  onPressDetailModal?: () => void;
  onPressUserModal?: () => void;
  usershow?: boolean;
  allList: any[]
}


const CheckList = ({ show, onPressDetailModal, onPressUserModal, usershow, allList }: Props) => {


  return (
    <>
      <Modal
        show={usershow}
        onHide={onPressUserModal}
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
        show={show}
        onHide={onPressDetailModal}
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
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                            <th>Reminder</th>
                            <th>Attachment</th>
                            <th>Updated At</th>
                            <th>Actions</th>
                          </tr>
                        </thead>

                        {/* TABLE BODY */}
                        <tbody>
                          {allList?.length > 0 ? (
                            allList.map((item) => (
                              <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{dayjs(item.dueDateTime).format("MMM DD, YYYY hh:mm A")}</td>
                                <td>
                                  <button className="priorityBtn">{item.priority}</button>
                                </td>
                                <td>
                                  <i
                                    className={`ri-notification-3-line ${item.emailReminder ? "text-success" : "text-muted"
                                      }`}
                                    title={item.emailReminder ? "Reminder On" : "Reminder Off"}
                                  ></i>
                                </td>
                                <td>
                                  {item.attachments?.length > 0 ? (
                                    <a
                                      href={item.attachments[0].url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      title="View Attachment"
                                    >
                                      <i className="ri-attachment-2"></i>
                                    </a>
                                  ) : (
                                    "-"
                                  )}
                                </td>
                                <td>{dayjs(item.updatedAt).format("MMM DD, YYYY hh:mm A")}</td>
                                <td>
                                  <div className="flex-gap">
                                    <span onClick={onPressUserModal} title="User Info">
                                      <i className="ri-error-warning-line"></i>
                                    </span>
                                    <span onClick={onPressDetailModal} title="View Detail">
                                      <i className="ri-eye-line"></i>
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={8}>No checklist found.</td>
                            </tr>
                          )}
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
