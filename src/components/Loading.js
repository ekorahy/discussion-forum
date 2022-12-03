import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="sticky top-0 z-20">
      <LoadingBar className='bg-green-400 h-1' />
    </div>
  );
}

export default Loading;
