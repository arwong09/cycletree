class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :seller_id, null: false
      t.timestamps
    end
    
    add_index :reviews, :author_id
    add_index :reviews, :seller_id
  end
end
