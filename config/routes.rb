Rails.application.routes.draw do
  get 'sessions/passwords'
  mount_ember_app :frontend, to: '/'
  devise_for :users, controllers: { sessions: 'sessions', passwords: 'passwords' }, default: :json
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :intents, only: :new
        resources :interests, only: :new
      end
    end
  end
end
