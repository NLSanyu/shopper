Rails.application.routes.draw do
  root 'pages#index'
  resources :items, only: :index

  match '*path', to: 'pages#index', via: :all
end
