require 'mongo'
conn = Mongo::Connection.new("localhost")
coll = conn.db("test").collection("systems")

require 'sinatra'
require 'json'

before do
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'X-CSRF-Token' # This is a Rails header, you may not need it
end

get '/hi' do
  "Hello World!"
end

get '/example.json' do
  content_type :json
  { :key1 => 'value1', :key2 => 'value2' }.to_json
end

get '/result' do
  #"Hi there people! #{params['xloc']} #{params['yloc']}"
  content_type :json
  coll.find(:location => {"$near" => [params['xloc'].to_i, params['yloc'].to_i], "$maxDistance" => 50}).to_a.to_json
end  

get '/query' do
  params['xloc']
end	