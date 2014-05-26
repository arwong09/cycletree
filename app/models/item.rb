class Item < ActiveRecord::Base
  belongs_to :owner, class_name: :User, foreign_key: :owner_id
  has_many :category_joins, class_name: :CategoryJoin, foreign_key: :item_id
  has_many :categories, through: :category_joins, source: :category
  has_attached_file :image, styles: { show_side: "", show_more: "", profile_listing: "", show: "570x", thumb: "", index_med: "302x250#", index_large: "468x382#", index_small: "216x186#" }, convert_options: { 
    thumb: "-resize 400x800 -gravity Center -shave 80x0",
    show_side: "-resize 800x175 -gravity Center -crop 156x124+0+0",
    show_more: "-resize 800x85 -gravity Center -crop 69x69+0+0",
    profile_listing: "-resize 300x800 -gravity Center -crop 230x153+0+0 +repage" },
    default_style: :thumb
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
