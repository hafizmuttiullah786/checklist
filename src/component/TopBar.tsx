import React, { useEffect, useState } from "react";
import avatar from "../Assets/imgs/avatar.webp";
import { Dropdown } from "react-bootstrap";
import { getCookie, onpressLogoutBtn } from "../utils/Common";
import { Link } from "react-router-dom";
const TopBar = () => {

  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Get user data from cookie
    const cookie: any = getCookie("data");
    if (cookie) {
      try {
        console.log("cookie data:", cookie);
        setUserName(cookie?.name || "User");
      } catch (err) {
        console.error("Invalid cookie data:", err);
      }
    }
  }, []);
  const handleMenuClick = () => {
    window.dispatchEvent(new Event("toggleSidebar"));
  };
  return (
    <>
      <div className="__topBar b-shadow">
        <div className="flex">
          <div>
            <div className="__topHeading">Dashboard</div>
            <div className="menubar" onClick={handleMenuClick}>
              <i className="ri-menu-line"></i>
            </div>
          </div>

          <div className="__TopRightSide flex-gap">
            {/* <div className="__searchInput">
              <input type="text" placeholder="search" />
              <i className="ri-search-line"></i>
            </div> */}

            <Link to="/notification" className="__notificationBar flex-cemter">
              <i className="ri-notification-line"></i>
            </Link>

            <Dropdown>
              <Dropdown.Toggle
                as="div"
                className="__userProfile flex-gap"
                id="dropdown-custom-components"
              >
                <div className="__avatar flex-cemter">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="__userName">
                  {userName || "User"} <i className="ri-arrow-down-s-line"></i>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="userProfilemenu">
                <Dropdown.Item as={Link} to="/profile">
                  <div className="flex-gap">
                    <i className="ri-user-line"></i>
                    My Profile
                  </div>
                </Dropdown.Item>

                <Dropdown.Item>
                  <div className="flex-gap" onClick={() => onpressLogoutBtn()}>
                    <i className="ri-logout-box-r-line"></i>
                    Logout
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
