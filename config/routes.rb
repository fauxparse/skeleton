Rails.application.routes.draw do
  # tooling
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
    get 'cosmos', to: 'cosmos#index'
  end

  post '/graphql', to: 'graphql#execute'

  get '*path', to: 'frontend#index'
  root 'frontend#index'
end
