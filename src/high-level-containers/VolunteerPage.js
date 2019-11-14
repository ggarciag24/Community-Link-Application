import React from 'react'
import CurrentEventsContainer from '../low-level-containers/CurrentEventsContainer'
import {Search} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'

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
    if (eventObj.host_id === this.props.currentUser.id){
      Swal.fire({
        title: 'Error!',
        text: 'Cannot volunteer on an event you host!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else {
      let filteredEvents = this.props.eventConnect.filter((connect) => connect.event_id === eventObj.id)
      let deepFilter = filteredEvents.filter((filteredEvent) => filteredEvent.volunteer_id === this.props.currentUser.id)
      if(deepFilter.length > 0){
        Swal.fire({
          title: 'Error!',
          text: 'You have already signed up to volunteer for this event!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      } else {
        Swal.fire({
          title: 'Success!',
          text: 'Thank You for Volunteering!',
          icon: 'success',
          confirmButtonText: 'Great!'
        })
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
      <div className='volunteerback'>
      <h1 className='cooltext'> Volunteer Opportunities </h1>
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
      </div>
    )
    }
  }

export default VolunteerPage;
