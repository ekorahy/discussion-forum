import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id
              !== action.payload.userId) : detailThread.upVotesBy.concat([action.payload.userId]),
      };
    case ActionType.TOGGLE_DISLIKE_THREAD_DETAIL:
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id
          !== action.payload.userId) : detailThread.downVotesBy.concat([action.payload.userId]),
      };
    case ActionType.TOGGLE_LIKE_COMMENT_THREAD_DETAIL:
      return detailThread.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(action.payload.commentId)
              ? comment.upVotesBy.filter((id) => id !== action.payload.commentId)
              : comment.upVotesBy.concat([action.payload.commentId]),
          };
        }
        return comment;
      });
    case ActionType.TOGGLE_DISLIKE_COMMENT_THREAD_DETAIL:
      return detailThread.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.commentId)
              ? comment.downVotesBy.filter((id) => id !== action.payload.commentId)
              : comment.downVotesBy.concat([action.payload.commentId]),
          };
        }
        return comment;
      });
    default:
      return detailThread;
  }
}

export default threadDetailReducer;
