import React from 'react'
import PersonalInfoContainer from '../low-level-containers/PersonalInfoContainer'
import ActivityLogContainer from '../low-level-containers/ActivityLogContainer'

class ProfilePage extends React.Component {
  render(){

    return(
        <div>
        <PersonalInfoContainer />
        <ActivityLogContainer />
        </div>
    )
  }
}

export default ProfilePage;
