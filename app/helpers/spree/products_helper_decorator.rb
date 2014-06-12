module Spree
  module ProductsHelper

    def property_value_for(product, property)
      return nil unless property = product.properties.find_by_name(property)
      return nil unless product_properties = product.product_properties.find_by_property_id(proterty.id)
      product_properties.value
    end

  end
end
