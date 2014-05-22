class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    respond_to do |format|
      format.html { render :index}
      format.json { render 'categories/index' }
    end
  end
  
  def show
    category = Category.find(params[:id])
    @items = category.items
    render 'items/index'
  end
end
