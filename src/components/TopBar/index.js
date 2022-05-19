import './index.css';
import {ReactComponent as LastStateArrow} from './SVG/LastStateArrow.svg';
import {ReactComponent as UserIcon} from './SVG/UserIcon.svg';

function TopBar(){
;    return(
        <header className='TopBar-master'>
            <LastStateArrow className='TopBar-LastStateArrow'/>
            <SearchBox/>
            <UserIcon className='TopBar-UserIcon'/>
        </header>
    )
}

export default TopBar

function SearchBox(){
    return(
        <div className='TopBar-SearchBox'></div>
    )
}