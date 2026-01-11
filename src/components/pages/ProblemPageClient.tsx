

import { motion } from 'framer-motion'

import type { ProblemSolution } from '@/config/problems-solutions'

interface Props {
  problem: ProblemSolution
  relatedProblems: ProblemSolution[]
}

export default function ProblemPageClient({ problem, relatedProblems }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center justify-center gap-2 text-gray-400">
                <li><a href="/" className="hover:text-white">الرئيسية</a></li>
                <li>/</li>
                <li><a href="/problems" className="hover:text-white">المشاكل والحلول</a></li>
                <li>/</li>
                <li className="text-amber-500">{problem.problemAr}</li>
              </ol>
            </nav>

            {/* Problem Icon */}
            <span className="text-7xl mb-6 block">{problem.icon}</span>

            {/* Problem Title */}
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-4">
              ❓ المشكلة
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {problem.problemAr}
            </h1>

            {/* Solution Preview */}
            <div className="bg-gradient-to-r from-green-500/10 to-amber-500/10 rounded-2xl p-6 max-w-2xl mx-auto">
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
                ✅ الحل
              </span>
              <p className="text-2xl text-white font-bold">{problem.solutionAr}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Before/After */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">النتائج المتوقعة</h2>
            <p className="text-gray-400">شوف الفرق قبل وبعد تطبيق الحل</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {problem.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
              >
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-4">{stat.metric}</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="text-xs text-red-400 mb-1">قبل</p>
                      <p className="text-2xl font-bold text-red-500">{stat.before}</p>
                    </div>
                    <div className="text-3xl text-gray-500">→</div>
                    <div className="text-center">
                      <p className="text-xs text-green-400 mb-1">بعد</p>
                      <p className="text-2xl font-bold text-green-500">{stat.after}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">خطوات الحل</h2>
            <p className="text-gray-400">كيف نحل مشكلتك خطوة بخطوة</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {problem.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  {index < problem.steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-amber-500 to-transparent mx-auto mt-2"></div>
                  )}
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 flex-1 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Keywords SEO Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              أسئلة متعلقة بهذه المشكلة
            </h2>

            <div className="space-y-4">
              {problem.keywordsAr.map((keyword, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <p className="text-gray-300">
                    <span className="text-amber-500 ml-2">❓</span>
                    {keyword.includes('كيف') || keyword.includes('لماذا') ? keyword : `كيف ${keyword}؟`}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900/30 to-orange-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              جاهز تحل هالمشكلة؟
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              تواصل معنا الآن واحصل على استشارة مجانية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966XXXXXXXXX"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                احكيلنا عن مشكلتك
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all"
              >
                احجز استشارة مجانية
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Problems */}
      {relatedProblems.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">مشاكل مشابهة</h2>
              <p className="text-gray-400">قد تواجه أيضاً هذه المشاكل</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedProblems.slice(0, 3).map((relatedProblem, index) => (
                <motion.div
                  key={relatedProblem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={`/problems/${relatedProblem.slug}`}>
                    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 h-full">
                      <span className="text-4xl mb-4 block">{relatedProblem.icon}</span>
                      <h3 className="text-lg font-bold text-white mb-2">{relatedProblem.problemAr}</h3>
                      <p className="text-gray-400 text-sm">{relatedProblem.shortDescAr}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
