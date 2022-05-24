import './index.css';
import {ReactComponent as LastStateArrow} from './SVG/LastStateArrow.svg';
import {ReactComponent as LoginIcon} from './SVG/UserIcon.svg';
import {ReactComponent as LogoCube} from './SVG/LogoCube.svg';
import {ReactComponent as LogoUrl} from './SVG/LogoUrl.svg';
//
import { useState } from 'react';
import { useLocation } from "react-router-dom";

function TopBar(){
    
    const [isSearching, setIsSearching] = useState(false);
    const onClick_SearchBox = () => {
        setIsSearching(true);
        console.log('onClick');
    }
    const onBlur_SearchBox = () => {
        setIsSearching(false);
        console.log('onBlur');
    }
    const onChange_SearchBox = (e) => {
        console.log(e.target.value);
    }
    const currentPath = useLocation().pathname;
    
    return( currentPath === '/spotlight' ? <>
        <header className='TopBar-master'>
            <LastState/>
                <div className={`TopBar-SearchBox_spotlight`}>
                    <LogoUrl className={`TopBar-SearchBox-LogoUrl_spotlight`}/>
                </div>
            <UserIcon/>
        </header>
        <div className={'TopBar-div_spotlight'}>
            <div className={'TopBar-div-div_WelcomeMessage_spotlight'} >hey there</div>
            <div className={'TopBar-div-div_spotlight'}>
                <input 
                    type='text' 
                    onBlur={onBlur_SearchBox} 
                    autoFocus={false} 
                    className={'TopBar-div-input_spotlight'}
                    onChange={onChange_SearchBox}
                /> 
                <LogoCube className={`TopBar-SearchBox-LogoCube_spotlight`}/>
            </div>
            <LastStateArrow className={`TopBar-SearchBox-TrendingDropdown_spotlight`}/>
        </div>
    </>:
        <header className='TopBar-master'>
            <LastState className={isSearching? 'hidden' : ''}/>
            <SearchBox 
                className={isSearching? 'TopBar-SearchBox_isSearching' : ''} 
                onClick={onClick_SearchBox} 
                onBlur={onBlur_SearchBox}
                isSearching={isSearching}
                onChange={onChange_SearchBox}
            />
            <UserIcon className={isSearching? 'hidden' : ''}/>
        </header>
    )
}

export default TopBar

function SearchBox(props){
    const {
        className,
        onClick,
        onBlur,
        onChange,
        isSearching
    } = props;
    return(
        <div className={`TopBar-SearchBox ${className}`} onClick={onClick}>
            {isSearching? 
                <input 
                    type='text' 
                    onBlur={onBlur} 
                    autoFocus={true} 
                    className={'TopBar-SearchBox-input'}
                    onChange={onChange}
                /> 
            :
                null
            }
            <LogoCube className={`TopBar-SearchBox-LogoCube_default ${isSearching? 'TopBar-SearchBox-LogoCube_isSearching' : ''}`}/>
            <LogoUrl className={`TopBar-SearchBox-LogoUrl_default ${isSearching? 'hidden' : ''}`}/>
        </div>
    )
}

function UserIcon(props){
    const {
        className,
        onClick
    } = props;
    return(
        <LoginIcon className={`TopBar-UserIcon ${className}`}/>
    )
}

function LastState(props){
    const {
        className,
        onClick
    } = props;
    return(
        <LastStateArrow className={`TopBar-LastStateArrow ${className}`}/>
    )
}