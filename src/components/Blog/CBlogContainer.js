import React from 'react';
import Blog from '../../components-ui/Blog/CBlog';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

    return {
        posts: state.blog.posts,
    }
}

const BlogContainer = connect(mapStateToProps)(Blog);

export default BlogContainer;