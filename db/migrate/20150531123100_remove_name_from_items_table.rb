class RemoveNameFromItemsTable < ActiveRecord::Migration
  def change
    remove_column :items, :name
  end
end
