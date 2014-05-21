class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render 'categories/index'
  end
end
