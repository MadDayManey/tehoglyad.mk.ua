import { NextResponse } from "next/server"

// Функция для получения изображения по категории
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

// API route для получения новостей с hsc.gov.ua
export async function GET() {
  try {
    // В реальном проекте здесь будет парсинг RSS или scraping
    // Пример структуры для интеграции:

    /*
    const response = await fetch('https://hsc.gov.ua/category/novini/feed/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NewsBot/1.0)',
      },
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch news')
    }
    
    const rssText = await response.text()
    
    // Парсинг RSS с помощью библиотеки типа 'rss-parser'
    const Parser = require('rss-parser')
    const parser = new Parser()
    const feed = await parser.parseString(rssText)
    
    // Функция для извлечения изображения из контента
    const extractImageFromContent = (content: string): string => {
      const imgRegex = /<img[^>]+src="([^">]+)"/
      const match = content.match(imgRegex)
      return match ? match[1] : null
    }
    
    const news = feed.items.map((item: any, index: number) => {
      const category = item.categories?.[0] || 'Офіційні новини'
      const extractedImage = extractImageFromContent(item.content || '')
      
      return {
        id: index + 1,
        title: item.title,
        excerpt: item.contentSnippet || item.content?.substring(0, 200) + '...',
        date: item.pubDate,
        readTime: Math.ceil((item.contentSnippet?.length || 500) / 200) + ' хв',
        category: category,
        image: extractedImage || getCategoryImage(category),
        link: item.link,
      }
    })
    */

    // Временная заглушка с качественными изображениями
    const news = [
      {
        id: 1,
        title: "Оновлення правил техогляду 2024",
        excerpt: "Нові вимоги до проведення технічного огляду включають додаткові перевірки систем безпеки...",
        date: new Date().toISOString(),
        readTime: "3 хв",
        category: "Законодавство",
        image: getCategoryImage("Законодавство"),
        link: "https://hsc.gov.ua/category/novini/",
      },
      {
        id: 2,
        title: "Впровадження цифрових технологій",
        excerpt: "Нова система електронного документообігу спрощує процедуру техогляду...",
        date: new Date(Date.now() - 86400000).toISOString(), // вчера
        readTime: "4 хв",
        category: "Технології",
        image: getCategoryImage("Технології"),
        link: "https://hsc.gov.ua/category/novini/",
      },
    ]

    return NextResponse.json(news)
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}
