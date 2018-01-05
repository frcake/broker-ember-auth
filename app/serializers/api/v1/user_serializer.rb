class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id,
             :email,
             :last_sign_in_ip,
             :last_sign_in_at
end
