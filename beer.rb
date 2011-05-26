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
        Location.all
      end

  end
end
