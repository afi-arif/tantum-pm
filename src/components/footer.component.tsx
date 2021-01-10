import React, { FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface GlobalForm {
    show:boolean
}

export class Footer extends React.Component<{}, GlobalForm> {

    constructor(props:GlobalForm){
        super(props);
        this.state = {
            show:false
        }
    }
    
    globalForm = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        event.preventDefault();
        this.setState(() => ({show:!this.state.show}));
        if(!this.state.show){
            document.body.classList.add("popon");
            return;
        }
        document.body.classList.remove("popon");
    }

    submitGlobalForm = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void  => {
        event.preventDefault();
        this.globalForm(event);
    }

    render() {
        return (
            <>
                <footer>
                    <p>Bring your next project to life</p>
                    <span>We’re ready, are you?</span>
                    <button onClick={(e) => this.globalForm(e)}>TELL US ABOUT YOUR NEXT PROJECT</button>
                </footer>
                
                <div className={`pop-screen ${this.state.show ? 'show' : ''}`}>
                    <div className="pop-form">
                        <a className="close-form" onClick={(e) => this.globalForm(e)}>close</a>
                        <form>
                            <fieldset>
                                <label htmlFor="name">
                                    <input type="text" placeholder="Name"  name="name" id="name" />
                                </label>
                                <label htmlFor="email">
                                    <input type="email" placeholder="Email"  name="email" id="email" />
                                </label>
                                <label htmlFor="phone"> 
                                <input type="tel" name="phone" 
                                autoComplete="off"
                                placeholder="Phone" id="phone"/> </label>
                            </fieldset>
                            <fieldset>
                            <label className="message" htmlFor="message">
                                <textarea placeholder="Message"
                                autoComplete="off"
                                name="message" id="message"></textarea></label>
                            </fieldset>
                            <div className="submit-form">
                                <button onClick={(e) => this.submitGlobalForm(e)}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}