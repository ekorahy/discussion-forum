import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
  TOGGLE_DISLIKE_THREAD_DETAIL: 'TOGGLE_DISLIKE_THREAD_DETAIL',
  TOGGLE_LIKE_COMMENT_THREAD_DETAIL: 'TOGGLE_LIKE_COMMENT_THREAD_DETAIL',
  TOGGLE_DISLIKE_COMMENT_THREAD_DETAIL: 'TOGGLE_DISLIKE_COMMENT_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleLikeThreadDetailActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDislikeThreadDetailActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.TOGGLE_DISLIKE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleLikeCommentThreadDetailActionCreator({
  threadId,
  commentId,
}) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT_THREAD_DETAIL,
    payload: {
      threadId,
      commentId,
    },
  };
}

function toggleDislikeCommentThreadDetailActionCreator({
  threadId,
  commentId,
}) {
  return {
    type: ActionType.TOGGLE_DISLIKE_COMMENT_THREAD_DETAIL,
    payload: {
      threadId,
      commentId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    try {
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleLikeThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleLikeThreadDetailActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleUpVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleDislikeThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDislikeThreadDetailActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleDownVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDislikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleLikeCommentThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { detailThread } = getState();
    dispatch(toggleLikeCommentThreadDetailActionCreator({
      threadId,
      commentId: detailThread.comments.id,
    }));

    try {
      await api.toggleUpVoteCommentThread(threadId, detailThread.comments.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeCommentThreadDetailActionCreator({
        threadId,
        commentId: detailThread.comments.id,
      }));
    }
  };
}

function asyncToggleDislikeCommentThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { detailThread } = getState();
    dispatch(toggleDislikeCommentThreadDetailActionCreator({
      threadId,
      commentId: detailThread.comments.id,
    }));

    try {
      await api.toggleUpVoteCommentThread(threadId, detailThread.comments.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDislikeCommentThreadDetailActionCreator({
        threadId,
        commentId: detailThread.comments.id,
      }));
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleLikeThreadDetailActionCreator,
  toggleDislikeThreadDetailActionCreator,
  toggleLikeCommentThreadDetailActionCreator,
  toggleDislikeCommentThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleLikeThreadDetail,
  asyncToggleDislikeThreadDetail,
  asyncToggleLikeCommentThreadDetail,
  asyncToggleDislikeCommentThreadDetail,
};
