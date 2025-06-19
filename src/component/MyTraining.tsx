import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import check_circle from "../Assets/imgs/check_circle.webp";
import advancedPrototyping from "../Assets/imgs/advancedPrototyping.webp";
import video from "../Assets/imgs/video.webp";
ChartJS.register(ArcElement, Tooltip, Legend);

const MyTraining = () => {
  const data = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [
      {
        data: [58, 28, 13],
        backgroundColor: ["#4C8DF6", "#DCE6F7", "#6A7B8F"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          color: "#000",
          boxWidth: 12,
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle" as const,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: 0,
  };
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">My Training</div>
              <div className="__myTraining">
                <div className="row">
                  <div className="col-lg-8 col-12">
                    <div className="__defaultTable">
                      <table>
                        <thead>
                          <tr>
                            <th>Training Assignmnets</th>
                            <th>Type</th>
                            <th>Assigned</th>
                            <th>Due</th>
                            <th>Progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Fire Safety Awarness</td>
                            <td>PDF</td>
                            <td>21 Feb 2024</td>
                            <td>10 Jun</td>
                            <td>
                              <button className="__completedBtn">
                                Completed
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Fire Safety Awarness</td>
                            <td>PDF</td>
                            <td>21 Feb 2024</td>
                            <td>10 Jun</td>
                            <td>
                              <div className="__progressBar">
                                <span></span>
                              </div>
                              In Progress
                            </td>
                          </tr>
                          <tr>
                            <td>Fire Safety Awarness</td>
                            <td>PDF</td>
                            <td>21 Feb 2024</td>
                            <td>10 Jun</td>
                            <td>Not Started</td>
                          </tr>
                          <tr>
                            <td>Fire Safety Awarness</td>
                            <td>PDF</td>
                            <td>21 Feb 2024</td>
                            <td>10 Jun</td>
                            <td>
                              <button className="__Overdue">Overdue</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="__chart">
                      <Pie data={data} options={options} />
                    </div>
                    <div className="__latestCompletion">
                      <div className="__latestHeading">Latest Completion</div>
                      <div className="__latestInerCard">
                        <div className="flex">
                          <div className="flex-gap">
                            <div className="__LatestProimage">
                              <img src={advancedPrototyping} alt="icon" />
                            </div>
                            <div className="__textPB">
                              <p>Advance Prototyping</p>
                              <span className="__Blueline"></span>
                            </div>
                          </div>
                          <button className="__certifiedBtn">
                            <span>
                              <img src={check_circle} alt="circle" />
                            </span>
                            Certified
                          </button>
                        </div>
                      </div>
                      <div className="__latestInerCard">
                        <div className="flex">
                          <div className="flex-gap">
                            <div className="__LatestProimage">
                              <img src={video} alt="icon" />
                            </div>
                            <div className="__textPB">
                              <p>Advance Prototyping</p>
                              <span className="__Blueline"></span>
                            </div>
                          </div>
                          <button className="__certifiedBtn">
                            <span>
                              <img src={check_circle} alt="circle" />
                            </span>
                            Certified
                          </button>
                        </div>
                      </div>
                      <div className="__latestInerCard">
                        <div className="flex">
                          <div className="flex-gap">
                            <div className="__LatestProimage">
                              <img src={advancedPrototyping} alt="icon" />
                            </div>
                            <div className="__textPB">
                              <p>Advance Prototyping</p>
                              <span className="__Blueline"></span>
                            </div>
                          </div>
                          <button className="__certifiedBtn">
                            <span>
                              <img src={check_circle} alt="circle" />
                            </span>
                            Certified
                          </button>
                        </div>
                      </div>
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

export default MyTraining;
