import './index.css';
import { NavLink } from "react-router-dom";

function BotBar(){

    const setClassName = ({ isActive }) => `BotBar-NavLink ${isActive ? 'BotBar-NavLink-active':'BotBar-NavLink-inactive'}`;
    return(
        <footer className='BotBar-master'>         

            <NavLink to="/spotlight" className={ setClassName }>Spotlight</NavLink>
            <NavLink to="/explore" className={ setClassName }> Explore </NavLink>
            <NavLink to="/market" className={ setClassName }> Market </NavLink>
            <NavLink to="/journal" className={ setClassName }> Journal </NavLink>

        </footer>
    )
}

export default BotBar
/*
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";

function NavButt ( props ) {
    const {
        to, // needs to prepend backslash
        children //innerText
    } = props;

    const currentPath = useLocation().pathname;
    
    const isActive = () => currentPath === to? 'BotBar-NavButt-active':'BotBar-NavButt-inactive';

    const [ toggleClassName, setToggleClassName ] = useState( isActive() );

    useEffect(()=>{
        setToggleClassName( isActive() );
    },[currentPath])

    return(
        <Link to={to} className={ toggleClassName + ' BotBar-NavButt'}>
            {children}
        </Link>
    )
}*/