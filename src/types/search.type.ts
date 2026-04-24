export interface SuggestionItem {
    type: 'suggestion'
    title: string
    image: string | null
}

export interface ProductSuggestionItem {
    type: 'product'
    title: string
    slug: string
    attributes_value_slug: string
    category: string
    offer_rate: number | null
    image: string | null
}

export type SearchSuggestion = SuggestionItem | ProductSuggestionItem

export interface SearchSuggestionApiResponse {
    suggestions: SearchSuggestion[]
}