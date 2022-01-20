import React, { useEffect, useState } from 'react';
import "./form-status.scss";

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
        return null;
    }

    return(
        <>
            <div className="form-status">
                form status
                <button onClick={confirmPopHandler}>Cancel</button>
            </div>
            
        </>
    )
}

export default FormStatus;
