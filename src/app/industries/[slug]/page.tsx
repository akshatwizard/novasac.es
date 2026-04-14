import IndustryDetailPage from "@/components/industry_detail";
import { industryDetails } from "@/constant/industries_data";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return industryDetails.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const industry = industryDetails.find((i) => i.slug === slug);
    if (!industry) return {};
    return {
        title: `${industry.label} | Novasac Packaging`,
        description: industry.tagline,
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params
    const industry = industryDetails.find((i) => i.slug === slug);
    if (!industry) notFound();

    return <IndustryDetailPage slug={slug} />;
}