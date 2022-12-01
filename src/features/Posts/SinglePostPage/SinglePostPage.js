import React from 'react'
import PostAuthor from '../PostAuthor/PostAuthor';
import PostTimeAgo from '../PostTimeAgo/PostTimeAgo';
import PostReactionButtons from '../PostReactionButtons/PostReactionButtons';

const SinglePostPage = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0,100)}</p>
      <p>
        <PostAuthor userId={post.userId}/>
        <PostTimeAgo timestamp={post.date} />
      </p>
      <PostReactionButtons post={post} />
    </article>
  )
}

export default SinglePostPage;