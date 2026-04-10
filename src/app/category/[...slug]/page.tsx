import CatalogClient from '@/components/catalog_client'
import Section from '@/components/ui/section'
import Wrapper from '@/components/ui/wrapper'
import { catalogKeys, fetchCatalog } from '@/hooks/catalog'
import { CatalogApiResponse } from '@/types/catalog.types'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Metadata } from 'next'

export default async function ProductsLists({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params
    
    const queryClient = new QueryClient()
    const activeFilters = {}

    await queryClient.prefetchInfiniteQuery({
        queryKey: catalogKeys.list(slug, activeFilters),
        queryFn: ({ pageParam = 1 }) => fetchCatalog({ slug, page: pageParam as number, filters: activeFilters }),
        getNextPageParam: (lastPage: CatalogApiResponse) => {
            const { pagination } = lastPage.data
            return pagination.has_next_page ? pagination.current_page + 1 : undefined
        },
        initialPageParam: 1,
    })

    const cachedData = queryClient.getQueryData<{ pages: CatalogApiResponse[] }>(catalogKeys.list(slug, activeFilters))

    const firstPage = cachedData?.pages?.[0]?.data
    
    const initialFilters = firstPage?.product_filters ?? []
    const initialProducts = firstPage?.products ?? []
    const initialTotalProducts = firstPage?.pagination.total_products ?? 0
    const categorySlug = firstPage?.category.slug ?? slug[0]
    const attribute_value = firstPage?.attribute_value?.slug ?? firstPage?.products[0].attributes_value_slug

    const pageTitle = firstPage?.attribute_value ? `${firstPage?.attribute_value?.name} ${firstPage.category.title}` : firstPage?.category.title

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Section>
                <Wrapper>
                    <div className="mb-10">
                        {/* Breadcrumb */}
                        <nav className="text-xs text-stone-400 tracking-wide mb-3 flex items-center gap-1.5">
                            <span>Home</span>
                            <span>/</span>
                            <span>{firstPage?.category.title}</span>
                            {firstPage?.attribute_value && (
                                <>
                                    <span>/</span>
                                    <span className="text-stone-600">{firstPage.attribute_value.name}</span>
                                </>
                            )}
                        </nav>

                        <h1 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">
                            {pageTitle}
                        </h1>

                        {firstPage && (
                            <p className="mt-2 text-sm text-stone-500">
                                {firstPage.pagination.total_products} products available
                            </p>
                        )}
                    </div>

                    <CatalogClient
                        slug={slug}
                        initialFilters={initialFilters}
                        initialProducts={initialProducts}
                        initialTotalProducts={initialTotalProducts}
                        attributeValue={attribute_value!}
                    />
                </Wrapper>
            </Section>
        </HydrationBoundary>
    )
}




export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params

    try {
        const res: CatalogApiResponse = await fetchCatalog({ slug, page: 1 })
        const { meta } = res.data
        return {
            title: meta.title,
            description: meta.description,
            keywords: meta.keywords,
        }
    } catch {
        return { title: 'Product Catalog | Wooden Souvenir' }
    }
}