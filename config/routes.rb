Spree::Core::Engine.routes.draw do
end

Spree::Core::Engine.routes.prepend do
  get '/collections', to: 'collections#index'
end
