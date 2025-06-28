"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="flex items-center text-base sm:text-lg md:text-xl font-bold">
                <span>ТЕХ</span>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/457618337_3099849083488367_4804296222334173558_n.jpg-5zxbHeRAAhV3WLzSUfMsUCfxcyj6o0.jpeg"
                  alt="О"
                  width={20}
                  height={20}
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full mx-0.5 sm:mx-1"
                />
                <span>ГЛЯД</span>
              </div>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
              Професійний техогляд та сертифікація автомобілів у Миколаєві. Якість, швидкість, надійність.
            </p>
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
              {/* Instagram */}
              <button
                onClick={() => window.open("https://www.instagram.com/otk.tehoglyad_mk/", "_blank")}
                className="group relative bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-2 sm:p-2.5 md:p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                title="Instagram @otk.tehoglyad_mk"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>

              {/* TikTok */}
              <button
                onClick={() => window.open("https://www.tiktok.com/@diagnostic_linia_", "_blank")}
                className="group relative bg-gradient-to-br from-black via-gray-800 to-gray-900 p-2 sm:p-2.5 md:p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                title="TikTok @diagnostic_linia_"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Послуги</h3>
            <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-gray-400">
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                  Техогляд авто
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                  Сертифікація
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                  Переоборудування
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                  Автострахування
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                  Зелена карта
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Інформація</h3>
            <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-gray-400">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  href="#requirements"
                  className="hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                  Документи
                </Link>
              </li>
              <li>
                <Link
                  href="#news"
                  className="hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                  Новини
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Контакти</h3>
            <div className="space-y-2 sm:space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm md:text-base">+380667185029</div>
                  <div className="text-xs sm:text-sm md:text-base">+380983508077</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                <div className="text-xs sm:text-sm md:text-base">м. Миколаїв, вул. Озерна 9г</div>
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                <div className="text-xs sm:text-sm md:text-base">tehoglyad.mk@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm md:text-base">&copy; 2025 tehoglyad.mk.ua. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}
