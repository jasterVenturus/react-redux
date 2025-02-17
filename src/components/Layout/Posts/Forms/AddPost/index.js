import React, { useState } from 'react';
import { Container } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../../../../../features/Posts/postsSlice';
import { selectAllUsers } from '../../../../../features/Users/usersSlice';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');
    
    const users = useSelector(selectAllUsers);

    const onTittleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch( addNewPost({ title, body: content, userId })).unwrap();
                
                setTitle('');
                setContent('');
                setUserId('');
                navigate('/');
            } catch (err) {
                console.error('Failed to save the post', err);
            } finally {
                setAddRequestStatus('idle');
            }
        }
    }

    const userOptions = users.map(user => ( <option key={Math.random()} value={user.id}>{user.name}</option> ));

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

                <label htmlFor="postAuthor">Post Author:</label>
                <select 
                    id='postAuthor'
                    name='postAuthor'
                    value={userId}
                    onChange={onAuthorChange}
                >
                    <option value=""></option>
                    {userOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <textarea 
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChange}
                />
                <button type='button' onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </Container>
    );
};

export default AddPost;
