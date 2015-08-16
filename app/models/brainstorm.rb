class Brainstorm < ActiveRecord::Base
  attr_accessible :description, :title
  has_many :items
end
