
export interface ImageThumb {
  id: number
  image_thumb: string
}

export interface ImageLarge {
  id: number
  image_large: string
}

export interface AttributeValue {
  id: number
  name: string
  slug: string
  attributes_id: number
}

export interface ProductAttributeValue {
  id: number
  product_id: number
  product_attribute_id: number
  attributes_value_id: number
  sort_order: number
  created_at: string
  updated_at: string
  attribute_value: AttributeValue
}

export interface ProductAttribute {
  id: number
  sort_order: number
  created_at: string
  updated_at: string
  product_id: number
  attributes_id: number
  attribute: {
    id: number
    title: string
    slug: string
  }
  values: ProductAttributeValue[]
}

export interface ProductCategory {
  id: number
  title: string
  slug: string
}

export interface ProductDetails {
  id: number
  title: string
  slug: string
  category_id: number
  product_description: string | null
  product_specification: string | null
  meta_title: string | null
  meta_description: string | null
  video_id: string | null
  mrp: number | null
  offer_rate: number | null
  purchase_rate: number | null
  sku: string | null
  stock_quantity: number | null
  image_thumbs: ImageThumb[]
  image_larges: ImageLarge[]
  category: ProductCategory
  attributes: ProductAttribute[]
  additional_features: string | null
}

export interface RelatedProduct {
  id: number
  title: string
  slug: string
  attribute_value_slug: string
  category_title: string
  image: string | null
}

export interface OtherRelatedItem {
  group_name: string
  product_slug: string
  attribute_value_slug: string
}

export interface AttributesValueName {
  id: number
  title: string
  slug: string
}

export interface ProductDetailData {
  product_details: ProductDetails
  attributes_value_name: AttributesValueName
  related_products: RelatedProduct[]
  other_related_products: Record<string, OtherRelatedItem[]>
}

export interface ProductDetailApiResponse {
  success: boolean
  message: string
  data: ProductDetailData
}