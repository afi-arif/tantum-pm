import React from "react";
import "./contact-us.scss";

export default class ContactUs extends React.Component {

    email:string | undefined;

    setEmail = (e:React.ChangeEvent) => {
        e.preventDefault
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
                            <form>
                                <label htmlFor="name"><input id="name" name="name" placeholder="Name" type="text"/></label>
                                <div>
                                <label htmlFor="email"><input value={this.email}  placeholder="Email" onChange={(e) => this.setEmail(e)} type="email" name="email" id="email"/></label>
                                <label htmlFor="phone"> <input type="tel" name="phone" placeholder="Phone" id="phone"/> </label>
                                </div>
                                <label htmlFor="options" className="select" >
                                    <select name="options" id="options">
                                        <option value="" disabled selected>Choose an option</option>
                                        <option value="Metres">Metres</option>
                                        <option value="Feet">Feet</option>
                                        <option value="Fathoms">Fathoms</option>
                                    </select>
                                </label>
                                <label className="message" htmlFor="message"><textarea placeholder="Message" name="message" id="message"></textarea></label>
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