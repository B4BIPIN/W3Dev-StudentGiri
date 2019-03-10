import React from 'react';
import './Main.css';
import Posts from '../Posts/Posts';
import Advertisment from '../Advertisment/Advertisment';
import Pages from '../Pages/Pages'; 
class Main extends React.Component {

    render(){
        return (<div className="Main">
        <Pages/>
        <Posts routeProps={this.props}/>
    <Advertisment/>
        </div>);
    }
}
export default Main;   