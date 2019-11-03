import React from 'react';
import './App.css';
import MainPage from './high-level-containers/MainPage'
import HostPage from './high-level-containers/HostPage'
import VolunteerPage from './high-level-containers/VolunteerPage'
import ProfilePage from './high-level-containers/ProfilePage'
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      events: [],
      activeItem: '',
      currentUser: null
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/events')
    .then(res => res.json())
    .then(data => {
      this.setState({events: data})
    })
  }

  finishSubmit = (data) => {
    this.setState({events: [...this.state.events, data]})
  }

  onChangeUser = (user) => {
    this.setState({currentUser: user})
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return (
      <React.Fragment>
        <Menu stackable>
          <Menu.Item> <img src='https://www.nicepng.com/png/detail/101-1011189_a-stylized-circle-of-people-open-source-community.png' /> </Menu.Item>
          <Menu.Item name='host' active={activeItem === 'host'} onClick={this.handleItemClick}> Host </Menu.Item>
          <Menu.Item name='volunteer' active={activeItem === 'volunteer'} onClick={this.handleItemClick}> Volunteer </Menu.Item>
          <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}> Profile </Menu.Item>
        </Menu>
        <Router>
          <div className="App">
            <Switch>
            <Route exact path="/" render={() => <MainPage onChangeUser={this.onChangeUser}/>} />
            <Route exact path="/host" render={() => <HostPage  finishSubmit={this.finishSubmit} />} />
            <Route exact path="/volunteer" render={() => <VolunteerPage events={this.state.events}/>} />
            <Route exact path="/profile" render={() => <ProfilePage />} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
