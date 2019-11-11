# hash = { thumbnailUrl: url_for(@video.thumbnail), videoUrl: url_for(@video.vid) }
json.video do
    json.partial! 'api/videos/video', video: @video
    json.videoUrl url_for(@video.vid)
    json.thumbnailUrl url_for(@video.thumbnail)
    json.published @video.created_at.strftime('%B %d, %Y')
    json.likes @video.num_likes
    josn.dislikes @video.num_dislikes
end

json.user do
    json.extract! @video.uploader, :id, :username, :email
end

if current_user
    likes = @video.likes.select { |like| like.user_id == current_user.id }
    current_like = likes[0]

    if current_like != nil
        json.like do 
            json.extract! current_like, :id, :user_id, :likeable_id, :likeable_type, :liked
        end
    end

end