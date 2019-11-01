import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


class HostFormContainer extends React.Component {

  render(){
    return(
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-event-name'
            control={Input}
            label='Event Name'
            placeholder='First name'
          />
          <Form.Field
            id='form-input-control-event-focus'
            control={Input}
            label='Event Focus'
            placeholder='Event Focus'
          />
        </Form.Group>
        <Form.Field
          id='form-input-control-event-time'
          control={Input}
          label='timeslot'
          placeholder='Example: 9:00AM - 11:00AM'
        />
        <Form.Field
          id='form-textarea-control-event-description'
          control={TextArea}
          label='Description'
          placeholder='Description'
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Confirm'
        />
      </Form>
    )
  }
}

export default HostFormContainer;
