Deface::Override.new (:virtual_path => "spree/layouts/spree_application",
                      :remove       => "erb[loud]:contains('spree/shared/footer')",
                      :name         => "alter_footer"
                     )
