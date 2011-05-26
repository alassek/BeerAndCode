require "yaml"
require "sequel"
require "logger"
require "sinatra/sequel"

# Nope, this isn't ugly at all. It has a really nice personality.
DB_CONF = YAML.load(
  File.read(
    File.join(APP_ROOT, 'config', 'database.yml')
  )
)

DB = Sequel.connect(DB_CONF[RACK_ENV])
DB.loggers << Logger.new($stdout)
