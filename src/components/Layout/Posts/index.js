import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import PostsExcerpt from '../../../components/Layout/Posts/components/PostsExcerpt/index';
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from '../../../features/Posts/postsSlice';

import { Container } from './style';

const PostsList = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const postError = useSelector(getPostsError);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        } 

    }, [postStatus, dispatch]);

    let content;

    if (postStatus === 'loading') {

        content = <p>Loading...</p>
    } else if (postStatus === 'succeeded') {

        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map( (post) => {
            return <PostsExcerpt key={post.id} post={post} />
        });
    } else if (postStatus === 'failed') {

        content = <p>{postError}</p>
    }

    return (
        <Container>
            <div className="wrapper">
                {content}
            </div>
        </Container>
    )
}

export default PostsList;