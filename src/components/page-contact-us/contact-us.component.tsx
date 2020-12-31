import React from "react";
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
        [key:string] : string
    }
}

export default class ContactUs extends React.Component<FormFields> {

    state:FormFields;

    constructor(props: FormFields){
        super(props);

        this.state = {
            fields: {
                name:"",
                email:"",
                phone:"",
                option:"",
                message:""
            },
            errors: {
                name:"",
                email:"",
                phone:"",
                option:"",
                message:""
            }
        }
    }

    contactSubmit(e:React.FormEvent<HTMLFormElement>):void {
        e.preventDefault();
        if(this.fieldValidation()){
            alert("Form submitted");
          }else{
            alert("Form has errors.")
          }
      
        console.log("form values", this.state);
    }

    fieldValidation(){
        let fields = this.state.fields;
        let errors:any = {};
        let formIsValid = true;

        if(!fields["name"]){
            formIsValid = false;
            errors['name'] = "Cannot be empty";
        }

        if(fields["name"].trim().length){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
            }      	
        }

        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
          }

        if(typeof fields["email"] !== "undefined" && fields["email"].length){
            let lastAtPos = this.state.fields["email"].lastIndexOf('@');
            let lastDotPos = this.state.fields["email"].lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
        console.log(this.state);
        this.setState(() => ({...this.state.errors, errors:errors}));
        return formIsValid;

    }

    handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>, id: string ) =>{
        e.preventDefault();
        const {value} = e.target;
        this.setState(() => ({fields: {...this.state.fields, [id]:value}}));
    }


    render(){
        return(
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
                            onSubmit= {this.contactSubmit.bind(this)} >
                                <label htmlFor="name">
                                    <input id="name" name="name" 
                                    onChange={(e) => this.handleChange(e, "name")}
                                    value={this.state.fields["name"]}
                                    autoComplete="off"
                                    placeholder="Name" type="text"/>
                                </label>
                                <span className="error">{this.state.errors["name"]}</span>
                                <div>
                                <label htmlFor="email">
                                    <input placeholder="Email" 
                                    onChange={(e) => this.handleChange(e, "email")}
                                    value={this.state.fields["email"]}
                                    type="email" name="email" id="email"/>
                                </label>
                                <span className="error">{this.state.errors["email"]}</span>
                                <label htmlFor="phone"> 
                                <input type="tel" name="phone" 
                                onChange={(e) => this.handleChange(e, "phone")}
                                value={this.state.fields["phone"]}
                                placeholder="Phone" id="phone"/> </label>
                                </div>
                                <label htmlFor="options" className="select" >
                                    <select name="options" id="options" onChange={(e) => this.handleChange(e, "option")}>
                                        <option value="">Choose an option</option>
                                        <option value="Metres">Metres</option>
                                        <option value="Feet">Feet</option>
                                        <option value="Fathoms">Fathoms</option>
                                    </select>
                                </label>
                                <label className="message" htmlFor="message">
                                    <textarea placeholder="Message" 
                                    value={this.state.fields["message"]}
                                    onChange={(e) => this.handleChange(e, "message")}
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
                                    <li className="email"><a href="mailto:enquires@tantumproperty.co.uk" target="_self">info@tantummanagement.co.uk</a>​</li>
                                    <li className="direction"><a href="https://www.google.co.in/maps/place/Lambeth+Walk,+Bishop's,+London+SE11+6DX,+UK/@51.4944374,-0.116456,17z/data=!3m1!4b1!4m5!3m4!1s0x487604be2c8c1625:0x7a12e784456beaa2!8m2!3d51.4943401!4d-0.1145112?hl=en" target="_blank" rel="noopener">Get directions</a></li>
                                </ul>
                        </div>
                        
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}