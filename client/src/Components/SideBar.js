import React from 'react'
import { Link } from 'react-router-dom'
import {  MdOutlinePendingActions } from 'react-icons/md'
import {  HiUserAdd } from 'react-icons/hi'
import {  ImStatsBars } from 'react-icons/im'
import {  BsFillChatLeftTextFill, BsFillCalendarEventFill } from 'react-icons/bs'

const SideBar = () => {
  return (
    <div>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <Link to="/" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Clubs</span> </Link>
            <div className="nav_list"> 
              <Link to="/" className="nav_link active"> <ImStatsBars /> <span className="nav_name">Statistics</span></Link> 
              <Link to="/events" className="nav_link "> <BsFillCalendarEventFill /> <span className="nav_name">Evenements(admin)</span></Link> 
              <Link to="/eventsList" className="nav_link "> <HiUserAdd /> <span className="nav_name">participate</span></Link> 
              <Link to="/activity" className="nav_link "> <MdOutlinePendingActions /> <span className="nav_name">Actvivies</span></Link> 
              <Link to="/" className="nav_link "> <BsFillChatLeftTextFill /> <span className="nav_name">Chat</span></Link> 
              {/* <Link to="" className="nav_link "> <FaGem /> <span className="nav_name">Dashboard</span></Link>  */}
            </div>
          </div> <Link to=""  className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </Link>
        </nav>
      </div>
    </div>
  )
}

export default SideBar
