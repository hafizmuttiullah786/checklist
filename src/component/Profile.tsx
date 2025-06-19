import React from 'react'
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import profileAvatar from "../Assets/imgs/profileAvatar.webp"
const Profile = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">Profile</div>
              <div className="__profileparent">
                <div className="__profileTop"></div>
                <div className="__profileDetail flex-cemter">
                  <div className="__editProfile">
                    <div>
                      <div className="__profileAvatar">
                        <img src={profileAvatar} alt="avatar" />
                      </div>
                      <div className="__profileuserName">Khayam</div>
                      <div className="__userjob">Ui Ux Designer</div>
                    </div>
                    <button className="__editBtn">Edit</button>
                  </div>
                  <div className="__userDetailBox">
                    <div className="flex">
                      <div className="__leftSide">
                        <div className="__detail">
                          <p>Email</p>
                          <span>abcd1234@gmail.com</span>
                        </div>
                        <div className="__detail mb-0">
                          <p>Email</p>
                          <span>abcd1234@gmail.com</span>
                        </div>
                      </div>
                      <div className="__rightSide">
                        <div className="__detail">
                          <p>Phone</p>
                          <span>+1 (123) 456-7890</span>
                        </div>

                        <div className="__detail mb-0">
                          <p>Location</p>
                          <span>San Francico, CA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="__aboutMe">About Me</div>
                  <div className="__aboutContent">
                    Passionate UI/UX Designer with experience of crafting
                    attractive interfaces and delightful user experiences.
                  </div>
                  <div className="__socialIcons flex-gap">
                    <a href='#' className="__icon">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href='#' className="__icon">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href='#' className="__icon">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href='#' className="__icon">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href='#' className="__icon">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href='#' className="__icon">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile
