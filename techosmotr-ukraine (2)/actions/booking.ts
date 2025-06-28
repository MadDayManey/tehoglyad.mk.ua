"use server"

import { z } from "zod"

// Схема валидации для формы записи
const bookingSchema = z.object({
  name: z.string().min(2, "Ім'я повинно містити мінімум 2 символи"),
  phone: z.string().min(10, "Введіть коректний номер телефону"),
  email: z.string().email("Введіть коректну email адресу").optional().or(z.literal("")),
  carBrand: z.string().min(2, "Вкажіть марку автомобіля"),
  carModel: z.string().optional(),
  carYear: z.string().optional(),
  service: z.string().min(1, "Оберіть послугу"),
  preferredDate: z.string().min(1, "Оберіть бажану дату"),
  preferredTime: z.string().optional(),
  comments: z.string().optional(),
})

export type BookingFormData = z.infer<typeof bookingSchema>

export async function submitBooking(_prevState: any, formData: FormData) {
  try {
    // Извлекаем данные из FormData
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      carBrand: formData.get("carBrand") as string,
      carModel: formData.get("carModel") as string,
      carYear: formData.get("carYear") as string,
      service: formData.get("service") as string,
      preferredDate: formData.get("preferredDate") as string,
      preferredTime: formData.get("preferredTime") as string,
      comments: formData.get("comments") as string,
    }

    // Валидация данных
    const validatedData = bookingSchema.parse(data)

    // Формируем email сообщение
    const emailSubject = `Нова заявка на техогляд - ${validatedData.name}`
    const emailBody = `
Нова заявка на техогляд:

👤 Клієнт: ${validatedData.name}
📞 Телефон: ${validatedData.phone}
${validatedData.email ? `📧 Email: ${validatedData.email}` : ""}

🚗 Автомобіль:
   Марка: ${validatedData.carBrand}
   ${validatedData.carModel ? `Модель: ${validatedData.carModel}` : ""}
   ${validatedData.carYear ? `Рік: ${validatedData.carYear}` : ""}

🔧 Послуга: ${validatedData.service}

📅 Бажана дата: ${validatedData.preferredDate}
${validatedData.preferredTime ? `⏰ Бажаний час: ${validatedData.preferredTime}` : ""}

${validatedData.comments ? `💬 Коментарі: ${validatedData.comments}` : ""}

---
Заявка подана: ${new Date().toLocaleString("uk-UA")}
    `.trim()

    // В реальном проекте здесь будет отправка email через сервис типа Resend, SendGrid или Nodemailer
    // Пример с использованием fetch для отправки через внешний API:

    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@techosmotr.ua',
        to: 'tehoglyad.mk@gmail.com',
        subject: emailSubject,
        text: emailBody,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }
    */

    // Симуляция отправки email (в реальном проекте заменить на реальную отправку)
    console.log("Email would be sent to: tehoglyad.mk@gmail.com")
    console.log("Subject:", emailSubject)
    console.log("Body:", emailBody)

    // Симуляция задержки отправки
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      success: true,
      message: "Заявку успішно відправлено! Ми зв'яжемося з вами найближчим часом.",
    }
  } catch (error) {
    console.error("Booking submission error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Помилка валідації: " + error.errors.map((e) => e.message).join(", "),
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "Виникла помилка при відправці заявки. Спробуйте ще раз або зателефонуйте нам.",
    }
  }
}
