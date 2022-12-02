import React from 'react'
import { useDispatch } from "react-redux";
import { reactionAdded } from '../../../../../features/Posts/postsSlice';
import { Container } from './style';

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🥳',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
};

const PostReactionButtons = ({ post }) => {
    
    const dispatch = useDispatch();

    
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button 
            key={name}
            type="button"
            className='reaction-button'
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
            >
                { emoji }
                { post.reactions[name] }
            </button>
        )
    });

    return <Container>{reactionButtons}</Container>;
};

export default PostReactionButtons