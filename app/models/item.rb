class Item < ActiveRecord::Base
  attr_accessible :description, :due_date
  belongs_to :brainstorm
  belongs_to :category
  belongs_to :user
end
