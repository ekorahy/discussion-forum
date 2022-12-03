import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCommentInput({ commentThread }) {
  const [content, setContent] = useState('');

  function commentThreadHandler() {
    if (content.trim()) {
      commentThread(content);
      setContent('');
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
      <form className='mt-2' onSubmit={commentThreadHandler}>
        <textarea className='block w-full h-32 resize-y border rounded-sm p-2' placeholder='Write Your comment . . .' value={content} onChange={handleCommentChange} required />
        <button className='w-full bg-primary text-white p-2 mt-2 hover:bg-primaryHover' type="submit">Submit</button>
      </form>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  commentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
