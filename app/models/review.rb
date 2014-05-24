class Review < ActiveRecord::Base
  validates :author_id, :body, :seller_id, presence: true
  
  belongs_to :author, class_name: :User
  belongs_to :seller, class_name: :User
end
