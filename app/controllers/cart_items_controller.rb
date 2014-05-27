class CartItemsController < ApplicationController
  def new
    @cart_item = CartItem.new()
  end

  def create
  end
end
