import React from 'react';
import HomeInteractivePic from '../components/HomeInteractivePic';
import HomeInfo from "../components/HomeInfo";
import HomeMain from "../components/HomeMain";

const Home : React.FC = ()=> {
    return(
        <div>
            <HomeMain/>
            <HomeInteractivePic/>
            <HomeInfo/>
        </div>
    )
};

export default Home;