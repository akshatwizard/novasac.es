import Section from '@/components/ui/section'
import Wrapper from '@/components/ui/wrapper'
import { fetchProductDetail, productKeys } from '@/hooks/fetch_product'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetailClient from './product_page'

export default async function ProductPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: productKeys.detail(slug),
        queryFn: () => fetchProductDetail(slug),
    })

    const data = queryClient.getQueryData<Awaited<ReturnType<typeof fetchProductDetail>>>(
        productKeys.detail(slug)
    )

    if (!data?.success) notFound()

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Section>
                <Wrapper>
                    <ProductDetailClient
                        slug={slug}
                        initialData={data}
                    />
                </Wrapper>
            </Section>
        </HydrationBoundary>
    )
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params
    try {
        const res = await fetchProductDetail(slug)
        const p = res.data.product_details
        return {
            title: p.meta_title ?? p.title,
            description: p.meta_description ?? undefined,
        }
    } catch {
        return { title: 'Product | Novasac' }
    }
}