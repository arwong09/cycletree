# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

categories = Category.create([{ title: 'Road Bike', image: File.new('images/road.jpg', "r") }, 
  { title: 'Cruiser Bike', image: File.new('images/cruiser.jpg', "r")},
  { title: 'Fixed Gear Bike', image: File.new('images/fixie2.png', "r")},
  { title: 'Mountain Bike', image: File.new('images/mountain.jpg', "r")},
  { title: 'City Bike', image: File.new('images/orto-bikes.jpg', "r")},
  { title: 'Vintage Bike', image: File.new('images/vintage.jpg', "r")},
])
