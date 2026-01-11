import { useState } from 'react'
import { Send, Loader2, CheckCircle, AlertCircle, Building2, Phone, Mail, MessageSquare, Briefcase } from 'lucide-react'

interface ContactFormProps {
  source?: string
  service?: string
  city?: string
}

interface FormData {
  name: string
  phone: string
  email: string
  company: string
  service: string
  city: string
  message: string
  budget: string
}

const services = [
  { value: 'whatsapp-bot', label: 'بوت واتساب ذكي' },
  { value: 'instagram-bot', label: 'بوت انستجرام ذكي' },
  { value: 'messenger-bot', label: 'بوت ماسنجر ذكي' },
  { value: 'web-development', label: 'تصميم وتطوير مواقع' },
  { value: 'ai-automation', label: 'أتمتة بالذكاء الاصطناعي' },
  { value: 'seo', label: 'تحسين محركات البحث SEO' },
  { value: 'other', label: 'خدمة أخرى' }
]

const cities = [
  { value: 'riyadh', label: 'الرياض' },
  { value: 'jeddah', label: 'جدة' },
  { value: 'dammam', label: 'الدمام' },
  { value: 'makkah', label: 'مكة' },
  { value: 'madinah', label: 'المدينة' },
  { value: 'taif', label: 'الطائف' },
  { value: 'abha', label: 'أبها' },
  { value: 'other', label: 'مدينة أخرى' }
]

const budgets = [
  { value: 'under-2000', label: 'أقل من 2,000 ريال' },
  { value: '2000-5000', label: '2,000 - 5,000 ريال' },
  { value: '5000-10000', label: '5,000 - 10,000 ريال' },
  { value: '10000-20000', label: '10,000 - 20,000 ريال' },
  { value: 'over-20000', label: 'أكثر من 20,000 ريال' },
  { value: 'not-sure', label: 'غير محدد' }
]

// WhatsApp number for contact (from site config)
const WHATSAPP_NUMBER = '966532601326'

export default function ContactForm({ source = 'contact-page', service = '', city = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: service,
    city: city,
    message: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Get labels for display
      const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service
      const cityLabel = cities.find(c => c.value === formData.city)?.label || formData.city
      const budgetLabel = budgets.find(b => b.value === formData.budget)?.label || formData.budget

      // 1. Send email notification (don't wait, fire and forget)
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: serviceLabel,
          city: cityLabel,
          budget: budgetLabel,
          source
        })
      }).catch(err => console.log('Email notification error:', err))

      // 2. Build WhatsApp message
      const whatsappMessage = `*طلب استشارة جديد* 🚀

*الاسم:* ${formData.name}
*الهاتف:* ${formData.phone}
${formData.email ? `*البريد:* ${formData.email}` : ''}
${formData.company ? `*الشركة:* ${formData.company}` : ''}
*الخدمة:* ${serviceLabel}
*المدينة:* ${cityLabel}
${budgetLabel ? `*الميزانية:* ${budgetLabel}` : ''}

*تفاصيل المشروع:*
${formData.message}

---
_المصدر: ${source}_`

      // 3. Open WhatsApp
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, '_blank')

      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        service: service,
        city: city,
        message: '',
        budget: ''
      })
    } catch {
      setSubmitStatus('error')
      setErrorMessage('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">تم إرسال طلبك بنجاح! 🎉</h3>
        <p className="text-gray-400 mb-6">
          تم فتح واتساب وإرسال نسخة بالبريد الإلكتروني. سنتواصل معك قريباً.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="px-6 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
        >
          إرسال طلب آخر
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            الاسم الكامل <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="أدخل اسمك الكامل"
              className="w-full px-4 py-3 pr-11 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
            <MessageSquare className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            رقم الهاتف <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+966 XXX XXX XXXX"
              className="w-full px-4 py-3 pr-11 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
            <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            البريد الإلكتروني
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-4 py-3 pr-11 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            اسم الشركة / النشاط
          </label>
          <div className="relative">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="اسم شركتك أو نشاطك التجاري"
              className="w-full px-4 py-3 pr-11 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
            <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            الخدمة المطلوبة <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 pr-11 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="">اختر الخدمة</option>
              {services.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            المدينة <span className="text-red-400">*</span>
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
          >
            <option value="">اختر المدينة</option>
            {cities.map(c => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="md:col-span-2">
          <label className="block text-gray-300 text-sm font-medium mb-2">
            الميزانية المتوقعة
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
          >
            <option value="">اختر الميزانية المتوقعة</option>
            {budgets.map(b => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-gray-300 text-sm font-medium mb-2">
            تفاصيل المشروع <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="اشرح لنا تفاصيل مشروعك واحتياجاتك..."
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>جاري الإرسال...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>إرسال الطلب</span>
          </>
        )}
      </button>

      <p className="text-center text-gray-500 text-sm">
        ✨ استشارة أولى مجانية - سيتم التواصل معك خلال ساعات
      </p>
    </form>
  )
}
