class Api::V1::BaseController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_not_valid

  private

  def record_not_valid(exception)
    render json: exception,
           serializer: ActiveModel::Serializer::ErrorSerializer,
           status: :unprocessable_entity
  end

  def not_found
    render status: :not_found
  end
end
