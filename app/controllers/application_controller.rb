class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Basic::ControllerMethods
  include ActionController::HttpAuthentication::Token::ControllerMethods
  before_action :authenticate_user_from_token!
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_not_valid
  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private

  def not_found
    render status: :not_found
  end

  def user_not_authorized
    render status:	:unauthorized
  end

  def record_not_valid(exception)
    render json: exception,
           serializer: ActiveModel::Serializer::ErrorSerializer,
           status: :unprocessable_entity
  end

  def authenticate_user_from_token!
    authenticate_with_http_token do |token, options|
      user_email = options[:email].presence
      user = user_email && User.find_by_email(user_email)

      if user && Devise.secure_compare(user.authentication_token, token)
        sign_in user, store: false
      end
    end
  end
end
