import {FormProps, initialErrorsProps} from "./formValidator";

const ValueValidator = (values:FormProps):FormProps => {

    let errors = {...initialErrorsProps};

    //username validation
    if(!values.username.trim()){
        errors.username = "User name required";
    }else {
        errors.username = '';
    }
    //email validation
    if(!values.email.trim()){
        errors.email = "Email is required";
    }
    else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
        errors.email = "Email address Invalid";
    } else {
        errors.email = ""
    }

    //phone validation
    if(!/^([+\d+]{3})?[0-9]{10}$/i.test(values.phone)){
        errors.phone = "Phone Number invalid";
    }

    return errors;
}

export default ValueValidator;

