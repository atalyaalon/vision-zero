import React from 'react';
import HomeInfo from "../components/HomeInfo";
import HomeMain from "../components/HomeMain";


const Home : React.FC = ()=> {
    return(
        <div>
            {/*<HomeMain/>*/}
            <HomeMain/>
            {/*<HomeInteractivePic/>*/}
            <HomeInfo/>
        </div>
    )
};

export default Home