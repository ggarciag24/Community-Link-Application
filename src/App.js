import React from 'react';
import './App.css';
import MainPage from './high-level-containers/MainPage'
import HostPage from './high-level-containers/HostPage'
import VolunteerPage from './high-level-containers/VolunteerPage'
import ProfilePage from './high-level-containers/ProfilePage'
import {Route, Switch, Link, Redirect} from 'react-router-dom';
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

    if (window.localStorage.getItem('user') && window.localStorage.getItem('pw')){
      fetch('http://localhost:3000/fakelogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({username: window.localStorage.getItem('user'), password: window.localStorage.getItem('pw')})
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          alert('Invalid Login information')
        } else {
          this.onChangeUser(data)
        }
      })
    }
  }

  finishVolunteerSignUp = (eventObj) => {
    this.setState({eventConnect: [...this.state.eventConnect, eventObj]})
  }

  finishSubmit = (data) => {
    this.setState({events: [...this.state.events, data]})
  }

  onChangeUser = (user) => {
    this.setState({currentUser: user})
    window.localStorage.setItem('user', `${this.state.currentUser.name}`)
    window.localStorage.setItem('pw', `${this.state.currentUser.password}`)
  }

  addUser = (user) => {
    this.setState({users: [...this.state.users, user]})
    window.localStorage.setItem('user', `${this.state.currentUser.name}`)
  }

  finishUnvolunteerSubmit = (data) => {
    this.setState({eventConnect: this.state.eventConnect.filter(con => con.id != data.id)})
  }

  finishCancel = (data) => {
    let updatedCon = this.state.eventConnect.filter(con => con.id != data.connect.id)
    let updatedEvents = this.state.events.filter(con => con.id != data.event.id)
    this.setState({eventConnect: updatedCon, events: updatedEvents})
  }

  logout = (e) => {
    this.setState({currentUser: null})
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('pw')
  }

  sortBy = (sortvalue) => {
    let copyOfEvents = [...this.state.events]
    if (sortvalue === 'Name'){
      this.setState({events: copyOfEvents.sort((a,b) => a.name > b.name ? 1 : -1)})
    } else if (sortvalue === 'Focus') {
      this.setState({events: copyOfEvents.sort((a,b) => a.focus > b.focus ? 1 : -1)})
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return (
      <React.Fragment>
        <Menu stackable>
          <Link to='/'><Menu.Item> <img src='http://www.upsctoday.com/wp-content/uploads/2018/05/Community.png' /> </Menu.Item></Link>
          <Link to='/host'><Menu.Item className='cooltext' name='host' active={activeItem === 'host'} onClick={this.handleItemClick}> Host </Menu.Item></Link>
          <Link to='/volunteer'><Menu.Item className='cooltext' name='volunteer' active={activeItem === 'volunteer'} onClick={this.handleItemClick}>Volunteer</Menu.Item></Link>
          <Link to='/profile'><Menu.Item className='cooltext' name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}> Profile </Menu.Item></Link>

          { this.state.currentUser ? <Menu.Item className='cooltext' name='logout' onClick={this.logout} position='right'>Logout </Menu.Item> : null}
        </Menu>
          <div className="App">
            <Switch>
            <Route exact path="/" render={() => <MainPage onChangeUser={this.onChangeUser} addUser={this.addUser}/>} />
            <Route exact path="/host" render={() => <HostPage  finishSubmit={this.finishSubmit} currentUser={this.state.currentUser}/>} />
            <Route exact path="/volunteer" render={() => <VolunteerPage events={this.state.events} currentUser={this.state.currentUser} eventConnect={this.state.eventConnect} finishVolunteerSignUp={this.finishVolunteerSignUp} sortBy={this.sortBy}/>} />
            <Route exact path="/profile" render={() => <ProfilePage currentUser={this.state.currentUser} events={this.state.events} eventConnect={this.state.eventConnect} finishUnvolunteerSubmit={this.finishUnvolunteerSubmit} finishCancel={this.finishCancel}/>} />
            </Switch>
          </div>
          {this.state.currentUser ?
             <Redirect to='/profile' />
             : null }
      </React.Fragment>
    );
  }
}

export default App;
