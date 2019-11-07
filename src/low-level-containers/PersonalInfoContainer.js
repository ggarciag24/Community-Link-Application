import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'


class PersonalInfoContainer extends React.Component {
  render(){
    return(
      <Card >
        <Image src='https://www.fillmurray.com/250/250' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.currentUser.name}</Card.Header>
          <Card.Description>
            {this.props.currentUser.bio}
          </Card.Description>
        </Card.Content>
      </Card>


    )
  }
}
export default PersonalInfoContainer;
