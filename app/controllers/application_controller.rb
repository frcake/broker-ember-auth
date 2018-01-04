class ApplicationController < ActionController::API
  # include Pundit
  include ActionController::HttpAuthentication::Basic::ControllerMethods
  include ActionController::HttpAuthentication::Token::ControllerMethods
  before_action :authenticate_user_from_token!
  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  # TODO: MAJOR: Fix N+1 queries everywhere

  private

  def user_not_authorized
    # render( status: 401) && return
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
