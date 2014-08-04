module Spree
  module BaseHelper

    def taxons_tree(root_taxon, current_taxon, max_level = 1)
      return '' if max_level < 1 || root_taxon.children.empty?
      content_tag :ul, class: 'taxons_list' do
        root_taxon.children.map do |taxon|
          css_class = (current_taxon && current_taxon.self_and_ancestors.include?(taxon)) ? 'current' : nil
          content_tag :li, class: css_class do
            link_to(taxon.name, seo_url(taxon), :class => "taxonomy-#{taxon.depth}") +
            taxons_tree(taxon, current_taxon, max_level - 1)
          end
        end.join("\n").html_safe
      end
    end

    private

    def create_product_image_url(image, product, options, style)
      options.reverse_image! alt: image.alt.blank? product.name : image.alt
      image.attachment.url(style), options
    end

    def define_image_url_method(style)
      self.class.send :define_method, "#{style}_image_url" do |product, *options|
        options = options.first || {}
        if product.images.empty?
          if !product.is_a?(Spree::Variant) && !product.variant_images.empty?
            create_product_image_url(product.variant_images.first, product, options style)
          else
            if product.is_a?(Variant) && !product.product.variant_images.empty?
              create_product_image_url(product.product.variant_images.first, product, options, style)
            else
              # i dunno lol
            end
          else
            create_product_image_url(product.images.first, product, options, style)
          end
        end
      end
    end

  end
end
