class FavoritesController < ApplicationController
  def create
    fav = current_user.favorites.new(item_id: params[:item_id])
    fav.save
  end
end
