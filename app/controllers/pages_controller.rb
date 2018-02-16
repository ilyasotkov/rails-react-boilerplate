class PagesController < ApplicationController
  def home
    @app_version = File.read('VERSION')
  end
end
