import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import PostAuthor from '../PostAuthor';
import PostTimeAgo from '../PostTimeAgo';
import PostReactionButtons from '../PostReactionButtons';

import { selectPostById } from '../../../../../features/Posts/postsSlice';
import { Article, Container } from './style';

const SinglePostPage = () => {
  
  const { postId } = useParams();
  
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not Found!</h2>
      </section>
    )
  }

  return (
    <Container>
      <div className="wrapper">
        <Article>
          <h3>{post.title}</h3>
          <p className='post-content'>{post.body}</p>
          <p className='post-info'>
            <Link className='link-to' to={`/post/edit/${post.id}`}>Edit Post</Link>
            <PostAuthor userId={post.userId}/>
            <PostTimeAgo timestamp={post.date} />
          </p>
          <PostReactionButtons post={post} />
        </Article>
      </div>
    </Container>
  )
}

export default SinglePostPage;