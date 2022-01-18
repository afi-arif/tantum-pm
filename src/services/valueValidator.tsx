
const ValueValidator = (values:{username:string}):{username:string} => {
    const errors = {username:''};
    if(!values.username.trim()){
        errors.username = "User name required";
    }
    return errors;
}

export default ValueValidator;