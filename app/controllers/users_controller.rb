class UsersController < ApplicationController
  before_action :require_signed_in!, only: [:edit]
  before_action :require_signed_out!, only: [:create, :new]
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  def show
    if params.include?(:id)
      @user = User.find(params[:id])
      @num_listings = @user.items.length
      @items = @user.items.select { |i| i.image.url != '/images/thumb/missing.png' }[0..2]
      @reviews = @user.received_reviews
      @num_reviews = @reviews.length
      render :show
    else
      redirect_to user_url(current_user)
    end
  end
  
  def edit
    @user = User.find(params[:id])
    render :edit
  end
  
  def update
    user = User.find(params[:id])
    
    if user.update_attributes(user_params)
      redirect_to user_url(user)
    else
      flash.now[:errors] = user.errors.full_messages
      render :edit
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :password, :email, :full_name, :profile, :description, :title, :blurb, :image)
  end
end
