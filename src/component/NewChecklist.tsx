import React, { useRef } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import upload from "../Assets/imgs/upload.svg";

const NewChecklist = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      // handle upload here
    }
  };
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">New Checklist</div>
              <div
                className="__myTraining"
                style={{ paddingLeft: "40px", paddingRight: "40px" }}
              >
                <div
                  className="billingTop"
                  style={{ justifyContent: "flex-end" }}
                >
                  <div className="csv_pdf">
                    <button className="csv">Export to CSV</button>
                    <button className="pdf_btn">Export to PDF</button>
                  </div>
                </div>
                <div className="__inputField">
                  <label htmlFor="">Checklist Title</label>
                  <input type="text" />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="">Description(Optional)</label>
                  </div>
                  <div className="col-lg-6">
                    <div className="__inputField">
                      <textarea name="" id="">
                        Type Here...
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6  col-md-6">
                    <div className="__inputField">
                      <label htmlFor="">Due Date</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6  col-md-6">
                    <div className="__inputField">
                      <label htmlFor="">Priority</label>
                      <select name="" id="">
                        <option value="">Select</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="">Checklist Type</label>
                  </div>
                  <div className="col-lg-6">
                    <div className="__inputField">
                      <label htmlFor="">Checklist Type</label>
                      <div className="flex-gap">
                        <div className="requiredInput">
                          <input type="text" placeholder="One-Time" />
                          <div className="required">Required?</div>
                        </div>
                        <div className="addItem_btn">+ Add Item</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="__inputField">
                    <input
                      type="text"
                      placeholder="Item Name"
                      className="mb-0"
                    />
                    <input type="text" placeholder="Notes Optional" />
                  </div>
                </div>
                <div className="__inputField">
                  <label htmlFor="">Attachments (Optional)</label>
                  <div className="upload-wrapper">
                    <button className="upload-button" onClick={handleClick}>
                      <span>
                        <img src={upload} alt="upload" />
                      </span>
                      Upload File
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className="__inputField ">
                  <label htmlFor="">Visibility</label>
                  <div className="visibilityInputField">
                    <input type="checkbox" />
                    <span>Department Only</span>
                  </div>
                </div>
                <div className="__inputField ">
                  <label htmlFor="">Reminders</label>
                  <div className="visibilityInputField">
                    <input type="checkbox" />
                    <span>Enable Email Reminder</span>
                  </div>
                </div>
                <div className="create_Checklist">
                  <button>Create Checklist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewChecklist;
