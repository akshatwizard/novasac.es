import { Heading, SubHeading } from './ui/headings'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { BadgePercent, Gem, LucideIcon, Truck } from 'lucide-react';


type Data = {
    title: string;
    desc: string;
    icon: LucideIcon
}

export default function WhyChooseUs() {
    const data: Data[] = [
        {
            title: "Premium Quality",
            desc: "We provide high-quality, reliable, and innovative packaging solutions designed to meet the diverse needs of industries worldwide.",
            icon: Gem
        },
        {
            title: "Delivery Time",
            desc: "We value your time and are committed to delivering high-quality packaging solutions with efficiency, reliability, and precision.",
            icon: Truck
        },
        {
            title: "Competitive Pricing",
            desc: "Our products are priced affordably without compromising on quality, making us an affordable option",
            icon: BadgePercent
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2'>
                    <Heading>
                        Why Choose Us
                    </Heading>
                    <SubHeading className='max-w-lg'>
                        Reliable packaging solutions designed for durability, customization, and efficient delivery across industries.
                    </SubHeading>
                </div>

                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        data.map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-6 rounded-xl border border-zinc-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 bg-white"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon size={26} />
                                </div>

                                <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
