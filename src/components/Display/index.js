import './index.css';
import { Routes, Route } from "react-router-dom";
//route elements
import Spotlight from '../../pages/Spotlight';
import Explore from '../../pages/Explore';
import Journal from '../../pages/Journal';
import Market from '../../pages/Market';

function Display(){

    return(
        <section className='Display'>
            <Routes>
                <Route path="/spotlight" element={<Spotlight/>} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/journal" element={<Journal/>} />
                <Route path="/market" element={<Market/>} />
                <Route path="/" element={
                <ul>
                    <li>
                    TopBar 3 states. animation transformation needed
                    </li>
                    <li>
                    spotlight searchbox could be an underline but that'll require an icon to indicate its a searchbox
                    </li>
                </ul>
                }
                />
            </Routes>
        </section>
    )
}

export default Display
