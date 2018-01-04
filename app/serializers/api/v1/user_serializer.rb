class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id,
             :email,
             #:user_name,
             # :viewer,
             # :admin,
             # :super_admin,
             :last_sign_in_ip,
             :last_sign_in_at
end
