class ItemsController < ApplicationController
  def new
  end
  
  def create
  end

  def show
  end
  
  private
  
  def item_params
    params.require(:item).permit(:title, :description, :price, :condition, :features)
  end
end
