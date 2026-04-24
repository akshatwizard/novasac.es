import { SearchSuggestionApiResponse } from '@/types/search.type'
import { useQuery } from '@tanstack/react-query'

export const searchKeys = {
    suggestions: (query: string) => ['search-suggestions', query] as const,
}

export async function fetchSearchSuggestions(query: string): Promise<SearchSuggestionApiResponse> {
    const res = await fetch(`https://gangapapers.in/novasac/api/search-suggestion?query=${encodeURIComponent(query)}`)
    if (!res.ok) throw new Error('Failed to fetch suggestions')
    return res.json()
}

export function useSearchSuggestions(query: string) {
    return useQuery({
        queryKey: searchKeys.suggestions(query),
        queryFn: () => fetchSearchSuggestions(query),
        enabled: query.trim().length >= 1,
        staleTime: 1000 * 30, // 30 seconds
        placeholderData: (prev) => prev,
    })
}