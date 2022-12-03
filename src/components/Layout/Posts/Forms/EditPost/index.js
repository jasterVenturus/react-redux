import React, { useState } from 'react';
import { Container } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, selectPostById, updatePost } from '../../../../../features/Posts/postsSlice';
import { selectAllUsers } from '../../../../../features/Users/usersSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    
    const post = useSelector((state) => selectPostById(state, Number(postId)));
    const users = useSelector(selectAllUsers);
    
    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.body);
    const [userId, setUserId] = useState(post?.userId);
    const [ addRequestStatus, setAddRequestStatus ] = useState('idle');
    
    const dispatch = useDispatch();
    
    if (!post) {
        return <section><h2>Post not found!</h2></section>
    }

    const onTittleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setUserId(Number(e.target.value));

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch( updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions })).unwrap();
                
                setTitle('');
                setContent('');
                setUserId('');
                navigate(`/post/${postId}`);
            } catch (err) {
                console.error('Failed to save the post', err);
            } finally {
                setAddRequestStatus('idle');
            }
        }
    };

    const userOptions = users.map(user => ( <option key={Math.random()} value={user.id}>{user.name}</option> ));

    const onDeletePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch( deletePost({ id: post.id })).unwrap();
                
                setTitle('');
                setContent('');
                setUserId('');
                navigate('/');
            } catch (err) {
                console.error('Failed to delete the post', err);
            } finally {
                setAddRequestStatus('idle');
            }
        }
    };

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
                    onChange={onAuthorChange}
                    value={userId}
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
                <button type='button' onClick={onDeletePostClicked}>Delete Post</button>
            </form>
        </Container>
    );
};

export default EditPost;
