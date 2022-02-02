Rails.application.routes.draw do
  get 'cosmos', to: 'cosmos#index' if Rails.env.development?
  get '*path', to: 'frontend#index'
  root 'frontend#index'
end
