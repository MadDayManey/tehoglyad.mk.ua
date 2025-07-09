"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const googleMapsLink = "https://maps.app.goo.gl/sjZgYwED5zFr1nAi7"
  const coordinates = "46.951573,31.9392922"

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    const mapTimer = setTimeout(() => setIsMapLoaded(true), 800)
    return () => {
      clearTimeout(timer)
      clearTimeout(mapTimer)
    }
  }, [])

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden min-h-screen">
      {/* Фоновое изображение станции техосмотра */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/inspection-facility-bmw.jpeg"
          alt="Станція техогляду - BMW на діагностичному обладнанні"
          fill
          className="object-cover"
          priority
        />
        {/* Темное наложение для читаемости текста */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Градиентное наложение */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
      </div>

      {/* Анимированные элементы фона */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-2 sm:left-4 md:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-2 sm:right-4 md:right-20 w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-indigo-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-2 sm:left-4 md:left-20 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-blue-500/20 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 right-4 sm:right-8 md:right-32 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-indigo-400/15 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-1 gap-6 md:gap-8 lg:gap-16 items-center w-full -mt-4 sm:-mt-8 md:-mt-12">
          <div className="text-center">
            {/* Анимированный заголовок */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-2 sm:mb-3 animate-fade-in-up">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <span className="leading-none transform hover:scale-105 transition-transform duration-300 text-white drop-shadow-lg">
                      ТЕХ
                    </span>
                    <div className="mx-1 sm:mx-2 lg:mx-3 transform hover:rotate-12 transition-transform duration-300">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/457618337_3099849083488367_4804296222334173558_n.jpg-5zxbHeRAAhV3WLzSUfMsUCfxcyj6o0.jpeg"
                        alt="О"
                        width={40}
                        height={40}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 rounded-full shadow-2xl hover:shadow-3xl transition-shadow duration-300 ring-1 sm:ring-2 md:ring-4 ring-white/30"
                      />
                    </div>
                    <span className="leading-none transform hover:scale-105 transition-transform duration-300 text-white drop-shadow-lg">
                      ГЛЯД
                    </span>
                  </div>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-white animate-fade-in-up delay-200 drop-shadow-lg sm:ml-2 md:ml-4 lg:ml-5">
                    та Сертифікація
                  </span>
                </div>
                <span className="text-blue-400 block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl animate-fade-in-up delay-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                  Автомобілів
                </span>
              </h1>
            </div>

            {/* Анимированное описание */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 sm:mb-8 md:mb-10 animate-fade-in-up delay-600 bg-black/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl border border-white/20 max-w-5xl mx-auto leading-relaxed">
                Професійний техогляд для всіх видів транспорту, переоборудування авто та причепів, автострахування та
                зелена карта в Миколаєві. Наша команда досвідчених спеціалістів забезпечує якісне та швидке
                обслуговування з використанням сучасного діагностичного обладнання.
              </p>
            </div>

            {/* Анимированная контактная информация */}
            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base max-w-5xl mx-auto">
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-1200 border border-white/20 hover:bg-white/15 md:col-span-2 xl:col-span-1">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-400 animate-pulse flex-shrink-0" />
                  <div className="text-left">
                    <a
                      href="tel:+380667185029"
                      className="font-semibold text-white text-sm sm:text-base md:text-lg hover:text-blue-300 transition-colors duration-300 block"
                    >
                      +380667185029
                    </a>
                    <a
                      href="tel:+380983508077"
                      className="text-gray-200 text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors duration-300 block"
                    >
                      +380983508077
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-1400 border border-white/20 hover:bg-white/15">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-400 animate-pulse delay-200 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold text-white text-sm sm:text-base md:text-lg">ПН-ПТ 8:00-17:00</div>
                    <div className="text-gray-200 text-xs sm:text-sm md:text-base">СБ 8:00-14:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-1600 border border-white/20 hover:bg-white/15">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-400 animate-pulse delay-400 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold text-white text-sm sm:text-base md:text-lg">м.Миколаїв</div>
                    <div className="text-gray-200 text-xs sm:text-sm md:text-base">вул.Озерна 9г</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div
              className={`transform transition-all duration-1000 delay-900 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                {/* Социальные сети */}
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 shadow-xl border border-white/20">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 text-center">
                    Слідкуйте за нами
                  </h3>
                  <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6">
                    {/* Instagram */}
                    <button
                      onClick={() => window.open("https://www.instagram.com/otk.tehoglyad_mk/", "_blank")}
                      className="group relative bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-3 sm:p-4 md:p-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-orange-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 sm:px-3 py-1 sm:py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                        Instagram
                      </div>
                    </button>

                    {/* TikTok */}
                    <button
                      onClick={() => window.open("https://www.tiktok.com/@diagnostic_linia_", "_blank")}
                      className="group relative bg-gradient-to-br from-black via-gray-800 to-gray-900 p-3 sm:p-4 md:p-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-black rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                      <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 sm:px-3 py-1 sm:py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                        TikTok
                      </div>
                    </button>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 shadow-xl border border-white/20">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 text-center">
                    Наше розташування
                  </h3>
                  <div
                    className="relative rounded-lg overflow-hidden cursor-pointer group transform hover:scale-105 transition-all duration-500"
                    onClick={() => window.open(googleMapsLink, "_blank")}
                  >
                    <div className="relative h-20 sm:h-24 md:h-32 bg-gray-900/50 rounded-lg">
                      <Image
                        src="https://sjc.microlink.io/iQ_SEUUH_vG6Abq4Uu9iotR3HtYWnJxYfleZ1VSbEnrNdAoIvGGM5Pc2AIEZ8P-2w7AivrZMJndNCq3vmLc62Q.jpeg"
                        alt="Карта розташування - станція техогляду на вул. Озерна 9г, Миколаїв"
                        width={360}
                        height={180}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-700"
                        priority
                      />

                      {/* Анимированный оверлей */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-white">
                          <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="font-semibold text-xs sm:text-sm">вул. Озерна, 9г</span>
                          </div>
                          <div className="flex gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                            <Button
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(googleMapsLink, "_blank")
                              }}
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-xs transform hover:scale-105 transition-all duration-200 shadow-lg px-2 py-1 h-auto"
                            >
                              Відкрити карту
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Анимированный индикатор */}
                      <div className="absolute top-1 sm:top-2 md:top-3 right-1 sm:right-2 md:right-3 bg-white/90 backdrop-blur-sm rounded-full p-1 sm:p-1.5 md:p-2 shadow-xl group-hover:scale-110 transition-transform duration-300 animate-bounce">
                        <MapPin className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 text-blue-600" />
                      </div>

                      {/* Hover эффект */}
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные CSS анимации */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1.0s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1400 { animation-delay: 1.4s; }
        .delay-1600 { animation-delay: 1.6s; }
      `}</style>
    </section>
  )
}
