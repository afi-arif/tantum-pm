import React, { KeyboardEventHandler, useState } from "react";

const FormValidator = (ValueValidator:{(values:{username:string}):{username:string}}) => {

    const [values, setValues] = useState({username:""});
    const [errors, setErrors] = useState({username:""});

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
        const {name, value} = e.target;
        setValues({...values, [name]:value});
    }

    const onSubmitForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(ValueValidator(values))
    }

    return {values, onChangeHandler, onSubmitForm, errors}

}

export default FormValidator;