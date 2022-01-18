import React from "react";
import { Helmet } from "react-helmet";
import FormValidator from "./../../services/formValidator";
import ValueValidator from "../../services/valueValidator";
import "./contact-us.scss";

interface FormFields {
    fields: {
        name: string;
        email: string;
        phone: string | number;
        option: string;
        message: string;
    },
    errors: {
        [key: string]: boolean
    }
}

const ContactUs = () =>  {

    const {onChangeHandler, onSubmitForm, errors} = FormValidator(ValueValidator);

    return (
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
                                autoComplete="off" onSubmit={onSubmitForm}>
                                <label htmlFor="username">
                                    <input id="username" name="username"
                                        autoComplete="off"
                                        onChange={onChangeHandler}
                                        placeholder="Name" type="text" />
                                </label>
                                {errors.username && errors.username}
                                <div>
                                    <label htmlFor="email">
                                        <input placeholder="Email"
                                            autoComplete="off"
                                            type="email" name="email" id="email" />
                                    </label>
                                    <label htmlFor="phone">
                                        <input type="tel" name="phone"
                                            autoComplete="off"
                                            placeholder="Phone" id="phone" /> </label>
                                </div>
                                <label htmlFor="options" className="select" >
                                    <select name="options" id="options">
                                        <option defaultValue="">Choose an option</option>
                                        <option value="Conversions">Conversions</option>
                                        <option value="Extensions">Extensions</option>
                                        <option value="New builds">Fathoms</option>
                                        <option value="Refurbishments">Refurbishments</option>
                                    </select>
                                </label>
                                <label className="message" htmlFor="message">
                                    <textarea placeholder="Message"
                                        autoComplete="off"
                                        name="message" id="message"></textarea></label>
                                <button type="submit">Send</button>
                            </form>

                            <div className="address-block">
                                <address>
                                    <strong>Deane Property</strong> <br />
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

export default ContactUs;