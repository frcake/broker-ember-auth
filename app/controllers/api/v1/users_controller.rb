
# TODO: needs to chage all render json error and add serializer: ActiveModel::Serializer::ErrorSerializer
class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]
  before_action :authenticate_user!, only: %i[index show update]
  def index
    render json: @users = User.all, status: 200
  end

  def show
    if @user.present?
      render json: @user = User.find(params[:id]), status: 200
    else
      render status: 401
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render jsonapi: @user,
             status: 200
    else
      render jsonapi: @user,
             serializer: ActiveModel::Serializer::ErrorSerializer,
             status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render jsonapi: @user,
             serializer: ActiveModel::Serializer::ErrorSerializer,
             status: 200
    else
      render jsonapi: @user,
             serializer: ActiveModel::Serializer::ErrorSerializer,
             status: :unprocessable_entity
    end
  end

  def destroy
    if @user.present?
      @user.destroy
      render status: 200
    else
      render status: 401
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    res = ActiveModelSerializers::Deserialization.jsonapi_parse(params)
    res
  end
end
