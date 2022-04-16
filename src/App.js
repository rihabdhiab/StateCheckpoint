import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import MyPic from './profile pic.jpg'


class App extends Component {
  state={
    Person:{
      fullName:'Dhiab Rihab',
      bio:'Bachelor degree in biotechnology',
      imgSrc: MyPic,
      profession:'Web Developer',
    },
    show: false,
  }

 

render(){
return(
  <div className='Profile' >
    <button className='btn' onClick={() => {
      this.setState({ show: !this.state.show });
    }}>Click Me! </button>
  
    {this.state.show ? 
      <>
         <Profile/>
       <p>Seconds since the component was mounted</p>
       <h3> <span>FullName:</span> {this.state.Person.fullName}</h3>
       <h3> <span>Bio:</span> {this.state.Person.bio}</h3>
       <h3> <span>Profession:</span>  {this.state.Person.profession}</h3>
       <img src={MyPic} alt='personelPic' width={'250px'} height={'400px'}/>
      </> 
     : null
    }
  
  
 </div>
)
}
}

  
 
 





export default App;
