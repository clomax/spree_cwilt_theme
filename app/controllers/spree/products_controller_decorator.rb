module Spree
  ProductsController.class_eval do

    def show
      @variants = @product.variants_including.active(current_currency).includes([:option_values, :images])
      @product_properties = @product.product_properties.includes(:property)
      @taxon = Spree::Taxon.find(params[:taxon_id]) if params[:taxon_id]
      @taxonomies = Spree::Taxonomy.includes(root: :children)
    end

  end
end
