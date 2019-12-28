class Video < ApplicationRecord

    validates :title, :uploader_id, :views, presence: true
    
    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User

    has_one_attached :vid
    
    has_one_attached :thumbnail

    has_many :likes, as: :likeable,
    dependent: :destroy

    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment

    def num_likes
        likes = self.likes.select { |like| like.liked == true }
        return likes.length
    end

    def num_dislikes 
        dislikes = self.likes.select { |like| like.liked == false }
        return dislikes.length
    end


end
