class AddBrainstormIdToItemsTable < ActiveRecord::Migration
  def change
    add_column :items, :brainstorm_id, :integer
  end
end
