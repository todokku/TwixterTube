// export const
export const addLike = like => {
  // console.log("IN UTIL FUNCTION LOOK AT LIKE CREATION:    ", like);

  return $.ajax({
    url: `/api/likes`,
    method: `POST`,
    data: { like }
  });
};

export const changeLike = like => {
  // console.log("IN UTIL FUNCTION LOOK AT LIKE:    ", like);
  return $.ajax({
    url: `/api/likes/${like.id}`,
    method: `PATCH`,
    data: { like }
  });
};

export const removeLike = id => {
  // console.log("IN UTIL FUNCTION LOOK AT LIKE ID:    ", id);

  return $.ajax({
    url: `/api/likes/${id}`,
    method: `DELETE`
  });
};
