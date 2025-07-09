"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 shadow-sm border-b border-blue-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          <div className="flex items-center">
            <div className="flex items-center text-base sm:text-lg md:text-xl font-bold text-gray-800 hover:text-blue-700 transition-colors duration-300">
              <span className="drop-shadow-sm">ТЕХ</span>
              <div className="mx-0.5 sm:mx-1 transform hover:rotate-12 transition-transform duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/457618337_3099849083488367_4804296222334173558_n.jpg-5zxbHeRAAhV3WLzSUfMsUCfxcyj6o0.jpeg"
                  alt="О"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ring-1 sm:ring-2 ring-blue-200"
                />
              </div>
              <span className="drop-shadow-sm">ГЛЯД</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-3 lg:space-x-6 xl:space-x-8">
            <Link
              href="#services"
              className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
            >
              Послуги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#categories"
              className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
            >
              Категорії
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#requirements"
              className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
            >
              Вимоги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#news"
              className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
            >
              Новини
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
            >
              Про нас
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
            >
              Контакти
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <div className="text-xs xl:text-sm text-gray-600 bg-white/60 backdrop-blur-sm rounded-lg px-2 xl:px-3 py-1.5 xl:py-2 shadow-sm border border-blue-100">
              <div className="font-semibold text-blue-700">ПН-ПТ 8:00-17:00</div>
              <div className="text-blue-600">СБ 8:00-14:00</div>
            </div>
          </div>

          <button
            className="md:hidden p-1.5 sm:p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-blue-100 hover:bg-white/80 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-3 sm:py-4 border-t border-blue-100 bg-white/90 backdrop-blur-sm rounded-b-lg mt-2 shadow-lg">
            <nav className="flex flex-col space-y-1 sm:space-y-2 px-2 sm:px-4">
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 sm:py-3 px-2 sm:px-3 rounded-lg hover:bg-blue-50 text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Послуги
              </Link>
              <Link
                href="#categories"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 sm:py-3 px-2 sm:px-3 rounded-lg hover:bg-blue-50 text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Категорії
              </Link>
              <Link
                href="#requirements"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 sm:py-3 px-2 sm:px-3 rounded-lg hover:bg-blue-50 text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Вимоги
              </Link>
              <Link
                href="#news"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 sm:py-3 px-2 sm:px-3 rounded-lg hover:bg-blue-50 text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Новини
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 sm:py-3 px-2 sm:px-3 rounded-lg hover:bg-blue-50 text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Про нас
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 sm:py-3 px-2 sm:px-3 rounded-lg hover:bg-blue-50 text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакти
              </Link>

              {/* Мобильная версия рабочих часов */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-blue-100">
                <div className="text-xs sm:text-sm text-gray-600 bg-blue-50 rounded-lg px-2 sm:px-3 py-2">
                  <div className="font-semibold text-blue-700">Режим роботи:</div>
                  <div className="text-blue-600">ПН-ПТ: 8:00-17:00</div>
                  <div className="text-blue-600">СБ: 8:00-14:00</div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
