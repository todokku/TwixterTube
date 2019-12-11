export const addComment = comment => {
  return $.ajax({
    url: `/api/comments`,
    method: `POST`,
    data: { comment }
  });
};

export const editComment = comment => {
  return $.ajax({
    url: `/api/comments/${comment.id}`,
    method: `PATCH`,
    data: { comment }
  });
};

export const deleteComment = id => {
  return $.ajax({
    url: `/api/comments/${id}`,
    method: `DELETE`
  });
};
