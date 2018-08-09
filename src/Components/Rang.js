import React,{Component} from 'react'


export default class Rang extends Component
{


render(){

return  (
    <div >
    <h2>Max value</h2>
        <input value={this.props.xValue} onChange={this.props.MaxChange}  type="text" id="max" />
        <h2>Min Value</h2>
        <input value={this.props.mValue }  onChange={this.props.MinChange} type="text" id="min" />
     </div>
    );

}



}