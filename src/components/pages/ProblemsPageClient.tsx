

import { motion } from 'framer-motion'

import { problemsSolutions, problemCategories } from '@/config/problems-solutions'

export default function ProblemsPageClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-6">
              🔧 مركز الحلول
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              هل تواجه <span className="text-red-500">مشكلة</span> في عملك؟
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              اكتشف المشكلة التي تواجهها واحصل على الحل المناسب فوراً.
              <br />
              حلول مجربة ساعدت مئات الأعمال في السعودية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 sticky top-0 bg-gray-900/80 backdrop-blur-lg z-20 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {problemCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full transition-all text-sm flex items-center gap-2"
              >
                <span>{cat.icon}</span>
                <span>{cat.nameAr}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Problems by Category */}
      {problemCategories.map((category) => {
        const categoryProblems = problemsSolutions.filter(p => p.category === category.id)

        return (
          <section key={category.id} id={category.id} className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-white">{category.nameAr}</h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProblems.map((problem, index) => (
                  <motion.div
                    key={problem.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a href={`/problems/${problem.slug}`}>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 group h-full">
                        {/* Icon */}
                        <div className="text-5xl mb-4">{problem.icon}</div>

                        {/* Problem */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                          {problem.problemAr}
                        </h3>

                        {/* Short Description */}
                        <p className="text-gray-400 mb-4 text-sm">
                          {problem.shortDescAr}
                        </p>

                        {/* Solution Preview */}
                        <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
                          <p className="text-amber-400 text-sm font-medium">✨ الحل:</p>
                          <p className="text-gray-300 text-sm">{problem.solutionAr}</p>
                        </div>

                        {/* Stats Preview */}
                        {problem.stats.length > 0 && (
                          <div className="flex justify-between text-center bg-gradient-to-r from-green-500/10 to-amber-500/10 rounded-xl p-3">
                            <div>
                              <p className="text-red-400 text-xs">قبل</p>
                              <p className="text-white font-bold">{problem.stats[0].before}</p>
                            </div>
                            <div className="text-2xl text-gray-500">→</div>
                            <div>
                              <p className="text-green-400 text-xs">بعد</p>
                              <p className="text-white font-bold">{problem.stats[0].after}</p>
                            </div>
                          </div>
                        )}

                        {/* CTA */}
                        <div className="mt-4 text-center">
                          <span className="text-amber-500 group-hover:text-amber-400 text-sm font-medium">
                            اكتشف الحل الكامل ←
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              لم تجد مشكلتك في القائمة؟
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              تواصل معنا مباشرة وسنساعدك في إيجاد الحل المناسب لمشكلتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966XXXXXXXXX"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                تواصل واتساب
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all"
              >
                اتصل بنا
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
