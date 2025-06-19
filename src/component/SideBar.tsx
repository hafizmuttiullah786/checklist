import React, { useState, useEffect } from "react";
import logo from "../Assets/imgs/logo.webp";
import { useLocation } from "react-router-dom";
import home from "../Assets/imgs/home.webp";


const SideBar = () => {
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role"); // e.g., "manager"

  const toggleFormsMenu = () => {
    setIsFormsOpen(!isFormsOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleHandler = () => setIsOpen((prev) => !prev);

    window.addEventListener("toggleSidebar", toggleHandler);

    return () => {
      window.removeEventListener("toggleSidebar", toggleHandler);
    };
  }, []);

  const handleMenuClick = () => {
    window.dispatchEvent(new Event("toggleSidebar"));
  };
  return (
    <>
      <div className={`__sideBar ${isOpen ? "active" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
          <a href="#" className="backArrow" onClick={handleMenuClick}>
            <i className="ri-arrow-left-line"></i>
          </a>
        </div>
        <p className="__menuText">MENU</p>
        <ul className="__menuList">
          {role === "manager" ? (
            <>
              <li>
                <a href="/team-overview?role=manager" className="flex-gap">
                  <i className="ri-team-line"></i>
                  Team Overview
                </a>
              </li>
              <li>
                <a
                  href="/certificate-tracking?role=manager"
                  className="flex-gap"
                >
                  <i className="ri-award-line"></i>
                  Certificate Tracking
                </a>
              </li>
              <li>
                <a href="/submission-report?role=manager" className="flex-gap">
                  <i className="ri-file-list-3-line"></i>
                  Form Submission Reports
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/?role=user" className="flex-gap active">
                  <img src={home} alt="home" />
                  My Profile
                </a>
              </li>
              <li>
                <a href="/training?role=user" className="flex-gap ">
                  <i className="ri-presentation-line"></i>
                  My Training
                </a>
              </li>
              <li>
                <a href="/mycertificates?role=user" className="flex-gap ">
                  <i className="ri-award-line"></i>
                  My Certificates
                </a>
              </li>
              <li>
                <a href="/mydocuments?role=user" className="flex-gap">
                  <i className="ri-article-line"></i>
                  My Documents
                </a>
              </li>
              <li onClick={toggleFormsMenu} className="menu-toggle">
                <i className="ri-survey-line"></i> My Forms
                <div className="down__icon">
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </li>
              {isFormsOpen && (
                <ul className="submenu">
                  <li>
                    <a href="/accidentform?role=user">Accident Form</a>
                  </li>
                  <li>
                    <a href="/expenseform?role=user">Expense Form</a>
                  </li>
                  <li>
                    <a href="/holidayform?role=user">Holiday Form</a>
                  </li>
                </ul>
              )}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
