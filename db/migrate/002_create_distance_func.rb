class CreateDistanceFunc < Sequel::Migration
  def up
    run "DROP FUNCTION IF EXISTS distance_cosine"
    run <<-SQL
      CREATE FUNCTION distance_cosine (lat_1 DOUBLE, lng_1 DOUBLE, lat_2 DOUBLE, lng_2 DOUBLE)
        RETURNS DOUBLE
        DETERMINISTIC
      BEGIN
        DECLARE distance DOUBLE;
        SET distance = ACOS(
          SIN(RADIANS(lat_1)) * SIN(RADIANS(lat_2)) +
          COS(RADIANS(lat_1)) * COS(RADIANS(lat_2)) *
          COS(RADIANS(lng_2 - lng_1))
        ) * 3956.547;
        RETURN distance;
      END
    SQL
  end

  def down
    run "DROP FUNCTION distance_cosine"
  end
end
