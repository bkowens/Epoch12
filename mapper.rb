require 'mongo'
conn = Mongo::Connection.new("localhost")
coll = conn.db("test").collection("systems")

require 'sinatra'
require 'json'

set :port, 3434

before do
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'X-CSRF-Token' # This is a Rails header, you may not need it
end

get '/hi' do
  "Hello World!"
end

get '/radar' do
  #Query to the database, retrieves data for the map based on a radius from the x and y coordinates.
  content_type :json
  coll.find(:location => {"$near" => [params['xloc'].to_i, params['yloc'].to_i], "$maxDistance" => 50}).to_a.to_json
end

# this query is for box or rectangle grid searches
get '/section' do
xloc1 = params['xloc1'].to_i
xloc2 = params['xloc2'].to_i
yloc1 = params['yloc1'].to_i
yloc2 = params['yloc2'].to_i

if xloc1 && xloc2 && yloc1 && yloc2
  content_type :json
  square1 = [xloc1, yloc1]
  square2 = [xloc2, yloc2]

#square2 = [300,400]
      coll.find({:location => {"$within" => {"$box" => [square1,square2]}}}).to_a.to_json
    else
      "Invalid parameters supplied.  Please input standard box coordinates."
    end
end
