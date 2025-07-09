import Image from "next/image"
import { CheckCircle, Users, Clock, Award } from "lucide-react"

const stats = [
  { icon: Users, number: "5000+", label: "Задоволених клієнтів" },
  { icon: Clock, number: "10+", label: "Років досвіду" },
  { icon: Award, number: "100%", label: "Якість послуг" },
  { icon: CheckCircle, number: "24/7", label: "Підтримка клієнтів" },
]

const advantages = [
  "Сучасне обладнання для діагностики",
  "Кваліфіковані спеціалісти",
  "Швидке оформлення документів",
  "Конкурентні ціни на всі послуги",
  "Гарантія якості виконаних робіт",
  "Зручне розташування в Миколаєві",
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Про наш сервісний центр</h2>
            <p className="text-lg text-gray-600 mb-6">
              Ми - провідний центр техогляду та сертифікації автомобілів у Миколаєві. Наша команда професіоналів
              забезпечує високоякісні послуги з техогляду, переоборудування та страхування транспортних засобів.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Використовуючи сучасне обладнання та дотримуючись всіх стандартів, ми гарантуємо точність діагностики та
              швидкість обслуговування.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%82%D0%B5%D1%852-YYACRpB15PJ2MgO2G0qEadbzqKYoaE.webp"
              alt="Наш сервісний центр"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
