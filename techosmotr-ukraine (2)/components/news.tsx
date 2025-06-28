"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Clock, ArrowRight, RefreshCw } from "lucide-react"
import Image from "next/image"

// Интерфейс для новостей
interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  link: string
}

// Тематические изображения для разных категорий новостей
const getCategoryImage = (category: string): string => {
  const categoryImages: { [key: string]: string } = {
    Законодавство: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop&crop=center",
    Нововведення: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
    Екологія: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
    Штрафи: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop&crop=center",
    Технології: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop&crop=center",
    "Міжнародне право": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop&crop=center",
    "Офіційні новини": "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=250&fit=crop&crop=center",
  }
  return (
    categoryImages[category] ||
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop&crop=center"
  )
}

// Примеры новостей с иллюстрациями
const initialNews: NewsItem[] = [
  {
    id: 1,
    title: "Нові правила техогляду транспортних засобів з 2024 року",
    excerpt:
      "Державна служба України з безпеки на транспорті оновила вимоги до проведення технічного огляду автомобілів. Впроваджено нові стандарти безпеки та екологічності...",
    date: "2024-01-15",
    readTime: "3 хв",
    category: "Законодавство",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop&crop=center",
    link: "https://hsc.gov.ua/category/novini/",
  },
  {
    id: 2,
    title: "Зміни в процедурі оформлення діагностичних карт",
    excerpt:
      "Впроваджено електронну систему обліку діагностичних карт для підвищення прозорості процесу техогляду. Тепер всі дані зберігаються в цифровому форматі...",
    date: "2024-01-10",
    readTime: "5 хв",
    category: "Нововведення",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
    link: "https://hsc.gov.ua/category/novini/",
  },
  {
    id: 3,
    title: "Техогляд електромобілів: особливості та вимоги",
    excerpt:
      "Розроблено спеціальні стандарти для проведення технічного огляду електричних транспортних засобів. Нові процедури враховують особливості електричних систем...",
    date: "2024-01-05",
    readTime: "4 хв",
    category: "Екологія",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
    link: "https://hsc.gov.ua/category/novini/",
  },
  {
    id: 4,
    title: "Підвищення штрафів за їзду без техогляду",
    excerpt:
      "Верховна Рада України затвердила нові розміри штрафів за експлуатацію транспортних засобів без техогляду. Штрафи збільшено в середньому на 40%...",
    date: "2023-12-28",
    readTime: "2 хв",
    category: "Штрафи",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop&crop=center",
    link: "https://hsc.gov.ua/category/novini/",
  },
  {
    id: 5,
    title: "Цифровізація послуг техогляду в Україні",
    excerpt:
      "Запущено пілотний проект з впровадження цифрових технологій у сферу технічного огляду транспорту. Використовуються AI та машинне навчання...",
    date: "2023-12-20",
    readTime: "6 хв",
    category: "Технології",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop&crop=center",
    link: "https://hsc.gov.ua/category/novini/",
  },
  {
    id: 6,
    title: "Міжнародне визнання українських діагностичних карт",
    excerpt:
      "Досягнуто домовленості про взаємне визнання діагностичних карт з країнами ЄС для спрощення перетину кордону. Угода діятиме з березня 2024 року...",
    date: "2023-12-15",
    readTime: "4 хв",
    category: "Міжнародне право",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop&crop=center",
    link: "https://hsc.gov.ua/category/novini/",
  },
  {
    id: 7,
    title: "Нові стандарти безпеки для вантажних автомобілів",
    excerpt:
      "Введено додаткові вимоги до технічного стану вантажних транспортних засобів. Особлива увага приділяється гальмівним системам...",
    date: "2023-12-10",
    readTime: "4 хв",
    category: "Законодавство",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop&crop=center",
    link: "https://hsc.gov.ua/category/novini/",
  },
  {
    id: 8,
    title: "Мобільні станції техогляду: нова ініціатива",
    excerpt:
      "Розпочато тестування мобільних станцій техогляду для віддалених районів. Це дозволить покращити доступність послуг...",
    date: "2023-12-05",
    readTime: "3 хв",
    category: "Нововведення",
    image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=250&fit=crop&crop=center",
    link: "https://hsc.gov.ua/category/novini/",
  },
  {
    id: 9,
    title: "Зелені технології в автомобільній індустрії",
    excerpt: "Огляд нових екологічних стандартів для автомобілів. Впровадження Euro 6 та підготовка до Euro 7...",
    date: "2023-11-28",
    readTime: "5 хв",
    category: "Екологія",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&crop=center",
    link: "https://hsc.gov.ua/category/novini/",
  },
]

