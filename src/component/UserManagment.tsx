import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import dayjs from "dayjs";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Spinner } from "react-bootstrap";

interface Props {
  alluserList: any[];
  role: string | null;
  showAddModal: boolean;
  loading: boolean;
  mainLoading: boolean;
  onPressHandleModal: () => void;
  onPressAddEmployee: (values: any) => Promise<void>;
}
const UserManagment = ({
  alluserList,
  role,
  onPressAddEmployee,
  showAddModal,
  onPressHandleModal,
  loading,
  mainLoading,
}: Props) => {
  const isVisible =
    role?.toLowerCase() === "admin" || role?.toLowerCase() === "manager";
  const initialValues = {
    name: "",
    email: "",
    password: "",
    department: "",
    type: "EMPLOYEE", // default value
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Min 6 characters")
      .required("Password is required"),
    department: Yup.string().required("Department is required"),
    type: Yup.string().required("Type is required"),
  });

  return (
    <>
      <Modal
        show={showAddModal}
        onHide={onPressHandleModal}
        centered
        backdrop="static"
        keyboard={false}
        className="__modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await onPressAddEmployee(values);
            resetForm();
          }}
        >
          {() => (
            <Form className="__userForm">
              <Modal.Body>
                <div className="__inputField">
                  <label>Name</label>
                  <Field name="name" type="text" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-text"
                  />
                </div>
                <div className="__inputField">
                  <label>Email</label>
                  <Field name="email" type="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-text"
                  />
                </div>
                <div className="__inputField">
                  <label>Password</label>
                  <Field name="password" type="password" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-text"
                  />
                </div>
                <div className="__inputField">
                  <label>Department</label>
                  <Field name="department" type="text" />
                  <ErrorMessage
                    name="department"
                    component="div"
                    className="error-text"
                  />
                </div>
                <div className="__inputField">
                  <label>Type</label>
                  <Field as="select" name="type">
                    <option value="EMPLOYEE">EMPLOYEE</option>
                    <option value="MANAGER">MANAGER</option>
                  </Field>
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="error-text"
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button type="submit" className="submit__btn">
                  {loading ? (
                    <Spinner animation="border" role="status" size="sm">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : null}
                  {loading ? " Submitting..." : "Submit"}
                </button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">
                {isVisible ? "Employee Management" : "User Management"}
              </div>
              <div className="__myTraining">
                <div className="billingTop">
                  <div className="statusSelec"></div>
                  <div className="csv_pdf">
                    {/* <button className="csv">Export to CSV</button>
                    <button className="pdf_btn">Export to PDF</button> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-12">
                    {isVisible && (
                      <div
                        className="createChecklist"
                        onClick={onPressHandleModal}
                      >
                        <button>Add Employee</button>
                      </div>
                    )}

                    <div className="__defaultTable">
                      <table>
                        <thead>
                          <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Registered</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mainLoading ? (
                            <tr>
                              <td colSpan={7} style={{ textAlign: "center" }}>
                                <Spinner
                                  animation="border"
                                  role="status"
                                  size="sm"
                                >
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </Spinner>{" "}
                                Loading users...
                              </td>
                            </tr>
                          ) : alluserList?.length > 0 ? (
                            alluserList.map((user, index) => (
                              <tr key={user.id || index}>
                                <td>
                                  <div className="flex-gap">
                                    <div className="usernameIcon">
                                      {user.name?.charAt(0).toUpperCase() ||
                                        "U"}
                                    </div>
                                    {user.name}
                                  </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.department}</td>
                                <td>{user.company}</td>
                                <td>{user.status}</td>
                                <td>
                                  <button
                                    className={
                                      user.role === "ADMIN"
                                        ? "administrator"
                                        : "employee"
                                    }
                                  >
                                    {user.role}
                                  </button>
                                </td>
                                <td>
                                  {dayjs(user.createdAt).format("DD/MMM/YYYY")}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={7}>No users found.</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
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
