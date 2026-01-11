

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { siteConfig } from '@/config/site'

const quickQuestions = [
  "أريد بوت واتساب لعملي",
  "كم سعر تصميم موقع؟",
  "أريد استشارة مجانية",
  "أريد أعرف أكثر عن خدماتكم"
]

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const sendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 z-50 w-80 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">مسار للتسويق</h3>
                  <p className="text-white/80 text-sm">نرد خلال دقائق</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="bg-gray-800 rounded-xl p-3 mb-4">
              <p className="text-gray-300 text-sm">
                مرحباً! 👋 كيف يمكننا مساعدتك اليوم؟ اختر سؤال أو اكتب رسالتك:
              </p>
            </div>

            {/* Quick Questions */}
            <div className="space-y-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(question)}
                  className="w-full text-right px-4 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm hover:bg-emerald-500/20 hover:text-emerald-400 transition-all border border-gray-700 hover:border-emerald-500/50"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* Custom Message */}
            <button
              onClick={() => sendMessage("مرحباً، أريد الاستفسار عن خدماتكم")}
              className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
            >
              <Send className="w-5 h-5" />
              <span>ابدأ محادثة</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-emerald-500 animate-ping opacity-30" />
      )}
    </>
  )
}
