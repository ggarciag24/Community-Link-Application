import React from 'react'
import { Button, Divider, Form, Grid, Segment, Input } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';


class LoginContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: '',
      redirect: false,
      signupUsername: '',
      signupBio: '',
      signupImage: '',
      signupPassword: ''
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
        this.setState({redirect: true})
      }
      e.target.reset()
    })
  }

  handleSignUpSubmit = (e) => {
    e.persist()
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({name: this.state.signupUsername, bio: this.state.signupBio, image: this.state.signupImage, password: this.state.signupPassword})
    })
    .then(res => res.json())
    .then(data => {
      this.props.onChangeUser(data)
      this.setState({redirect: true})
    })
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to='/profile' />
    }
    return(
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form onSubmit={this.handleLoginSubmit} >
              <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' name='username' onChange={this.handleChange} />
              <Form.Input icon='lock' iconPosition='left' label='Password' type='password' placeholder='Password' name='password' onChange={this.handleChange} />
              <Button content='Login' primary />
            </Form>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Form onSubmit={this.handleSignUpSubmit}>
                <Form.Field
                  id='sign-up-name'
                  className='sign-up-name'
                  control={Input}
                  label='Username'
                  placeholder='username'
                  name='signupUsername'
                  onChange={this.handleChange}
                />
                <Form.Field
                  id='sign-up-bio'
                  className='sign-up-bio'
                  control={Input}
                  label='Bio'
                  placeholder='bio'
                  name='signupBio'
                  onChange={this.handleChange}
                />
              <Form.Field
                  id='sign-up-image'
                  className='sign-up-image'
                  control={Input}
                  label='Image'
                  placeholder='image-url'
                  name='signupImage'
                  onChange={this.handleChange}
              />
              <Form.Field
                  id='sign-up-password'
                  className='sign-up-password'
                  control={Input}
                  label='Password'
                  placeholder='password'
                  name='signupPassword'
                  onChange={this.handleChange}
              />
              <Button content='Sign up' icon='signup' size='big' onClick={this.props.handleSignUp}/>
            </Form>
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    )
  }
}

export default LoginContainer;
