class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.datetime :due_date

      t.timestamps
    end
  end
end
