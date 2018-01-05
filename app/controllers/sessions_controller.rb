class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super do |user|
      if request.format.json?
        data = {
          id: user.id,
          token: user.authentication_token,
          email: user.email
        }
        render(jsonapi: data, status: 201) && return
      end
    end
  end
end
