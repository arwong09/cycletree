class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :item_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
