import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


class ExampleContainer extends React.Component {
  render(){
    return(
      <Card>
        <Card.Content header='Examples events' />
        <Card.Content description={
            <ul>
              <li>Road-side trash pick-up</li>
              <li>Canned food drive</li>
              <li>Back to school backpack drive</li>
              <li>Topic Awareness</li>
            </ul>}
        />
        <Card.Content extra>
          <Icon name='move' /> There are many more
        </Card.Content>
      </Card>

    )
  }
}
export default ExampleContainer;
