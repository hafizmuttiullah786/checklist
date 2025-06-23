import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Modal from "react-bootstrap/Modal";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

interface Props {
  show?: boolean;
  onPressDetailModal?: () => void;
  onPressUserModal?: () => void;
  usershow?: boolean;
  allList: any[]
  questionList: any[]
  responsesList: any[]
  getResponsesList: (checklistId: number) => Promise<void>
  getQuestionList: (checklistId: number) => Promise<void>
  loading: boolean
  mainLoading: boolean
}


const CheckList = ({ mainLoading, show, onPressDetailModal, onPressUserModal, usershow, allList, loading, questionList, responsesList, getQuestionList, getResponsesList }: Props) => {

  const navigate = useNavigate();


  return (
    <>
      {/* <Modal
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
      </Modal> */}
      {/* <Modal
        show={show}
        onHide={onPressDetailModal}
        backdrop="static"
        keyboard={false}
        centered
        className="__modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Questions</Modal.Title>
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
      </Modal> */}

      <Modal show={usershow} onHide={onPressUserModal} centered className="__modal" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Checklist Responses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {responsesList.length > 0 ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                {responsesList.map((res, idx) => (
                  <tr key={idx}>
                    <td>{res.user?.name || "N/A"}</td>
                    <td>{res.user?.email || "N/A"}</td>
                    <td>{res.user?.department || "N/A"}</td>
                    <td>{res.user?.role || "N/A"}</td>
                    <td>{res.user?.status || "N/A"}</td>
                    <td>
                      {res.response ? (
                        <a href={res.response} target="_blank" rel="noopener noreferrer">
                          Submitted
                        </a>
                      ) : (
                        "Not Submitted"
                      )}
                    </td>
                    <td>
                      {res.submissionDate
                        ? dayjs(res.submissionDate).format("MMM DD, YYYY hh:mm A")
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No responses found.</p>
          )}
        </Modal.Body>
      </Modal>


      <Modal show={show} onHide={onPressDetailModal} centered className="__modal" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Checklist Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {questionList.length > 0 ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Note</th>
                  <th>Updated At</th>
                </tr>
              </thead>
              <tbody>
                {questionList.map((q, idx) => (
                  <tr key={idx}>
                    <td>{q.id}</td>
                    <td>{q.title}</td>
                    <td>{q.note}</td>
                    <td>{dayjs(q.updatedAt).format("MMM DD, YYYY hh:mm A")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No questions found.</p>
          )}
        </Modal.Body>
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
                    {/* <span>Status</span>
                    <select name="" id="">
                      <option value="">All</option>
                    </select> */}
                  </div>
                  <div className="csv_pdf">
                    {/* <button className="csv">Export to CSV</button> */}
                    {/* <button className="pdf_btn">Export to PDF</button> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <div className="createChecklist">
                      <button onClick={() => navigate("/newchecklist")}>Create Checklist</button>
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
                            <th>Edit</th>
                          </tr>
                        </thead>

                        {/* TABLE BODY */}
                        <tbody>

                          {mainLoading ? (
                            <tr>
                              <td colSpan={8} style={{ textAlign: "center" }}>
                                <i className="ri-loader-4-line ri-spin" style={{ fontSize: "20px" }}></i> Loading checklist...
                              </td>
                            </tr>
                          ) : allList?.length > 0 ? (
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
                                    item.attachments.map((file: any, index: number) => (
                                      <a
                                        key={file.id || index}
                                        href={file.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={`View Attachment ${index + 1}`}
                                        style={{ marginRight: "8px" }}
                                      >
                                        <i className="ri-attachment-2"></i>
                                      </a>
                                    ))
                                  ) : (
                                    "-"
                                  )}
                                </td>
                                <td>{dayjs(item.updatedAt).format("MMM DD, YYYY hh:mm A")}</td>
                                <td>
                                  {!loading ?
                                    <div className="flex-gap">
                                      <span onClick={() => getResponsesList(item.id)} title="User Info">
                                        <i className="ri-error-warning-line"></i>
                                      </span>
                                      <span onClick={() => getQuestionList(item.id)} title="View Detail">
                                        <i className="ri-eye-line"></i>
                                      </span>
                                    </div> :
                                    <Spinner animation="border" role="status" size="sm">
                                      <span className="visually-hidden">Loading...</span>
                                    </Spinner>}
                                </td>
                                <td>
                                  <i
                                    className="ri-edit-2-line"
                                    style={{ cursor: "pointer" }}
                                    title="Edit Checklist"
                                    onClick={() => navigate("/newchecklist", { state: item })}
                                  ></i>
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
