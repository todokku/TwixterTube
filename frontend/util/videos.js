export const fetchVideos = () => (
    $.ajax({
        url: `/api/videos`,
        method: `GET`
    })
)

export const fetchVideo = (id) => (
    $.ajax({
        url: `/api/videos/${id}`,
        method: `GET`
    })
)

export const postVideo = (video) => (
    $.ajax({
        url: `/api/videos`,
        method: `POST`,
        data: { video }
    })
)

export const editVideo = (video) => {
    // debugger
    return (
        $.ajax({
            url: `/api/videos/${video.id}`,
            method: `PATCH`,
            data: { video }
        })
    )
}

export const deleteVideo = (id) => (
    $.ajax({
        url: `/api/videos/${id}`,
        method: `DELETE`
    })
)