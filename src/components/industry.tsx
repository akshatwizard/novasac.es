import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import { industries } from '@/constant/industries_data'

export default function Industry() {
    return (
        <Section className='bg-primary-100'>
            <Wrapper>
                <div className="text-center flex flex-col gap-2">
                    <Heading className='text-primary-500'>
                        Industries We Serve
                    </Heading>
                    <SubHeading className='text-primary-400'>
                        Providing reliable packaging solutions across multiple industries.
                    </SubHeading>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {industries.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group p-6 rounded-xl border border-zinc-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 bg-white"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                                    <Icon size={26} />
                                </div>

                                <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </Wrapper>
        </Section>
    )
}
