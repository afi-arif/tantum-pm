import React, { useEffect, useState } from 'react';
import "./form-status.scss";
import successImage from "../../images/success.jpg";
import errorImage from "../../images/ErrorMessage.jpg";

interface PropQuery {
    isShowConfirm:{status:string|null};
    CancelconfirmPop:() => void;
}

const FormStatus = ({isShowConfirm,CancelconfirmPop}:PropQuery) => {

    useEffect(() => {
        if(isShowConfirm.status !== null){
            document.body.classList.add('pop-on');
            return;
        }
        document.body.classList.remove('pop-on');
    }, [isShowConfirm.status]);

    if(!isShowConfirm.status){
        return null;
    }

    return(
        <>
            <div className="form-status">
                {
                    isShowConfirm.status === "success" && 
                    <div className="success-info sucess">
                        <img src={successImage} />
                        <p>Thanks You!! <small>Your submission has been sent.</small></p>
                        <button onClick={CancelconfirmPop}>OK</button>
                    </div>
                }
                {
                    isShowConfirm.status === "error" &&
                    <div className="form-status">
                    <div className="success-info failure">
                        <img src={errorImage} />
                        <p>Thanks You!! <small>We are finding network error, please try after some time.</small></p>
                        <button onClick={CancelconfirmPop}>OK</button>
                    </div>
                    </div>
                }
            </div>
            
        </>
    )
}

export default FormStatus;
