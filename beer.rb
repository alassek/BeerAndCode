require "sinatra/base"
require "haml"
require "json"

Sinatra::Base.set :environment, ENV['RACK_ENV'] || "development"
RACK_ENV = Sinatra::Base.environment
APP_ROOT = File.dirname(__FILE__)

Dir["config/*.rb"].each {|file| require file }
Dir["models/*.rb"].each {|file| require file }

module BeerAndCode
  class HomePage < Sinatra::Base

    set :haml, :format => :html5

    before /\.json$/ do
      content_type 'application/json'
    end

    get '/' do
      haml :index
    end

    get '/locations.json' do
      {
        :status => 'success',
        :data => {
          :locations => get_locations_for(request)
        }
      }.to_json
    end

    private

      def get_locations_for(request)
        lat, lng = request.params[:lat], request.params[:lng]
        locations = Location.near(lat, lng).limit(10).all
        locations.map(&:to_hash)
      end

  end
end
