import React, { useState } from "react";
import NewChecklist from "../component/NewChecklist";
import { addCheckListService } from "../services/CheckListService";
import { Apinames } from "../utils/Apiname";
import { Modal, Button } from "react-bootstrap";

const NewChecklistScreen = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleSubmit = async (values: any) => {
        console.log("Form values submitted:", values);
        const formData = new FormData();

        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("duaDateTime", values.duaDateTime);
        formData.append("priority", values.priority);
        formData.append("assignedTo", "ALL");
        formData.append("emailReminder", values.emailReminder.toString());

        if (Array.isArray(values.attachment)) {
            values.attachment.forEach((file: any) => {
                formData.append("attachments", file); // or "attachments[]" if API expects array
            });
        }

        formData.append("data", JSON.stringify(values.data));

        try {
            const response = await addCheckListService(Apinames.checklistAdd, formData);
            if (response?.result) {
                setShowSuccessModal(true);
            }
        } catch (error) {
            console.log("Error in handleSubmit:", error);
            updateErrorMessage(error);
            setShowErrorModal(true);
        }
    };
    const updateErrorMessage = (error?: any) => {
        let msg = "Something went wrong.";
        if (error?.response?.data?.result) {
            msg = error.response.data.result;
        } else if (error?.response?.data?.message) {
            msg = error.response.data.message;
        } else if (error?.message) {
            msg = error.message;
        }
        setErrorMessage(msg);
    };
    return (<>
        <NewChecklist onSubmit={handleSubmit} />;
        {/* ✅ Success Modal */}
        <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Checklist Created</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your checklist has been created successfully!</Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => setShowSuccessModal(false)}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>

        {/* ❌ Error Modal */}
        <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessage}</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => setShowErrorModal(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>)

};

export default NewChecklistScreen;
