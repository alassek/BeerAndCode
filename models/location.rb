class Location < Sequel::Model
  def_dataset_method(:near) do |latitude, longitude|
    select_append{ distance_cosine(lat, lng, latitude, longitude).as('distance') }.order('distance')
  end

  def to_hash
    {
      :city => city,
      :state => state,
      :lat => lat,
      :lng => lng
    }
  end
end

