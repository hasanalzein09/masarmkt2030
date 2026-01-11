import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Sparkles,
  MessageCircle,
  Zap,
  Gift,
  Clock
} from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-green-900/30 to-teal-900/30" />
      <div className="absolute inset-0 bg-[#0a0a0a]/80" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8">
            <Gift className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">
              🔥 عرض خاص - خصم 30% لفترة محدودة!
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">جاهز تنقل عملك</span>
            <br />
            <span className="text-gradient">للمستوى القادم؟</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            انضم لأكثر من <span className="text-emerald-400 font-bold">800 شركة سعودية</span> وثقت بنا واستمتع بالنمو المستمر
          </p>

          {/* Urgency Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/30 mb-10"
          >
            <Clock className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-medium">
              العرض ينتهي قريباً - لا تفوت الفرصة!
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/contact"
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="w-6 h-6" />
                ابدأ الحين - استشارة مجانية
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('مرحباً، أريد الحصول على عرض سعر')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold text-xl hover:bg-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              تواصل واتساب مباشرة
            </a>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
            {[
              { icon: Sparkles, text: 'استشارة مجانية' },
              { icon: Clock, text: 'رد خلال ساعات' },
              { icon: Gift, text: 'خصم 30%' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-violet-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <p className="text-gray-300 mb-4">
              "بعد ما استخدمنا بوت الواتساب من مسار، مبيعاتنا زادت 300% والعملاء صاروا يحصلون رد فوري!"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold">
                أ
              </div>
              <div className="text-right">
                <p className="text-white font-medium">أحمد المعموري</p>
                <p className="text-gray-500 text-sm">صاحب مطعم الأصيل - الرياض</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
