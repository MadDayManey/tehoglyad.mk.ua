import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Car, Wrench, Shield } from "lucide-react"
import Image from "next/image"

const requirements = [
  {
    icon: FileText,
    title: "Документи",
    items: [
      "Свідоцтво про реєстрацію транспортного засобу",
      "Паспорт або ID-карта власника",
      "Попередня діагностична карта (якщо є)",
    ],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Car,
    title: "Зовнішній стан",
    items: [
      "Відсутність значних пошкоджень кузова",
      "Справні фари та задні ліхтарі",
      "Цілі дзеркала заднього виду",
      "Номерні знаки в належному стані",
      "Справні склоочисники",
    ],
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Wrench,
    title: "Технічний стан",
    items: [
      "Справна гальмівна система",
      "Робоча система рульового управління",
      "Справна система освітлення",
      "Працюючий звуковий сигнал",
      "Справні ремені безпеки",
    ],
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Shield,
    title: "Безпека та екологія",
    items: [
      "Відповідність нормам викидів CO",
      "Справна система вентиляції картера",
      "Відсутність витоків технічних рідин",
      "Справний глушник",
      "Належний стан шин (мінімальна глибина протектора 1,6 мм)",
    ],
    color: "bg-purple-100 text-purple-600",
  },
]

export function Requirements() {
  return (
    <section id="requirements" className="py-20 relative overflow-hidden">
      {/* Фоновое изображение станции техосмотра */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tehoglyad-2024.webp"
          alt="Станція техогляду - професійне обладнання та сервіс"
          fill
          className="object-cover"
          priority
        />
        {/* Темное наложение для читаемости */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Градиентное наложение */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900/70 to-green-900/80"></div>
      </div>

      {/* Анимированные декоративные элементы */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-orange-400/20 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-purple-400/15 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Вимоги до авто для проходження техогляду
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Переконайтеся, що ваш автомобіль відповідає всім необхідним вимогам перед проходженням техогляду
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((requirement, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-full bg-white/95 backdrop-blur-sm border-0 shadow-xl"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 ${requirement.color} rounded-lg flex items-center justify-center mb-4 shadow-lg transform hover:rotate-12 transition-transform duration-300`}
                >
                  <requirement.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">{requirement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительная информационная панель */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              Професійний техогляд на сучасному обладнанні
            </h3>
            <p className="text-white/90 text-lg drop-shadow-md max-w-4xl mx-auto">
              Наша станція техогляду оснащена найсучаснішим діагностичним обладнанням для проведення якісного та
              швидкого техогляду всіх категорій транспортних засобів
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
