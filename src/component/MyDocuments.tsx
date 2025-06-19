import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
const MyDocuments = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">My Documents</div>
              <div className="__defaultCard">
                <div className="__filters">
                  <select>
                    <option value="0">Filter</option>
                  </select>
                  <select>
                    <option value="0">Date</option>
                  </select>
                  <select>
                    <option value="0">Type</option>
                  </select>
                </div>
                <div className="__defaultTable">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Updated By</th>
                        <th>Data Uploaded</th>
                        <th>Access Level</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Project A RAMS</th>
                        <td>RAMS</td>
                        <td>Ahmed</td>
                        <td>22 May 2025</td>
                        <td>
                          <button className="__expired">Admin Only</button>
                        </td>
                        <td>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-eye-line"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-download-fill"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-more-2-fill"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Project A RAMS</th>
                        <td>RAMS</td>
                        <td>Ahmed</td>
                        <td>22 May 2025</td>
                        <td>
                          <button className="__expired">Admin Only</button>
                        </td>
                        <td>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-eye-line"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-download-fill"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-more-2-fill"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Project A RAMS</th>
                        <td>RAMS</td>
                        <td>Ahmed</td>
                        <td>22 May 2025</td>
                        <td>
                          <button className="__expired">Admin Only</button>
                        </td>
                        <td>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-eye-line"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-download-fill"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-more-2-fill"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Project A RAMS</th>
                        <td>RAMS</td>
                        <td>Ahmed</td>
                        <td>22 May 2025</td>
                        <td>
                          <button className="__expired">Admin Only</button>
                        </td>
                        <td>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-eye-line"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-download-fill"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-more-2-fill"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Employee Handbook</th>
                        <td>RAMS</td>
                        <td>Ahmed</td>
                        <td>22 May 2025</td>
                        <td>
                          <button className="__allStaf">All Staff</button>
                        </td>
                        <td>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-eye-line"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-download-fill"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-more-2-fill"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Employee Handbook</th>
                        <td>RAMS</td>
                        <td>Ahmed</td>
                        <td>22 May 2025</td>
                        <td>
                          <button className="__allStaf">All Staff</button>
                        </td>
                        <td>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-eye-line"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-download-fill"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-more-2-fill"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Employee Handbook</th>
                        <td>RAMS</td>
                        <td>Ahmed</td>
                        <td>22 May 2025</td>
                        <td>
                          <button className="__allStaf">All Staff</button>
                        </td>
                        <td>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-eye-line"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-download-fill"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-more-2-fill"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Employee Handbook</th>
                        <td>RAMS</td>
                        <td>Ahmed</td>
                        <td>22 May 2025</td>
                        <td>
                          <button className="__allStaf">All Staff</button>
                        </td>
                        <td>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-eye-line"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-download-fill"></i>
                          </a>
                          <a href="#" className="ActionsIcon">
                            <i className="ri-more-2-fill"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="__continueBtn">Download</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDocuments;
