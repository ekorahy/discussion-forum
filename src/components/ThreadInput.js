import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function ThreadInput({ threadInput }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const navigate = useNavigate();

  function threadInputHandler() {
    if (title.trim() && body.trim() && category.trim()) {
      threadInput(title, body, category);
      navigate('/');
    }
  }

  return (
    <form className='font-Quicksand'>
      <input type="text" className="border border-gray-200 rounded w-full py-2 px-4 mt-4 text-primary leading-tight focus:outline-none bg-white focus:border-primary" value={title} onChange={onTitleChange} placeholder="Title" />
      <input type="text" className="border mt-4 border-gray-200 rounded w-full py-2 px-4 text-primary leading-tight focus:outline-none bg-white focus:border-primary" value={category} onChange={onCategoryChange} placeholder="Category" />
      <textarea type='text' className='block w-full h-32 resize-y border rounded mt-4 py-2 px-4 focus:outline-none focus:border-primary' placeholder='Body' value={body} onChange={onBodyChange} />
      <button className='w-full bg-primary rounded text-white p-2 mt-4 outline-none hover:bg-primaryHover' type="button" onClick={threadInputHandler}>Submit</button>
    </form>
  );
}

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;
