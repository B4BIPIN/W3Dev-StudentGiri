import React from 'react';
import './Header.css';
class Header extends React.Component {
    render(){
        return (<div className="Header container-clearfix">
            <a href="/"><img className="" src={require('./../../Assets/Logo.png')} alt="ImgLogo"/></a>
        </div>);
    }
}
export default Header;  