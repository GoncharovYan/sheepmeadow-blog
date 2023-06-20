import React, { useState, useEffect, Children, useLayoutEffect } from 'react';
import styles from "../../scss/Main/presentation.module.scss";

function Carousel(props) {
    const PAGE_WIDTH = 500;    
    let MAX_PAGES = 0;
    const TIMEOUT = 5000;
    let timerID = null;
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (MAX_PAGES === 0) {
            Children.map(props.children, child => {
                MAX_PAGES++;
                return child;
            });
        }

        if (!timerID) {
            timerID = setTimeout(() => setPage(pageSwitch), TIMEOUT);
        }
    })  

    const pageSwitch = () => (page < MAX_PAGES - 1) ? (page + 1) : 0;

    const handleLeftArrow = () => {
        const newPage = (page > 0) ? (page - 1) : (MAX_PAGES - 1);

        clearTimeout(timerID);
        setPage(newPage);
    }

    const handleRightArrow = () => {
        const newPage = (page < MAX_PAGES - 1) ? (page + 1) : 0;
        
        clearTimeout(timerID);
        setPage(newPage);
    }

    return(
        <div className={styles['presentation__description']}>
            <div className={styles['presentation__description-arrL']}  onClick={handleLeftArrow}></div>
            <div className={styles['presentation__description-textwindow']}>
                <ul 
                  className={styles['presentation__description-list']}
                  style={{
                    transform: `translateX(-${page * PAGE_WIDTH}px)`,
                  }}>
                    {props.children}
                </ul>
            </div>
            <div className={styles['presentation__description-arrR']} onClick={handleRightArrow}></div>

            <div className={styles['presentation__description-back']}>is</div>
        </div>
    )
}

function Presentation() {
    return (
        <div className={styles['main__presentation']}>
            <div className={styles['container container_presentation']}>
                <h1 className={styles['presentation-sheepmeadow']}><span>SHEEP</span>MEADOW</h1>
                <Carousel>
                    <li className={styles['presentation__description-item']}>
                        <span>Weird .exe files</span>
                    </li>
                    <li className={styles['presentation__description-item']}>
                        <span>Variety of game design ideas</span>
                    </li>
                    <li className={styles['presentation__description-item']}>
                        <span>Lose = Game closes</span>
                    </li>
                    <li className={styles['presentation__description-item']}>
                        <span>The only player is the tester</span>
                    </li>
                    <li className={styles['presentation__description-item']}>
                        <span>Come up with a game title due to a typo</span>
                    </li>
                </Carousel>
            </div>

        </div>
    )
}

export default Presentation;