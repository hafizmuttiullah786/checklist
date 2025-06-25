import React, { useEffect, useState } from "react";
import UserManagment from "../component/UserManagment";
import { Apinames } from "../utils/Apiname";
import {
  addEmployeeService,
  getUserAllService,
} from "../services/UsermanagementService";
import { getCookie } from "../utils/Common";

type Props = {};

const UserManagementScreen = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [mainLoading, setMainLoading] = useState<boolean>(true);
  const [alluserList, setAllUserList] = useState<any[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

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

  const onPressAddEmployee = async (values: any) => {
    try {
      setLoading(true);
      let data = {
        email: values.email,
        password: values.password,
        department: values.department,
        name: values.name,
        type: values.type,
      };
      const response = await addEmployeeService(
        Apinames.usersAddEmployee,
        data
      );
      if (response?.result) {
        getAllUser();
        onPressHandleModal();
      }
    } catch (error) {
      console.log("Error in handleSubmit:", error);
    } finally {
      setLoading(false);
    }
  };
  const onPressHandleModal = () => setShowAddModal(!showAddModal);
  return (
    <UserManagment
      loading={loading}
      mainLoading={mainLoading}
      alluserList={alluserList}
      role={role}
      onPressAddEmployee={onPressAddEmployee}
      showAddModal={showAddModal}
      onPressHandleModal={onPressHandleModal}
    />
  );
};

export default UserManagementScreen;
