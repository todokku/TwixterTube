# hash = { thumbnailUrl: url_for(@video.thumbnail), videoUrl: url_for(@video.vid) }
json.video do
    json.partial! 'api/videos/video', video: @video
    json.videoUrl url_for(@video.vid)
    json.thumbnailUrl url_for(@video.thumbnail)
    json.published @video.created_at.strftime('%B %d, %Y')
    json.likes @video.num_likes
    json.dislikes @video.num_dislikes
end

json.user do
    json.extract! @video.uploader, :id, :username, :email
end

if current_user
    # debugger
    likes = @video.likes.select { |like| like.user_id == current_user.id }
    current_like = likes[0]

    if current_like != nil
        json.like do 
            json.extract! current_like, :id, :user_id, :likeable_id, :likeable_type, :liked
        end
    end

    # liked_comments = @video.comments.select { |comment| comment.user_id == current_user.id }

    # if liked_comments.length != 0
    #     liked_comments.each do |comment|
    #         # for this property, you are only interested
    #         # about the id's, convert that this object to
    #         # Object.keys(likedComments) and only change
    #         # css value of the like thumb buttons from 
    #         # these specific comment id's
    #         json.likedComments do 
    #             json.set! comment.id do
    #                 json.author comment.author
    #                 json.user_id comment.user_id
    #             end
    #         end

    #     end
    # end 

end

# if @video.comments.length != 0

@video.comments.each do |comment| 


    

    json.comments do
        if current_user && !!comment.likes.find_by(user_id: current_user.id)
            like = comment.likes.find_by(user_id: current_user.id)
            if like.liked # if boolean true, person liked comment
                json.set! comment.id do
                    json.id comment.id
                    json.user_id comment.user_id
                    json.body comment.body
                    json.author comment.author
                    json.liked true
                    json.likes comment.num_likes
                    json.dislikes comment.num_dislikes
                end
            else           # if false, person disliked comment
                json.set! comment.id do
                    json.id comment.id
                    json.user_id comment.user_id
                    json.body comment.body
                    json.author comment.author
                    json.liked false
                    json.likes comment.num_likes
                    json.dislikes comment.num_dislikes
                end
            end
        else
            json.set! comment.id do                    
                json.id comment.id
                json.user_id comment.user_id
                json.body comment.body
                json.author comment.author
                json.likes comment.num_likes
                json.dislikes comment.num_dislikes
            end
        end
    end


end

# end