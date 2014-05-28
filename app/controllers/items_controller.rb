class ItemsController < ApplicationController
  def new
    @item = Item.new
    @user = current_user
  end
  
  def index
    category = Category.find(params[:category_id])
    @items = category.items
    render "items/index"
  end
  
  def create
    @item = current_user.items.new(item_params)
    
    if @item.save
      category = CategoryJoin.new({
        item_id: @item.id, 
        category_id: params[:item][:categories]
      })
      
      if category.save
        redirect_to item_url(@item)
      end
    else
      flash.now[:errors] = @item.errors.full_messages
      render :new
    end
  end

  def show
    @item = Item.find(params[:id])
    @description = @item.description.split("\r\n\r\n").join("</p><p>").html_safe
    other_items = @item.owner.items.select { |i| i != @item }
    @num_items = @item.owner.items.length
    @more_items_side = other_items.shuffle.select { |i| i.image.url != '/images/thumb/missing.png'}[0..7]
    @more_items = other_items.shuffle.select { |i| i.image.url != '/images/thumb/missing.png'}[0..4]
    @reviews = @item.owner.received_reviews[0..4]
    @cart_items = current_user.cart_items if current_user
    render :show
  end
  
  private
  
  def item_params
    params.require(:item).permit(:title, :description, :price, :condition, :features, :image)
  end
end
