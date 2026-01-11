// مكونات Structured Data للـ SEO
// JSON-LD schemas لتحسين الظهور في نتائج البحث

import { siteConfig } from '@/config/site'

// Schema للمؤسسة
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.masarmkt2030.online/#organization',
  name: 'مسار للتسويق',
  alternateName: 'مسار للتسويق',
  url: 'https://www.masarmkt2030.online',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.masarmkt2030.online/logo.png',
    width: 512,
    height: 512
  },
  description: siteConfig.description,
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Masar Team'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'الرياض',
    addressLocality: 'الرياض',
    addressRegion: 'منطقة الرياض',
    postalCode: '11564',
    addressCountry: 'SA'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      availableLanguage: ['Arabic', 'English'],
      areaServed: 'SA'
    },
    {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'sales',
      availableLanguage: ['Arabic', 'English'],
      areaServed: 'SA'
    }
  ],
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.twitter,
    siteConfig.social.linkedin
  ].filter(Boolean)
}

// Schema للموقع
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.masarmkt2030.online/#website',
  url: 'https://www.masarmkt2030.online',
  name: 'مسار للتسويق',
  description: siteConfig.description,
  publisher: {
    '@id': 'https://www.masarmkt2030.online/#organization'
  },
  inLanguage: 'ar-SA',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.masarmkt2030.online/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}

// Schema للأعمال المحلية
export function generateLocalBusinessSchema(cityName: string, cityNameEn: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.masarmkt2030.online/cities/${cityNameEn.toLowerCase()}#business`,
    name: `مسار للتسويق - ${cityName}`,
    description: `خدمات الذكاء الاصطناعي وبوتات واتساب في ${cityName}`,
    url: `https://www.masarmkt2030.online/cities/${cityNameEn.toLowerCase()}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressCountry: 'SA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'SA'
    },
    areaServed: {
      '@type': 'City',
      name: cityName
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    }
  }
}

// Schema للخدمة
export function generateServiceSchema(
  serviceName: string,
  serviceNameEn: string,
  description: string,
  price?: number,
  currency: string = 'USD'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.masarmkt2030.online/services/${serviceNameEn}#service`,
    name: serviceName,
    description: description,
    provider: {
      '@id': 'https://www.masarmkt2030.online/#organization'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia'
    },
    serviceType: serviceName,
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: currency,
        availability: 'https://schema.org/InStock',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      }
    })
  }
}

// Schema للمنتج (المتاجر)
export function generateProductSchema(
  name: string,
  description: string,
  price: number,
  currency: string = 'USD',
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: image || 'https://www.masarmkt2030.online/og.jpg',
    brand: {
      '@type': 'Brand',
      name: 'مسار للتسويق'
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': 'https://www.masarmkt2030.online/#organization'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50'
    }
  }
}

// Schema لصفحة المقال/المحتوى
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@id': 'https://www.masarmkt2030.online/#organization'
    },
    publisher: {
      '@id': 'https://www.masarmkt2030.online/#organization'
    },
    image: image || 'https://www.masarmkt2030.online/og.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }
}

// Schema للـ Breadcrumb
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

// Schema للـ How-To (للصفحات التعليمية)
export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[],
  totalTime?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    ...(totalTime && { totalTime: totalTime }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  }
}

// Schema للفيديو
export function generateVideoSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration?: string,
  embedUrl?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    ...(duration && { duration: duration }),
    ...(embedUrl && { embedUrl: embedUrl }),
    publisher: {
      '@id': 'https://www.masarmkt2030.online/#organization'
    }
  }
}

// Schema للتقييمات والمراجعات
export function generateReviewSchema(
  itemName: string,
  itemType: string,
  reviews: { author: string; rating: number; text: string; date: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': itemType,
    name: itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: review.text,
      datePublished: review.date
    }))
  }
}

// مكون لإضافة Schema إلى الصفحة
export function SchemaScript({ schema }: { schema: object | object[] }) {
  const schemas = Array.isArray(schema) ? schema : [schema]
  
  return (
    <>
      {schemas.map((s, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  )
}

// دمج عدة schemas في graph واحد
export function combineSchemas(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map(s => {
      const { '@context': _, ...rest } = s as any
      return rest
    })
  }
}
