class CollectionsController < Spree::StoreController

  def index
    @collections = Spree::Taxon.find_by(name: "Collection").children.load
  end

end
