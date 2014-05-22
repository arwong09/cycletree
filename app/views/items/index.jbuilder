json.array!(@items) do |json, item|
  json.id item.id
  json.title item.title
  json.image_url item.image.url
  json.thumb_url item.image.url(:thumb)
end