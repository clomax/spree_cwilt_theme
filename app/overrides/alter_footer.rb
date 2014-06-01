Deface::Override.new (:virtual_path => "spree/layouts/spree_application",
                      :replace      => "erb[loud]:contains('spree/shared/footer')",
                      :partial      => "views/partials/_footer",
                      :name         => "alter_footer"
                     )
