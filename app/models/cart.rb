class Cart < ActiveRecord::Base
  belongs_to :owner, class_name: :User, foreign_key: :owner_id
  has_many :cart_items, class_name: :CartItem, foreign_key: :cart_id
  has_many :items, through: :cart_items, source: :item
end
