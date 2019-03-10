const initialState = {
    wpV2Posts:[],
    wpV2Pages:[],
    postContentIDs:[]

};
var tempPostArr = [];
var tempPageArr = [];
var tempPostContent = [];
const GiriReducer = (state=initialState,action)=> {
    tempPostArr = [...tempPostArr];
    tempPageArr = [...tempPageArr];
    tempPostContent = [...tempPostContent];
   if(action.type === "POObject"){       
    tempPostArr.push(action.payLoad.POObject);
        // state.wpV2Posts.push(action.payLoad.POObject);
    // console.log("this is temp1",tempPostArr,tempPageArr,tempPostContent);
       return { 
            wpV2Posts: tempPostArr,
            wpV2Pages: state.wpV2Pages,
            postContentIDs: state.postContentIDs
       }
   }
   else if(action.type === "PPObject"){
       tempPageArr.push(action.payLoad.PPObject);
    //    console.log("PO",tempPostArr,tempPageArr);
    // console.log("this is temp2",tempPostArr,tempPageArr,tempPostContent);
       return {
        wpV2Posts: state.wpV2Posts,
        wpV2Pages: tempPageArr,
        postContentIDs: state.postContentIDs
       }
   }
   else if(action.type === "postContent"){
    // console.log("this is temp3",tempPostArr,tempPageArr,tempPostContent);

        // console.log("action payload", action.payLoad);
        tempPostContent.push(action.payLoad);
        // console.log(action.payLoad,state.postContentIDs);
        // state.postContentIDs.push(action.payLoad);
        // console.log("this is my posttemp",tempPostContent);
        // console.log("this is my statePost",state.wpV2Posts);
        // console.log("this is my statepage",state.wpV2Pages);
        return {
            wpV2Posts: state.wpV2Posts,
        wpV2Pages: state.wpV2Pages,
        // wpV2Posts:tempPostArr,
        // wpV2Pages:tempPageArr,
        postContentIDs:tempPostContent
        }
   }
   else {
    // console.log("this is temp4",tempPostArr,tempPageArr,tempPostContent);
       return {
           wpV2Posts: state.wpV2Posts,
            wpV2Pages: state.wpV2Pages,
            postContentIDs: state.postContentIDs
       }
   }
}
export default GiriReducer;