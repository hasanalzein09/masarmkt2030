

import { motion } from 'framer-motion'
import {
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Cpu,
  Search,
  ArrowLeft,
  Check,
  Star,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  Eye
} from 'lucide-react'

import ContactForm from '@/components/ContactForm'
import { services } from '@/config/site'
import { cities } from '@/data/cities'

interface Feature {
  ar: string
  en: string
}

interface Benefit {
  stat: string
  text: string
  textEn: string
}

interface Service {
  id: string
  slug: string
  icon: string
  color: string
  bgColor: string
  nameAr: string
  nameEn: string
  shortDescAr: string
  shortDescEn: string
  descriptionAr: string
  descriptionEn: string
  features: Feature[]
  benefits: Benefit[]
  priceOriginal: number
  priceFrom: number
  currency: string
  perMonth?: boolean
}

interface Result {
  stat: string
  labelAr: string
}

interface Project {
  slug: string
  titleAr: string
  descriptionAr: string
  clientAr: string
  city: string
  industryAr: string
  results: Result[]
}

interface Props {
  service: Service
  projects: Project[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Cpu,
  Search,
}

export default function ServicePageClient({ service, projects }: Props) {
  const IconComponent = iconMap[service.icon] || MessageCircle

  const getCityName = (cityId: string) => {
    const city = cities.find(c => c.id === cityId)
    return city?.nameAr || cityId
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8"
            >
              <a href="/" className="hover:text-violet-400 transition-colors">الرئيسية</a>
              <span>/</span>
              <a href="/services" className="hover:text-violet-400 transition-colors">الخدمات</a>
              <span>/</span>
              <span className="text-violet-400">{service.nameAr}</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8`}
            >
              <IconComponent className="w-12 h-12 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              <span className="text-gradient">{service.nameAr}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              {service.descriptionAr}
            </motion.p>

            {/* Price & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <div className="text-center">
                <span className="text-emerald-400 text-sm block mb-1">ابتداءً من</span>
                <div className="flex items-center gap-3 justify-center">
                  <span className="text-4xl font-black text-gradient">{service.priceFrom.toLocaleString('ar-SA')} {service.currency}</span>
                  <span className="text-xl text-gray-500 line-through">{service.priceOriginal.toLocaleString('ar-SA')} {service.currency}</span>
                  {service.perMonth && <span className="text-gray-400">/شهر</span>}
                </div>
              </div>

              <a
                href="#contact-form"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                اطلب الخدمة الآن
                <ArrowLeft className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
            >
              {[
                { icon: Clock, text: 'تنفيذ خلال 3-7 أيام' },
                { icon: Shield, text: 'ضمان 30 يوم' },
                { icon: Star, text: '98% عملاء راضون' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400">
                  <item.icon className="w-5 h-5 text-violet-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a]">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 text-center"
              >
                <div className="text-3xl font-black text-gradient mb-2">{benefit.stat}</div>
                <div className="text-gray-400">{benefit.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-8">
                <span className="text-white">ماذا تحصل مع </span>
                <span className="text-gradient">{service.nameAr}؟</span>
              </h2>

              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{feature.ar}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why This Service */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-violet-600/10 to-pink-600/10 border border-violet-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                لماذا تحتاج هذه الخدمة؟
              </h3>

              <div className="space-y-6">
                {[
                  { title: 'توفير الوقت', desc: 'أتمتة المهام المتكررة وتوفير ساعات من العمل اليومي' },
                  { title: 'زيادة المبيعات', desc: 'تحسين تجربة العميل وزيادة معدل التحويل' },
                  { title: 'خدمة 24/7', desc: 'عملاؤك يحصلون على ردود فورية في أي وقت' },
                  { title: 'تقليل التكاليف', desc: 'توفير تكاليف التوظيف مع نتائج أفضل' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                      <span className="text-violet-400 font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {projects.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                <span className="text-white">مشاريع ناجحة في </span>
                <span className="text-gradient">{service.nameAr}</span>
              </h2>
              <p className="text-gray-400">شاهد كيف ساعدنا عملاءنا على النجاح</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a href={`/portfolio/${project.slug}`} className="block group">
                    <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/50 transition-all">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
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

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.results.slice(0, 2).map((result, j) => (
                          <span key={j} className="px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs">
                            <TrendingUp className="w-3 h-3 inline ml-1" />
                            {result.stat} {result.labelAr}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">{project.clientAr}</span>
                        <Eye className="w-4 h-4 text-gray-500 group-hover:text-violet-400 transition-colors" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium"
              >
                <span>عرض جميع المشاريع</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                <span className="text-white">اطلب </span>
                <span className="text-gradient">{service.nameAr}</span>
                <span className="text-white"> الآن</span>
              </h2>
              <p className="text-gray-400">
                املأ النموذج وسنتواصل معك خلال ساعات قليلة
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800"
            >
              <ContactForm source={`service-${service.slug}`} service={service.id} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
