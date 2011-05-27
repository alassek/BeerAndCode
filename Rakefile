$:.unshift File.dirname(__FILE__)
require "beer"
Sequel.extension :migration

namespace :db do
  desc "Migrate DB to the latest version"
  task :migrate do
    m, dir = Sequel::Migrator, File.join(APP_ROOT, 'db', 'migrate')
    target = ENV['TARGET'] ? ENV['TARGET'].to_i : nil
    current = ENV['CURRENT'] ? ENV['CURRENT'].to_i : nil

    m.run DB, dir, :target => target, :current => current
  end
end

namespace :seed do
  desc "seed locations"
  task :locations do
    DB[:locations].insert :city => "Omaha", :state => "NE", :lat => 41.259743, :lng => -95.997849
  end
end
