import React from 'react'
import LoginContainer from '../low-level-containers/LoginContainer'


class MainPage extends React.Component {
  constructor(){
    super()

    this.state = {
      signUpClick: false
    }
  }


  render(){

    return(
      <div className='back'>
        <h1 className='coolwhitetext'> Community-Link </h1>
        <br></br>
        <h3 className='log'>Login / Sign up</h3>
        <LoginContainer onChangeUser={this.props.onChangeUser} addUser={this.props.addUser}/>
      </div>
    )
  }
}

export default MainPage;
