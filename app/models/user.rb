class User < ActiveRecord::Base
  attr_reader :password
  validates :password_digest, presence: true
  validates :session_token, :username, presence: true, uniqueness: true
  validates :username, length: { maximum: 20 }
  
  before_validation :ensure_session_token
  
  has_many :items, class_name: :Item, foreign_key: :owner_id
  has_many :received_reviews, class_name: :Review, foreign_key: :seller_id
  has_many :authored_reviews, class_name: :Review, foreign_key: :author_id
  has_one :cart, class_name: :Cart, foreign_key: :owner_id
  has_many :cart_items, through: :cart, source: :cart_items
  has_many :favorites
  has_many :favorited_items, through: :favorites, source: :item
  
  has_attached_file :image, styles: { review_thumb: "45x45#", item_thumb: "77x77#", comment_thumb: "68x68#", profile: "230x230#" }, default_url: "/images/missing/:style.png"
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user.try(:is_password?, password) ? user : nil
  end
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end
  
  def is_password?(secret)
    BCrypt::Password.new(self.password_digest).is_password?(secret)
  end
  
  def password=(secret)
    if secret.present?
      @password = secret
      self.password_digest = BCrypt::Password.create(secret)
    end
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
  
  private
  
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
