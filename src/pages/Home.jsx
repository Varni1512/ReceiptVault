import React from 'react'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Features from '../components/Features'
import TrustSection from '../components/TrustSection'
import Testimonials from '../components/Testimonials'
import SupportStrip from '../components/SupportStrip'

const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <Features />
      <TrustSection />
      <Testimonials />
      <SupportStrip />
    </div>
  )
}

export default Home
