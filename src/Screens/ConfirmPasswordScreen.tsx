import React, { useEffect, useState } from 'react'
import ConfirmPassword from '../component/ConfirmPassword'
import { Apinames } from '../utils/Apiname';
import { useLocation, useNavigate } from 'react-router-dom';
import { IConfirmPasswordBody } from '../types/post/Interface';
import { ConfirmPasswordService } from '../services/SignUpService';

type Props = {}

function ConfirmPasswordScreen({ }: Props) {

    const navigate = useNavigate();
    const { state } = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        setIsLoading(true);
        if (state === null) {
            navigate(-1);
            setIsLoading(false);
        }
        setIsLoading(false);
        console.log("state ==>", state);
    }, []);




    const onConfirmPassword = async (confirmPasswordData: { password: string; confirmPassword: string }) => {
        try {
            if (state) {

                let data: IConfirmPasswordBody = {
                    email: state?.signupData.email,
                    otp: state?.signupData.otp,
                    newPassword: confirmPasswordData.password
                }
                let response = await ConfirmPasswordService(Apinames.forgotPasswordUpdatePassword, data);
                if (response.result && response.result.toLowerCase() === "success") {
                    navigate("/login");
                }

            }
        } catch (error) {
            console.log("onSubmitOtpPressed error::", error);
            updateErrorMessage(error);
        }
    };

    const updateErrorMessage = (error?: any) => {
        if (error) setErrorMessage(error);
        else setErrorMessage("");
    };

    return (
        <ConfirmPassword onConfirmPassword={onConfirmPassword} errorMessage={errorMessage} />
    )
}

export default ConfirmPasswordScreen
