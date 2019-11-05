import React from 'react'
import LoginContainer from '../low-level-containers/LoginContainer'
import CreateAccountContainer from '../low-level-containers/CreateAccountContainer'


class MainPage extends React.Component {
  constructor(){
    super()

    this.state = {
      signUpClick: false
    }
  }


  render(){

    return(
        <LoginContainer onChangeUser={this.props.onChangeUser} addUser={this.props.addUser}/>

    )
  }
}

export default MainPage;
