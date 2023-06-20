import React from "react";
import Presentation from "../../components-ui/Welcome/CPresentation";
import ShowGamesContainer from "./CMain/CShowGamesContainer";
import LastNewsContainer from "./CMain/CLastNewsContainer";


function Main(props) {

    return(
        <div className='main__welcome'>
            <Presentation />
            <ShowGamesContainer 
                tabs={props.welcome.showGames.tabs}
                cards={props.cards}/>
            <LastNewsContainer />
        </div>
    )
}

export default Main;