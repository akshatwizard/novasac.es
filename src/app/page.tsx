import About from '@/components/about'
import AdditionalDetails from '@/components/additional_details'
import BentoGrid from '@/components/bento_grid'
import Hero from '@/components/hero/hero'
import Industry from '@/components/industry'
import ProductCategory from '@/components/product_category'
import Products from '@/components/products'
import Promotional from '@/components/promotional'
import WhyChooseUs from '@/components/why_choose_us'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Promotional />
      <AdditionalDetails />
      <About />
      <ProductCategory />
      <Products />
      <Industry />
      <BentoGrid />
      <Products />
      <WhyChooseUs />
    </main>
  )
}
