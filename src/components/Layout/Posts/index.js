import React from 'react'
import { useSelector } from 'react-redux';
import PostsExcerpt from '../../../components/Layout/Posts/components/PostsExcerpt/index';
import { getPostsStatus, getPostsError, selectPostIds } from '../../../features/Posts/postsSlice';

import { Container } from './style';

const PostsList = () => {

    const orderedPostIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const postError = useSelector(getPostsError);

    let content;

    if (postStatus === 'loading') {

        content = <p>Loading...</p>
    } else if (postStatus === 'succeeded') {

        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />);
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