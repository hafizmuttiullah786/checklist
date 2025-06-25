import React, { useEffect, useState } from 'react'
import { getCookie } from '../utils/Common';
import { getUserAllService, updateUserAllService } from '../services/UsermanagementService';
import { Apinames } from '../utils/Apiname';
import AllUsermanagement from '../component/AllUsermanagement';

type Props = {}

const AllUserScreen = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [mainLoading, setMainLoading] = useState<boolean>(true);
  const [alluserList, setAllUserList] = useState<any[]>([]);

  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    getAllUser();

    const cookie: any = getCookie("data");
    setRole(cookie.role || null);
  }, []);

   const getAllUser = async () => {
      try {
        const response = await getUserAllService(Apinames.usersAll);
        if (response?.result) {
          setAllUserList(response?.result);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setMainLoading(false);
      }
    };


      const updateUserStatus = async (values: any) => {
        try {
          setLoading(true);
          let data = {
            userId: values.id,
            status: values.status,
          };
          const response = await updateUserAllService(
            Apinames.usersupdateStatus,
            data
          );
          if (response?.result) {
            getAllUser();
          }
        } catch (error) {
          console.log("Error in handleSubmit:", error);
        } finally {
          setLoading(false);
        }
      };
  return (
    <AllUsermanagement
    
      loading={loading}
      mainLoading={mainLoading}
      alluserList={alluserList}
      role={role}
      updateUserStatus={updateUserStatus}
    
      />
  )
}

export default AllUserScreen