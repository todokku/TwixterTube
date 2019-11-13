class Video < ApplicationRecord

    validates :title, :uploader_id, :views, presence: true
    
    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User

    has_one_attached :vid
    
    has_one_attached :thumbnail

    # has_many :likes, as: :likeable

    # def num_likes
    #     likes = self.likes.select { |like| like == true }
    #     return likes.length
    # end

    # def num_dislikes 
    #     dislikes = self.likes.select { |like| like == false }
    #     return dislikes.length
    # end


end
