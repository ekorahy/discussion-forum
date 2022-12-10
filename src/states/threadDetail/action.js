import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
  TOGGLE_DISLIKE_THREAD_DETAIL: 'TOGGLE_DISLIKE_THREAD_DETAIL',
  TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL: 'TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL',
  TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL: 'TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL',
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

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
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

function toggleNeutralLikeThreadDetailActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralDislikeThreadDetailActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAddComment({ content, commentTo }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ content, commentTo });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
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

function asyncToggleThreadNeutralLikeThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralLikeThreadDetailActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralLikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleThreadNeutralDislikeThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralDislikeThreadDetailActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralDislikeThreadDetailActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  toggleLikeThreadDetailActionCreator,
  toggleDislikeThreadDetailActionCreator,
  toggleNeutralLikeThreadDetailActionCreator,
  toggleNeutralDislikeThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncToggleLikeThreadDetail,
  asyncToggleDislikeThreadDetail,
  asyncToggleThreadNeutralLikeThreadDetail,
  asyncToggleThreadNeutralDislikeThreadDetail,
};
