import React,{Component} from 'react';

export default class Inc extends Component {
constructor(){
super();
   
this.style = {
   
    color:"white",
    fontSize:"18px",
    padding:"5px",
    margin:"20px" ,
    background:"black",
    cursor:"pointer",
    userSelect: 'none' 
    
    }
}
render(){

return(

    <div style={{padding:"20px"}}>
      
    <span 
    onClick={this.props.inc}
     style={this.style}>
     +</span>
    <b>{this.props.val}</b>
    <span 
    onClick={this.props.dec}
     style={this.style}>
     -</span>
    </div>

);


}




}

