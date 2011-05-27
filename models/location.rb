class Location < Sequel::Model
  def self.near(latitude, longitude)
    select_append{ distance_cosine(lat, lng, latitude, longitude).as('distance') }.order('distance')
  end
end

