import React from 'react';
import './Posts.css';
import Post from './Post/Post';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
var cwrp = false;
var NextProps;
class Posts extends React.Component{
  constructor(props){
      super(props);
      this.state = {Posts:[],contentIdArr:[]};
}
componentDidMount(){
    if(cwrp){
        this.setState({Posts:[...NextProps.wpV2Posts[0]]});
        // cwrp = false;
    }
    // cwrp = false;
}
  componentWillReceiveProps(nextProps){
      NextProps  = nextProps;
        // if(nextProps.wpV2Posts.length === 1){
            this.setState({Posts:[...nextProps.wpV2Posts[0]]});
            cwrp = true;
            // }
}
render(){
    
    return(
        <div className="Posts">
        <div className="PostsHeader"><h4>Recent Posts</h4></div>
        <div className="PostsData">
        { this.state.Posts.map(post=>{
            // {console.log("this is Img Address",post._links["wp:attachment"][0].href)}
return ( <div>
    <Post id={post.id} imgArr={post._links["wp:attachment"][0]} date={post.date} links={this.props.routeProps.match.url                   +post.slug} title={post.title.rendered} excerpt={post.excerpt} content = {post.content} slugs={post.slug}/>
    </div>);
       })}
        </div>
        </div>);
}
}
function mapStateToProps(State){
    // console.log("application data",State);
    return {
        wpV2Posts:State.wpV2Posts
    }
}
export default  withRouter(connect(mapStateToProps)(Posts));
// this.props.wpV2Pages[0].POObject


