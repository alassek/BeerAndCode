require "sequel"
require "logger"
require "sinatra/sequel"

DB = Sequel.connect(ENV['DATABASE_URL'] || 'sqlite://db/development.db')
DB.loggers << Logger.new($stdout)
