class StaticPagesController < ApplicationController
  def index
    @front_page = true
  end
end
