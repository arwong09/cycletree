class CartItemsController < ApplicationController
  def new
    @cart_item = CartItem.new()
  end

  def create
    item = current_user.cart.cart_items.new({item_id: params[:item_id]})
    current_user.save!
    current_user.cart.save!
    item.save!
  end
  
  def destroy
    item = CartItem.find(params[:id])
    item.destroy
  end
  
  def index
    @items = current_user.cart_items.map{ |ci| ci.item }
    render "cart_items/index"
  end

  
  def show
    @item = CartItem.find(params[:id])
    render "cart_items/show"
  end
end
