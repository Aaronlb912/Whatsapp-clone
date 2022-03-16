import React from 'react'
import './sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <AccountCircleIcon/>
            .sidebar

        </div>
        <div className="sidebar__search">

        </div>
        <div className="sidebar__chats">

        </div>
    </div>
  )
}

export default Sidebar