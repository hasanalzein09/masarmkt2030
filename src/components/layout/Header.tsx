import { useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

const navigation = [
  { name: 'الرئيسية', href: '/' },
  { name: 'خدماتنا', href: '/services' },
  { name: 'مشاريعنا', href: '/portfolio' },
  { name: 'الأسعار', href: '/pricing' },
  { name: 'المدن', href: '/cities' },
  { name: 'المدونة', href: '/blog' },
  { name: 'تواصل معنا', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">م</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">مسار للتسويق</span>
                <span className="text-[10px] text-gray-400 -mt-1">حلول رقمية ذكية</span>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{siteConfig.contact.phone}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>تواصل الآن</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">م</span>
                </div>
                <span className="text-xl font-bold text-white">مسار للتسويق</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>تواصل واتساب</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phoneClean}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full border border-gray-700 text-gray-300"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
