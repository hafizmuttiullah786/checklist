import React, { useEffect, useState } from "react";
import Home from "../component/Home";
import { getUserAllService } from "../services/UsermanagementService";
import { Apinames } from "../utils/Apiname";

type Props = {};

const HomeScreen = (props: Props) => {
  const [mainLoading, setMainLoading] = useState<boolean>(true);
  const [allUserStats, setAllUserStats] = useState<any[]>([]);

  useEffect(() => {
    getuserStats();
  }, []);

  const getuserStats = async () => {
    try {
      const response = await getUserAllService(Apinames.usersStats);
      if (response?.result) {
        let data :any= {
          total: 9,
          active: 20,
          checklistSubmittedThisMonth: 10,
          checklistPendingThisMonth: 20,
        };
        setAllUserStats(data);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setMainLoading(false);
    }
  };
  return <Home mainLoading={mainLoading} allUserStats={allUserStats} />;
};

export default HomeScreen;
