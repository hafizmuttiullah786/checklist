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

dayjs.extend(relativeTime);

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


      // const data: NotificationItem[] = [
      //   {
      //     id: 2,
      //     title: "Refund Request",
      //     description: "Refund Request Received",
      //     isRead: true,
      //     createdAt: "2025-06-14T18:00:37.60868"
      //   },
      //   {
      //     id: 1,
      //     title: "Refund Request",
      //     description: "Refund Request Received",
      //     isRead: false,
      //     createdAt: "2025-06-14T18:00:37.60868"
      //   }
      // ];

      if (response?.result) {
        setAllNotification(response?.result);
      }
    } catch (error) {
      setError("Failed to load Notification. Please try again later.");
      console.error("Error fetching notifications:", error);
    }
  };

  const readNotifictions = async (item: NotificationItem) => {
    if (item.isRead) return; // 🔒 Avoid calling if already read

    try {
      setLoading(true);
      await readNotifications(`${Apinames.notificationRead}?id=${item.id}`);
      getNotifications(); // Refresh list
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
                    onClick={() => readNotifictions(item)}
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

