import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import TextsmsIcon from '@material-ui/icons/Textsms';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';

function Header() {
    return (
        <div className="app_header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <IconButton>
                        <PinterestIcon/> 
                    </IconButton>
                </div>
                <div className="header__button homePage">
                    <a href="/">
                        Home Page
                    </a>
                </div>
                <div className="header__button following">
                    <a href="/">
                        Following
                    </a>
                </div>
                <div className="header__search">
                    <div className="header__searchContainer">
                        <SearchIcon/>
                        <form>
                            <input type="text" />
                            <button>
                                Submit
                            </button>
                    </form>
                    </div>
                </div>
                <div className="header__menuItems">
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton>
                        <TextsmsIcon/>    
                    </IconButton>
                    <IconButton>
                        <FaceIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowDownIcon/>
                    </IconButton>                    
                </div>
            </div>
        </div>
    )
}

export default Header
