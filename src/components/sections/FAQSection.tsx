'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'ما هي المدة المطلوبة لإنجاز مشروعي؟',
    answer: 'تختلف المدة حسب نوع المشروع: بوتات الواتساب والانستجرام تستغرق 7-14 يوم، المواقع الإلكترونية 14-30 يوم، وخدمات الأتمتة 14-21 يوم. نحرص دائماً على الجودة مع الالتزام بالمواعيد المحددة.'
  },
  {
    question: 'هل تقدمون ضمان على الخدمات؟',
    answer: 'نعم! نقدم ضمان 30 يوم على جميع خدماتنا. يشمل الضمان الدعم الفني المجاني، إصلاح أي مشاكل تقنية، والتعديلات البسيطة. إذا لم تكن راضياً عن النتيجة، نعيد لك أموالك بالكامل.'
  },
  {
    question: 'وش طرق الدفع المتاحة؟',
    answer: 'نقبل عدة طرق للدفع: التحويل البنكي المحلي، مدى، Apple Pay، STC Pay، تمارا وتابي للتقسيط، وPayPal. للمشاريع الكبيرة، يمكن الدفع على دفعات (50% مقدمة و50% عند الانتهاء).'
  },
  {
    question: 'هل يمكنني رؤية أمثلة على أعمالكم السابقة؟',
    answer: 'بالتأكيد! لدينا أكثر من 120 مشروع ناجح يمكنك مشاهدتها في قسم المشاريع. يشمل ذلك بوتات واتساب، مواقع إلكترونية، وحلول أتمتة لشركات سعودية متنوعة في الرياض وجدة والدمام ومدن أخرى.'
  },
  {
    question: 'هل تقدمون دعم فني بعد انتهاء المشروع؟',
    answer: 'نعم! نقدم دعم فني مجاني لمدة شهر كامل بعد تسليم المشروع. بعد ذلك، يمكنك الاشتراك في باقات الدعم الشهرية التي تبدأ من $50/شهر وتشمل الصيانة والتحديثات والدعم على مدار الساعة.'
  },
  {
    question: 'هل البوتات تشتغل بالعربي؟',
    answer: 'أكيد! كل بوتاتنا مصممة خصيصاً للسوق السعودي والعربي. تدعم اللغة العربية بشكل كامل، وتفهم اللهجة السعودية، ويمكن تخصيصها تناسب طبيعة شغلك وعملائك.'
  },
  {
    question: 'كيف أبدأ؟',
    answer: 'البداية سهلة جداً! 1) تواصل معنا عبر الواتساب أو نموذج التواصل، 2) نحدد موعد استشارة مجانية لفهم احتياجاتك، 3) نقدم لك عرض سعر مفصل، 4) بعد الموافقة نبدأ العمل فوراً. يمكنك البدء اليوم!'
  },
  {
    question: 'ما الفرق بينكم وبين الشركات الأخرى؟',
    answer: 'نتميز بعدة نقاط: 1) فريق سعودي يفهم السوق المحلي، 2) أسعار تنافسية أقل بـ30-50% من الشركات العالمية، 3) دعم فني بالعربي 24/7، 4) ضمان النتائج أو استرداد المال، 5) خبرة 7+ سنوات مع 500+ عميل راضٍ.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a]" />

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
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">الأسئلة الشائعة</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-white">إجابات على </span>
            <span className="text-gradient">أسئلتك</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            كل ما تحتاج معرفته قبل البدء معنا
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right"
                >
                  <span className={`text-lg font-medium transition-colors ${
                    openIndex === index ? 'text-emerald-300' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4 transition-colors ${
                    openIndex === index ? 'bg-emerald-500/20' : 'bg-gray-800'
                  }`}>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            ما لقيت جواب سؤالك؟
          </p>
          <a
            href="https://wa.me/966532601326?text=السلام عليكم، عندي سؤال..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/20 text-emerald-400 font-medium hover:bg-emerald-500/30 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            راسلنا واتساب
          </a>
        </motion.div>
      </div>
    </section>
  )
}
