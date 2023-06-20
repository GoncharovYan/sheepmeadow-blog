import axios from 'axios';
import React, { useState } from 'react';
import style from '../../scss/Main/showgames.module.scss';
import { uploadGamesActionCreator } from '../../state/reducers/gamesReducer';

function Tab(props) {
    return (
        <div key={props.id} onClick={() => props.onclick(props.value)} className={style.tabs__item}>
            <div className={style["tabs__item-title"]}>{props.title}</div>
        </div>
    )
}

function GameCard(props) {
    return (
        <div key={props.id} className={style.gamegrid__gamecard}>
            <div className={style["gamegrid__gamecard-picture"]}>
                <img src={props.image} alt={`${props.title} image`}></img>

                <div className={style["gamegrid__gamecard-title"]}><span>{props.title}</span></div>
            </div>
        </div>
    )
}

class ShowGames extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:3000/game").then(result => {
            this.props.uploadGames(result);
        })

        // let tabs = props.tabs.map((el) => <Tab 
        //     id={el.id}
        //     onclick = {setTab}
        //     value = {el.link}
        //     title = {el.title}/>);

        let games = props.games.filter((el) => (el.category === tab || tab === "all")).map((el) => {        
            <GameCard 
                id={el.id}
                image = {el.image}
                title = {el.title}/>}
            );
    }


    render() {
        return(
            <div className={`${style.main__showgames} ${style["mb-large"]}`}>
                <div className={style.showgames__grid}>
                    <div className={style["showgames__grid-somewhat"]}></div>
                    <div className={`${style["showgames__grid-title"]} ${style.title}`}>
                        <h2>
                            Brave new future of <span className={style.accent}>Game Dev</span>
                        </h2>    
                    </div>
                    <div className={style["showgames__grid-tabs"]}>
                        {/* {tabs} */}
                    </div>
                    <div className={style["showgames__grid-gamegrid"]}>
                        <div className={style.gamegrid}>
                            {games}
                        </div>
                    </div>
                    <div className={style["showgames__grid-paginator"]}>
                        <div className={style.arrL}></div>
                        <div className={style.pages}>
                            <span className={style.current}>1</span> / <span className={style.all}>1</span>
                        </div>
                        <div className={style.arrR}></div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default ShowGames;