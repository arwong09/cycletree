class ItemsController < ApplicationController
  def new
  end
  
  def create
    @item = current_user.items.new(item_params)
    
    if @item.save
      category = CategoryJoin.new({
        item_id: @item.id, 
        category_id: params[:item][:category_id]
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
  end
  
  private
  
  def item_params
    params.require(:item).permit(:title, :description, :price, :condition, :features)
  end
end
