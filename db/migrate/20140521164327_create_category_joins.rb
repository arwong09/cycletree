class CreateCategoryJoins < ActiveRecord::Migration
  def change
    create_table :category_joins do |t|

      t.timestamps
    end
  end
end
