"use client";

import { Blog, BlogDetailResponse } from "@/types/blog.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

interface BlogDetailProps {
    slug: string;
}


export default function BlogDetail({ slug }: BlogDetailProps) {
    const { data: blog, isLoading, isError, error, } = useQuery<Blog>({
        queryKey: ["blog", slug],
        queryFn: async () => {
            const res = await axios.get<BlogDetailResponse>(`https://admin.novasac.es/api/blog/${slug}`)
            return res.data.data
        }
    });

    if (isLoading) return <BlogSkeleton />;

    if (isError) {
        return (
            <BlogError
                message={error instanceof Error ? error.message : "No se ha podido cargar el artículo del blog."}
            />
        );
    }

    if (!blog) return null;

    return (
        <article className="max-w-3xl mx-auto px-4 py-12 md:py-20">

            <header className="mb-10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 mb-4">
                    <span>{blog.published_at}</span>
                    <span className="text-stone-300">—</span>
                    <span className="text-orange-600 font-semibold">Novedades del Sector</span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight tracking-tight text-stone-900 mb-5">
                    {blog.title}
                </h1>

                <p className="text-base md:text-lg text-stone-500 leading-relaxed border-l-4 border-orange-500 pl-4">
                    {blog.short_desc}
                </p>
            </header>

            <div className="relative overflow-hidden rounded-lg shadow-xl mb-12 group">
                <Image
                    src={blog.main_image}
                    alt={blog.title}
                    width={1200}
                    height={600}
                    priority
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>

            <div
                className="
          prose prose-stone prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-stone-900 prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-stone-200
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-stone-700 prose-p:leading-[1.85] prose-p:mb-5
          prose-ul:pl-5 prose-ul:mb-5
          prose-li:text-stone-700 prose-li:mb-2 prose-li:marker:text-orange-500
          prose-a:text-orange-600 prose-a:underline prose-a:underline-offset-2
          prose-strong:text-stone-900 prose-strong:font-semibold
          prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:bg-orange-50
          prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:rounded-r-md
          prose-blockquote:text-stone-500 prose-blockquote:italic
        "
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {blog.images && blog.images.length > 0 && (
                <div className="mt-14 pt-8 border-t border-stone-200">
                    <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Galería</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {blog.images.map((img, idx) => (
                            <div
                                key={idx}
                                className="overflow-hidden rounded-md shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <Image
                                    src={img.image}
                                    alt={img.alt_text}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </article>
    );
}


function BlogSkeleton() {
    return (
        <div className="max-w-3xl w-full mx-auto px-4 py-12 md:py-20 animate-pulse">
            {/* Meta */}
            <div className="flex gap-3 mb-5">
                <div className="h-3 w-24 bg-stone-200 rounded" />
                <div className="h-3 w-3 bg-stone-200 rounded" />
                <div className="h-3 w-28 bg-orange-100 rounded" />
            </div>
            {/* Title */}
            <div className="space-y-3 mb-6">
                <div className="h-8 bg-stone-200 rounded w-full" />
