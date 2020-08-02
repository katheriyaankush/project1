import React , {Component} from 'react';
import {connect} from 'react-redux';

import   './Profile.css';
import axios from 'axios';
import Aux from '../../src/hoc/Axiliury/Axilury';
import profilePic from '../Asset/profile.jpg'
import Star from '../Asset/star1.png';
import * as actionType from '../Store/action';







class Profile extends Component{

    state={
        data:[],
        error:false,
        profile:''
        
    };

componentDidMount(){ 
 
  
    axios.get('https://api.github.com/users/supreetsingh247').then(  respose=> {
        

 
       this.props.onProfileAdd(respose.data);
} 
    
    
    ).catch(error=>{
                    
                    
        this.setState({error: false})
                    
 
 });

 axios.get('https://api.github.com/users/supreetsingh247/repos').then(  respose2=> {
        
   
 
    this.props.onData(respose2.data);
} 
    
    
    ).catch(error=>{
                    
                    
        this.setState({error: false})
                    
 
 });





console.log(this.data);
}












render(){
    

  


  
            
  const elemetData = this.props.data.map((data)=>{ 
    let date = data.updated_at;
            return (
               
                
           <div key = {data.node_id}  className = {"mianDiv"}>
            <h2>{data.name}  </h2>
          <div className = {"row"} > <div className = {"col25"} >  <p> {data.language ? data.language : "HTML"} </p> </div>
         <div className = {"col25"} >    <p> <img className={"Star"}  src= {Star} alt="raiting"/> 1 </p> </div> 
            <div className = {"col25"} ><p> {date.toString("MMMM yyyy")}</p> </div>
         </div>
          </div>
      

           )});


    return(
    
    <Aux  >
      

 <div className = {"SideDiv"}>
 
 <img src={profilePic} alt="Profile"/>
    <h3>{this.props.profile.name}</h3>
    <p>{this.props.profile.login} </p>
    <p><button >Follow</button></p>
    <p>  {this.props.profile.followers}  Followers  . {this.props.profile.following} Following  . <img className={"Star"}  src= {Star} alt="raiting"/>  {this.props.profile.followers}  </p>
  
     
</div>
{elemetData}
      
     </Aux>  



    );
}

}

const onStateToProps= state=>{

    return{

        profile:state.profile,
        data:state.data
    }
}
const onDispatchToState= dispatch=>{

    return{

      onProfileAdd: (profile)=>dispatch({type:actionType.PROFILE, profile:profile}),
       onData:(data)=>dispatch({type:actionType.DATA, data:data})
       
    };
};


export default connect(onStateToProps,onDispatchToState)( Profile);