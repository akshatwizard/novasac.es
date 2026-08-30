import Section from "@/components/ui/section";
import Wrapper from "@/components/ui/wrapper";
import { BlogDetailResponse } from "@/types/blog.types";
import axios from "axios";
import { Metadata } from "next";
import BlogDetail from "./details";
export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <Section>
            <Wrapper>
                <BlogDetail slug={slug} />
            </Wrapper>
        </Section>
    )
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    try {
        const res = await axios.get<BlogDetailResponse>(`https://admin.novasac.es/api/blog/${slug}`);
        const blog = res.data?.data;
        if (!blog) {
            return {
                title: 'Blog No Encontrado',
                description: 'No hemos podido encontrar el blog que buscas.',
            };
        }
        const title = blog.meta_title
        const description = blog.meta_description
        return {
            title,
            description,
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Novasac',
            description: 'Novasac',
        };
    }
}
