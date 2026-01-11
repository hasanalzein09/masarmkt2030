


import { motion } from 'framer-motion'
import {
  MapPin, Phone, MessageCircle, ArrowLeft, CheckCircle,
  Star, Users, Award, Clock, Shield, Zap, TrendingUp,
  ChevronDown, ChevronUp, Building2, Globe
} from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '@/config/site'
import type { SaudiCity } from '@/data/saudi-cities-full'
import type { ServiceKeyword } from '@/config/seo-keywords'

interface ServiceCityPageClientProps {
  city: SaudiCity
  service: ServiceKeyword
  fullService: any
  faqs: { question: string; answer: string }[]
  nearbyCities: SaudiCity[]
}

export default function ServiceCityPageClient({
  city,
  service,
  fullService,
  faqs,
  nearbyCities
}: ServiceCityPageClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const benefits = [
    { icon: Zap, text: 'تنفيذ سريع', desc: 'نسلم مشروعك في أقصر وقت' },
    { icon: Shield, text: 'ضمان الجودة', desc: 'ضمان شامل على جميع أعمالنا' },
    { icon: Users, text: 'دعم مستمر', desc: 'فريق دعم متاح 24/7' },
    { icon: TrendingUp, text: 'نتائج مضمونة', desc: 'نضمن تحقيق أهدافك' },
  ]

  const stats = [
    { number: '500+', label: 'مشروع منجز' },
    { number: '98%', label: 'رضا العملاء' },
    { number: '24/7', label: 'دعم فني' },
    { number: '5', label: 'سنوات خبرة' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-slate-400 mb-8"
          >
            <a href="/" className="hover:text-white transition-colors">الرئيسية</a>
            <span>/</span>
            <a href="/services" className="hover:text-white transition-colors">الخدمات</a>
            <span>/</span>
            <a href={`/services/${service.slug}`} className="hover:text-white transition-colors">{service.nameAr}</a>
            <span>/</span>
            <span className="text-purple-400">{city.nameAr}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm">{city.nameAr} - {city.regionAr}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {service.nameAr}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  في {city.nameAr}
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                أفضل خدمات {service.nameAr} في {city.nameAr}. نقدم حلول احترافية
                للشركات والمؤسسات في {city.regionAr}.
                {city.population && ` نخدم أكثر من ${city.population} نسمة في ${city.nameAr}.`}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=أريد خدمة ${service.nameAr} في ${city.nameAr}`}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  تواصل واتساب
                </a>
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  اتصل الآن
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual/Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  احصل على عرض سعر مجاني
                </h3>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{service.nameAr}</div>
                      <div className="text-slate-400 text-sm">خدمة احترافية</div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{city.nameAr}</div>
                      <div className="text-slate-400 text-sm">{city.regionAr}</div>
                    </div>
                  </div>

                  {fullService?.priceFrom && (
                    <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 text-center">
                      <div className="text-slate-400 text-sm mb-1">السعر يبدأ من</div>
                      <div className="text-3xl font-bold text-white">
                        {fullService.priceFrom} {fullService.currency}
                      </div>
                    </div>
                  )}

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=أريد عرض سعر لـ ${service.nameAr} في ${city.nameAr}`}
                    className="block w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                  >
                    احصل على عرض السعر
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              لماذا تختار مسار لـ {service.nameAr} في {city.nameAr}؟
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              نقدم أفضل خدمات {service.nameAr} في {city.nameAr} بجودة عالية وأسعار تنافسية
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700/30 rounded-2xl p-6 hover:border-purple-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.text}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      {fullService?.features && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                مميزات خدمة {service.nameAr}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {fullService.features.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-slate-800/20 rounded-xl p-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{feature.ar}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              أسئلة شائعة عن {service.nameAr} في {city.nameAr}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700/30 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-right"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {service.nameAr} في مدن أخرى بـ{city.regionAr}
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {nearbyCities.map((nearbyCity, index) => (
                <motion.div
                  key={nearbyCity.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`/services/${service.slug}/${nearbyCity.id}`}
                    className="block bg-slate-800/30 border border-slate-700/30 rounded-xl p-4 text-center hover:border-purple-500/30 hover:bg-slate-800/50 transition-all"
                  >
                    <MapPin className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                    <span className="text-white text-sm">{nearbyCity.nameAr}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services in City */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              جميع خدماتنا في {city.nameAr}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { slug: 'whatsapp-bot', name: 'بوت واتساب' },
              { slug: 'instagram-bot', name: 'بوت انستغرام' },
              { slug: 'messenger-bot', name: 'بوت ماسنجر' },
              { slug: 'website-design', name: 'تصميم مواقع' },
              { slug: 'ecommerce-store', name: 'متجر إلكتروني' },
              { slug: 'seo', name: 'تحسين السيو' },
              { slug: 'mobile-app', name: 'تطبيق جوال' },
              { slug: 'ai-automation', name: 'أتمتة ذكية' },
            ].map((svc, index) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <a
                  href={`/services/${svc.slug}/${city.id}`}
                  className={`block p-4 rounded-xl text-center transition-all ${svc.slug === service.slug
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-slate-800/30 border border-slate-700/30 text-slate-300 hover:border-purple-500/30'
                    }`}
                >
                  {svc.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              جاهز لبدء مشروعك في {city.nameAr}؟
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر خاص لـ {service.nameAr} في {city.nameAr}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=أريد ${service.nameAr} في ${city.nameAr}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                ابدأ الآن عبر واتساب
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                <Globe className="w-5 h-5" />
                نموذج التواصل
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
