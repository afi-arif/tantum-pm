import React, { useEffect, useState } from "react";

export interface FormProps{
    username:string;
    email:string;
    phone:string;
    option?:string;
    message?:string;
}

export const inititalFormProps:FormProps = {
    username:'',
    email:'',
    phone:"",
    option:"",
    message:""
}

export const initialErrorsProps:FormProps = {
    username:'',
    email:'',
    phone:"",
    option:"",
    message:""
}

const FormValidator = (callback:()=>void,ValueValidator:{(values:FormProps):FormProps}) => {

    const [values, setValues] = useState(inititalFormProps);
    const [errors, setErrors] = useState(inititalFormProps);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>):void => {
        const {name, value} = e.target;
        setValues({...values, [name]:value});
    }

    const onSubmitForm = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setErrors(ValueValidator(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        let isErrorsExist = Object.values(errors).filter(e => e!== '').length;
        if(isErrorsExist === 0 && isSubmitting){
            callback();
        }
    },[errors])

    return {values, setValues, onChangeHandler, onSubmitForm, errors}

}

export default FormValidator;