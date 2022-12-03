import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({
  category,
}) {
  return (
    <button type="button" className='inline-block m-1 px-4 py-1 font-Quicksand font-thin text-sm border rounded-lg hover:bg-secondary hover:text-white'>{category}</button>
  );
}

const threadItemShape = {
  category: PropTypes.string.isRequired,
};

ThreadCategoryItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadCategoryItem;
