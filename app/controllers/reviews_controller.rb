class ReviewsController < ApplicationController
  def create
    review = current_user.authored_reviews.new(review_params)
    review.seller_id = params[:user_id]
    @seller = User.find(params[:user_id])
    
    if review.save
      redirect_to user_url(@seller)
    else
      flash.now[:errors] = review.errors.full_messages
    end
  end
  
  private
  
  def review_params
    params.require(:review).permit(:body)
  end
end
