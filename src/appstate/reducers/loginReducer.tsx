
const reducer=(state=0, action)=>{

    switch(action.type){

        case  "LOGIN-SUCCESS":
            return state + action.payload;
        
        default:
            return state

    }

};

export default reducer;


