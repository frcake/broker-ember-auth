# TODO: more validation if it is needed , validation frontend fro password-conformation
class User < ApplicationRecord
  before_save :ensure_authentication_token

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  # validates :email, presence: { message: "Email can't be empty" }
  # validates :email, uniqueness: { message: 'Email already exists' }
  # validates :full_name, presence: { message: "Fullname can't be empty" }
  # validates :organization_id, presence: { message: "Organization can't be empty" }
  # validates :encrypted_password, presence: { message: "Password can't be empty" }
  # validates :encrypted_password, uniqueness: { message: 'Password already exists' }

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  private

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end
end\
