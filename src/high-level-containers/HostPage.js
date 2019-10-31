import React from 'react'
import HostFormContainer from '../low-level-containers/HostFormContainer'
import ExampleContainer from '../low-level-containers/ExampleContainer'

class HostPage extends React.Component {
  render(){

    return(
        <div>
        <HostFormContainer />
        <ExampleContainer />
        </div>
    )
  }
}

export default HostPage;
