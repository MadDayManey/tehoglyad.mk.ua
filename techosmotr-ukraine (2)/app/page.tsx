import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Requirements } from "@/components/requirements"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { VehicleCategories } from "@/components/vehicle-categories"
import { AboutUs } from "@/components/about-us"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <VehicleCategories />
      <Requirements />
      <News />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}
