const loginReducer = (state = false,action)=>{
    if(action.type === "CKECK_LOGIN"){
        return action.status;
    }
    else{
        return state;
    }
}
export default loginReducer;