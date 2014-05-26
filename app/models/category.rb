class Category < ActiveRecord::Base
  has_many :category_joins, class_name: :CategoryJoin, foreign_key: :category_id
  has_many :items, through: :category_joins, source: :item
  has_attached_file :image, styles: { index_med: "300x250", index_large: "468x382#", index_small: "216x186#", thumb: "180x500#", small: "140x140>" }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
