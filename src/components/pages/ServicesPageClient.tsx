

import { motion } from 'framer-motion'

import {
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Bot,
  Search,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react'
import { services, siteConfig } from '@/config/site'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Bot,
  Search
}

export default function ServicesPageClient() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              حلول متكاملة للتحول الرقمي
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              خدماتنا
              <span className="text-gradient"> الاحترافية</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              نقدم لك أفضل حلول الذكاء الاصطناعي والأتمتة الرقمية لتطوير أعمالك.
              من البوتات الذكية إلى المواقع الاحترافية، نحن شريكك للنجاح الرقمي.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, stat: siteConfig.stats.clients, label: 'عميل سعيد' },
              { icon: CheckCircle2, stat: siteConfig.stats.projects, label: 'مشروع منجز' },
              { icon: TrendingUp, stat: siteConfig.stats.satisfaction, label: 'نسبة الرضا' },
              { icon: Bot, stat: '6', label: 'خدمات متخصصة' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-gray-900/50 border border-gray-800">
                <item.icon className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                <div className="text-2xl font-black text-white">{item.stat}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Bot

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-3xl border border-gray-800 ${index % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
                    } from-gray-900 via-gray-900 to-gray-900/50`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-5`} />

                  <div className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 p-8 lg:p-12`}>
                    {/* Icon & Image Side */}
                    <div className="flex-shrink-0 w-full lg:w-1/3">
                      <div className={`w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br ${service.bgColor} flex items-center justify-center shadow-2xl`}>
                        <IconComponent className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 text-center lg:text-right">
                      <h2 className="text-3xl font-bold text-white mb-4">{service.nameAr}</h2>
                      <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        {service.descriptionAr}
                      </p>

                      {/* Features */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle2 className={`w-5 h-5 ${service.color}`} />
                            <span>{feature.ar}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <div className="text-center sm:text-right">
                          <span className="text-gray-500 line-through text-lg">{service.priceOriginal.toLocaleString('ar-SA')} {service.currency}</span>
                          <div className="text-3xl font-black text-white">
                            <span className="text-emerald-400 text-sm block mb-1">ابتداءً من</span>
                            <span className={service.color}>{service.priceFrom.toLocaleString('ar-SA')} {service.currency}</span>
                          </div>
                        </div>

                        <a
                          href={`/services/${service.slug}`}
                          className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${service.bgColor} text-white font-bold hover:shadow-lg transition-all group`}
                        >
                          <span>اطلب الآن</span>
                          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-violet-950/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              لا تعرف أي خدمة تناسبك؟
              <br />
              <span className="text-gradient">تواصل معنا للاستشارة المجانية</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              فريقنا جاهز لمساعدتك في اختيار الحل الأمثل لنشاطك التجاري
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-white font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب مباشر
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
