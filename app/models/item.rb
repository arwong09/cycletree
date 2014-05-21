class Item < ActiveRecord::Base
  belongs_to :owner, class_name: :User, foreign_key: :owner_id
  has_many :category_joins, class_name: :CategoryJoin, foreign_key: :item_id
  has_many :categories, through: :category_joins, source: :category
end
