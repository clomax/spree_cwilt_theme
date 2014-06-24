Spree::Core::Engine.routes.prepend do
  get '/collections', to: 'collections#index'
end
