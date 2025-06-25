import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import dayjs from "dayjs";
import { Spinner } from "react-bootstrap";

interface Props {
  alluserList: any[];
  role: string | null;
  loading: boolean;
  mainLoading: boolean;
  updateUserStatus: (values: any) => Promise<void>;
}

const AllUsermanagement = ({
  alluserList,
  role,
  loading,
  mainLoading,
  updateUserStatus,
}: Props) => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">All User Management</div>
              <div className="__myTraining">
                <div className="billingTop">
                  <div className="statusSelec"></div>
                  <div className="csv_pdf"></div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-12">
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
                            <th>Action</th>
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
                                <td>
                                  {loading ? (
                                    <button
                                      className={
                                        user.status.toLowerCase() === "active"
                                          ? "btn btn-danger"
                                          : "btn btn-success"
                                      }
                                    >
                                      <Spinner animation="border" size="sm" />
                                    </button>
                                  ) : (
                                    <button
                                      className={
                                        user.status.toLowerCase() === "active"
                                          ? "btn btn-danger"
                                          : "btn btn-success"
                                      }
                                      onClick={() =>
                                        updateUserStatus({
                                          id: user.id,
                                          status:
                                            user.status.toLowerCase() ===
                                            "active"
                                              ? "REJECTED"
                                              : "ACTIVE",
                                        })
                                      }
                                    >
                                      {user.status.toLowerCase() === "active"
                                        ? "Inactive"
                                        : "Active"}
                                    </button>
                                  )}
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

export default AllUsermanagement;
