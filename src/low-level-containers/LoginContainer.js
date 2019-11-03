import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

class LoginContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e, {name, value}) => {
      this.setState({[name]: value})
  };

  handleLoginSubmit = (e) => {
    e.persist()
    e.preventDefault()
    fetch('http://localhost:3000/fakelogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert('Invalid Login information')
      } else {
        this.props.onChangeUser(data)
      }
      e.target.reset()
    })
  }

  render(){

    return(
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form onSubmit={this.handleLoginSubmit} >
              <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' name='username' onChange={this.handleChange} />
              <Form.Input icon='lock' iconPosition='left' label='Password' type='password' name='password' onChange={this.handleChange} />
              <Button content='Login' primary />
            </Form>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Button content='Sign up' icon='signup' size='big' onClick={this.props.handleSignUp}/>
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    )
  }
}

export default LoginContainer;
