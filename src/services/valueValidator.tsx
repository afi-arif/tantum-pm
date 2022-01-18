import {FormProps, initialErrorsProps} from "./formValidator";

const ValueValidator = (values:FormProps):FormProps => {
    let errors = {...initialErrorsProps};

    if(!values.username.trim()){
        errors.username = "User name required";
    }else {
        errors.username = '';
    }

    if(!values.email.trim()){
        errors.email = "Email is required";
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(values.email)){
        errors.email = "Email address Invalid";
    } else {
        errors.email = ""
    }
    return errors;
}

export default ValueValidator;

