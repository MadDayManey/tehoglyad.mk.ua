"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Truck, Bus, TruckIcon as Trailer } from "lucide-react"

const vehicleCategories = [
  {
    icon: Car,
    title: "Легкові авто",
    category: "M1",
    description: "До 8 пасажирських місць, маса до 3,5 тонн",
    color: "bg-blue-500",
    delay: "delay-0",
  },
  {
    icon: Bus,
    title: "Автобуси малі",
    category: "M2",
    description: "Понад 8 місць, маса до 5 тонн",
    color: "bg-green-500",
    delay: "delay-100",
  },
  {
    icon: Bus,
    title: "Автобуси великі",
    category: "M3",
    description: "Понад 8 місць, маса понад 5 тонн",
    color: "bg-purple-500",
    delay: "delay-200",
  },
  {
    icon: Truck,
    title: "Вантажівки легкі",
    category: "N1",
    description: "Маса до 3,5 тонн",
    color: "bg-orange-500",
    delay: "delay-300",
  },
  {
    icon: Truck,
    title: "Вантажівки середні",
    category: "N2",
    description: "Маса від 3,5 до 12 тонн",
    color: "bg-red-500",
    delay: "delay-400",
  },
  {
    icon: Truck,
    title: "Вантажівки важкі",
    category: "N3",
    description: "Маса понад 12 тонн",
    color: "bg-yellow-500",
    delay: "delay-500",
  },
  {
    icon: Trailer,
    title: "Причепи легкі",
    category: "O1",
    description: "Маса до 0,75 тонн",
    color: "bg-emerald-500",
    delay: "delay-600",
  },
  {
    icon: Trailer,
    title: "Причепи середні",
    category: "O2",
    description: "Маса від 0,75 до 3,5 тонн",
    color: "bg-cyan-500",
    delay: "delay-700",
  },
  {
    icon: Trailer,
    title: "Причепи важкі",
    category: "O3",
    description: "Маса від 3,5 до 10 тонн",
    color: "bg-indigo-500",
    delay: "delay-800",
  },
  {
    icon: Trailer,
    title: "Причепи надважкі",
    category: "O4",
    description: "Маса понад 10 тонн",
    color: "bg-pink-500",
    delay: "delay-900",
  },
]

export function VehicleCategories() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="categories"
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Категорії транспортних засобів
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              Проводимо техогляд для всіх категорій транспортних засобів відповідно до українського законодавства
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {vehicleCategories.map((category, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              } ${category.delay}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer border-0 overflow-hidden ${
                  hoveredCard === index ? "scale-105" : ""
                }`}
              >
                <CardHeader className="relative pb-2 p-2 sm:p-3 md:p-4">
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 sm:h-1 ${category.color} transform transition-all duration-300 ${
                      hoveredCard === index ? "h-1 sm:h-2" : ""
                    }`}
                  ></div>

                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${category.color} rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto transform transition-all duration-300 ${
                      hoveredCard === index ? "scale-110 rotate-12" : ""
                    }`}
                  >
                    <category.icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>

                  <CardTitle className="text-xs sm:text-sm md:text-base text-center font-bold text-gray-900 leading-tight mb-1 sm:mb-2">
                    {category.title}
                  </CardTitle>

                  <div
                    className={`text-center text-xs font-semibold px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full mx-auto w-fit ${category.color} text-white transform transition-all duration-300 ${
                      hoveredCard === index ? "scale-105" : ""
                    }`}
                  >
                    {category.category}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4">
                  <p className="text-xs text-gray-600 mb-2 sm:mb-3 text-center leading-tight">{category.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
