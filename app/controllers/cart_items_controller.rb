class CartItemsController < ApplicationController
  def new
    @cart_item = CartItem.new()
  end

  def create
    new_item = current_user.cart.cart_items.new({item_id: params[:item_id]})
    new_item.save
  end
end
