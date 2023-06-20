import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import LastNews from '../../../components-ui/Welcome/CLastNews';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    let posts = state.blog.posts.slice(0, state.welcome.lastNews.newsCount);
 
    return {
        posts: posts,
    }
}

const LastNewsContainer = connect(mapStateToProps)(LastNews);

export default LastNewsContainer;