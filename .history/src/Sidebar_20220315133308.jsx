import React from 'react'
import './sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Chat, DonutLarge } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <AccountCircleIcon/>
            <div className="sidebar__headerRight">
                <DonutLarge/>
                <Chat/>
                <
            </div>

        </div>
        <div className="sidebar__search">

        </div>
        <div className="sidebar__chats">

        </div>
    </div>
  )
}

export default Sidebar