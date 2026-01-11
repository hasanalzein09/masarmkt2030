import { siteConfig, services } from '@/config/site'
import { cities } from '@/data/cities'
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">م</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">مسار للتسويق</span>
                <span className="text-[10px] text-gray-400 -mt-1">حلول رقمية ذكية</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              الشركة الرائدة في حلول الذكاء الاصطناعي وبوتات واتساب في السعودية.
              نحوّل أعمالك إلى ماكينة مبيعات تشتغل على مدار الساعة.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`/services/${service.slug}`} className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                    {service.nameAr}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-bold mb-4">نخدم في</h3>
            <ul className="space-y-3">
              {siteConfig.cities.map((city) => (
                <li key={city.id}>
                  <a href={`/services/by-city/whatsapp-ai/${city.id}`} className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                    {city.nameAr}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.contact.phoneClean}`} className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>واتساب</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} مسار للتسويق. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="/faq" className="text-gray-500 hover:text-gray-400 text-sm">
                الأسئلة الشائعة
              </a>
              <a href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">
                سياسة الخصوصية
              </a>
              <a href="/terms" className="text-gray-500 hover:text-gray-400 text-sm">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
