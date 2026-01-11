

import { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  type: 'bot' | 'user'
  text: string
  options?: string[]
}

const chatFlow: Record<string, { response: string; options?: string[] }> = {
  start: {
    response: "أهلاً وسهلاً! 🎉 أنا المساعد الذكي لـ مسار للتسويق. كيف يمكنني مساعدتك اليوم؟",
    options: ["أريد معرفة الخدمات", "أريد عرض سعر", "لدي استفسار", "تواصل مع فريق المبيعات"]
  },
  "أريد معرفة الخدمات": {
    response: "نقدم خدمات متميزة في مجال الذكاء الاصطناعي والتحول الرقمي. أي خدمة تهمك؟",
    options: ["بوتات واتساب", "بوتات انستجرام", "بوتات ماسنجر", "تصميم مواقع", "أتمتة بالذكاء الاصطناعي", "تحسين محركات البحث"]
  },
  "بوتات واتساب": {
    response: "🤖 بوتات الواتساب الذكية!\n\n✅ رد آلي 24/7\n✅ إدارة الطلبات والحجوزات\n✅ ربط مع أنظمتك\n✅ تقارير وإحصائيات\n\n💰 السعر: $350 فقط (خصم 30%)\n⏰ التنفيذ: 7-14 يوم",
    options: ["أريد عرض سعر", "شاهد أمثلة", "خدمة أخرى"]
  },
  "بوتات انستجرام": {
    response: "📸 بوتات انستجرام الذكية!\n\n✅ رد آلي على الرسائل\n✅ إدارة التعليقات\n✅ جدولة المنشورات\n✅ تحليل الأداء\n\n💰 السعر: $315 فقط (خصم 30%)\n⏰ التنفيذ: 5-10 أيام",
    options: ["أريد عرض سعر", "شاهد أمثلة", "خدمة أخرى"]
  },
  "بوتات ماسنجر": {
    response: "💬 بوتات ماسنجر الذكية!\n\n✅ رد فوري على العملاء\n✅ قوائم تفاعلية\n✅ ربط مع المتجر\n✅ إشعارات الطلبات\n\n💰 السعر: $280 فقط (خصم 30%)\n⏰ التنفيذ: 5-7 أيام",
    options: ["أريد عرض سعر", "شاهد أمثلة", "خدمة أخرى"]
  },
  "تصميم مواقع": {
    response: "🌐 تصميم مواقع احترافية!\n\n✅ تصميم عصري ومتجاوب\n✅ سرعة تحميل فائقة\n✅ متوافق مع SEO\n✅ لوحة تحكم سهلة\n\n💰 السعر: يبدأ من $1,050\n⏰ التنفيذ: 14-30 يوم",
    options: ["أريد عرض سعر", "شاهد أمثلة", "خدمة أخرى"]
  },
  "أتمتة بالذكاء الاصطناعي": {
    response: "🤖 أتمتة العمليات بالذكاء الاصطناعي!\n\n✅ أتمتة المهام المتكررة\n✅ معالجة البيانات\n✅ التكامل مع أنظمتك\n✅ توفير 80% من الوقت\n\n💰 السعر: يبدأ من $560\n⏰ التنفيذ: 14-21 يوم",
    options: ["أريد عرض سعر", "شاهد أمثلة", "خدمة أخرى"]
  },
  "تحسين محركات البحث": {
    response: "🔍 تحسين محركات البحث (SEO)!\n\n✅ تصدر نتائج جوجل\n✅ زيادة الزيارات العضوية\n✅ تحليل المنافسين\n✅ تقارير شهرية\n\n💰 السعر: $210/شهر\n⏰ النتائج: 3-6 أشهر",
    options: ["أريد عرض سعر", "شاهد أمثلة", "خدمة أخرى"]
  },
  "أريد عرض سعر": {
    response: "ممتاز! 🎯 للحصول على عرض سعر مخصص، يرجى:\n\n1️⃣ تحديد الخدمة المطلوبة\n2️⃣ وصف مشروعك\n3️⃣ الميزانية المتوقعة\n\nسيتواصل معك فريقنا خلال ساعات!",
    options: ["تواصل واتساب", "املأ نموذج التواصل", "العودة للبداية"]
  },
  "لدي استفسار": {
    response: "بالتأكيد! 💡 ما هو استفسارك؟",
    options: ["ما هي مدة التنفيذ؟", "هل تقدمون ضمان؟", "ما هي طرق الدفع؟", "سؤال آخر"]
  },
  "ما هي مدة التنفيذ؟": {
    response: "⏰ مدة التنفيذ تعتمد على الخدمة:\n\n• بوتات واتساب: 7-14 يوم\n• بوتات انستجرام: 5-10 أيام\n• بوتات ماسنجر: 5-7 أيام\n• مواقع الويب: 14-30 يوم\n• أتمتة: 14-21 يوم\n• SEO: نتائج خلال 3-6 أشهر",
    options: ["أريد عرض سعر", "سؤال آخر", "العودة للبداية"]
  },
  "هل تقدمون ضمان؟": {
    response: "✅ نعم! نقدم:\n\n• ضمان 30 يوم على جميع الخدمات\n• دعم فني مجاني لمدة شهر\n• تعديلات مجانية خلال فترة الضمان\n• استرداد المال في حالة عدم الرضا",
    options: ["أريد عرض سعر", "سؤال آخر", "العودة للبداية"]
  },
  "ما هي طرق الدفع؟": {
    response: "💳 طرق الدفع المتاحة:\n\n• تحويل بنكي\n• PayPal\n• زين كاش / آسيا حوالة\n• الدفع عند الاستلام (للعراق)\n\n📍 يمكن الدفع على دفعات للمشاريع الكبيرة",
    options: ["أريد عرض سعر", "سؤال آخر", "العودة للبداية"]
  },
  "تواصل مع فريق المبيعات": {
    response: "🎯 فريق المبيعات جاهز لمساعدتك!\n\n📞 الهاتف: +966 53 260 1326\n💬 واتساب: تواصل مباشر\n📧 البريد: info@masarmkt2030.online\n\n⏰ متاح: السبت-الخميس 9ص-9م",
    options: ["تواصل واتساب", "العودة للبداية"]
  },
  "تواصل واتساب": {
    response: "سيتم تحويلك إلى واتساب للتحدث مع فريقنا مباشرة! 📱",
    options: ["العودة للبداية"]
  },
  "شاهد أمثلة": {
    response: "يمكنك مشاهدة أعمالنا السابقة في قسم المشاريع! لدينا أكثر من 120 مشروع ناجح في السعودية 🇸🇦",
    options: ["أريد عرض سعر", "خدمة أخرى", "العودة للبداية"]
  },
  "خدمة أخرى": {
    response: "بالتأكيد! أي خدمة تهمك؟",
    options: ["بوتات واتساب", "بوتات انستجرام", "بوتات ماسنجر", "تصميم مواقع", "أتمتة بالذكاء الاصطناعي", "تحسين محركات البحث"]
  },
  "سؤال آخر": {
    response: "تفضل! يمكنك كتابة سؤالك وسأحاول مساعدتك، أو تواصل مع فريقنا مباشرة.",
    options: ["تواصل واتساب", "تواصل مع فريق المبيعات", "العودة للبداية"]
  },
  "العودة للبداية": {
    response: "أهلاً وسهلاً! 🎉 كيف يمكنني مساعدتك؟",
    options: ["أريد معرفة الخدمات", "أريد عرض سعر", "لدي استفسار", "تواصل مع فريق المبيعات"]
  },
  "املأ نموذج التواصل": {
    response: "يمكنك ملء نموذج التواصل في صفحة اتصل بنا أو في أي صفحة خدمة، وسنرد عليك خلال ساعات! 📝",
    options: ["تواصل واتساب", "العودة للبداية"]
  }
}

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial message
      setIsTyping(true)
      setTimeout(() => {
        setMessages([{
          id: '1',
          type: 'bot',
          text: chatFlow.start.response,
          options: chatFlow.start.options
        }])
        setIsTyping(false)
      }, 1000)
    }
  }, [isOpen, messages.length])

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: option
    }
    setMessages(prev => [...prev, userMessage])

    // Handle special actions
    if (option === "تواصل واتساب") {
      window.open(`https://wa.me/966532601326?text=${encodeURIComponent('مرحباً، أريد الاستفسار عن خدماتكم')}`, '_blank')
    }

    // Bot response
    setIsTyping(true)
    setTimeout(() => {
      const response = chatFlow[option] || chatFlow["سؤال آخر"]
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: response.response,
        options: response.options
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] max-h-[70vh] bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">المساعد الذكي</h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/80 text-xs">متصل الآن</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex items-start gap-2 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.type === 'bot' ? 'bg-violet-500/20' : 'bg-emerald-500/20'
                    }`}>
                    {message.type === 'bot' ? (
                      <Bot className="w-4 h-4 text-violet-400" />
                    ) : (
                      <User className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.type === 'bot'
                      ? 'bg-gray-800 text-gray-200'
                      : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
                    }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>

                {/* Options */}
                {message.type === 'bot' && message.options && (
                  <div className="mt-3 mr-10 flex flex-wrap gap-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="px-3 py-1.5 rounded-full text-xs bg-gray-800 text-gray-300 hover:bg-violet-500/20 hover:text-violet-400 transition-colors border border-gray-700 hover:border-violet-500/50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-violet-400" />
                </div>
                <div className="bg-gray-800 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-800 shrink-0">
            <p className="text-center text-gray-500 text-xs">
              مدعوم بالذكاء الاصطناعي من مسار للتسويق
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 flex items-center justify-center hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>
    </>
  )
}
