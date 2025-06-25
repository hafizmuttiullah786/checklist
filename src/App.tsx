import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./component/Profile";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import ForgotPasswordScreen from "./Screens/ForgotPasswordScreen";
import OtpScreen from "./Screens/OtpScreen";
import Billing from "./component/Billing";
import PaymentInquiry from "./component/PaymentInquiry";
import Notification from "./component/Notification"
import ConfirmPasswordScreen from "./Screens/ConfirmPasswordScreen";
import NewChecklistScreen from "./Screens/NewChecklistScreen";
import CheckListScreen from "./Screens/CheckListScreen";
import UserManagementScreen from "./Screens/UserManagementScreen";
import AllUserScreen from "./Screens/AllUserScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/login" replace />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/alluser" element={<AllUserScreen />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/usermanagment" element={<UserManagementScreen />} />
      <Route path="/checklist" element={<CheckListScreen />} />
      <Route path="/payment-inquiry" element={<PaymentInquiry />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newchecklist" element={<NewChecklistScreen/>} />
      <Route path="/notification" element={<Notification/>} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
      <Route path="/otp" element={<OtpScreen />} />
      <Route path="/confirmpassword" element={<ConfirmPasswordScreen />} />
    </Routes>
  );
}

export default App;
