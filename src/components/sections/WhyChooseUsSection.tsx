'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  Clock, 
  HeadphonesIcon, 
  Award, 
  TrendingUp,
  CheckCircle2,
  Sparkles,
  HeartHandshake
} from 'lucide-react'
import { whyChooseUs } from '@/config/site'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Shield,
  Clock,
  HeadphonesIcon,
  Award,
  TrendingUp,
  HeartHandshake,
}

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">لماذا نحن؟</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6">
              <span className="text-white">لأننا نفهم </span>
              <span className="text-gradient">السوق السعودي</span>
              <br />
              <span className="text-white">ونعرف وش تحتاج</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              مو مجرد شركة برمجة عادية. حنا فريق من الخبراء السعوديين اللي يفهمون تحدياتك ويشتغلون على حلها بأحدث التقنيات وأفضل الأسعار.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                'أكثر من 500 مشروع ناجح في السعودية',
                'فريق دعم سعودي يتحدث لغتك',
                'أسعار تنافسية مقارنة بالشركات العالمية',
                'نتائج مضمونة أو استرداد المال',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600/10 to-pink-600/10 border border-violet-500/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">الشركة #1 في السعودية</h4>
                  <p className="text-gray-400 text-sm">للذكاء الاصطناعي والأتمتة الرقمية</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Zap
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                      index % 2 === 0 ? 'from-emerald-600 to-green-600' : 'from-amber-600 to-yellow-600'
                    } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {item.titleAr}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.descAr}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-emerald-600/20 via-green-600/20 to-teal-600/20 border border-emerald-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '24/7', label: 'دعم فني متواصل' },
              { number: '30', label: 'يوم ضمان' },
              { number: '99%', label: 'عملاء راضين' },
              { number: '10+', label: 'مدن سعودية' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
