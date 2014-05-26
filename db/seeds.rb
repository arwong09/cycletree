# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

categories = Category.create([{ title: 'Road Bike', image: File.new('images/road.jpg', "r") }, 
  { title: 'Cruiser Bike', image: File.new('images/cruiser.jpg', "r")},
  { title: 'Fixed Gear Bike', image: File.new('images/fixed-gear.jpg', "r")},
  { title: 'Mountain Bike', image: File.new('images/mountain.jpg', "r")},
  { title: 'City Bike', image: File.new('images/city-bike.jpg', "r")},
  { title: 'Vintage Bike', image: File.new('images/vintage.jpg', "r")},
])

users = User.create([{ username: 'Andrew', password_digest: '$2a$10$eyNa5tS7yF/eWhpfupDWyOfxfLGQe89gSNVU6dm9ML3YYJS1RfRtm', full_name: 'Andrew Wong', email: 'arwong09@gmail.com', description: 'Hey my name is Andrew, and I\'m the creator of this site!  I made this site as my final project at App Academy.  In just 8 intensive weeks, we learned, Ruby, Ruby on Rails, JavaScript, Backbone.js, JQuery, HTML5, CSS3, and Bootstrap.  And at the end of it all, this was the project I put together with all those new skills!  I\'ve always been a fan of Craigslist - classifieds are a great way for people to trade between each other.  That\'s why I made this site, it captures the classifieds functionality of Craigslist, with the added benefit of user profiles and reviews, so you know who you\'re dealing with.  I hope you like it!', title: 'Founder of Cycletree', blurb: 'A budding Web Developer with some new skills!', image: File.new('images/andrew-wong.jpg', 'r')},
  { username: 'rhonsby', password_digest: '$2a$10$eyNa5tS7yF/eWhpfupDWyOfxfLGQe89gSNVU6dm9ML3YYJS1RfRtm', full_name: 'Robert Honsby', email: 'rhonsby@gmail.com', description: 'A recent graduate from UCLA who discovered programming a little too late in his academic career. Regardless, what started out as a hobby became something I found myself immersed in every day, so here I am.

Born and raised in California, I\'ve had the pleasure of living in almost every geographic region of California. The Bay Area is still my favorite place to live to this day, so I\'m glad to be back.', title: 'CEO at Hackstarter', blurb: 'Weigh 160, bench 250.', image: File.new('images/rhonsby.jpg', 'r')}])

items = Item.create([{ title: 'Mens Hybrid Bike - 22" - MUST SEE', description: "Good condition Marin San Anselmo - roughly 12 years old but rides great, with no real mechanical issues. XL - fits for someone 5'10'' to 6'3''. Great commuter bike for a very fair price.

Road-size wheels with hybrid tires and front suspension. Panier rack installed.

$150 obo. Free delivery available to Santa Cruz, Scotts Valley, or Santa Cruz Mountains. Delivery available outside of this area for small delivery fee.", price: "150", condition: "Used", features: "Road-size wheels, Hybrid tires, front suspension, Panier rack installed", owner_id: '1', image: File.new('images/fixie2.png', 'r')},

{ title: 'Girls Red 20" Bike - 5 speeds - New Like Condition ', description: "Good condition Marin San Anselmo - roughly 12 years old but rides great, with no real mechanical issues. XL - fits for someone 5'10'' to 6'3''. Great commuter bike for a very fair price.

Road-size wheels with hybrid tires and front suspension. Panier rack installed.

$150 obo. Free delivery available to Santa Cruz, Scotts Valley, or Santa Cruz Mountains. Delivery available outside of this area for small delivery fee.", price: "150", condition: "New", features: "Road-size wheels, Hybrid tires, front suspension, Panier rack installed", owner_id: '2', image: File.new('images/bike1.jpeg', 'r')}
])