json.extract! @item
  json.id @item.id
  json.title @item.title
  json.image_url @item.image.url
  json.thumb_url @item.image.url(:thumb)
  json.small_url @item.image.url(:small)