import React, { Component } from 'react';
import store from './Store/GiriStore';
import './App.css';
import StudentGiri from './Container/StudentGiri';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(){
    super();
    this.state = {POObject:{},PPObject:{}};
  }
  componentDidMount(){  
    var url1 = "https://studentgiri.com/wp-json/wp/v2/posts/";
    fetch(url1).then(response=>(response.json())).then(json=>{
      // a = json[0]._links["wp:featuredmedia"]; 
      this.setState({POObject:json});
      store.dispatch({
        type:"POObject",
        payLoad:{
          POObject:this.state.POObject
        }
      });         
      
    });

    // var url2 = "https://studentgiri.com/wp-json/wp/v2/pages/";
    // fetch(url2).then(response=>(response.json())).then(json=>{
    //   this.setState({PPObject:json});
    //   store.dispatch({
    //     type:"PPObject",
    //     payLoad:{
    //       PPObject:this.state.PPObject
    //     }
    //   });
    // });
    // axios.get("https://studentgiri.com/wp-json/wp/v2/posts/").then(response=>{console.log("this is my response",response)});
    };
  render() {
    return (
      <div className="container-flow AppDiv">
          <StudentGiri/>
      </div>
    );
  }
}
export default App;
 