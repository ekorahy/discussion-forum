import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ThreadCommentInput({ commentThread }) {
  const [content, setContent] = useState('');
  const navigate = useNavigate('/');

  function commentThreadHandler() {
    if (content.trim()) {
      commentThread(content);
      setContent('');
      navigate('/');
    }
  }

  function handleCommentChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div className='mt-4'>
      <h2 className='font-Quicksand font-semibold'>Leave a comment</h2>
      <form className='mt-2'>
        <textarea type='text' className='block w-full h-32 resize-y border rounded-sm p-2' placeholder='Write Your comment . . .' value={content} onChange={handleCommentChange} />
        <button className='w-full bg-primary text-white p-2 mt-2 hover:bg-primaryHover' type="button" onClick={commentThreadHandler}>Submit</button>
      </form>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  commentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
