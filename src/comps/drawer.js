import React from 'react';
import "../drawer.scss"
import { Link } from 'react-router-dom';

function Drawer({isDrawerOpen,toggleDrawer}) {
    return (
        <div className={`drawerOverlay ${isDrawerOpen ? 'open' : ''}`} onClick={()=>{toggleDrawer()}}>
        <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
          <div className="drawer-content">
            <Link className='Link' to = "/">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z" stroke="#33363F" stroke-width="2"/>
                        <path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21" stroke="#33363F" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Home</p>
            </Link>
            <Link className='Link' to="messenger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z" stroke="#33363F" stroke-width="2"/>
                        <path d="M9 11L15 11" stroke="#33363F" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                        <path d="M12 15H15" stroke="#33363F" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Messenger</p>
            </Link>
            <Link className='Link' to ="about">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="4" y="6" width="16" height="12" rx="2" stroke="#33363F" stroke-width="2"/>
                            <path d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9" stroke="#33363F" stroke-width="2"/>
            </svg>
            <p>About Us</p>
            </Link>
          </div>
        </div>
        </div>
    )
}

export default Drawer;