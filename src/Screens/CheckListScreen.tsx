import React, { useEffect, useState } from 'react'
import CheckList from '../component/CheckList'
import { getCheckListQuestionsService, getCheckListResponseService, getCheckListService } from '../services/CheckListService';
import { Apinames } from '../utils/Apiname';

type Props = {}

const CheckListScreen = (props: Props) => {

    const [allList, setAllList] = useState<any[]>([]);
    const [questionList, setQuestionList] = useState<any[]>([]);
    const [responsesList, setResponsesList] = useState<any[]>([]);
    const [selectedChecklistId, setSelectedChecklistId] = useState<number | null>(null);

    const [loading, setLoading] = useState<boolean>(false);
    const [mainLoading, setMainLoading] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);

    const [show, setShow] = useState(false);
    const [usershow, setUserShow] = useState(false);


    useEffect(() => {
        getCheckList();
    }, []);

    const getCheckList = async () => {
        try {
            setError(null);
            const response = await getCheckListService(Apinames.checklistAll);
            if (response?.result) {
                setAllList(response?.result);
            }
        } catch (error) {
            setError("Failed to load List. Please try again later.");
            console.error("Error fetching notifications:", error);
        } finally {
            setMainLoading(false)
        }
    };
    const getQuestionList = async (checklistId: number) => {
        if (
            selectedChecklistId === checklistId &&
            questionList.length > 0
        ) {
            onPressDetailModal();
            return;
        }

        try {

            setError(null);
            setSelectedChecklistId(checklistId);
            setLoading(true);
            let endpoint = `${Apinames.checklistQuestions}?checklistId=${checklistId}`;
            const response = await getCheckListQuestionsService(endpoint);
            if (response?.result) {
                console.log("response", response);
                setQuestionList(response?.result);
                onPressDetailModal()
            }
        } catch (error) {
            setError("Failed to load List. Please try again later.");
            console.error("Error fetching notifications:", error);
        } finally {
            setLoading(false)
        }
    };

    const getResponsesList = async (checklistId: number) => {
        if (
            selectedChecklistId === checklistId &&
            responsesList.length > 0
        ) {
            onPressUserModal(); 
            return;
        }
        try {
            setError(null);
            setSelectedChecklistId(checklistId);
            setLoading(true);
            let endpoint = `${Apinames.checklistResponses}?checklistId=${checklistId}`;
            const response = await getCheckListResponseService(endpoint);
            if (response?.result) {
                setResponsesList(response?.result);
                onPressUserModal();
            }
        } catch (error) {
            setError("Failed to load List. Please try again later.");
            console.error("Error fetching notifications:", error);
        } finally {
            setLoading(false)
        }
    };

    const onPressDetailModal = () => {
        console.log("onPressDetailModal called");
        setShow(!show);
    }
    const onPressUserModal = () => {
        setUserShow(!usershow)
    };
    return (
        <CheckList
            show={show}
            onPressDetailModal={onPressDetailModal}
            onPressUserModal={onPressUserModal}
            usershow={usershow}
            allList={allList}
            questionList={questionList}
            responsesList={responsesList}
            getResponsesList={getResponsesList}
            getQuestionList={getQuestionList}
            loading={loading}
            mainLoading={mainLoading}
        />
    )
}

export default CheckListScreen