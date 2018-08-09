import React,{Component} from 'react';
import Inc from './Components/Inc';
import Rang from './Components/Rang';
import './App.css'

export default class App extends Component {
  constructor(){
super();


this.state = {
    max : Infinity ,
    min: -Infinity,
    val:0
   }

  }

  init=()=>{
this.setState({vl:0,max:Infinity,min:-Infinity })

  }
  
   onMaxChange=(val)=>{

      if(val< this.state.min){
      this.init()
       
         }

    if(val==""){
      this.setState({
        max:Infinity
          })

    }else if(!isNaN(+val)){
        

          this.setState({
        max:val })
      if(this.state.val > val){
        this.setState({val: +val  })
     
        }
     
      }
      
      }


onMinChange=(val)=>{

 if(val> this.state.max){
  this.init()
   }
      if(val==""){
        this.setState({
          min: -Infinity
            })
  }else  if(!isNaN(+val)){
      
        this.setState({
      min:val
    }) 
    if(this.state.val < val){
      this.setState({ val:+val  })
   
      }
  }  
 }
   

  inc = ()=>{
    this.state.val < this.state.max? this.setState({val:this.state.val+1}) : false  ;
  }

  dec =()=>{
  this.state.val > this.state.min ? this.setState({val:this.state.val-1}): false ;
  }
              
  
   

render(){


    return(
        <div className="container"  >

        <Rang MaxChange={(e)=>this.onMaxChange(e.target.value)} 
        xValue={this.state.max ===  Infinity ?"":this.state.max }
        MinChange = {(e)=>this.onMinChange(e.target.value)}  
        mValue ={this.state.min === -Infinity ?"":this.state.min }
        
         />

        <Inc
        inc = {()=>this.inc()}
        dec = {()=>this.dec()}
        val = {this.state.val}
        />
        </div>
    );



}


}