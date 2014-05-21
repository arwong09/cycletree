class ItemsController < ApplicationController
  def new
    @item = Item.new
    @user = current_user
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
  end
  
  private
  
  def item_params
    params.require(:item).permit(:title, :description, :price, :condition, :features, :image)
  end
end
