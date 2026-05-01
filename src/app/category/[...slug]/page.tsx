import CatalogClient from '@/components/catalog_client'
import Section from '@/components/ui/section'
import Wrapper from '@/components/ui/wrapper'
import { catalogKeys, fetchCatalog } from '@/hooks/catalog'
import { CatalogApiResponse } from '@/types/catalog.types'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Metadata } from 'next'

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
    const attribute_value = firstPage?.attribute_value?.slug ?? firstPage?.products[0].attributes_value_slug

    const pageTitle = firstPage?.attribute_value ? `${firstPage?.attribute_value?.name}` : firstPage?.category.title

    const shortContent = firstPage?.primary_category?.short_content
    const longContent = firstPage?.primary_category?.long_content

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

                        {shortContent && (
                            <div className="mt-6 relative">
                                {/* Decorative left border accent */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.75 rounded-full bg-linear-to-b from-primary-400 via-primary-300 to-primary-100" />
                                <div className="pl-5">
                                    <div
                                        className="text-sm md:text-[15px] leading-relaxed text-stone-600 font-light max-w-3xl [&>p]:m-0"
                                        dangerouslySetInnerHTML={{ __html: shortContent }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <CatalogClient
                        slug={slug}
                        initialFilters={initialFilters}
                        initialProducts={initialProducts}
                        initialTotalProducts={initialTotalProducts}
                        attributeValue={attribute_value!}
                    />

                    {longContent && (
                        <div className="mt-20 mb-10">
                            {/* Divider with label */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px flex-1 bg-stone-200" />
                                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium whitespace-nowrap">
                                    About {pageTitle}
                                </span>
                                <div className="h-px flex-1 bg-stone-200" />
                            </div>

                            {/* Content card */}
                            <div className="relative bg-stone-50 border border-stone-200 rounded-2xl px-7 py-8 md:px-12 md:py-10 overflow-hidden">
                                {/* Decorative corner grain texture via box-shadow */}
                                <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full opacity-15 bg-primary-500 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-tr-full opacity-15 bg-primary-500 pointer-events-none" />

                                {/* Prose content */}
                                <div
                                    className="prose prose-stone prose-sm md:prose-base max-w-none
                                            prose-headings:font-serif prose-headings:text-stone-800
                                            prose-p:text-stone-600 prose-p:leading-relaxed prose-p:font-light
                                            prose-strong:text-stone-700 prose-strong:font-medium
                                            prose-a:text-amber-700 prose-a:underline-offset-2
                                            prose-li:text-stone-600"
                                    dangerouslySetInnerHTML={{ __html: longContent }}
                                />
                            </div>
                        </div>
                    )}
                </Wrapper>
            </Section>
        </HydrationBoundary>
    )
}
