import React from 'react';
import './RouteFirst.css';
import Advertisment from '../../Components/Advertisment/Advertisment';
class RouteFirst extends React.Component {
    render(){
        return(<div  className="RouterFirstTop">
        <div className="RouteFirst">
            <h2>Link1 Clicked</h2>
        </div>
            <Advertisment/>
        </div>);
    }
}
export default RouteFirst; 