// مكون Internal Linking الذكي للـ SEO
// يضيف روابط داخلية تلقائية لتحسين ترتيب الصفحات

import { saudiCities, getMajorCities, getCitiesByRegion } from '@/data/saudi-cities-full'
import { industries } from '@/config/industries'

// الخدمات الرئيسية للـ Internal Linking
export const mainServices = [
  { slug: 'whatsapp-bot', nameAr: 'بوت واتساب', icon: '💬' },
  { slug: 'instagram-bot', nameAr: 'بوت انستغرام', icon: '📸' },
  { slug: 'messenger-bot', nameAr: 'بوت ماسنجر', icon: '💭' },
  { slug: 'website-design', nameAr: 'تصميم مواقع', icon: '🌐' },
  { slug: 'ecommerce-store', nameAr: 'متجر إلكتروني', icon: '🛒' },
  { slug: 'seo', nameAr: 'تحسين السيو', icon: '🔍' },
  { slug: 'mobile-app', nameAr: 'تطبيق جوال', icon: '📱' },
  { slug: 'ai-automation', nameAr: 'أتمتة ذكية', icon: '🤖' },
]

// مكون روابط الخدمات في المدينة
export function ServiceCityLinks({
  cityId,
  currentService,
  className = ''
}: {
  cityId: string
  cityName?: string
  currentService?: string
  className?: string
}) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${className}`}>
      {mainServices.map(service => (
        <a
          key={service.slug}
          href={`/services/${service.slug}/${cityId}`}
          className={`flex items-center gap-2 p-3 rounded-lg transition-all ${currentService === service.slug
              ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300'
              : 'bg-slate-800/30 border border-slate-700/30 text-slate-300 hover:border-purple-500/30 hover:bg-slate-800/50'
            }`}
        >
          <span className="text-lg">{service.icon}</span>
          <span className="text-sm">{service.nameAr}</span>
        </a>
      ))}
    </div>
  )
}

// مكون روابط المدن للخدمة
export function CityServiceLinks({
  serviceSlug,
  serviceName,
  currentCity,
  maxCities = 12,
  className = ''
}: {
  serviceSlug: string
  serviceName: string
  currentCity?: string
  maxCities?: number
  className?: string
}) {
  const majorCities = getMajorCities().slice(0, maxCities)

  return (
    <div className={className}>
      <h3 className="text-lg font-bold text-white mb-4">
        {serviceName} في المدن السعودية
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {majorCities.map(city => (
          <a
            key={city.id}
            href={`/services/${serviceSlug}/${city.id}`}
            className={`text-center p-3 rounded-lg transition-all ${currentCity === city.id
                ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300'
                : 'bg-slate-800/30 border border-slate-700/30 text-slate-300 hover:border-purple-500/30'
              }`}
          >
            <span className="text-sm">{city.nameAr}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

// مكون روابط المدن في المنطقة
export function RegionCityLinks({
  regionId,
  regionName,
  currentCity,
  serviceSlug,
  className = ''
}: {
  regionId: string
  regionName: string
  currentCity?: string
  serviceSlug?: string
  className?: string
}) {
  const regionCities = getCitiesByRegion(regionId)

  return (
    <div className={className}>
      <h3 className="text-lg font-bold text-white mb-4">
        مدن {regionName}
      </h3>
      <div className="flex flex-wrap gap-2">
        {regionCities.map(city => {
          const href = serviceSlug
            ? `/services/${serviceSlug}/${city.id}`
            : `/cities/${city.id}`

          return (
            <a
              key={city.id}
              href={href}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${currentCity === city.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-purple-500/20 hover:text-purple-300'
                }`}
            >
              {city.nameAr}
            </a>
          )
        })}
      </div>
    </div>
  )
}

