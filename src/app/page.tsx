import About from '@/components/about'
import AdditionalDetails from '@/components/additional_details'
import Hero from '@/components/hero/hero'
import Promotional from '@/components/promotional'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Promotional />
      <AdditionalDetails />
      <About />
    </main>
  )
}
