class CreateCategoryJoins < ActiveRecord::Migration
  def change
    create_table :category_joins do |t|
      t.integer :item_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end
