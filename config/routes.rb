Spree::Core::Engine.routes.prepend do
  resources :collections, :only => [:index]
end
