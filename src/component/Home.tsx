// import React from "react";
// import SideBar from "./SideBar";
// import TopBar from "./TopBar";
// import activeUser from "../Assets/imgs/ativeUser.webp";
// import TotalUser from "../Assets/imgs/TotalUser.webp";
// import uploadDoc from "../Assets/imgs/upload_doc.webp";
// import pendingAction from "../Assets//imgs/pendingAction.webp";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
// } from "chart.js";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title
// );

// interface Props {
//   mainLoading: boolean;
//   allUserStats: any[];
// }
// const Home = ({ mainLoading, allUserStats }: Props) => {
//   // Bar Chart Data
//   const barChartData = {
//     labels: ["Total Users", "Active Users", "Uploaded Docs", "Pending Actions"],
//     datasets: [
//       {
//         label: "Count",
//         data: [58, 28, 13, 35],
//         backgroundColor: ["#7FB3F9", "#FFD48B", "#FF776B", "#20B1A9"],
//         borderRadius: 6,
//         barThickness: 40,
//       },
//     ],
//   };

//   const barChartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: "User & Document Stats",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           precision: 0,
//         },
//       },
//     },
//   };

//   return (
//     <div className="__dashboard">
//       <div className="__dashboard__wrapper">
//         <SideBar />
//         <div className="__dashboardRightSide">
//           <TopBar />
//           <div className="__dashboardContent">
//             <div className="__pageHeading">Overview</div>
//             <div className="user_detail">
//               <div className="user_card green_user_card">
//                 <div className="userIcon">
//                   <img src={activeUser} alt="user" />
//                 </div>
//                 <p>12,457</p>
//                 <span>Active users</span>
//               </div>
//               <div className="user_card purple_card">
//                 <div className="userIcon">
//                   <img src={TotalUser} alt="user" />
//                 </div>
//                 <p>12,457</p>
//                 <span>Total users</span>
//               </div>
//               <div className="user_card yellow_card">
//                 <div className="userIcon">
//                   <img src={uploadDoc} alt="user" />
//                 </div>
//                 <p>12,457</p>
//                 <span>Uploaded Document this month</span>
//               </div>
//               <div className="user_card pending_card">
//                 <div className="userIcon">
//                   <img src={pendingAction} alt="user" />
//                 </div>
//                 <p>12,457</p>
//                 <span>Pending Actions</span>
//               </div>
//             </div>
//             <div className="row mt-4">
//               <div className="col-lg-8">
//                 <div className="__chart">
//                   <Bar data={barChartData} options={barChartOptions} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import activeUser from "../Assets/imgs/ativeUser.webp";
import TotalUser from "../Assets/imgs/TotalUser.webp";
import uploadDoc from "../Assets/imgs/upload_doc.webp";
import pendingAction from "../Assets/imgs/pendingAction.webp";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

interface Props {
  mainLoading: boolean;
  allUserStats: any
}

const Home = ({ mainLoading, allUserStats }: Props) => {
  const barChartData = {
    labels: ["Total Users", "Active Users", "Uploaded Docs", "Pending Actions"],
    datasets: [
      {
        label: "Count",
        data: [
          allUserStats?.total ?? 0,
          allUserStats?.active ?? 0,
          allUserStats?.checklistSubmittedThisMonth ?? 0,
          allUserStats?.checklistPendingThisMonth ?? 0,
        ],
        backgroundColor: ["#7FB3F9", "#20B1A9 ", "#FFD48B", "#FF776B"],
        borderRadius: 6,
        barThickness: 60,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "User & Document Stats",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="__dashboard">
      <div className="__dashboard__wrapper">
        <SideBar />
        <div className="__dashboardRightSide">
          <TopBar />
          <div className="__dashboardContent">
            <div className="__pageHeading">Overview</div>

            <div className="user_detail">
              <div className="user_card green_user_card">
                <div className="userIcon">
                  <img src={activeUser} alt="user" />
                </div>
                <p>{allUserStats?.active ?? 0}</p>
                <span>Active users</span>
              </div>
              <div className="user_card purple_card">
                <div className="userIcon">
                  <img src={TotalUser} alt="user" />
                </div>
                <p>{allUserStats?.total ?? 0}</p>
                <span>Total users</span>
              </div>
              <div className="user_card yellow_card">
                <div className="userIcon">
                  <img src={uploadDoc} alt="user" />
                </div>
                <p>{allUserStats?.checklistSubmittedThisMonth ?? 0}</p>
                <span>Uploaded Document this month</span>
              </div>
              <div className="user_card pending_card">
                <div className="userIcon">
                  <img src={pendingAction} alt="user" />
                </div>
                <p>{allUserStats?.checklistPendingThisMonth ?? 0}</p>
                <span>Pending Actions</span>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-8">
                <div className="__chart">
                  <Bar data={barChartData} options={barChartOptions}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Home;

