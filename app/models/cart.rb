class Cart < ActiveRecord::Base
  belongs_to :owner, class_name: :User, foreign_key: :owner_id
  has_many :items, through: :cart_items, source: :item
end
