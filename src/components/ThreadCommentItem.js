import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { postedAt } from '../utils';

const options = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.attribs.class === 'remove') {
      return <></>;
    }
  },
};

function ThreadCommentItem({
  id, content, createdAt, owner, upVotesBy, downVotesBy,
}) {
  return (
    <div className='mt-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={owner.avatar} alt={`${owner.name} image`} className='w-8 h-8 rounded-full mr-2' />
          <h2 className='font-Quicksand font-bold'>{owner.name}</h2>
        </div>
        <p className='font-Quicksand font-thin text-sm'>{postedAt(createdAt)}</p>
      </div>
      <div className='ml-8 bg-slate-200 rounded-lg p-2 mt-1'>
        <p className='font-Quicksand text-ellipsis overflow-hidden'>{parse(content, options)}</p>
      </div>
    </div>
  );
}

const ownerCommentItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadCommentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerCommentItemShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy:
  PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadCommentItem.propTypes = {
  ...threadCommentItemShape,
};

export { threadCommentItemShape };

export default ThreadCommentItem;
