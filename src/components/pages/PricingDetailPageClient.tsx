

import { motion } from 'framer-motion'

import type { PricingPage } from '@/config/pricing'

interface Props {
  pricing: PricingPage
}

export default function PricingDetailPageClient({ pricing }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
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
                <li><a href="/pricing" className="hover:text-white">الأسعار</a></li>
                <li>/</li>
                <li className="text-green-400">{pricing.titleAr}</li>
              </ol>
            </nav>

            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6">
              💰 دليل الأسعار 2025
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {pricing.titleAr}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {pricing.introAr}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricing.pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 border ${tier.popular
                  ? 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500'
                  : 'bg-gray-800 border-gray-700'
                  }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                    الأكثر طلباً
                  </span>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                  <div className="text-3xl font-black text-green-400">
                    {tier.priceRange}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
                  <p className="text-gray-400 text-xs mb-1">🎯 الأفضل لـ:</p>
                  <p className="text-white text-sm">{tier.bestFor}</p>
                </div>

                <div className="text-center text-gray-400 text-sm mb-4">
                  ⏱️ {tier.timeline}
                </div>

                <a
                  href="https://wa.me/966XXXXXXXXX"
                  className={`block w-full py-3 rounded-xl font-bold text-center transition-all ${tier.popular
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                >
                  اطلب الآن
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">ما يؤثر على السعر؟</h2>
            <p className="text-gray-400">العوامل التي تحدد التكلفة النهائية</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.pricingFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold">{factor.factor}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${factor.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                    factor.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                    {factor.impact === 'high' ? 'تأثير عالي' :
                      factor.impact === 'medium' ? 'تأثير متوسط' :
                        'تأثير منخفض'}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{factor.explanation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">الأسئلة الشائعة</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {pricing.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-white font-bold mb-3 flex gap-3">
                  <span className="text-green-400">❓</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 pr-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              جاهز تبدأ؟
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              تواصل معنا الآن واحصل على عرض سعر مخصص لمشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966XXXXXXXXX"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                اطلب عرض سعر
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all"
              >
                تواصل معنا
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
