"use client"

import { MapPin, Navigation, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MapSection() {
  const address = "вулиця Озерна, 9 Г, Миколаїв, Миколаївська область, 54000"
  const coordinates = "46.951604,31.939232"
  const googleMapsLink =
    "https://www.google.com/maps/@46.951573,31.9392922,21z?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Як нас знайти</h2>
          <p className="text-xl text-gray-600">Ми знаходимося в зручному місці Миколаєва</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Карта */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-96 lg:h-[500px] bg-gray-100">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1359.0!2d31.939232!3d46.951604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDbCsDU3JzA1LjgiTiAzMcKwNTYnMjEuMiJF!5e0!3m2!1suk!2sua!4v1234567890123!5m2!1suk!2sua`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Техогляд Сертифікація - Миколаїв"
                />

                {/* Fallback якщо карта не завантажується */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Наше розташування</h3>
                    <p className="text-gray-600 mb-2">{address}</p>
                    <p className="text-sm text-gray-500 mb-4">Координати: {coordinates}</p>
                    <div className="space-y-2">
                      <Button onClick={() => window.open(googleMapsLink, "_blank")} className="w-full">
                        <MapPin className="h-4 w-4 mr-2" />
                        Відкрити в Google Maps
                      </Button>
                      <Button onClick={() => window.open(directionsUrl, "_blank")} variant="outline" className="w-full">
                        <Navigation className="h-4 w-4 mr-2" />
                        Побудувати маршрут
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Інформація */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Наша адреса</h3>
                    <p className="text-gray-600 mb-2">{address}</p>
                    <p className="text-sm text-gray-500 mb-4">GPS: {coordinates}</p>
                    <Button onClick={() => window.open(directionsUrl, "_blank")} className="w-full">
                      <Navigation className="h-4 w-4 mr-2" />
                      Побудувати маршрут
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Режим роботи</h3>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex justify-between">
                        <span>Понеділок - П'ятниця:</span>
                        <span className="font-semibold">8:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Субота:</span>
                        <span className="font-semibold">8:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Неділя:</span>
                        <span className="text-red-600 font-semibold">Вихідний</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефони</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+380667185029"
                        className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                      >
                        +38 (066) 718-50-29
                      </a>
                      <a
                        href="tel:+380983508077"
                        className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                      >
                        +38 (098) 350-80-77
                      </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Дзвоніть для запису або консультації</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Як дістатися</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Автобусами №5, №12, №18 до зупинки "Озерна"</li>
                  <li>• Маршрутками №15, №22 до зупинки "Озерна"</li>
                  <li>• На власному авто - є зручна парковка</li>
                  <li>• Пішки від центру міста - 15 хвилин</li>
                </ul>
              </CardContent>
            </Card>

            {/* Додаткові кнопки для навігації */}
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={() => window.open(googleMapsLink, "_blank")} variant="outline" className="w-full">
                Google Maps
              </Button>
              <Button
                onClick={() => window.open(`https://waze.com/ul?ll=${coordinates}&navigate=yes`, "_blank")}
                variant="outline"
                className="w-full"
              >
                Waze
              </Button>
            </div>

            {/* Кнопка копіювання координат */}
            <Button
              onClick={() => {
                navigator.clipboard.writeText(coordinates)
                alert("Координати скопійовано в буфер обміну!")
              }}
              variant="outline"
              className="w-full"
            >
              📋 Копіювати координати
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
