@videos.each do |video|
    json.videos do
        json.set! video.id do
            json.partial! 'api/videos/video', video: video
            json.videoUrl url_for(video.vid)
            json.thumbnailUrl url_for(video.thumbnail)
            json.published video.created_at.strftime('%B %d, %Y')
            json.publishedAgo time_ago_in_words(video.created_at)
        end
    end

    json.users do
        json.set! video.uploader_id do 
            json.extract! video.uploader, :email, :username, :id
        end
    end

end