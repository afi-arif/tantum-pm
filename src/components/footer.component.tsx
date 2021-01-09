import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <p>Bring your next project to life</p>
                    <span>We’re ready, are you?</span>
                    <button>TELL US ABOUT YOUR NEXT PROJECT</button>
                </footer>
                <div className="pop-screen">
                    <div className="pop-form">
                        <form>
                            <fieldset>
                                <label htmlFor="name"><input type="text" name="name" id="name" /></label>
                                <label htmlFor="email"><input type="email" name="email" id="email" /></label>
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
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}