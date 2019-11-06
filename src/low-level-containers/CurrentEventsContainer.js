import React from 'react'
import Event from '../components/Event'
import { Grid, Image } from 'semantic-ui-react'

class CurrentEventsContainer extends React.Component {
  render(){
    return(
      <Grid columns={3} divided>
        <Grid.Row>
        {this.props.events.map((event) =>
            <Grid.Column>
              <Event data={event} key={event.id} handleEventSignUp={this.props.handleEventSignUp}/>
            </Grid.Column>
       )}
       </Grid.Row>
      </Grid>
    )
  }
}
export default CurrentEventsContainer;
