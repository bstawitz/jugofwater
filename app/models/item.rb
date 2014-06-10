class Item < ActiveRecord::Base
  attr_accessible :description, :due_date, :name
end
