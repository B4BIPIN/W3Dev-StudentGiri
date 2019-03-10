import React from 'react';
import Header from '../Components/Header/Header';
import Navigations from '../Components/Navigation/Navigations';
import Main from '../Components/Main/Main';
import {Switch ,Route,withRouter} from 'react-router-dom';
import './StudentGiri.css';
import Parser from 'html-react-parser';
import {connect } from 'react-redux';
import Footer from '../Components/Footer/Footer';
import RouteFirst from '../RouterComponent/RouteFirst/RouteFirst';
import RouteSecond from '../RouterComponent/RouteSecond/RouteSecond';
import RouteThird from '../RouterComponent/RouteThird/RouteThird';
import RouteForth from '../RouterComponent/RouteForth/RouteForth';
import Advertisment from '../Components/Advertisment/Advertisment';
var postRoute;
class StudentGiri extends React.Component{
    componentWillReceiveProps(){
        if(this.props.postContentIDs){
         postRoute = this.props.postContentIDs.map(route=>{
           return (<div>
           <Route path={"/"+route.postSlug} render = {()=>(<div className="PostRoutes">
               <div className="PostLeftRoutes">
               <div className="PostLeftRoutesMainDiv">MainImg</div>
               {Parser(route.postContent.rendered)}
               </div>
               {/* <div className="PostAdvertismentRight"><h2>Advertisment</h2></div> */}
               <div><Advertisment/></div>
           </div>)} />
           </div>)
        })
        }
    }
    render(){
        
        return(
        <div>
            <Header/>
            <Navigations/>
            <Switch>
                <div className="MainLeft"> 
                <Route  exact strict path="/"  component={Main}/>
                <Route  path="/classes" component={RouteFirst} />
                <Route  path="/contribute" component={RouteSecond}/>
                <Route  path="/free" component={RouteThird}/>
                <Route  path="/collaborate" component={RouteForth}/>
                {/* {console.log("this is Routing",postRoute)} */}
                {postRoute}
                </div>
            </Switch>
            <Footer/>
            </div>);
    }

}
function mapStateToPorps(state){
    if(state.postContentIDs.length === 10){
        // console.log("this is State Id",state);
    return {postContentIDs:state.postContentIDs};
    }
}
export default withRouter(connect(mapStateToPorps)(StudentGiri)); 