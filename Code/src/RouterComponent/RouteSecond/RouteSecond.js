import React from 'react';
import './RouteSecond.css';
import Advertisment from '../../Components/Advertisment/Advertisment';
class RouteSecond extends React.Component {
    render(){
        return(<div className="RouteSecondTop">
        <div className="RouteSecond">
        <h2>Link2 Clicked</h2>
        </div>
        <Advertisment/>
        </div>);
    }
}
export default RouteSecond; 