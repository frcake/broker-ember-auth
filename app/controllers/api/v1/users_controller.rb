class Api::V1::UsersController < Api::V1::BaseController
  before_action :set_user, only: %i[show update destroy]
  before_action :authenticate_user!, only: %i[index show update]

  def index
    render json: User.all, status: :ok
  end

  def show
    render jsonapi: @user, status: :ok
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render jsonapi: @user,
             status: :ok
    else
      record_not_valid @user
    end
  end

  def update
    if @user.update(user_params)
      render jsonapi: @user,
             status: :ok
    else
      record_not_valid @user
    end
  end

  def destroy
    @user.destroy
    render  status: :ok
  end

  private

  def set_user
    @user = User.find_by_id(params[:id])
    not_found unless @user.present?
  end

  def user_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
