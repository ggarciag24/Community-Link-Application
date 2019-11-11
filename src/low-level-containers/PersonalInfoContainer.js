import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'


class PersonalInfoContainer extends React.Component {
  render(){
    return(
      <Card>
        <Image src={this.props.currentUser.image} wrapped ui={false} />
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
