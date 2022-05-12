let intialState = [];
const reducer = (state= intialState, action)=>{
    if(action.type==='addProduct'){
         return ([...state, action.payload])
    }
    else{
        return state;
    }
}

export default reducer;
