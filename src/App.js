import React from 'react';
import './App.css';
import MainPage from './high-level-containers/MainPage'
import HostPage from './high-level-containers/HostPage'
import VolunteerPage from './high-level-containers/VolunteerPage'
import ProfilePage from './high-level-containers/ProfilePage'
import {Route, Switch, Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      events: [],
      users: [],
      activeItem: '',
      currentUser: null,
      eventConnect: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/events')
    .then(res => res.json())
    .then(data => {
      this.setState({events: data})
    })

    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
      this.setState({users: data})
    })

    fetch('http://localhost:3000/volunteer_events')
    .then(res => res.json())
    .then(data => {
      this.setState({eventConnect: data})
    })
  }

  finishVolunteerSignUp = (eventObj) => {
    this.setState({eventConnect: [...this.state.eventConnect, eventObj]})
  }

  finishSubmit = (data) => {
    this.setState({events: [...this.state.events, data]})
  }

  onChangeUser = (user) => {
    this.setState({currentUser: user})
  }

  addUser = (user) => {
    this.setState({users: [...this.state.users, user]})
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return (
      <React.Fragment>
        <Menu stackable>
          <Link to='/'><Menu.Item> <img src='https://www.nicepng.com/png/detail/101-1011189_a-stylized-circle-of-people-open-source-community.png' /> </Menu.Item></Link>
          <Link to='/host'><Menu.Item name='host' active={activeItem === 'host'} onClick={this.handleItemClick}> Host </Menu.Item></Link>
          <Link to='/volunteer'><Menu.Item name='volunteer' active={activeItem === 'volunteer'} onClick={this.handleItemClick}>Volunteer</Menu.Item></Link>
          <Link to='/profile'><Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}> Profile </Menu.Item></Link>
        </Menu>
          <div className="App">
            <Switch>
            <Route exact path="/" render={() => <MainPage onChangeUser={this.onChangeUser} addUser={this.addUser}/>} />
            <Route exact path="/host" render={() => <HostPage  finishSubmit={this.finishSubmit} currentUser={this.state.currentUser}/>} />
            <Route exact path="/volunteer" render={() => <VolunteerPage events={this.state.events} currentUser={this.state.currentUser} eventConnect={this.state.eventConnect} finishVolunteerSignUp={this.finishVolunteerSignUp}/>} />
            <Route exact path="/profile" render={() => <ProfilePage currentUser={this.state.currentUser} events={this.state.events} eventConnect={this.state.eventConnect}/>} />
            </Switch>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
