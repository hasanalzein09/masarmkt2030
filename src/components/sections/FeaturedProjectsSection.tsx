import { motion } from 'framer-motion'
import { ArrowLeft, Eye, Sparkles, TrendingUp } from 'lucide-react'
import { getFeaturedProjects } from '@/data/index'
import { services } from '@/config/site'
import { cities } from '@/data/cities'

export default function FeaturedProjectsSection() {
  const featuredProjects = getFeaturedProjects(6)

  const getServiceName = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId)
    return service?.nameAr || serviceId
  }

  const getCityName = (cityId: string) => {
    const city = cities.find(c => c.id === cityId)
    return city?.nameAr || cityId
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 text-sm font-medium">أعمالنا المميزة</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-white">قصص نجاح </span>
            <span className="text-gradient">حقيقية</span>
            <br />
            <span className="text-white">لعملاء سعوديين</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            شاهد كيف ساعدنا المئات من الشركات السعوديةية على مضاعفة مبيعاتهم وتطوير أعمالهم
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={`/portfolio/${project.slug}`} className="block group h-full">
                <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-violet-500/50 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-violet-600/20 to-pink-600/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-50">{project.industryAr === 'مطاعم' ? '🍽️' : project.industryAr === 'عقارات' ? '🏠' : project.industryAr === 'تجارة' ? '🛒' : project.industryAr === 'صحة' ? '🏥' : '🏢'}</span>
                    </div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-medium">عرض التفاصيل</span>
                      </div>
                    </div>

                    {/* Service Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-violet-600/90 text-white text-xs font-medium">
                      {getServiceName(project.service)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <span>{project.industryAr}</span>
                      <span>•</span>
                      <span>{getCityName(project.city)}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {project.titleAr}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.descriptionAr}
                    </p>

                    {/* Results */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.results.slice(0, 2).map((result, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                        >
                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 text-xs font-medium">{result.stat} {result.labelAr}</span>
                        </div>
                      ))}
                    </div>

                    {/* Client */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
                          {project.clientAr.charAt(0)}
                        </div>
                        <span className="text-gray-400 text-sm">{project.clientAr}</span>
                      </div>

                      <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-violet-400 group-hover:-translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-violet-500/30 transition-all"
          >
            <span>عرض جميع المشاريع (120+)</span>
            <ArrowLeft className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
