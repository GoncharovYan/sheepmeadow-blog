import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "../../scss/Main/lastnews.module.scss";
import Post from '../etc/CPost';

function LastNews(props) {
    let posts = props.posts.map((el) => <Post 
            key={el.id}
            image={el.image}
            title={el.title}
            description={el.description}/>);

    return (
        <div className={styles['main__lastnews']}>
            <div className={styles["lastnews__grid"]}>
                <div className={styles['lastnews__grid-title']}>
                    <div className={`${styles["title"]} ${styles["title_lastnews"]}`}>
                        <h2>The <span className={styles["accent"]}>loudest</span> announcements</h2>
                    </div>
                </div>
                <div className={styles["lastnews__grid-explore"]}>
                    <NavLink to="/blog" className={styles["explore"]}>Explore more</NavLink>
                </div>
                <div className={styles['lastnews__grid-news']}>
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default LastNews;