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


  handleSignUp = () => {
    debugger
    this.setState({signUpClick: !this.state.signUpClick})
  }



  render(){

    return(
        <LoginContainer handleSignUp={this.handleSignUp} onChangeUser={this.props.onChangeUser}/>

    )
  }
}

export default MainPage;
