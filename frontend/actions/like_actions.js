import * as LikeUtil from "../util/likes_util";

export const UPDATE_CURRENT_LIKE = "UPDATE_CURRENT_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const updateLike = like => ({
  type: UPDATE_CURRENT_LIKE,
  like
});

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});

// const re
// export const removeLike = likeId => dispatch => LikeUtil.removeLike(likeId).then( like => dispatch(upda) )
