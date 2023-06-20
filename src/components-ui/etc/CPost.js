import React from "react";
import styles from "../../scss/etc/post.module.scss";

function Post(props) {
    return(
        <div key={props.id} className={styles['newscard']}>
            <div className={styles['newscard-picture']}>
                <img src={props.image} alt={props.title}></img>
            </div>
            <div className={styles['newscard__text']}>
                <div className={styles['newscard__text-title']}>{props.title}</div>
                <div className={styles['newscard__text-content']}>{props.description}</div>
            </div>
        </div>
    )
}

export default Post;