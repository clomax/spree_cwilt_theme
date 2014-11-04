module Spree
  module LightboxHelper

    def create_product_image_url(image, product, options, style)
      options.reverse_image! alt: image.alt.blank ? product.name : image.alt
      link_to image.attachment.url(style), options
    end

    def define_image_url_method(style)
      self.class.send :define_method, "#{style}_image_url" do |product, *options|
        options = options.first || {}
        if product.images.empty?
          if !product.is_a?(Spree::Variant) && !product.variant_images.empty?
            create_product_image_url(product.variant_images.first, product, options, style)
          else
            if product.is_a?(Variant) && !product.product.variant_images.empty?
              create_product_image_url(product.product.variant_images.first, product, options, style)
            end
          end
        else
          create_product_image_url(product.images.first, product, options, style)
        end
      end
    end

  end
end
