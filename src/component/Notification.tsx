// import React, { useEffect, useState } from "react";
// import SideBar from "./SideBar";
// import TopBar from "./TopBar";
// import newRequest from "../Assets/imgs/newRequest.svg";
// import document from "../Assets/imgs/doccument.svg";
// import inspection from "../Assets/imgs/inspection.svg";
// import { Apinames } from "../utils/Apiname";
// import { getNotificationAll, readNotifications } from "../services/Notification";


// let hasUnread: boolean | undefined = false;
// const Notification = () => {
//   const [allNotification, setAllNotification] = useState<any[] | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);


//   useEffect(() => {
//     getNotifictions();
//     const intervalId = setInterval(getNotifictions, 300000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const getNotifictions = async () => {
//     try {
//       setError(null);
//       const endpoint = Apinames.notificationAll;
//       const response = await getNotificationAll(endpoint);

//       if (response) {
//         setAllNotification(response.result);
//         hasUnread = allNotification?.some((item) => item.isRead === false);
//         console.log("response.result==>", response.result);
//       }
//     } catch (error) {
//       setError("Failed to load Notification. Please try again later.");
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const readNotifictions = async (id: number, appId: number) => {
//     try {
//       setLoading(true);
//       const endpoint = `${Apinames.notificationRead}?id=${id}`;
//       const response = await readNotifications(endpoint);
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="__dashboard">
//         <div className="__dashboard__wrapper">
//           <SideBar />
//           <div className="__dashboardRightSide">
//             <TopBar />
//             <div className="__dashboardContent">
//               <div className="__pageHeading">Notification</div>
//               <div className="__myTraining">

//                 <div className="notification_card flex">
//                   <div className="flex-gap">
//                     <div className="notification__icon">
//                       <img src={newRequest} alt="" />
//                     </div>
//                     <p>Khayam has submitted a new request </p>
//                   </div>
//                   <div className="hoursAgo">1 hour ago </div>
//                 </div>
//                 <div className="notification_card flex">
//                   <div className="flex-gap">
//                     <div className="notification__icon">
//                       <img src={document} alt="document" />
//                     </div>
//                     <p>Khayam has submitted a new request </p>
//                   </div>
//                   <div className="hoursAgo">1 hour ago </div>
//                 </div>
//                 <div className="notification_card flex">
//                   <div className="flex-gap">
//                     <div className="notification__icon">
//                       <img src={inspection} alt="document" />
//                     </div>
//                     <p>Khayam has submitted a new request </p>
//                   </div>
//                   <div className="hoursAgo">1 hour ago </div>
//                 </div>
//                 <div className="notification_card flex">
//                   <div className="flex-gap">
//                     <div className="notification__icon">
//                       <img src={inspection} alt="document" />
//                     </div>
//                     <p>Khayam has submitted a new request </p>
//                   </div>
//                   <div className="hoursAgo">1 hour ago </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notification;




import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import newRequest from "../Assets/imgs/newRequest.svg";
import document from "../Assets/imgs/doccument.svg";
import inspection from "../Assets/imgs/inspection.svg";
import { Apinames } from "../utils/Apiname";
import { getNotificationAll, readNotifications } from "../services/Notification";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime); // Enables "x time ago"

interface NotificationItem {
  id: number;
  title: string;
  description: string;
  isRead: boolean;
  createdAt: string;
}

const Notification = () => {
  const [allNotification, setAllNotification] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getNotifications();
    const intervalId = setInterval(getNotifications, 300000);
    return () => clearInterval(intervalId);
  }, []);

  const getNotifications = async () => {
    try {
      setError(null);
      const response = await getNotificationAll(Apinames.notificationAll);
      if (response?.result) {
        let data = [
          {
            id: 2,
            title: "Refund Request",
            description: "Refund Request Received",

            isRead: true,
            createdAt: "2025-06-14T18:00:37.60868"
          }
        ]
        setAllNotification(data);
      }
    } catch (error) {
      setError("Failed to load Notification. Please try again later.");
      console.error("Error fetching notifications:", error);
    }
  };

  const readNotifictions = async (id: number) => {
    try {
      setLoading(true);
      await readNotifications(`${Apinames.notificationRead}?id=${id}`);
      getNotifications(); // Refresh list after marking read
    } catch (error) {
      console.error("Error marking notification as read:", error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes("refund")) return document;
    if (title.toLowerCase().includes("inspection")) return inspection;
    return newRequest;
  };

  return (
    <div className="__dashboard">
      <div className="__dashboard__wrapper">
        <SideBar />
        <div className="__dashboardRightSide">
          <TopBar />
          <div className="__dashboardContent">
            <div className="__pageHeading">Notification</div>

            <div className="__myTraining">
              {error && <p style={{ color: "red" }}>{error}</p>}

              {allNotification?.length === 0 ? (
                <p>No notifications found.</p>
              ) : (
                allNotification.map((item) => (
                  <div
                    key={item.id}
                    className={`notification_card flex ${!item.isRead ? "unread" : ""}`}
                    onClick={() => readNotifictions(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex-gap">
                      <div className="notification__icon">
                        <img src={getIcon(item.title)} alt="icon" />
                      </div>
                      <p>{item.description}</p>
                    </div>
                    <div className="hoursAgo">
                      {dayjs(item.createdAt).fromNow()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

