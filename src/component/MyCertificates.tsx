import React from 'react'
import SideBar from './SideBar';
import TopBar from './TopBar';
const MyCertificates = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
                 <div className="__dashboardContent">
                    <div className="__pageHeading">
                        My Certificates
                    </div>
                    <div className="__defaultCard">
                        <div className="__defaultTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Certificate
                                        </th>
                                        <th>
                                            Issue Date
                                        </th>
                                        <th>
                                            Expiry Date
                                        </th>
                                        <th>
                                            Status
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Training Certificate</th>
                                        <td>21 May 2025</td>
                                        <td>21/05/2026</td>
                                        <td>21/05/2025</td>
                                    </tr>
                                    <tr>
                                        <th>Project B RAMS</th>
                                        <td>21 May 2025</td>
                                        <td>21/05/2026</td>
                                        <td>21/05/2025</td>
                                    </tr>
                                    <tr>
                                        <th>Public Liability Policy</th>
                                        <td>21 May 2025</td>
                                        <td>
                                            <button className="__expired">Expired</button>
                                        </td>
                                        <td>21/05/2026</td>
                                    </tr>
                                    <tr>
                                        <th>Public Liability Policy</th>
                                        <td>21 May 2025</td>
                                        <td>21 May 2025</td>
                                        <td>21/05/2026</td>
                                    </tr>
                                    <tr>
                                        <th>Public Liability Policy</th>
                                        <td>21 May 2025</td>
                                        <td>
                                            <button className="__expired">Expired in<br/> 7 days</button>
                                        </td>
                                        <td>21/05/2026</td>
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
}

export default MyCertificates