// مكون الروابط ذات الصلة
export function RelatedLinks({
  currentCity,
  currentService,
  className = ''
}: {
  currentPage: 'service' | 'city' | 'industry' | 'ecommerce' | 'mobile-app'
  currentCity?: string
  currentService?: string
  currentIndustry?: string
  className?: string
}) {
  const city = currentCity ? saudiCities.find(c => c.id === currentCity) : null

  // توليد روابط ذات صلة بناءً على السياق
  const relatedLinks: { href: string; label: string }[] = []

  if (currentCity) {
    // روابط الخدمات في نفس المدينة
    mainServices.forEach(service => {
      if (service.slug !== currentService) {
        relatedLinks.push({
          href: `/services/${service.slug}/${currentCity}`,
          label: `${service.nameAr} في ${city?.nameAr || currentCity}`
        })
      }
    })
  }

  if (currentService) {
    // روابط نفس الخدمة في مدن أخرى
    getMajorCities().slice(0, 5).forEach(c => {
      if (c.id !== currentCity) {
        const serviceName = mainServices.find(s => s.slug === currentService)?.nameAr || currentService
        relatedLinks.push({
          href: `/services/${currentService}/${c.id}`,
          label: `${serviceName} في ${c.nameAr}`
        })
      }
    })
  }

  if (relatedLinks.length === 0) return null

  return (
    <div className={className}>
      <h3 className="text-lg font-bold text-white mb-4">روابط ذات صلة</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {relatedLinks.slice(0, 8).map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center gap-2 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 text-slate-300 hover:border-purple-500/30 hover:text-purple-300 transition-all"
          >
            <span className="text-purple-400">→</span>
            <span className="text-sm">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

// مكون Breadcrumb محسن للـ SEO
export function SEOBreadcrumb({
  items,
  className = ''
}: {
  items: { label: string; href?: string }[]
  className?: string
}) {
  return (
    <nav
      className={`flex items-center gap-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {index > 0 && <span className="text-slate-500">/</span>}
          {item.href ? (
            <a
              href={item.href}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-purple-400">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

// مكون خريطة الموقع للـ Footer
export function FooterSitemap({ className = '' }: { className?: string }) {
  const topCities = getMajorCities().slice(0, 10)
  const topIndustries = industries.slice(0, 8)

  return (
    <div className={`grid md:grid-cols-4 gap-8 ${className}`}>
      {/* الخدمات */}
      <div>
        <h4 className="text-white font-bold mb-4">خدماتنا</h4>
        <ul className="space-y-2">
          {mainServices.map(service => (
            <li key={service.slug}>
              <a
                href={`/services/${service.slug}`}
                className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
              >
                {service.nameAr}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* المدن */}
      <div>
        <h4 className="text-white font-bold mb-4">خدماتنا في المدن</h4>
        <ul className="space-y-2">
          {topCities.map(city => (
            <li key={city.id}>
              <a
                href={`/cities/${city.id}`}
                className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
              >
                {city.nameAr}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* القطاعات */}
      <div>
        <h4 className="text-white font-bold mb-4">القطاعات</h4>
        <ul className="space-y-2">
          {topIndustries.map(industry => (
            <li key={industry.id}>
              <a
                href={`/industries/${industry.slug}`}
                className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
              >
                {industry.nameAr}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* روابط سريعة */}
      <div>
        <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
        <ul className="space-y-2">
          <li>
            <a href="/ecommerce" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
              المتاجر الإلكترونية
            </a>
          </li>
          <li>
            <a href="/mobile-apps" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
              تطبيقات الجوال
            </a>
          </li>
          <li>
            <a href="/portfolio" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
              أعمالنا
            </a>
          </li>
          <li>
            <a href="/faq" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
              الأسئلة الشائعة
            </a>
          </li>
          <li>
            <a href="/contact" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
              تواصل معنا
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

// مكون روابط SEO في نهاية الصفحة
export function SEOFooterLinks({
  serviceSlug,
  cityId,
  className = ''
}: {
  serviceSlug?: string
  cityId?: string
  className?: string
}) {
  const majorCities = getMajorCities().slice(0, 20)

  return (
    <div className={`border-t border-slate-800 pt-8 ${className}`}>
      {/* روابط الخدمات في المدن الرئيسية */}
      {serviceSlug && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-slate-400 mb-3">
            {mainServices.find(s => s.slug === serviceSlug)?.nameAr || serviceSlug} في:
          </h4>
          <div className="flex flex-wrap gap-2">
            {majorCities.map(city => (
              <a
                key={city.id}
                href={`/services/${serviceSlug}/${city.id}`}
                className="text-xs text-slate-500 hover:text-purple-400 transition-colors"
              >
                {city.nameAr}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* روابط جميع الخدمات في المدينة */}
      {cityId && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-slate-400 mb-3">
            خدماتنا في {saudiCities.find(c => c.id === cityId)?.nameAr || cityId}:
          </h4>
          <div className="flex flex-wrap gap-2">
            {mainServices.map(service => (
              <a
                key={service.slug}
                href={`/services/${service.slug}/${cityId}`}
                className="text-xs text-slate-500 hover:text-purple-400 transition-colors"
              >
                {service.nameAr}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
