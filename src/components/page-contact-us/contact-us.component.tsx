import React from "react";
import {Helmet} from "react-helmet";
import "./contact-us.scss";

interface FormFields {
    fields:{
        name:string;
        email:string;
        phone:string|number;
        option:string;
        message:string;
    },
    errors:{
        [key:string] : boolean
    }
}

export default class ContactUs extends React.Component<FormFields> {

    state:FormFields;
    initialState:FormFields = {
        fields: {
            name:"",
            email:"",
            phone:"",
            option:"",
            message:""
        },
        errors: {
            name:false,
            email:false,
        }
    }

    constructor(props: FormFields){
        super(props);

        this.state = {
            fields: {...this.initialState.fields},
            errors: {...this.initialState.errors}
        }
    }

    contactSubmit(e:React.FormEvent<HTMLFormElement>):void {
        e.preventDefault();
        if(this.fieldValidation()){
            console.log("Form submitted with" + this.state.fields);
            this.setState(this.initialState);
          }else{
            console.log("Form can't submit with" + this.state.fields);
          }
        }

    fieldValidation(){
        let fields = this.state.fields;
        let errors:any = {};
        let formIsValid = true;

        if(!fields["name"]){
            formIsValid = false;
            errors['name'] = true;
        }

        if(fields["name"].trim().length){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = true;
            }      	
        }

        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = true;
          }

        if(typeof fields["email"] !== "undefined" && fields["email"].length){
            let lastAtPos = this.state.fields["email"].lastIndexOf('@');
            let lastDotPos = this.state.fields["email"].lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = true;
            }
        }
        
        this.setState(() => ({...this.state.errors, errors:errors}));
        console.log(this.state);
        return formIsValid;

    }

    handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, id: string ) =>{
        e.preventDefault();
        const {value} = e.target;
        this.setState(() => ({fields: {...this.state.fields, [id]:value}}));
    }


    render(){
        return(
            <>
            <Helmet>
                <title>Contact tantum project management</title>
                <meta name="description" content="Contact tantum project management" />
            </Helmet>
            <div className="page-contact">
                <div className="tantum-block contact">
                    <div className="contact-form">
                        <div className="pic-entrance">
                            <div></div>
                        </div>
                        <div className="user-form">
                            <h2>Contact Us</h2>
                            <p>If you would like one of our
                            managers to contact you,
                            please fill in the form below
                            and we will be happy to arrange
                            a meeting or site visit.</p>
                            <form name="contactform" 
                            className="contactform" 
                            onSubmit= {this.contactSubmit.bind(this)} autoComplete="off">
                                <label htmlFor="name" className={this.state.errors["name"] ? "error" :""}>
                                    <input id="name" name="name" 
                                    onChange={(e) => this.handleChange(e, "name")}
                                    value={this.state.fields["name"]}
                                    autoComplete="off"
                                    placeholder="Name" type="text"/>
                                </label>
                                <div>
                                <label htmlFor="email" className={this.state.errors["email"] ? "error" :""}>
                                    <input placeholder="Email" 
                                    onChange={(e) => this.handleChange(e, "email")}
                                    value={this.state.fields["email"]}
                                    autoComplete="off"
                                    type="email" name="email" id="email"/>
                                </label>
                                <label htmlFor="phone"> 
                                <input type="tel" name="phone" 
                                onChange={(e) => this.handleChange(e, "phone")}
                                value={this.state.fields["phone"]}
                                autoComplete="off"
                                placeholder="Phone" id="phone"/> </label>
                                </div>
                                <label htmlFor="options" className="select" >
                                    <select name="options" id="options" onChange={(e) => this.handleChange(e, "option")}>
                                        <option defaultValue="">Choose an option</option>
                                        <option value="Conversions">Conversions</option>
                                        <option value="Extensions">Extensions</option>
                                        <option value="New builds">Fathoms</option>
                                        <option value="Refurbishments">Refurbishments</option>
                                    </select>
                                </label>
                                <label className="message" htmlFor="message">
                                    <textarea placeholder="Message" 
                                    value={this.state.fields["message"]}
                                    onChange={(e) => this.handleChange(e, "message")}
                                    autoComplete="off"
                                    name="message" id="message"></textarea></label>
                                <button type="submit">Send</button>
                            </form>
                            
                            <div className="address-block">
                                <address>
                                    <strong>Tantum Property</strong> <br />
                                    Consultants Ltd, <br />
                                    87 Lambeth Walk, <br />
                                    London. SE11 6DX, <br />
                                    United Kingdom
                                </address>
                                <ul>
                                    <li className="phone"><a href="tel:+44 0203 643 6123">0203 643 6123</a></li>
                                    <li className="email"><a href="mailto:Info@tantum-group.com" target="_self">Info@tantum-group.com</a>​</li>
                                    <li className="direction"><a href="https://www.google.co.in/maps/place/Lambeth+Walk,+Bishop's,+London+SE11+6DX,+UK/@51.4944374,-0.116456,17z/data=!3m1!4b1!4m5!3m4!1s0x487604be2c8c1625:0x7a12e784456beaa2!8m2!3d51.4943401!4d-0.1145112?hl=en" target="_blank" rel="noopener">Get directions</a></li>
                                </ul>
                        </div>
                        
                        </div>
                       
                    </div>
                </div>
            </div>
            </>
        )
    }
}