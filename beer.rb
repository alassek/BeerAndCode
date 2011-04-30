require "json"

class BeerAndCode < Sinatra::Base
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
      [
        {
          :city => 'Omaha',
          :state => 'NE',
          :lat => 41.259743,
          :lng => -95.997849
        }
      ]
    end

end
