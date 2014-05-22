class Category < ActiveRecord::Base
  has_many :category_joins, class_name: :CategoryJoin, foreign_key: :category_id
  has_many :items, through: :category_joins, source: :item
  has_attached_file :image, styles: { thumb: "100x100#", small: "200x200>" }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