const categories = ["Всі", "Законодавство", "Нововведення", "Екологія", "Штрафи", "Технології", "Міжнародне право"]

export function News() {
  const [selectedCategory, setSelectedCategory] = useState("Всі")
  const [visibleNews, setVisibleNews] = useState(6)
  const [isVisible, setIsVisible] = useState(false)
  const [news, setNews] = useState<NewsItem[]>(initialNews)
  const [isLoading, setIsLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Функция для получения новостей с сервера
  const fetchNews = async () => {
    setIsLoading(true)
    try {
      // В реальном проекте здесь будет запрос к API
      // const response = await fetch('/api/news')
      // const newNews = await response.json()

      // Симуляция загрузки новостей
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Обновляем время последнего обновления
      setLastUpdated(new Date())

      // Симуляция новых новостей с изображениями
      const simulatedNews = [
        {
          id: Date.now(),
          title: "Оновлення системи техогляду: нові можливості",
          excerpt: "Впроваджено нові функції в електронній системі техогляду для покращення користувацького досвіду...",
          date: new Date().toISOString().split("T")[0],
          readTime: "3 хв",
          category: "Технології",
          image: getCategoryImage("Технології"),
          link: "https://hsc.gov.ua/category/novini/",
        },
        ...initialNews,
      ]

      setNews(simulatedNews)
    } catch (error) {
      console.error("Ошибка загрузки новостей:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Автоматическое обновление каждые 10 минут
  useEffect(() => {
    const interval = setInterval(fetchNews, 10 * 60 * 1000) // 10 минут
    return () => clearInterval(interval)
  }, [])

  const filteredNews = selectedCategory === "Всі" ? news : news.filter((item) => item.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatLastUpdated = (date: Date) => {
    return date.toLocaleString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Законодавство: "bg-blue-100 text-blue-800",
      Нововведення: "bg-green-100 text-green-800",
      Екологія: "bg-emerald-100 text-emerald-800",
      Штрафи: "bg-red-100 text-red-800",
      Технології: "bg-purple-100 text-purple-800",
      "Міжнародне право": "bg-orange-100 text-orange-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Новини</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Останні новини та зміни в законодавстві щодо технічного огляду транспортних засобів в Україні
            </p>

            {/* Индикатор последнего обновления */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="text-sm text-gray-500 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                Останнє оновлення: {formatLastUpdated(lastUpdated)}
              </div>
              <Button
                onClick={fetchNews}
                disabled={isLoading}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
                {isLoading ? "Оновлення..." : "Оновити"}
              </Button>
            </div>
          </div>
        </div>

        {/* Фільтри категорій */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:scale-105 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Индикатор загрузки */}
        {isLoading && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full shadow-lg">
              <RefreshCw className="h-5 w-5 animate-spin" />
              Завантаження нових новин з ілюстраціями...
            </div>
          </div>
        )}

        {/* Сетка новостей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.slice(0, visibleNews).map((item, index) => (
            <div
              key={item.id}
              className={`transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group cursor-pointer bg-white/95 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="relative h-56 bg-gradient-to-br from-blue-100 to-purple-100">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        // Fallback изображение при ошибке загрузки
                        const target = e.target as HTMLImageElement
                        target.src = getCategoryImage(item.category)
                      }}
                    />

                    {/* Градиентное наложение */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Категория */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getCategoryColor(item.category)} shadow-lg`}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Дата в углу */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-lg">
                        {formatDate(item.date).split(" ").slice(0, 2).join(" ")}
                      </div>
                    </div>

                    {/* Время чтения */}
                    <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white shadow-lg flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.readTime}
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{item.excerpt}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 transform group-hover:scale-105"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    Читати повністю
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Кнопка "Показати більше" */}
        {visibleNews < filteredNews.length && (
          <div className="text-center">
            <Button
              onClick={() => setVisibleNews((prev) => prev + 6)}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Показати більше новин
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Ссылка на источник */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto shadow-lg border border-white/20">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Джерело новин</h3>
            <p className="text-blue-700 mb-4">
              Всі новини транслюються з офіційного сайту Державної служби України з безпеки на транспорті з якісними
              ілюстраціями
            </p>
            <Button
              onClick={() => window.open("https://hsc.gov.ua/category/novini/", "_blank")}
              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Перейти на офіційний сайт HSC
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
