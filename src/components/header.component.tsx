import React from 'react';
import { NavLink} from "react-router-dom";
import Pdf from "./../doc/tantum-brochure.pdf";

interface NaviState {
    show:boolean;
}

export class Header extends React.Component<React.LinkHTMLAttributes<any>, NaviState> {
    
    state:NaviState = {
        show:false
    }

    toggle = (e:React.MouseEvent):void =>{
        e.preventDefault();
        this.setState(prevState => ({show:!prevState.show}));
    }

    onChangeRoute = ():void => {
        this.setState(prevState => ({show:!prevState.show}));
    }

    render() {
        return (
            <header>
               <h1><NavLink className="hidden tantum-logo" exact to="/">Welocome to Tantum website</NavLink></h1>
               <div className={"screen " + (this.state.show ? "show":"")} onClick={this.onChangeRoute}></div>
               <nav className={" hand-hold small " + (this.state.show ? "show" : "")}>
                   <a className="nav-icon hidden" onClick={this.toggle} href="#">tantum-Menu</a>
                   <ul className="hand-hold">
                       <li><NavLink activeClassName="active" exact to="/" onClick={this.onChangeRoute}>Home</NavLink></li>
                       <li><NavLink to="/about-us" onClick={this.onChangeRoute}>About us</NavLink></li>
                       <li><NavLink to="/what-we-do" onClick={this.onChangeRoute}>What we do</NavLink></li>
                       <li><NavLink to="/projects" onClick={this.onChangeRoute}>Projects</NavLink></li>
                       <li><NavLink to="/contact-us" onClick={this.onChangeRoute}>Contacts</NavLink></li>
                       <li><a href={Pdf} target="_blank" onClick={this.onChangeRoute}>download <span>browchure</span></a></li>
                   </ul>
               </nav>
               <nav className="no-hand-hold">
                   <ul >
                       <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                       <li><NavLink to="/about-us">About us</NavLink></li>
                       <li><NavLink to="/what-we-do">What we do</NavLink></li>
                       <li><NavLink to="/projects">Projects</NavLink></li>
                       <li><NavLink to="/contact-us">Contacts</NavLink></li>
                       <li><a href={Pdf} target="_blank">download <span>browchure</span></a></li>
                   </ul>
               </nav>
            </header>
        )
    }
}