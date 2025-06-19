import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import OrangeIcon from "../Assets/imgs/OrangeIcon.webp";
const SaftyAwearness = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">My Training</div>
              <div className="__SaftyAwarness">
                <div className="__awarenessCard">
                  <div className="flex">
                    <div className="flex-gap">
                      <div className="__saftIcon">
                        <img src={OrangeIcon} alt="icon" />
                      </div>
                      <div className="__fsa">
                        <p>Fire Safety Awarness</p>
                        <div className="__saftyBar">
                          <span className="__percent"></span>
                        </div>
                        <div className="__inProgText">In Progress</div>
                      </div>
                    </div>
                    <div>
                      <div className="__duration">Duration</div>
                      <div className="__mins">15 Min</div>
                    </div>
                  </div>
                  <div className="__informationParent">
                    <div className="__infoHeadimg">information</div>
                    <div className="__Assingdates flex">
                      <div className="text-center">
                        <p> Assigned date</p>
                        <span className="__Date">15 Jun 2025 </span>
                      </div>
                      <div className="text-center">
                        <p> Due date</p>
                        <span className="__Date">15 Aug 2025 </span>
                      </div>
                    </div>
                  </div>
                  <div className="__receiveCertificate">
                    Khayam: Complete all the se ctions to receive your
                    certification
                  </div>
                  <button className="__continueBtn">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaftyAwearness;
