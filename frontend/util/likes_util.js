// export const
export const addLike = like => {
  return $.ajax({
    url: `/api/likes`,
    method: `POST`,
    data: { like }
  });
};

export const changeLike = like => {
  return $.ajax({
    url: `/api/likes/${like.id}`,
    method: `PATCH`,
    data: { like }
  });
};

// export const fetchLike = like => {

// }

export const removeLike = id => {
  return $.ajax({
    url: `/api/likes/${id}`,
    method: `DELETE`
  });
};
