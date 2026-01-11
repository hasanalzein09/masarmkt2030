

import { motion } from 'framer-motion'

import type { StatisticsPage, StatisticsCategory } from '@/config/statistics'

interface Props {
  stat: StatisticsPage
  category?: StatisticsCategory
}

export default function StatisticsPageClient({ stat, category }: Props) {
  const totalStats = stat.stats.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-sm text-gray-400 mb-6">
              <a href="/" className="hover:text-white">الرئيسية</a>
              <span>/</span>
              <a href="/statistics" className="hover:text-white">الإحصائيات</a>
              <span>/</span>
              <span className="text-cyan-400">{stat.titleAr}</span>
            </nav>

            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6">
              {category?.icon} {category?.nameAr} | {stat.year}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {stat.titleAr}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {stat.introAr}
            </p>

            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <span>📈 {totalStats} إحصائية</span>
              <span>💡 {stat.insights.length} رؤى</span>
              <span>📚 المصدر: {stat.source}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {stat.stats.map((statCategory, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full"></span>
                  {statCategory.category}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {statCategory.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.05 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-cyan-500/50 transition-all"
                    >
                      <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                      <p className="text-3xl font-bold text-white mb-1">{item.value}</p>
                      {item.change && (
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${item.trend === 'up' ? 'text-green-400' :
                            item.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                            }`}>
                            {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'} {item.change}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-teal-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                💡 أهم الرؤى والاستنتاجات
              </h2>
              <p className="text-gray-400">
                ماذا تعني هذه الأرقام لعملك؟
              </p>
            </motion.div>

            <div className="space-y-4">
              {stat.insights.map((insight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-5 border border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-white mb-2">{insight.title}</h3>
                      <p className="text-gray-400">{insight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                ❓ الأسئلة الشائعة
              </h2>
            </motion.div>

            <div className="space-y-4">
              {stat.faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden"
                >
                  <div className="p-5">
                    <h3 className="font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              📚 المصدر
            </h2>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 text-center">
              <p className="text-gray-300">{stat.source}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/30 to-teal-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              استفد من هذه الأرقام في عملك
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              نساعدك في تحليل السوق واستغلال الفرص المتاحة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold rounded-xl transition-all"
              >
                احصل على استشارة مجانية
              </a>
              <a
                href="/statistics"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl transition-all"
              >
                شوف إحصائيات ثانية
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
