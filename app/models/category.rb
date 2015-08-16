class Category < ActiveRecord::Base
  attr_accessible :desc, :name
  has_many :items
end
