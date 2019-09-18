# hash = { thumbnailUrl: url_for(@video.thumbnail), videoUrl: url_for(@video.vid) }
json.video do
    json.partial! 'api/videos/video', video: @video
    json.videoUrl url_for(@video.vid)
    json.thumbnailUrl url_for(@video.thumbnail)
end

json.user do 
    json.extract! @video.uploader, :id, :username, :email
end