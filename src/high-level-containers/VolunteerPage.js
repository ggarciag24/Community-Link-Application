import React from 'react'
import CurrentEventsContainer from '../low-level-containers/CurrentEventsContainer'
import {Search} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

class VolunteerPage extends React.Component {

  constructor(){
    super()

    this.state = {
      searchText: '',
      searchResults: [],
      sortby: 'Name',
      redirect: false
    }
  }

  handleEventSignUp = (eventObj) => {
    let filteredEvents = this.props.eventConnect.filter((connect) => connect.event_id === eventObj.id)
    let deepFilter = filteredEvents.filter((filteredEvent) => filteredEvent.volunteer_id === this.props.currentUser.id)
    if(deepFilter.length > 0){
      alert('You have already signed up to volunteer for this event!')
    } else {
      alert('Thank You for Volunteering!')
      fetch('http://localhost:3000/volunteer_events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({currentUser: this.props.currentUser, event: eventObj })
      })
      .then(res => res.json())
      .then(data => {
        this.props.finishVolunteerSignUp(data)
      })
    }
  }

  searchFilter = (e) => {
    let newCollect = [...this.props.events]
    let results = newCollect.filter(indivEvent => indivEvent.name.includes(e.target.value))
    this.setState({searchResults: results, searchText: e.target.value})
  }

  changeSortState = (e) => {
    this.setState({sortby: e.target.value})
  }

  changeRedirect = () => {
    this.setState({redirect: true})
  }


  render(){
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    return(
      <>
      <h1> Volunteer Opportunities </h1>
      <Search onSearchChange={this.searchFilter} showNoResults={false} />
      <br></br>
      <div className='sort-div'>
      <select className='sort' onChange={this.changeSortState}>
        <option>Name</option>
        <option>Focus</option>
      </select>
      <button className='sort-btn' onClick={() => this.props.sortBy(this.state.sortby)} > Sort</button>
      </div>
      <br></br><br></br>
      <CurrentEventsContainer events={this.state.searchText.length === 0 ? this.props.events : this.state.searchResults} handleEventSignUp={this.handleEventSignUp} changeRedirect={this.changeRedirect} currentUser={this.props.currentUser}/>
      </>
    )
    }
  }

export default VolunteerPage;
