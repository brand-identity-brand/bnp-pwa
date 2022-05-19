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
            </Routes>
        </section>
    )
}

export default Display
