import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import {
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncToggleLikeThreadDetail,
  asyncToggleDislikeThreadDetail,
  asyncToggleThreadNeutralLikeThreadDetail,
  asyncToggleThreadNeutralDislikeThreadDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onCommentThread = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }));
  };

  const onLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleLikeThreadDetail(threadId));
  };

  const onDislikeThreadDetail = (threadId) => {
    dispatch(asyncToggleDislikeThreadDetail(threadId));
  };

  const onNeutralLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleThreadNeutralLikeThreadDetail(threadId));
  };

  const onNeutralDislikeThreadDetail = (threadId) => {
    dispatch(asyncToggleThreadNeutralDislikeThreadDetail(threadId));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section>
      <div className='w-full h-full bg-white font-Quicksand mx-auto py-8 px-4 md:w-4/5 md:px-6 lg:px-8'>
        <ThreadDetail
          {...detailThread}
          authUser={authUser.id}
          like={onLikeThreadDetail}
          dislike={onDislikeThreadDetail}
          neutralLike={onNeutralLikeThreadDetail}
          neutralDislike={onNeutralDislikeThreadDetail}
          addCommentThread={onCommentThread}
        />
      </div>
    </section>
  );
}

export default DetailPage;
