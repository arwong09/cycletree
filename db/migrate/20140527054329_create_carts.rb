class CreateCarts < ActiveRecord::Migration
  def change
    create_table :carts do |t|
      t.integer :owner_id, null: false
      t.timestamps
    end
  end
end
