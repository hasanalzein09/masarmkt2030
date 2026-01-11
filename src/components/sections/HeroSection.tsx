import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Users,
  Building2,
  Award,
  MessageCircle,
  Rocket
} from 'lucide-react'
import { siteConfig } from '@/config/site'

const stats = [
  { number: '800+', label: 'عميل سعودي', icon: Users },
  { number: '150+', label: 'مشروع ناجح', icon: Building2 },
  { number: '99%', label: 'نسبة الرضا', icon: Star },
  { number: '10+', label: 'مدن سعودية', icon: Award },
]

const floatingElements = [
  { emoji: '🇸🇦', delay: 0, duration: 3 },
  { emoji: '🤖', delay: 0.5, duration: 3.5 },
  { emoji: '💬', delay: 1, duration: 4 },
  { emoji: '🚀', delay: 1.5, duration: 3.2 },
  { emoji: '⭐', delay: 2, duration: 3.8 },
]

const saudiCities = ['الرياض', 'جدة', 'الدمام', 'مكة', 'المدينة']

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const [currentCity, setCurrentCity] = useState(0)
  const words = ['مبيعاتك', 'عملاءك', 'أرباحك', 'نجاحك', 'مستقبلك']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [words.length])

  useEffect(() => {
    const cityInterval = setInterval(() => {
      setCurrentCity((prev) => (prev + 1) % saudiCities.length)
    }, 3000)
    return () => clearInterval(cityInterval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Saudi Green Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-3xl" />

        {/* Saudi Pattern Background */}
        <div className="absolute inset-0 saudi-pattern opacity-30" />

        {/* Floating Elements */}
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
            }}
          >
            {el.emoji}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Saudi Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8"
          >
            <span className="text-2xl">🇸🇦</span>
            <span className="text-emerald-300 text-sm font-medium">
              الشركة الرائدة في الذكاء الاصطناعي بالمملكة العربية السعودية
            </span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
          >
            <span className="text-white">حوّل عملك إلى</span>
            <br />
            <span className="text-gradient">إمبراطورية رقمية</span>
            <br />
            <span className="text-white">وضاعف </span>
            <span className="relative inline-block">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-gradient-gold"
              >
                {words[currentWord]}
              </motion.span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full" />
            </span>
          </motion.h1>

          {/* Subheadline - Saudi Focused */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            <span className="text-white font-semibold">بوتات ذكية</span> تشتغل على مدار الساعة،
            <span className="text-white font-semibold"> مواقع احترافية</span> تجذب العملاء، و
            <span className="text-white font-semibold"> أتمتة متطورة</span> توفر وقتك وفلوسك
            <br />
            <span className="text-emerald-400">نخدم جميع مدن المملكة من </span>
            <motion.span
              key={currentCity}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-amber-400 font-bold"
            >
              {saudiCities[currentCity]}
            </motion.span>
          </motion.p>

          {/* Trust Indicators - Saudi Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            {[
              { icon: Shield, text: 'ضمان 30 يوم', color: 'text-emerald-400' },
              { icon: Clock, text: 'دعم فني على مدار الساعة', color: 'text-emerald-400' },
              { icon: TrendingUp, text: 'نتائج مضمونة', color: 'text-amber-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400">
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - Saudi Green Theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="/contact"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                احصل على استشارة مجانية
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('السلام عليكم، أبي أعرف أكثر عن خدماتكم')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-emerald-500/30 text-white font-medium hover:bg-emerald-500/10 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              راسلنا واتساب الحين
            </a>
          </motion.div>

          {/* Social Proof - Saudi Companies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Client Avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-3 space-x-reverse">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 border-2 border-[#0a0a0a] flex items-center justify-center text-white font-bold text-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="mr-4 text-right">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  <span className="text-white font-semibold">+800</span> عميل سعودي راضي
                </p>
              </div>
            </div>

            {/* Vision 2030 Reference */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Rocket className="w-4 h-4 text-emerald-400" />
              <span>نساهم في تحقيق <span className="text-emerald-400 font-semibold">رؤية 2030</span> بالتحول الرقمي</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-black text-gradient mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-emerald-500/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
