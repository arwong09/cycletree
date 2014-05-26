json.array!(@categories) do |json, category|
  json.id category.id
  json.title category.title
  
  json.image_url category.image.url
  json.thumb_url category.image.url(:thumb)
  json.small_url category.image.url(:small)
  json.index_small category.image.url(:index_small)
  json.index_large category.image.url(:index_large)
end