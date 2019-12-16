export const fetchVideos = query =>
  $.ajax({
    url: `/api/videos`,
    method: `GET`,
    data: { query }
  });

export const fetchVideo = id => {
  return $.ajax({
    url: `/api/videos/${id}`,
    method: `GET`
  });
};

export const postVideo = formData =>
  $.ajax({
    url: `/api/videos`,
    method: `POST`,
    data: formData,
    contentType: false,
    processData: false
  });

export const editVideo = video => {
  // debugger
  return $.ajax({
    url: `/api/videos/${video.id}`,
    method: `PATCH`,
    data: { video }
  });
};

export const deleteVideo = id =>
  $.ajax({
    url: `/api/videos/${id}`,
    method: `DELETE`
  });

export const updateVideoViewCount = video =>
  $.ajax({
    url: `/api/videos/${video.id}/views`,
    method: "PATCH",
    data: { video }
  });
