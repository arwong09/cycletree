class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token
                
      t.string :email
      t.string :full_name
      t.string :profile
      t.string :description
      t.string :title
      t.string :blurb
      t.timestamps
    end
    
    add_index :users, [:username, :email, :full_name], unique: true
  end
end
