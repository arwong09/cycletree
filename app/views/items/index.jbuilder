json.array!(@items) do |json, item|
  json.id item.id
  json.title item.title
  json.price item.price
  json.owner User.find(item.owner_id).username
  json.owner_id item.owner_id
  
  json.image_url item.image.url
  json.thumb_url item.image.url(:thumb)
  json.small_url item.image.url(:small)
end