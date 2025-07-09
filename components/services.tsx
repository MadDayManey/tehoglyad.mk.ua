"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Wrench, Shield, CreditCard, FileCheck, Truck } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Техогляд для всіх авто",
    description: "Повний технічний огляд легкових автомобілів, вантажних та автобусів",
    features: ["Діагностика всіх систем", "Перевірка гальм", "Контроль викидів", "Оформлення документів"],
  },
  {
    icon: FileCheck,
    title: "Техогляд для виїзду за кордон",
    description: "Спеціальний техогляд для подорожей до Європи та інших країн",
    features: ["Міжнародні стандарти", "Швидке оформлення", "Консультації", "Гарантія якості"],
  },
  {
    icon: Wrench,
    title: "Переобладнання та сертифікація авто та причепів",
    description: "Професійне переобладнання та сертифікація авто та причепів різних типів",
    features: ["Переобладнання авто та причепів", "Сертифікація змін"],
  },
  {
    icon: Shield,
    title: "Автострахування",
    description: "Оформлення всіх видів страхування автомобілів за найкращими тарифами",
    features: ["ОСЦПВ", "КАСКО", "Страхування життя", "Онлайн оформлення"],
  },
  {
    icon: CreditCard,
    title: "Зелена карта",
    description: "Міжнародне страхування для подорожей автомобілем за кордон",
    features: ["Всі країни Європи", "Швидке оформлення", "Конкурентні ціни", "Консультації"],
  },
  {
    icon: Truck,
    title: "Сертифікація авто з-за кордону",
    description: "Сертифікація авто пригнаних з-за кордону",
    features: ["Авто зі США", "Авто з Європи", "Авто з Кореї", "Документообіг"],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-400 via-blue-500 to-red-500 relative overflow-hidden"
    >
      {/* Анимированные декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-6 left-2 sm:left-4 md:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-32 bg-red-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-2 sm:right-4 md:right-20 w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 bg-green-400/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-4 sm:left-8 md:left-32 w-6 h-6 sm:w-10 sm:h-10 md:w-20 md:h-20 bg-blue-400/35 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-12 right-6 sm:right-10 md:right-40 w-10 h-10 sm:w-14 sm:h-14 md:w-28 md:h-28 bg-red-300/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 bg-green-300/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 sm:w-6 sm:h-6 md:w-12 md:h-12 bg-blue-300/35 rounded-full animate-ping delay-1200"></div>
      </div>

      {/* Градиентные волны */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/20 via-transparent to-green-500/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-500/15 via-transparent to-red-500/15 animate-pulse delay-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-green-500/10 via-transparent to-blue-500/10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
            Наші послуги
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md px-2 sm:px-4">
            Повний спектр послуг з техогляду, сертифікації та страхування автомобілів
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 bg-white/95 backdrop-blur-sm border-0 shadow-xl h-full"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 via-blue-500 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  <service.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl text-gray-800 font-bold leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-green-500 via-blue-500 to-red-500 rounded-full mr-2 sm:mr-3 animate-pulse flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Дополнительные декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-6 md:h-6 bg-green-400/20 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-4 md:h-4 bg-blue-400/25 rounded-full animate-pulse delay-600"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 md:w-8 md:h-8 bg-red-400/15 rounded-full animate-bounce delay-900"></div>
        <div className="absolute top-1/6 right-1/6 w-4 h-4 sm:w-5 sm:h-5 md:w-10 md:h-10 bg-green-500/20 rounded-full animate-pulse delay-400"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-5 md:h-5 bg-blue-500/30 rounded-full animate-ping delay-800"></div>
        <div className="absolute top-2/3 left-2/3 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-7 md:h-7 bg-red-500/25 rounded-full animate-bounce delay-1100"></div>
      </div>
    </section>
  )
}
