import React, { useEffect, useState } from "react";

export interface FormProps {
    username:string;
    email:string;
    phone:string;
}

export const inititalFormProps:FormProps = {
    username:"",
    email:"",
    phone:""
}

export const initialErrorsProps:FormProps = {
    username:'',
    email:'',
    phone:""
}


const FormValidator = (ValueValidator:{(values:FormProps):FormProps}) => {

    const [values, setValues] = useState(inititalFormProps);
    const [errors, setErrors] = useState(inititalFormProps);

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>):void => {
        const {name, value} = e.target;
        setValues({...values, [name]:value});
    }

    const onSubmitForm = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setErrors(ValueValidator(values));
    }

    return {values, onChangeHandler, onSubmitForm, errors}

}

export default FormValidator;