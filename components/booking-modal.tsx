"use client"

import { useState, useActionState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Car, Phone, Mail, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { submitBooking } from "@/actions/booking"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  defaultService?: string
}

const services = [
  "Техогляд легкового авто",
  "Техогляд для виїзду за кордон",
  "Техогляд вантажівки",
  "Техогляд автобуса",
  "Техогляд причепа",
  "Переоборудування авто",
  "Сертифікація причепа",
  "Автострахування",
  "Зелена карта",
  "Консультація",
]

const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
]

export function BookingModal({ isOpen, onClose, defaultService = "" }: BookingModalProps) {
  const [state, formAction, isPending] = useActionState(submitBooking, null)
  const [showSuccess, setShowSuccess] = useState(false)

  // Закрываем модальное окно при успешной отправке
  useState(() => {
    if (state?.success && !showSuccess) {
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        onClose()
      }, 3000)
    }
  }, [state?.success])

  // Получаем минимальную дату (завтра)
  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  // Получаем максимальную дату (через 30 дней)
  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 30)
    return maxDate.toISOString().split("T")[0]
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-900 flex items-center justify-center gap-2">
            <Car className="h-6 w-6" />
            Записатися на техогляд
          </DialogTitle>
        </DialogHeader>

        {showSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Заявку успішно відправлено!</h3>
            <p className="text-gray-600">Ми зв'яжемося з вами найближчим часом для підтвердження запису.</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-6">
            {/* Сообщение об ошибке */}
            {state && !state.success && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800">Помилка відправки</h4>
                  <p className="text-red-700 text-sm">{state.message}</p>
                </div>
              </div>
            )}

            {/* Личная информация */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                <User className="h-5 w-5" />
                Особиста інформація
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Ім'я та прізвище *
                  </Label>
                  <Input id="name" name="name" required placeholder="Введіть ваше ім'я" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Телефон *
                  </Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input id="phone" name="phone" type="tel" required placeholder="+380..." className="pl-10" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email (необов'язково)
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input id="email" name="email" type="email" placeholder="your@email.com" className="pl-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Информация об автомобиле */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                <Car className="h-5 w-5" />
                Інформація про автомобіль
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="carBrand" className="text-sm font-medium text-gray-700">
                    Марка *
                  </Label>
                  <Input
                    id="carBrand"
                    name="carBrand"
                    required
                    placeholder="BMW, Mercedes, Toyota..."
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="carModel" className="text-sm font-medium text-gray-700">
                    Модель
                  </Label>
                  <Input id="carModel" name="carModel" placeholder="X5, E-Class, Camry..." className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="carYear" className="text-sm font-medium text-gray-700">
                    Рік випуску
                  </Label>
                  <Input
                    id="carYear"
                    name="carYear"
                    type="number"
                    min="1990"
                    max={new Date().getFullYear()}
                    placeholder="2020"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Услуга и дата */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-semibold text-orange-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Деталі запису
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                    Послуга *
                  </Label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue={defaultService}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Оберіть послугу</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="preferredDate" className="text-sm font-medium text-gray-700">
                    Бажана дата *
                  </Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    required
                    min={getMinDate()}
                    max={getMaxDate()}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="preferredTime" className="text-sm font-medium text-gray-700">
                    Бажаний час (необов'язково)
                  </Label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Будь-який час</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Комментарии */}
            <div>
              <Label htmlFor="comments" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Додаткові коментарі
              </Label>
              <Textarea
                id="comments"
                name="comments"
                rows={3}
                placeholder="Додаткова інформація, особливі вимоги..."
                className="mt-1"
              />
            </div>

            {/* Кнопки */}
            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1" disabled={isPending}>
                Скасувати
              </Button>
              <Button type="submit" disabled={isPending} className="flex-1 bg-blue-600 hover:bg-blue-700">
                {isPending ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Відправляємо...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Відправити заявку
                  </>
                )}
              </Button>
            </div>

            {/* Информация о контактах */}
            <div className="bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-600">
              <p>
                Або зателефонуйте нам: <strong>+380667185029</strong> або <strong>+380983508077</strong>
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
