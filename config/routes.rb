# frozen_string_literal: true

Rails.application.routes.draw do
  # devise_for :users
  devise_for :users,
    controllers: {
      sessions: "users/sessions",
      registrations: "users/registrations"
    }
  root "homes#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: %i[create destroy edit update]
    end
  end

  get "*path", to: "homes#index", via: :all
end
