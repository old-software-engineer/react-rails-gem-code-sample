# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root "pages#home"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: %i[create destroy edit update]
    end
  end

  get "*path", to: "pages#home", via: :all
end