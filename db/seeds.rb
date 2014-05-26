# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

categories = Category.create([{ title: 'Road', image: File.new('images/road.jpg', "r") }, 
  { title: 'Cruiser', image: File.new('images/cruiser.jpg', "r")},
  { title: 'Fixed Gear', image: File.new('images/fixie2.png', "r")},
  { title: 'Mountain', image: File.new('images/mountain.jpg', "r")},
  { title: 'Cruiser', image: File.new('images/cruiser.jpg', "r")},
  { title: 'Vintage', image: File.new('images/vintage.jpg', "r")},
])
