import { FC } from "react";

const ValueValidator = (values:{username:string}) => {
    const errors = {username:''};
    if(!values.username.trim()){
        errors.username = "User name required";
    }
    return errors;
}

export default ValueValidator;