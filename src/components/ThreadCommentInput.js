import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ThreadCommentInput() {
  const [content, setContent] = useState('');
  const navigate = useNavigate('/');

  return (
    <div className='mt-4'>
      <h2 className='font-Quicksand font-semibold'>Leave a comment</h2>
      <form className='mt-2'>
        <textarea type='text' className='block w-full h-32 resize-y border rounded-sm p-2' placeholder='Write Your comment . . .' value={content} />
        <button className='w-full bg-primary text-white p-2 mt-2 hover:bg-primaryHover' type="button">Submit</button>
      </form>
    </div>
  );
}

export default ThreadCommentInput;
