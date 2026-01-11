

import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Check,
  MapPin,
  Building2,
  Star,
  Quote
} from 'lucide-react'

import ContactForm from '@/components/ContactForm'
import { services } from '@/config/site'
import { cities } from '@/data/cities'

interface Result {
  stat: string
  labelAr: string
  labelEn?: string
}

interface Project {
  id: string
  slug: string
  service: string
  city: string
  titleAr: string
  titleEn?: string
  clientAr: string
  clientEn?: string
  industry: string
  industryAr: string
  descriptionAr: string
  descriptionEn?: string
  challengeAr?: string
  solutionAr?: string
  results: Result[]
  features?: string[]
  testimonialAr: string
  testimonialAuthor?: string
  image?: string
}

interface Props {
  project: Project
}

export default function ProjectPageClient({ project }: Props) {
  const serviceInfo = services.find(s => s.id === project.service)
  const cityInfo = cities.find(c => c.id === project.city)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-gray-400 mb-8"
            >
              <a href="/" className="hover:text-violet-400 transition-colors">الرئيسية</a>
              <span>/</span>
              <a href="/portfolio" className="hover:text-violet-400 transition-colors">المشاريع</a>
              <span>/</span>
              <span className="text-violet-400">{project.titleAr}</span>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-violet-500/20 text-violet-400 text-sm font-medium">
                {serviceInfo?.nameAr || project.service}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                {project.industryAr}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white mb-6"
            >
              {project.titleAr}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              {project.descriptionAr}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-violet-400" />
                <span>{project.clientAr}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>{cityInfo?.nameAr || project.city}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-black mb-6">
                <span className="text-gradient">النتائج المحققة</span>
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-violet-600/10 to-pink-600/10 border border-violet-500/20 text-center"
                  >
                    <div className="text-3xl font-black text-gradient mb-2">{result.stat}</div>
                    <div className="text-gray-400">{result.labelAr}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Challenge */}
              {project.challengeAr && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">!</span>
                    التحدي
                  </h3>
                  <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
                    <p className="text-gray-300 leading-relaxed">{project.challengeAr}</p>
                  </div>
                </motion.div>
              )}

              {/* Solution */}
              {project.solutionAr && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </span>
                    الحل
                  </h3>
                  <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
                    <p className="text-gray-300 leading-relaxed">{project.solutionAr}</p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="text-xl font-bold text-white mb-6">المميزات المطبقة</h3>
                <div className="flex flex-wrap gap-3">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-pink-600/10 border border-violet-500/20"
            >
              <Quote className="w-12 h-12 text-violet-400/30 mb-4" />
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                "{project.testimonialAr}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  {project.testimonialAuthor?.charAt(0) || project.clientAr.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{project.testimonialAuthor || project.clientAr}</p>
                  <p className="text-gray-400 text-sm">{project.industryAr}</p>
                </div>
                <div className="mr-auto flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
            <a
              href={`/services/${project.service}`}
              className="px-6 py-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:bg-violet-500/20 transition-colors"
            >
              المزيد من مشاريع {serviceInfo?.nameAr}
            </a>
            <a
              href={`/portfolio?city=${project.city}`}
              className="px-6 py-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
            >
              مشاريع في {cityInfo?.nameAr}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                <span className="text-white">هل تريد نتائج </span>
                <span className="text-gradient">مشابهة؟</span>
              </h2>
              <p className="text-gray-400">
                تواصل معنا الآن واحصل على استشارة مجانية لمشروعك
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800"
            >
              <ContactForm source={`project-${project.slug}`} service={project.service} city={project.city} />
            </motion.div>

            {/* Back to Portfolio */}
            <div className="text-center mt-8">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 rotate-180" />
                <span>العودة لمعرض الأعمال</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
