class CartItem < ActiveRecord::Base
  validates :cart_id, :item_id, presence: true
  validates :cart_id, uniqueness: { scope: :item_id }
  
  belongs_to :item
  belongs_to :cart
  has_one :owner, through: :cart, source: :owner
end
