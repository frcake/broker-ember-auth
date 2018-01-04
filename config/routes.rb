Rails.application.routes.draw do
  get 'sessions/passwords'

  devise_for :users, controllers: { sessions: 'sessions', confirmation: 'confirmation', passwords: 'passwords' }, default: :json
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm
  mount_ember_app :frontend, to: '/'

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
end
