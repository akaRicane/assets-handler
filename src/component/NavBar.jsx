import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div>
                <div>
                    <img src={require('../media/bolAV.png')} alt="app-logo" />
                </div>
            </div>
            <div>
                <h3>Navigation</h3>
                <ul>
                    <NavLink to='/'>
                        <span>Home</span>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to='/overview'>
                        <span>Overview</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;