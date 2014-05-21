class Category < ActiveRecord::Base
  has_many :category_joins, class_name: :CategoryJoin, foreign_key: :category_id
  has_many :items, through: :category_joins, source: :item
end
