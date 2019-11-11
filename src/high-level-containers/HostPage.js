import React from 'react'
import HostFormContainer from '../low-level-containers/HostFormContainer'
import ExampleContainer from '../low-level-containers/ExampleContainer'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'


class HostPage extends React.Component {
  render(){
    if (this.props.currentUser === null){
      return <Redirect to='/' />
    }
    return(
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <HostFormContainer finishSubmit={this.props.finishSubmit} currentUser={this.props.currentUser}/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <ExampleContainer />
            </Grid.Column>
          </Grid>
          <Divider vertical></Divider>
        </Segment>
    )
  }
}

export default HostPage;
