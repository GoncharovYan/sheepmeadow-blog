import React from 'react';
import styles from "../../scss/Blog/blog.module.scss";
import Post from '../../components-ui/etc/CPost';

function Blog(props) {
    let posts = props.posts.map((el) => <Post 
        image={el.image}
        title={el.title} 
        description={el.description}/>);


    return (
            <div className={`${styles['main__blog']} ${styles['mt-large']} ${styles['mb-large']}`}>
                <div className={`${styles['title']} ${styles['title_blog']}`}><h2>What's <span className={styles['accent']}>new</span>?</h2></div>
                <div className='container'>
                    <div className={styles['blog__newswall']}>
                        {posts}
                    </div>                        
                </div>
            </div>
    )
}

export default Blog;