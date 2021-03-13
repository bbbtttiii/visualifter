Rails.application.routes.draw do
  root :to => '/'
  resources :blocks
  resources :workouts
end
