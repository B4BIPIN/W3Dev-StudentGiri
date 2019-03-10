import React from 'react';
import './Navigations.css';
import {NavLink} from 'react-router-dom';
class Navigations extends React.Component {
    render(){
        return(<div className="Navigations">
            <div className="row">
            <div className="ShowHide ShowHideFirst">
            <NavLink to="/classes"><a >Classes</a></NavLink>
            <NavLink to="/contribute"><a >Contribute</a></NavLink>
            <NavLink to="/free"><a >Free Website</a></NavLink>
            <NavLink to="/collaborate"><a >Collaborate</a></NavLink>
            </div>
            </div>
        </div>);
    }
}
export default Navigations;  