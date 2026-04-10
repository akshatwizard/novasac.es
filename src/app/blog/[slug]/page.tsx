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
        const res = await axios.get<BlogDetailResponse>(`http://gangapapers.in/novasac/api/blog/${slug}`);
        const blog = res.data?.data;

        if (!blog) {
            return {
                title: 'Blogs Not Found',
                description: 'The blog you are looking for could not be found.',
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
            title: 'Novasec',
            description: 'Novasec',
        };
    }
}