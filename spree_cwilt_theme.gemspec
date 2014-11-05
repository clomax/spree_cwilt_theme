# encoding: UTF-8
Gem::Specification.new do |s|
  s.platform    = Gem::Platform::RUBY
  s.name        = 'spree_cwilt_theme'
  s.version     = '2.3.0'
  s.summary     = 'Cwilt Spree Theme'
  s.description = 'Spree theme for shop.cwilt.co.uk.'
  s.required_ruby_version = '>= 1.9.3'

  s.author    = 'Craig Lomax'
  s.email     = 'craig@clomax.me.uk'
  s.homepage  = 'http://clomax.me.uk'

  #s.files       = `git ls-files`.split("\n")
  #s.test_files  = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.require_path = 'lib'
  s.requirements << 'none'

  s.add_dependency 'spree_core', '~> 2.3.0'
  s.add_dependency 'deface'

  s.add_development_dependency 'capybara', '~> 2.1'
  s.add_development_dependency 'coffee-rails'
  s.add_development_dependency 'database_cleaner'
  s.add_development_dependency 'factory_girl', '~> 4.4'
  s.add_development_dependency 'ffaker'
  s.add_development_dependency 'rspec-rails',  '~> 2.13'
  s.add_development_dependency 'sass-rails'
  s.add_development_dependency 'selenium-webdriver'
  s.add_development_dependency 'simplecov'
end
