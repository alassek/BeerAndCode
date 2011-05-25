class CreateLocations < Sequel::Migration
  def up
    create_table! :locations do
      primary_key :id

      String :city
      String :state
      Float :lat
      Float :lng
    end
  end

  def down
    drop_table :comments
  end
end
