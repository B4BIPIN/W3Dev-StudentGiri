import React from 'react';
import './Post.css';
// import DOMPurify from 'dompurify';
// import FontAwesome from 'react-fontawesome';
import store from './../../../Store/GiriStore';
import Parser from 'html-react-parser';
import {NavLink} from 'react-router-dom';
class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {ImgAddress:"data:image/png;base64,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"};

    }
    componentDidMount() {
        fetch(this.props.imgArr.href).then(response=>{
            return response.json();
        }).then(json=>{
            this.setState({ImgAddress:json[0].guid.rendered});
         });
         store.dispatch({
            type:"postContent",
            payLoad:{
                postContent: this.props.content,
                postID: this.props.id,
                postSlug:this.props.slugs
            }
        });
    }
    render() {
        // var parser = new DOMParser();
        // var bipin = 'this.props.excerpt';
        // var xmlDoc = parser.parseFromString(this.props.excerpt,"text/jsx");
        // console.log("this is tagg",tagg);
        var modDate = this.props.date.split("T");
        return (<div className="PostParent">
            <div className="Post">
            <div className="PostLeft">            
            <img src={this.state.ImgAddress} alt="PostImg"/>
            </div>
            <div className="PostRight">
                <p className="PostRightDate"><i class="fa fa-clock-o clock" aria-hidden="true"></i>{modDate[0]}</p>  
                <h4>{this.props.title}</h4>

                {/* {"this is bipin"+tagg} */}
                {/* <button onClick={this.checkHtml.bind(this)}>Click Me </button>s */}
                {/* <div><p dangerouslySetInnerHTML={{__html: this.props.excerpt.rendered }}></p></div> */}
                {/* <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(this.props.excerpt.rendered)}}></div> */}
                {/* <div onClick={this.ManipulateTag.bind(this)}>{Parser(this.props.excerpt.rendered)}</div> */}
                <div>
                {Parser(this.props.excerpt.rendered)}
                <NavLink  exact to={this.props.links} id={this.props.id}>continue reading...</NavLink>
                    {/* {console.log(this.props.links,this.props.content)} */}
                </div>

                {/* <div>{Parser(this.props.content)}</div> */}
                {/* {console.log("this is excerpt ",this.props.excerpt.rendered)} */}
            </div>            
            </div>
            <hr/>
            </div>
        );
    }
}
export default Post;



{/* <img src={"https://www.lifewire.com/thmb/OO7CD06NAdoIwv71DgUgBiTd4ps=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg"} alt="PostImg"/> */}