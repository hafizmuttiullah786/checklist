import React, { useEffect, useState } from 'react'
import CheckList from '../component/CheckList'
import { getCheckListService } from '../services/CheckListService';
import { Apinames } from '../utils/Apiname';

type Props = {}

const CheckListScreen = (props: Props) => {

    const [allList, setAllList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
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
        }
    };

    const onPressDetailModal = () => {
        console.log("onPressDetailModal called");
        setShow(!show);
    }
    const onPressUserModal = () => setUserShow(!usershow);
    return (
        <CheckList
            show={show}
            onPressDetailModal={onPressDetailModal}
            onPressUserModal={onPressUserModal}
            usershow={usershow}
            allList={allList}
        />
    )
}

export default CheckListScreen