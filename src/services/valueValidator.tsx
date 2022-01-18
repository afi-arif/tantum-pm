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
    else if(!/((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/i.test(values.email)){
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

