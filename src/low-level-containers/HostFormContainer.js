import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


class HostFormContainer extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          name: event.target.name.value,
          focus: event.target.focus.value,
          location: event.target.location.value,
          start_time: event.target.start_time.value,
          end_time: event.target.end_time.value,
          description: event.target.description.value,
          host_id: this.props.currentUser.id })
      })
      .then(res => res.json())
      .then(data => {
        this.props.finishSubmit(data)
      })
      event.target.reset()
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <h2> Host Form</h2>
        <Form.Group widths='equal'>
          <Form.Field
            id='name'
            className='name'
            control={Input}
            label='Event Name'
            placeholder='Event Name'
          />
          <Form.Field
            id='focus'
            className='focus'
            control={Input}
            label='Event Focus'
            placeholder='Event Focus'
          />
        </Form.Group>
        <Form.Field
            id='location'
            className='location'
            control={Input}
            label='Location'
            placeholder='Location'
        />
        <Form.Group widths='equal'>
        <Form.Field
          id='start_time'
          className='start_time'
          control={Input}
          label='Start Time'
          placeholder='Ex. 9:00AM'
        />
        <Form.Field
          id='end_time'
          className='end_time'
          control={Input}
          label='End Time'
          placeholder='Ex. 11:00AM'
        />
        </Form.Group>
        <Form.Field
          id='description'
          className='description'
          control={TextArea}
          label='Description'
          placeholder='Description'
        />
        <Form.Field
          id='form-button'
          control={Button}
          content='Confirm'
        />
      </Form>
    )
  }
}

export default HostFormContainer;
