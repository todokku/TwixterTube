json.partial! 'api/videos/video', video: @video
json.videoUrl url_for(video.vid)