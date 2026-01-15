import React from 'react'
import { Outlet } from 'react-router-dom'

const CreatorDashboard = () => {
  return (
    <div>
      <div>Navbar</div>
      <div>
        <div>Sidebar</div>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default CreatorDashboard
