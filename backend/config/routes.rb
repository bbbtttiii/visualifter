Rails.application.routes.draw do
  root :to => 'home#index'
  resources :blocks
  resources :workouts
end
