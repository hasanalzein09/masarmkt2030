import { motion } from 'framer-motion'
import {
  ArrowLeft,
  MapPin,
  Users,
  Building2
} from 'lucide-react'
import { cities } from '@/data/cities'

export default function CitiesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">نخدم كل السعودية 🇸🇦</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-white">خدماتنا تصل إلى </span>
            <span className="text-gradient">جميع المدن</span>
            <br />
            <span className="text-white">السعودية الرئيسية</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            بغض النظر عن موقعك في السعودية، فريقنا جاهز لخدمتك بأعلى جودة وأفضل الأسعار
          </p>
        </motion.div>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={`/cities/${city.id}`} className="block group">
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-teal-600/0 group-hover:from-emerald-600/10 group-hover:to-teal-600/10 transition-all duration-300" />

                  {/* City Icon */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🏙️</span>
                    </div>
                  </div>

                  {/* City Name */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {city.nameAr}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{city.nameEn}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <span>{city.stats.clients}+ عميل</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-violet-400" />
                      <span>{city.stats.projects} مشروع</span>
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {city.industries.slice(0, 3).map((industry, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 text-xs"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-emerald-400 group-hover:text-emerald-300 font-medium text-sm">
                    <span>خدمات {city.nameAr}</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* KSA Map Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-emerald-600/10 border border-emerald-500/20 text-center"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-6xl">🇸🇦</span>
            <div className="text-right">
              <h3 className="text-2xl font-bold text-white mb-2">
                نفتخر بخدمة أكثر من <span className="text-gradient">500+ شركة سعودية</span>
              </h3>
              <p className="text-gray-400">
                من الرياض إلى جدة، من الدمام إلى مكة - خدماتنا تصل إليك أينما كنت
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
