import React, { useEffect, useState } from 'react';
import "./form-status.scss";
import successImage from "../../images/success.jpg";
import errorImage from "../../images/ErrorMessage.jpg";

interface PropsConfirmPop{
    propIsShowConfirm:boolean;
    confirmPopHandler:() => void
}

const FormStatus = ({propIsShowConfirm,confirmPopHandler}:PropsConfirmPop) => {

    useEffect(() => {
        if(propIsShowConfirm){
            document.body.classList.add('pop-on');
            return;
        }
        document.body.classList.remove('pop-on');
    }, [propIsShowConfirm])

    if(!propIsShowConfirm){
        return (
            <div className="form-status">
            <div className="success-info failure">
                <img src={errorImage} />
                <p>Thanks You!! <small>We are finding network error, please try after some time.</small></p>
                <button onClick={confirmPopHandler}>OK</button>
            </div>
            </div>
        );
    }

    return(
        <>
            <div className="form-status">
                {
                    propIsShowConfirm && 
                    <div className="success-info sucess">
                        <img src={successImage} />
                        <p>Thanks You!! <small>Your submission has been sent.</small></p>
                        <button onClick={confirmPopHandler}>OK</button>
                    </div>
                }
            </div>
            
        </>
    )
}

export default FormStatus;
