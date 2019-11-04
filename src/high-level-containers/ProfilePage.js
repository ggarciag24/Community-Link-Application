import React from 'react'
import PersonalInfoContainer from '../low-level-containers/PersonalInfoContainer'
import ActivityLogContainer from '../low-level-containers/ActivityLogContainer'
import {Segment, Grid, Divider} from 'semantic-ui-react'

class ProfilePage extends React.Component {
  render(){

    return(
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column >
              <PersonalInfoContainer currentUser={this.props.currentUser} />
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <ActivityLogContainer currentUser={this.props.currentUser} />
            </Grid.Column>
          </Grid>
          <Divider vertical></Divider>
        </Segment>
    )
  }
}

export default ProfilePage;
