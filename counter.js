import React,{ Component } from 'react';
import classes from'./counter.module.css';


class CounterCount extends Component{
  state={
    count:0
  }
  onincrementclick=()=>{
    this.setState({count:this.state.count+1})
    // this.state.count++;
    // console.log(this.state.count)
  }
  ondecrementclick=()=>{
    const updatedVal=this.state.count-1;
    if(updatedVal>=0){
      this.setState({count:this.state.count-1})
    }else{
      this.setState({count:0})
    }
    
  }
    // const videoCard= mArr.map((elem)=>{
      render(){
        return(
          <div className={classes.maindiv}>
            <h1 className={classes.text}>{this.state.count}</h1>
          <button className={classes.btn1}    onClick={this.onincrementclick} >increment</button>
          <button className={classes.btn2} onClick={this.ondecrementclick}>decrement</button>
          </div>
          
  
          
        );
      }
      

    
}

export default CounterCount;
