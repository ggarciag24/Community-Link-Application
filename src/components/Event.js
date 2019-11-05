import React from 'react'
import { Card, Icon, Button, Image} from 'semantic-ui-react'


class Event extends React.Component {
  render(){

    return(
      <Card>
        <Card.Content>
        <Card.Header>{this.props.data.name}</Card.Header>
        <Card.Meta>{this.props.data.location}</Card.Meta>
        <Card.Description> {this.props.data.description} </Card.Description>
        <Card.Description><a><Icon name='calendar alternate outline'/></a>{this.props.data.date} </Card.Description>
        <Card.Description><a><Icon name='time'/></a>{this.props.data.start_time} - {this.props.data.end_time}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
        <Button basic color='green' onClick={() => this.props.handleEventSignUp(this.props.data)}> Sign Up </Button>
        </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Event;
