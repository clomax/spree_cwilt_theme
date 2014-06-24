Spree::Core::Engine.routes.add_routes do
  get '/collections', to: 'collections#index'
end
