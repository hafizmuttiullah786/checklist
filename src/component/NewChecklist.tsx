import React, { useRef } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import upload from "../Assets/imgs/upload.svg";
import * as Yup from "yup";
import { Formik, Form, Field, FieldArray } from "formik";


interface Props {
  onSubmit: (values: any) => Promise<void>
}
const ChecklistSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  duaDateTime: Yup.string().required("Due Date is required"),
  priority: Yup.string().required("Priority is required"),
});
const NewChecklist = ({ onSubmit }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
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
              <Formik
                initialValues={{
                  title: "",
                  description: "",
                  duaDateTime: "",
                  priority: "",
                  emailReminder: false,
                  attachment: [],
                  data: {
                    questions: [{ title: "", note: "" }],
                  },
                }}
                validationSchema={ChecklistSchema}
                onSubmit={onSubmit}
              >
                {({ values, setFieldValue, handleChange, errors, touched }) => (
                  <Form>
                    <div className="__inputField">
                      <label htmlFor="">Checklist Title</label>
                      <Field type="text" name="title" />
                      {errors.title && touched.title && (
                        <div className="error">{errors.title}</div>
                      )}
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="">Description(Optional)</label>
                      </div>
                      <div className="col-lg-6">
                        <div className="__inputField">
                          <Field as="textarea" name="description" placeholder="Type Here..." />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6  col-md-6">
                        <div className="__inputField">
                          <label htmlFor="">Due Date</label>
                          <Field type="datetime-local" name="duaDateTime" />
                          {errors.duaDateTime && touched.duaDateTime && (
                            <div className="error">{errors.duaDateTime}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6  col-md-6">
                        <div className="__inputField">
                          <label htmlFor="">Priority</label>
                          <Field as="select" name="priority">
                            <option value="">Select</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                          </Field>
                          {errors.priority && touched.priority && (
                            <div className="error">{errors.priority}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Checklist Questions */}
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="">Checklist Questions</label>
                      </div>
                      <div className="col-lg-6">
                        <div className="__inputField">
                          <FieldArray name="data.questions">
                            {({ push, remove }) => (
                              <>
                                {values.data.questions.map((q, index) => (
                                  <div key={index} className="mb-3">
                                    <div className="flex-gap mb-2">
                                      <input
                                        type="text"
                                        placeholder={`Question ${index + 1}`}
                                        name={`data.questions[${index}].title`}
                                        value={q.title}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                      />
                                      <div className="addItem_btn" onClick={() => remove(index)}>
                                        Remove
                                      </div>
                                    </div>
                                    <input
                                      type="text"
                                      placeholder="Notes (optional)"
                                      name={`data.questions[${index}].note`}
                                      value={q.note}
                                      onChange={handleChange}
                                      className="form-control mt-1"
                                    />
                                  </div>
                                ))}

                                <div
                                  className="addItem_btn mt-2"
                                  onClick={() => push({ title: "", note: "" })}
                                >
                                  + Add Question
                                </div>
                              </>
                            )}
                          </FieldArray>
                        </div>
                      </div>
                    </div>

                    <div className="__inputField">
                      <label htmlFor="">Attachments (Optional)</label>
                      <div className="upload-wrapper">
                        <button
                          type="button"
                          className="upload-button"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <span>
                            <img src={upload} alt="upload" />
                          </span>
                          Upload File
                        </button>
                        <input
                          type="file"
                          multiple
                          accept="image/*,application/pdf"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={(e) => {
                            const files = Array.from(e.currentTarget.files || []);
                            const validFiles = files.filter(
                              (file) =>
                                file.type.startsWith("image/") || file.type === "application/pdf"
                            );
                            if (validFiles.length !== files.length) {
                              alert("Only image and PDF files are allowed.");
                            }
                            // Merge with existing files (to allow multiple selections in steps)
                            setFieldValue("attachment", [...values.attachment, ...validFiles]);
                          }}
                        />

                        {/* 📝 Display list of selected files */}
                        <div className="attachment-preview-list" style={{ marginTop: "10px" }}>
                          {Array.isArray(values.attachment) && values.attachment.length > 0 &&
                            values.attachment.map((file: File, index: number) => (
                              <div
                                key={index}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  padding: "6px 10px",
                                  backgroundColor: "#f4f4f4",
                                  borderRadius: "6px",
                                  marginBottom: "5px",
                                }}
                              >
                                <span>{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = values.attachment.filter((_, i) => i !== index);
                                    setFieldValue("attachment", updated);
                                  }}
                                  style={{
                                    background: "transparent",
                                    border: "none",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    color: "#ff4d4f",
                                  }}
                                >
                                  ❌
                                </button>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>


                    {/* <div className="__inputField ">
                      <label htmlFor="">Visibility</label>
                      <div className="visibilityInputField">
                        <Field type="checkbox" name="visibility" />
                        <span>Department Only</span>
                      </div>
                    </div> */}

                    <div className="__inputField ">
                      <label htmlFor="">Reminders</label>
                      <div className="visibilityInputField">
                        <Field type="checkbox" name="emailReminder" />
                        <span>Enable Email Reminder</span>
                      </div>
                    </div>

                    <div className="create_Checklist">
                      <button type="submit">Create Checklist</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <>
  //     <div className="__dashboard">
  //       <div className="__dashboard__wrapper">
  //         <SideBar />
  //         <div className="__dashboardRightSide">
  //           <TopBar />
  //           <div className="__dashboardContent">
  //             <div className="__pageHeading">New Checklist</div>
  //             <div
  //               className="__myTraining"
  //               style={{ paddingLeft: "40px", paddingRight: "40px" }}
  //             >
  //               {/* <div
  //                 className="billingTop"
  //                 style={{ justifyContent: "flex-end" }}
  //               >
  //                 <div className="csv_pdf">
  //                   <button className="csv">Export to CSV</button>
  //                   <button className="pdf_btn">Export to PDF</button>
  //                 </div>
  //               </div> */}
  //               <div className="__inputField">
  //                 <label htmlFor="">Checklist Title</label>
  //                 <input type="text" />
  //               </div>
  //               <div className="row">
  //                 <div className="col-lg-6">
  //                   <label htmlFor="">Description(Optional)</label>
  //                 </div>
  //                 <div className="col-lg-6">
  //                   <div className="__inputField">
  //                     <textarea name="" id="">
  //                       Type Here...
  //                     </textarea>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="row">
  //                 <div className="col-lg-6  col-md-6">
  //                   <div className="__inputField">
  //                     <label htmlFor="">Due Date</label>
  //                     <input type="text" />
  //                   </div>
  //                 </div>
  //                 <div className="col-lg-6  col-md-6">
  //                   <div className="__inputField">
  //                     <label htmlFor="">Priority</label>
  //                     <select name="" id="">
  //                       <option value="">Select</option>
  //                     </select>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="row">
  //                 <div className="col-lg-6">
  //                   <label htmlFor="">Checklist Type</label>
  //                 </div>
  //                 <div className="col-lg-6">
  //                   <div className="__inputField">
  //                     <label htmlFor="">Checklist Type</label>
  //                     <div className="flex-gap">
  //                       <div className="requiredInput">
  //                         <input type="text" placeholder="One-Time" />
  //                         <div className="required">Required?</div>
  //                       </div>
  //                       <div className="addItem_btn">+ Add Item</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="col-lg-12">
  //                 <div className="__inputField">
  //                   <input
  //                     type="text"
  //                     placeholder="Item Name"
  //                     className="mb-0"
  //                   />
  //                   <input type="text" placeholder="Notes Optional" />
  //                 </div>
  //               </div>
  //               <div className="__inputField">
  //                 <label htmlFor="">Attachments (Optional)</label>
  //                 <div className="upload-wrapper">
  //                   <button className="upload-button" onClick={handleClick}>
  //                     <span>
  //                       <img src={upload} alt="upload" />
  //                     </span>
  //                     Upload File
  //                   </button>
  //                   <input
  //                     type="file"
  //                     ref={fileInputRef}
  //                     style={{ display: "none" }}
  //                     onChange={handleFileChange}
  //                   />
  //                 </div>
  //               </div>
  //               <div className="__inputField ">
  //                 <label htmlFor="">Visibility</label>
  //                 <div className="visibilityInputField">
  //                   <input type="checkbox" />
  //                   <span>Department Only</span>
  //                 </div>
  //               </div>
  //               <div className="__inputField ">
  //                 <label htmlFor="">Reminders</label>
  //                 <div className="visibilityInputField">
  //                   <input type="checkbox" />
  //                   <span>Enable Email Reminder</span>
  //                 </div>
  //               </div>
  //               <div className="create_Checklist">
  //                 <button>Create Checklist</button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );


};

export default NewChecklist;
