"use client"

import { useState, useEffect } from "react"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const facilityImages = [
  {
    src: "/images/facility-bmw-diagnostic.jpeg",
    alt: "BMW на діагностичному обладнанні UNIVEZAL",
    title: "Сучасне діагностичне обладнання",
    description: "Професійне обладнання для точної діагностики всіх систем автомобіля",
  },
  {
    src: "/images/facility-tesla-inspection.jpeg",
    alt: "Tesla Model Y на станції техогляду",
    title: "Техогляд електромобілів",
    description: "Спеціалізоване обладнання для діагностики електричних транспортних засобів",
  },
  {
    src: "/images/facility-bmw-tracks.jpeg",
    alt: "BMW 3 Series на інспекційних рейках",
    title: "Професійні інспекційні рейки",
    description: "Безпечні та точні системи позиціонування автомобілів під час техогляду",
  },
  {
    src: "/images/facility-tesla-platform.jpeg",
    alt: "Tesla на діагностичній платформі",
    title: "Універсальні діагностичні платформи",
    description: "Сучасні платформи для техогляду всіх типів транспортних засобів",
  },
]

export function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Автоматическая смена изображений
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % facilityImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-400/10 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-purple-400/10 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-orange-400/10 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Про наш сервісний центр</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Сучасна станція техогляду з професійним обладнанням для всіх типів транспортних засобів, включаючи
              електромобілі
            </p>
          </div>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Слайдер изображений */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Главное изображение */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={facilityImages[activeImage].src || "/placeholder.svg"}
                  alt={facilityImages[activeImage].alt}
                  fill
                  className="object-cover transition-all duration-700"
                  priority
                />

                {/* Градиентное наложение */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Информация об изображении */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{facilityImages[activeImage].title}</h3>
                  <p className="text-sm opacity-90">{facilityImages[activeImage].description}</p>
                </div>

                {/* Индикаторы */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {facilityImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeImage ? "bg-white shadow-lg scale-125" : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Миниатюры */}
              <div className="grid grid-cols-4 gap-3 mt-4">
                {facilityImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === activeImage
                        ? "ring-4 ring-blue-500 scale-105"
                        : "hover:scale-105 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Текстовый контент */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Професійний техогляд у Миколаєві</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Наша станція техогляду оснащена сучасним діагностичним обладнанням що дозволяє проводити якісний та
                  точний техогляд для всіх категорій транспортних засобів.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ми спеціалізуємося на техогляді як традиційних автомобілів з ДВЗ, так і сучасних електромобілів, та
                  інших електричних транспортних засобів,а також автострахування та зелена карта в Миколаєві.                </p>

                {/* Особливості */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">Сучасне обладнання</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">Техогляд електромобілів</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">Автомобілів з ДВЗ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">Швидке оформлення</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
