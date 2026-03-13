import Section from '../ui/section'
import Wrapper from '../ui/wrapper'
import HeroBanner from './hero_carousel'

export default function Hero() {
    return (
        <Section className="bg-white overflow-hidden py-3">
            <Wrapper className="lg:py-0">
                <HeroBanner />
            </Wrapper>
        </Section>
    )
}
