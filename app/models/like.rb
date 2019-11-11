class Like < ApplicationRecord

    validates :liked, inclusion: { in: [true, false] }
    validates :likeable_type, inclusion: { in: ["Video", "Comment"] }
    validates :likeable_id, :likeable_type, :user_id, presence: true 
    validates :user_id, uniqueness: { scope: [:likeable_type, :likeable_id] }

    belongs_to :likeable, polymporphic: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
