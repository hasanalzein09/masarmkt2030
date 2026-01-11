

import { motion } from 'framer-motion'
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/config/site'

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'واتساب',
    subtitle: 'تواصل مباشر وسريع',
    value: siteConfig.contact.whatsapp,
    link: `https://wa.me/${siteConfig.contact.whatsapp}`,
    color: 'from-emerald-600 to-green-600',
    available: true,
  },
  {
    icon: Phone,
    title: 'الهاتف',
    subtitle: 'اتصل بنا مباشرة',
    value: siteConfig.contact.phone,
    link: `tel:${siteConfig.contact.phone}`,
    color: 'from-blue-600 to-cyan-600',
    available: true,
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    subtitle: 'للاستفسارات المفصلة',
    value: siteConfig.contact.email,
    link: `mailto:${siteConfig.contact.email}`,
    color: 'from-violet-600 to-purple-600',
    available: true,
  },
  {
    icon: MapPin,
    title: 'الموقع',
    subtitle: 'مقرنا الرئيسي',
    value: 'الرياض، السعودية',
    link: '#',
    color: 'from-pink-600 to-rose-600',
    available: false,
  },
]



const faqs = [
  { q: 'كم يستغرق الرد على الاستفسارات؟', a: 'نرد خلال 2-4 ساعات في أوقات العمل' },
  { q: 'هل الاستشارة مجانية؟', a: 'نعم، الاستشارة الأولى مجانية 100%' },
  { q: 'ما هي أوقات العمل؟', a: 'السبت - الخميس من 9 صباحاً حتى 9 مساءً' },
]

export default function ContactPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">استشارة مجانية</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">تواصل </span>
              <span className="text-gradient">معنا</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              نحن هنا لمساعدتك! تواصل معنا بالطريقة التي تناسبك وسنرد عليك في أقرب وقت.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { icon: Clock, text: 'رد خلال ساعات' },
                { icon: MessageCircle, text: 'دعم على مدار الساعة' },
                { icon: Send, text: 'استشارة مجانية' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400">
                  <item.icon className="w-5 h-5 text-violet-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a]">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/50 transition-all ${method.available ? 'cursor-pointer' : 'cursor-default'
                  }`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{method.subtitle}</p>
                <p className="text-violet-400 font-medium" dir="ltr">{method.value}</p>

                {method.available && (
                  <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-black mb-6">
                <span className="text-white">أرسل لنا </span>
                <span className="text-gradient">رسالة</span>
              </h2>
              <p className="text-gray-400 mb-8">
                املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
              </p>

              <div className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800">
                <ContactForm source="contact-page" />
              </div>
            </motion.div>

            {/* Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Working Hours */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600/10 to-purple-600/10 border border-violet-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-violet-400" />
                  ساعات العمل
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>السبت - الخميس</span>
                    <span>9:00 ص - 9:00 م</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>الجمعة</span>
                    <span className="text-amber-400">مغلق</span>
                  </div>
                  <p className="text-sm text-gray-500 pt-2 border-t border-gray-800">
                    * الدعم الفني متاح 24/7 للعملاء الحاليين
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">أسئلة سريعة</h3>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                      <p className="text-white font-medium mb-1">{faq.q}</p>
                      <p className="text-gray-400 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('مرحباً، أريد الاستفسار عن خدماتكم')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-gradient-to-r from-emerald-600/20 to-green-600/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">تفضل الواتساب؟</h3>
                    <p className="text-emerald-400">تواصل معنا مباشرة الآن!</p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
