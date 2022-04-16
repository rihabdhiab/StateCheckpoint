import { Component } from "react";


class timer extends Component{
  state={
    timer:0
  }
  componentDidMount() {
    this.myInterval=setInterval(()=>{this.setState({
      timer:this.state.timer+1})
  },1000)
  }

componentWillUnmount(){
    clearInterval(this.myInterval)
  }
  render (){
    return( 
    <div> 
     <h2 >{this.state.timer} <span >: </span></h2> 
    </div>)
  }
}

   
export default Timer;


