class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    @items = Item.all.shuffle

    respond_to do |format|
      format.html { render :index }
      format.json { render 'categories/index' }
    end
  end
  
  def show
    if params[:id] == "0"
      @items = Item.all
    else
      @category = Category.find(params[:id])
      @items = @category.items
    end

    render 'items/index'
  end
  
  def backbone
  end
end
