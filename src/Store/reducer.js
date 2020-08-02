import * as actionType from './action';
const initialState = {
    data:[],
    error:false,
    profile:''
    
};

const reducer=(state=initialState,action)=>{

  console.log("HIII",action.type);

switch (action.type) {
    case actionType.PROFILE:
    console.log("NAME==",action.profile);
     
    return{
        
             ...state,
             profile: action.profile
    
    }
        
      case actionType.DATA:
        console.log("Delete==",action.data);
     
     
      return{
         ...state,
         data: action.data
      }

}


return state;

}

export default reducer;