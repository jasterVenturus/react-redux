import { useSelector } from 'react-redux';

import React from 'react'
import { selectAllPosts } from '../postsSlice';
import { Container } from './style';

const PostsList = () => {

    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map( post => (

        <article key={ post.id }>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ));
    return (
        <Container>
            <div className="wrapper">
                <h2>Posts</h2>
                {renderedPosts}
            </div>
        </Container>
    )
}

export default PostsList