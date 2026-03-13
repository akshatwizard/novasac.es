import Hero from '@/components/hero/hero'
import Promotional from '@/components/promotional'
import React from 'react'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Promotional />
    </main>
  )
}
