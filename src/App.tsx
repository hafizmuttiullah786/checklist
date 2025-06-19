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
import MyTraining from "./component/MyTraining";
import SaftyAwearness from "./component/SaftyAwearness";
import MyCertificates from "./component/MyCertificates";
import MyDocuments from "./component/MyDocuments";
import AccidentForm from "./component/AccidentForm";
import ExpenseForm from "./component/ExpenseForm";
import HolidayForm from "./component/HolidayForm";
import TeamOverview from "./component/TeamOverview";
import CertificateTracking from "./component/CertificateTracking";
import SubmissionReport from "./component/SubmissionReport";
import SignUp from "./component/SignUp";
import ForgotPassword from "./component/ForgotPassword";
import Otp from "./component/Otp";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/profile" replace />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/training" element={<MyTraining />} />
      <Route path="/safty" element={<SaftyAwearness />} />
      <Route path="/mycertificates" element={<MyCertificates />} />
      <Route path="/mydocuments" element={<MyDocuments />} />
      <Route path="/accidentform" element={<AccidentForm />} />
      <Route path="/expenseform" element={<ExpenseForm />} />
      <Route path="/holidayform" element={<HolidayForm />} />
      <Route path="/team-overview" element={<TeamOverview />} />
      <Route path="/certificate-tracking" element={<CertificateTracking />} />
      <Route path="/submission-report" element={<SubmissionReport />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotpassowrd" element={<ForgotPassword />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  );
}

export default App;
