import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useSearchParams,
  useNavigate,
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
import Home from "./component/Home";
import Billing from "./component/Billing";
import UserManagment from "./component/UserManagment";
import CheckList from "./component/CheckList";
import PaymentInquiry from "./component/PaymentInquiry";
import NewChecklist from "./component/NewChecklist";
import Notification from "./component/Notification"

function App() {
  return (
    <Routes>
      {/* <Route path="/*" element={<Navigate to="/profile" replace />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/user-managment" element={<UserManagment />} />
      <Route path="/check-list" element={<CheckList />} />
      <Route path="/payment-inquiry" element={<PaymentInquiry />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newchecklist" element={<NewChecklist/>} />
      <Route path="/notification" element={<Notification/>} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/forgotpassowrd" element={<ForgotPasswordScreen />} />
      <Route path="/otp" element={<OtpScreen />} />
    </Routes>
  );
}

export default App;
