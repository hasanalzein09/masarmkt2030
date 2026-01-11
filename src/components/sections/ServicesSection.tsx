import { motion } from 'framer-motion'
import {
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Cpu,
  Search,
  ArrowLeft,
  Sparkles,
  Check
} from 'lucide-react'
import { services } from '@/config/site'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Cpu,
  Search,
}

export default function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-sm font-medium">خدماتنا المتميزة</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-white">حلول </span>
            <span className="text-gradient">ذكية ومتكاملة</span>
            <br />
            <span className="text-white">لتطوير أعمالك</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الرقمية المتطورة لمساعدتك على التفوق في السوق السعوديةي
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || MessageCircle

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={`/services/${service.slug}`} className="block group h-full">
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-violet-500/50 transition-all duration-300 overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-pink-600/0 group-hover:from-violet-600/10 group-hover:to-pink-600/10 transition-all duration-300" />

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                      {service.nameAr}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.shortDescAr}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{feature.ar}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div>
                        <span className="text-xs text-emerald-400 block mb-1">ابتداءً من</span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-black text-gradient">
                            {service.priceFrom.toLocaleString('ar-SA')} {service.currency}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            {service.priceOriginal.toLocaleString('ar-SA')} {service.currency}
                          </span>
                          {service.perMonth && <span className="text-xs text-gray-500">/شهر</span>}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-violet-400 group-hover:text-violet-300 font-medium">
                        <span>تفاصيل أكثر</span>
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            لا تعرف أي خدمة تناسبك؟ دعنا نساعدك!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
          >
            <span>احجز استشارة مجانية</span>
            <ArrowLeft className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
