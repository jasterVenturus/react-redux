import React, { useState } from 'react';
import { Container } from './style';
import { useDispatch } from 'react-redux';
import { postAdded } from '../postsSlice';

const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTittleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);


    const onSavePostClicked = () => {
        if (title && content) {

            dispatch(postAdded(title, content));

            setTitle('');
            setContent('');
        }
    }
    return (
        <Container>
            <h2>Add a New Post</h2>
            <form action="">
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type="text"
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTittleChange}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea 
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChange}
                />
                <button type='button' onClick={onSavePostClicked}>Save Post</button>
            </form>
        </Container>
    );
};

export default AddPostForm;
