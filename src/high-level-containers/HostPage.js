import React from 'react'
import HostFormContainer from '../low-level-containers/HostFormContainer'
import ExampleContainer from '../low-level-containers/ExampleContainer'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'


class HostPage extends React.Component {
  constructor(){
    super()

    this.state = {
      redirect: false
    }
  }


  changeHostRedirect = () => {
    this.setState({redirect: true})
  }

  render(){
    if (this.state.redirect){
      return <Redirect to='/' />
    }
    return(
      <div className='hostback'>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable className='backimg'>
            <Grid.Column>
                <HostFormContainer finishSubmit={this.props.finishSubmit} currentUser={this.props.currentUser} changeHostRedirect={this.changeHostRedirect}/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <ExampleContainer />
            </Grid.Column>
          </Grid>
          <Divider vertical></Divider>
        </Segment>
      </div>
    )
  }
}

export default HostPage;
