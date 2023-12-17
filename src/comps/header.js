import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import "../header.scss"
import logo from "../logo.svg"
function Header({toggleDrawer,isDrawerOpen,setIsDrawerOpen}) {
    const [Windowwidth,setWindowwidth] = useState(window.innerWidth)
    const [res,setres] = useState(
        <header>
        <div className='LeftHeaderComps'>
            <Link to="/"><img src={logo} alt='Logo' className="logo"/></Link>
            
        </div>
        <div className='RightHeaderComps'>
        <svg xmlns="http://www.w3.org/2000/svg" className='AccountSvg' width="50" height="50" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="10" r="3" stroke="#222222" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="9" stroke="#222222"/>
            <path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#222222" strokeLinecap="round"/>
        </svg>
        </div>
        
        
    </header>
    )
    useEffect(() =>{
        setWindowwidth(window.innerWidth) 
        window.addEventListener('resize', () => {
            setWindowwidth(window.innerWidth)
        });
        if (Windowwidth <768){
            setres(<header>
                
                <div className='LeftHeaderComps'>
                <label className="hamburger">
                    <input type="checkbox" checked={isDrawerOpen} onClick={()=>{toggleDrawer()}}

                    />
                    
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                    >
                        <path
                            d="M3 12h18m-18-5h18m-18 10h18"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                </label>
                </div>
                <div className='RightHeaderComps'>
                <svg xmlns="http://www.w3.org/2000/svg" className='AccountSvg' width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="10" r="3" stroke="#222222" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="9" stroke="#222222"/>
                    <path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#222222" strokeLinecap="round"/>
                </svg>
                </div>
                
                
            </header>);
        }
        if (Windowwidth >=768 & Windowwidth <1025 ){
            setres(<header>
                <div className='LeftHeaderCompsTablet'>
                <label className="hamburger">
                    <input type="checkbox" checked={isDrawerOpen} onClick={()=>{toggleDrawer()}}

                    />
                    
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                    >
                        <path
                            d="M3 12h18m-18-5h18m-18 10h18"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                </label>
                    
                        <Link to="/"><img src={logo} alt='Logo' className="logo"/></Link>
                </div>
                <div className='RightHeaderComps'>
                <svg xmlns="http://www.w3.org/2000/svg" className='AccountSvg' width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="10" r="3" stroke="#222222" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="9" stroke="#222222"/>
                    <path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#222222" strokeLinecap="round"/>
                </svg>
                </div>
                
                
            </header>);
        }
        if (Windowwidth >=1025){
            setIsDrawerOpen(false)
            setres(<header className='dh'>

                <div className='TopHeader'>
                <div className='LeftHeaderComps'>
                <Link to="/"><img src={logo} alt='Logo' className="logo"/></Link>
                </div>
                <div className='RightHeaderComps'>
                <svg xmlns="http://www.w3.org/2000/svg" className='AccountSvg' width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="10" r="3" stroke="#222222" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="9" stroke="#222222"/>
                    <path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#222222" strokeLinecap="round"/>
                </svg>
                </div>
                </div>

                <div className='BottomHeader'>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z" stroke="#33363F" stroke-width="2"/>
                        <path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21" stroke="#33363F" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                        <Link to="/" className='link'><strong>Home</strong></Link>
                    </button>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z" stroke="#33363F" stroke-width="2"/>
                        <path d="M9 11L15 11" stroke="#33363F" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                        <path d="M12 15H15" stroke="#33363F" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Link to="messenger" className='link'><strong>Messenger</strong></Link>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="4" y="6" width="16" height="12" rx="2" stroke="#33363F" stroke-width="2"/>
                            <path d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9" stroke="#33363F" stroke-width="2"/>
                        </svg>
                        <Link to="about" className='link'><strong>About Us</strong></Link>
                    </button>
                </div>
                
            </header>);
        }
    },[Windowwidth,isDrawerOpen,toggleDrawer,setIsDrawerOpen])
    
    return ( 
        res
        );
}

export default Header;