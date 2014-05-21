class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.string :condition, null: false
      t.string :features
      t.integer :owner_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
    
    add_index :items, :title 
    add_index :items, :price 
    add_index :items, :condition 
    add_index :items, :features
    add_index :items, :description 
  end
end
