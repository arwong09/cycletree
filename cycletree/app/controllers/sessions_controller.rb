class SessionsController < ApplicationController
  def new
  end
  
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
  
    if @user
      login!(@user)
      redirect_to edit_user_url(@user)
    else
      flash.now[:errors] = ["Wrong username or password"]
      render :new
    end
  end
  
  def destroy
    if logout!
      redirect_to new_session_url
    end
  end
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
end