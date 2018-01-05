class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super do |user|
      if request.format.json?
        data = {
          id: user.id,
          token: user.authentication_token,
          email: user.email,
          # viewer: user.viewer,
          # admin: user.admin,
          # super_admin: user.super_admin
        }
        render(jsonapi: data, status: 201) && return
      end
    end
  end
end
