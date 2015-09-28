class AddUserIdToBrainstorms < ActiveRecord::Migration
  def change
    add_column :brainstorms, :user_id, :integer
  end
end
