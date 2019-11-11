import React from 'react'
import PersonalInfoContainer from '../low-level-containers/PersonalInfoContainer'
import ActivityLogContainer from '../low-level-containers/ActivityLogContainer'
import {Segment, Grid, Divider} from 'semantic-ui-react'

class ProfilePage extends React.Component {
  render(){

    return(
      <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column width={2}>
              </Grid.Column>
            <Grid.Column width={4}>
              <PersonalInfoContainer currentUser={this.props.currentUser} />
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <ActivityLogContainer currentUser={this.props.currentUser} events={this.props.events} eventConnect={this.props.eventConnect} finishUnvolunteerSubmit={this.props.finishUnvolunteerSubmit} finishCancel={this.props.finishCancel}/>
            </Grid.Column>
          </Grid>
      </Segment>



    )
  }
}

export default ProfilePage;
