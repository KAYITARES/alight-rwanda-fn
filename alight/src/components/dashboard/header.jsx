import React from "react";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';

// import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderDash({HandleOPenSidebar}){
    return (
        <>
        <header className="header">
        <div className="menu-icon">
        <MenuIcon className = 'icon' onCLick = {HandleOPenSidebar}/>
        </div>
        <div className="header-left">
        <SearchIcon className = 'icon'/>
        </div>
        <div className="header-right">
        <EmailIcon className = 'icon'/>
        <NotificationsActiveIcon className = 'icon'/>
      <span> <img src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-12/morris-chestnut-mc-221220-04-2fbb0d.jpg" alt="profile"/>franklin</span>
        </div>
        </header>
            
        </>
    )
}