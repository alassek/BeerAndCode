$:.unshift File.dirname(__FILE__)
require "beer"
require "sinatra/sequel"

namespace :seed do
  desc "seed locations"
  task :locations do
    locations = DB[:locations]
    locations.insert :city => "Omaha", :state => "NE", :lat => 41.259743, :lng => -95.997849
  end
end
