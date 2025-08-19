import BikeShowcase from '@/components/BikeShowcase'
import ComparisonSection from '@/components/ComparisonSection'
import EngineSound from '@/components/EngineSound'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductDetails from '@/components/ProductDetails'
import WhatsAppButton from '@/components/WhatsAppButton'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <BikeShowcase/>
      <ProductDetails/>
      <EngineSound/>
      <ComparisonSection/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}

export default page

