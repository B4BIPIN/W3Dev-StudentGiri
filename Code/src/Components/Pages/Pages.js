import React from 'react';
import './Pages.css';
import {connect} from 'react-redux';
class Pages extends React.Component{
    render(){
    return(<div className="Classes"> 
        <h2>Youtube Pages</h2>
    </div>);
}
}
function mapStateToProps(state){
    // console.log("this is bipin with my friend",state);
    return {
        wpV2Pages:state.wpV2Pages       
    }
}
export default connect(mapStateToProps)(Pages);