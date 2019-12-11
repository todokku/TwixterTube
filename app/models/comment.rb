class Comment < ApplicationRecord

    validates :body, :video_id, :user_id, :author, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video

    has_many :likes, as: :likeable

    def num_likes 
        likes = self.likes.select do |like| 
            like.liked == true
        end
        likes.length
    end

    ## touching up on the enumerbale methods, 
    ## both methods do the same thing in iteration

    def num_dislikes
        dislikes = self.likes.select { |like| like.liked == false }
        dislikes.length
    end

end
