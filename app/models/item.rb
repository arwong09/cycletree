class Item < ActiveRecord::Base
  belongs_to :owner, class_name: :User, foreign_key: :owner_id
  has_many :category_joins, class_name: :CategoryJoin, foreign_key: :item_id
  has_many :categories, through: :category_joins, source: :category
  has_attached_file :image, styles: { show: "570x448#", thumb: "" }, convert_options: { 
    thumb: "-resize 300x +repage -gravity Center -crop 200x500#" },
    default_style: :thumb
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
