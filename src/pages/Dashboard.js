import React from 'react'
import Welcome from '../components/Dashboard/Welcome'
import UserData from '../components/Dashboard/UserData'
// import MembersOnLeaveTable from '../components/Dashboard/MembersOnLeaveTable'
const Dashboard = () => {
  return (
    <div>
      <Welcome/>
      <UserData/>
      {/* <MembersOnLeaveTable/> */}
    </div>
  )
}

export default Dashboard
