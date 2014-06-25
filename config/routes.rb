Spree::Core::Engine.routes.prepend do
  match '/size-guide' => 'pages#size_guide'
  match '/delivery'   => 'pages#delivery'
end
