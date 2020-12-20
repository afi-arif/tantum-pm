import React from 'react';
import { NavLink} from "react-router-dom";

interface NaviState {
    show:boolean;
}

export class Header extends React.Component<NavLink, NaviState> {
    
    state:NaviState = {
        show:false
    }

    toggle = (e: { preventDefault: () => void; }):void =>{
        e.preventDefault();
        this.setState(prevState => ({name:"newname", show:!prevState.show}));
    }
    render() {
        return (
            <header>
               <h1><a className="hidden tantum-logo" href="#">Welocome to Tantum website</a></h1>
               <div className={"screen " + (this.state.show ? "show":"")}></div>
               <nav className="small">
                   <a className="nav-icon hidden" onClick={this.toggle} href="#">tantum-Menu</a>
                   <ul>
                       <li><NavLink activeClassName="active" to="home">Home</NavLink></li>
                       <li><NavLink to="about-us">About us</NavLink></li>
                       <li><NavLink to="what-we-do">What we do</NavLink></li>
                       <li><NavLink to="projects">Projects</NavLink></li>
                       <li><NavLink to="contacts">Contacts</NavLink></li>
                       <li><a href="#">download browchure</a></li>
                   </ul>
               </nav>
            </header>
        )
    }
}