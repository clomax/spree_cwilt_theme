module Spree
  module ProductsHelper

    def property_value_for(product, property)
      return nil unless property = product.properties.find_by_name(property)
      property.value
    end

  end
end
