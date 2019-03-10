import React from 'react';
import './RouteThird.css';
import Advertisment from '../../Components/Advertisment/Advertisment';
class RouteThird extends React.Component {
    render(){
        return(<div className="RouteThirdTop">
        <div className="RouteThird">
        <h2>Link3 Clicked</h2>
        </div>
        <Advertisment/>
        </div>);
    }
}
export default RouteThird; 