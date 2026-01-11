import { MetadataRoute } from 'next'
import { getAllProjects } from '@/data'
import { services, siteConfig } from '@/config/site'
import { cities } from '@/data/cities'
import { saudiCities, getMajorCities } from '@/data/saudi-cities-full'
import { industries } from '@/config/industries'
import { solutions } from '@/config/solutions'
import { storeTypes, ecommerceProblems } from '@/config/ecommerce'
import { appTypes, mobileAppProblems } from '@/config/mobile-apps'
import { getAllProblemSlugs } from '@/config/problems-solutions'
import { getAllComparisonSlugs } from '@/config/comparisons'
import { getAllPricingSlugs } from '@/config/pricing'
import { getAllGuideSlugs } from '@/config/guides'
import { getAllStatisticsSlugs } from '@/config/statistics'
import { getAllBlogSlugs } from '@/config/blog'
import { getAllCaseStudySlugs } from '@/config/case-studies'
import { getAllMarketingKeywords } from '@/config/marketing-keywords'
import { getAllMegaKeywords } from '@/data/mega-keywords'

const baseUrl = 'https://www.masarmkt2030.online'
const lastModified = new Date()

// =============================================
// SITEMAP 1: الصفحات الثابتة والخدمات
// =============================================
export function getStaticSitemapPages(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages = [
        { url: baseUrl, priority: 1.0 },
        { url: `${baseUrl}/services`, priority: 0.9 },
        { url: `${baseUrl}/portfolio`, priority: 0.9 },
        { url: `${baseUrl}/cities`, priority: 0.9 },
        { url: `${baseUrl}/industries`, priority: 0.9 },
        { url: `${baseUrl}/solutions`, priority: 0.9 },
        { url: `${baseUrl}/ecommerce`, priority: 0.9 },
        { url: `${baseUrl}/mobile-apps`, priority: 0.9 },
        { url: `${baseUrl}/faq`, priority: 0.9 },
        { url: `${baseUrl}/contact`, priority: 0.8 },
        { url: `${baseUrl}/problems`, priority: 0.9 },
        { url: `${baseUrl}/compare`, priority: 0.9 },
        { url: `${baseUrl}/pricing`, priority: 0.9 },
        { url: `${baseUrl}/guides`, priority: 0.9 },
        { url: `${baseUrl}/statistics`, priority: 0.9 },
        { url: `${baseUrl}/blog`, priority: 0.9 },
        { url: `${baseUrl}/case-studies`, priority: 0.9 },
    ]

    // Service pages
    const servicePages = services.map(service => ({
        url: `${baseUrl}/services/${service.slug}`,
        priority: 0.8,
    }))

    // Industry pages
    const industryPages = industries.map(industry => ({
        url: `${baseUrl}/industries/${industry.slug}`,
        priority: 0.8,
    }))

    // Solution pages
    const solutionPages = solutions.map(solution => ({
        url: `${baseUrl}/solutions/${solution.slug}`,
        priority: 0.8,
    }))

    // Store type pages
    const storeTypePages = storeTypes.map(type => ({
        url: `${baseUrl}/ecommerce/${type.slug}`,
        priority: 0.8,
    }))

    // E-commerce problem pages
    const ecommerceProblemPages = ecommerceProblems.map(problem => ({
        url: `${baseUrl}/ecommerce/problems/${problem.slug}`,
        priority: 0.8,
    }))

    // Mobile app pages
    const appTypePages = appTypes.map(type => ({
        url: `${baseUrl}/mobile-apps/${type.slug}`,
        priority: 0.8,
    }))

    // Mobile app problem pages
    const mobileAppProblemPages = mobileAppProblems.map(problem => ({
        url: `${baseUrl}/mobile-apps/problems/${problem.slug}`,
        priority: 0.8,
    }))

    // Problem pages
    const problemPages = getAllProblemSlugs().map(slug => ({
        url: `${baseUrl}/problems/${slug}`,
        priority: 0.8,
    }))

    // Comparison pages
    const comparisonPages = getAllComparisonSlugs().map(slug => ({
        url: `${baseUrl}/compare/${slug}`,
        priority: 0.8,
    }))

    // Pricing pages
    const pricingPages = getAllPricingSlugs().map(slug => ({
        url: `${baseUrl}/pricing/${slug}`,
        priority: 0.8,
    }))

    // Guide pages
    const guidePages = getAllGuideSlugs().map(slug => ({
        url: `${baseUrl}/guides/${slug}`,
        priority: 0.8,
    }))

    // Statistics pages
    const statisticsPages = getAllStatisticsSlugs().map(slug => ({
        url: `${baseUrl}/statistics/${slug}`,
        priority: 0.8,
    }))

    // Blog pages
    const blogPages = getAllBlogSlugs().map(slug => ({
        url: `${baseUrl}/blog/${slug}`,
        priority: 0.7,
    }))

    // Case study pages
    const caseStudyPages = getAllCaseStudySlugs().map(slug => ({
        url: `${baseUrl}/case-studies/${slug}`,
        priority: 0.8,
    }))

    // Project pages
    const projects = getAllProjects()
    const projectPages = projects.map(project => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        priority: 0.7,
    }))

    // All city pages
    const allCityPages = saudiCities.map(city => ({
        url: `${baseUrl}/cities/${city.id}`,
        priority: city.priority <= 2 ? 0.8 : 0.7,
    }))

    return [
        ...staticPages,
        ...servicePages,
        ...industryPages,
        ...solutionPages,
        ...storeTypePages,
        ...ecommerceProblemPages,
        ...appTypePages,
        ...mobileAppProblemPages,
        ...problemPages,
        ...comparisonPages,
        ...pricingPages,
        ...guidePages,
        ...statisticsPages,
        ...blogPages,
        ...caseStudyPages,
        ...projectPages,
        ...allCityPages,
    ].map(page => ({
        url: page.url,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page.priority,
    }))
}

// =============================================
// SITEMAP 2: خدمات × مدن
// =============================================
export function getServicesCitySitemapPages(): MetadataRoute.Sitemap {
    const serviceSlugs = ['whatsapp-bot', 'instagram-bot', 'messenger-bot', 'website-design', 'ecommerce-store', 'seo', 'mobile-app', 'ai-automation', 'content-marketing', 'social-media-management', 'ai-agents']
    const pages: { url: string; priority: number }[] = []

    for (const serviceSlug of serviceSlugs) {
        for (const city of saudiCities) {
            const priority = city.priority <= 2 ? 0.8 : city.priority <= 3 ? 0.7 : 0.6
            pages.push({
                url: `${baseUrl}/services/${serviceSlug}/${city.id}`,
                priority,
            })
        }
    }

    // Industries × Cities
    const topCities = saudiCities.filter(c => c.priority <= 3)
    for (const industry of industries) {
        for (const city of topCities) {
            pages.push({
                url: `${baseUrl}/industries/${industry.slug}/${city.id}`,
                priority: 0.7,
            })
        }
    }

    return pages.map(page => ({
        url: page.url,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page.priority,
    }))
}

// =============================================
// SITEMAP 3: متاجر وتطبيقات × مدن
// =============================================
export function getEcommerceMobileSitemapPages(): MetadataRoute.Sitemap {
    const pages: { url: string; priority: number }[] = []
    const top30Cities = saudiCities.filter(c => c.priority <= 3).slice(0, 30)

    // E-commerce × Cities
    for (const storeType of storeTypes) {
        for (const city of top30Cities) {
            pages.push({
                url: `${baseUrl}/ecommerce/${storeType.slug}/${city.id}`,
                priority: 0.7,
            })
        }
    }

    // Mobile apps × Cities
    for (const appType of appTypes) {
        for (const city of top30Cities) {
            pages.push({
                url: `${baseUrl}/mobile-apps/${appType.slug}/${city.id}`,
                priority: 0.7,
            })
        }
    }

    return pages.map(page => ({
        url: page.url,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page.priority,
    }))
}

// =============================================
// SITEMAP 4: تسويق - كلمات أساسية
// =============================================
export function getMarketingBasicSitemapPages(): MetadataRoute.Sitemap {
    const keywords = getAllMarketingKeywords()
    const pages: { url: string; priority: number }[] = []

    for (const keyword of keywords) {
        for (const city of saudiCities) {
            const priority = city.priority <= 2 ? 0.7 : city.priority <= 3 ? 0.6 : 0.5
            pages.push({
                url: `${baseUrl}/marketing/${keyword.slug}/${city.id}`,
                priority,
            })
        }
    }

    return pages.map(page => ({
        url: page.url,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page.priority,
    }))
}

// =============================================
// SITEMAP 5: تسويق - كلمات ضخمة (الجزء 1)
// =============================================
export function getMegaKeywords1SitemapPages(): MetadataRoute.Sitemap {
    const allKeywords = getAllMegaKeywords()
    const keywords = allKeywords.slice(0, Math.ceil(allKeywords.length / 3)) // الثلث الأول
    const pages: { url: string; priority: number }[] = []

    for (const keyword of keywords) {
        for (const city of saudiCities) {
            const priority = keyword.priority === 1 ? 0.8 : keyword.priority === 2 ? 0.7 : 0.6
            pages.push({
                url: `${baseUrl}/marketing/${keyword.slug}/${city.id}`,
                priority: city.priority <= 2 ? priority : priority - 0.1,
            })
        }
    }

    return pages.map(page => ({
        url: page.url,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page.priority,
    }))
}

// =============================================
// SITEMAP 6: تسويق - كلمات ضخمة (الجزء 2)
// =============================================
export function getMegaKeywords2SitemapPages(): MetadataRoute.Sitemap {
    const allKeywords = getAllMegaKeywords()
    const start = Math.ceil(allKeywords.length / 3)
    const end = Math.ceil(allKeywords.length * 2 / 3)
    const keywords = allKeywords.slice(start, end) // الثلث الثاني
    const pages: { url: string; priority: number }[] = []

    for (const keyword of keywords) {
        for (const city of saudiCities) {
            const priority = keyword.priority === 1 ? 0.8 : keyword.priority === 2 ? 0.7 : 0.6
            pages.push({
                url: `${baseUrl}/marketing/${keyword.slug}/${city.id}`,
                priority: city.priority <= 2 ? priority : priority - 0.1,
            })
        }
    }

    return pages.map(page => ({
        url: page.url,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page.priority,
    }))
}

// =============================================
// SITEMAP 7: تسويق - كلمات ضخمة (الجزء 3)
// =============================================
export function getMegaKeywords3SitemapPages(): MetadataRoute.Sitemap {
    const allKeywords = getAllMegaKeywords()
    const start = Math.ceil(allKeywords.length * 2 / 3)
    const keywords = allKeywords.slice(start) // الثلث الأخير
    const pages: { url: string; priority: number }[] = []

    for (const keyword of keywords) {
        for (const city of saudiCities) {
            const priority = keyword.priority === 1 ? 0.8 : keyword.priority === 2 ? 0.7 : 0.6
            pages.push({
                url: `${baseUrl}/marketing/${keyword.slug}/${city.id}`,
                priority: city.priority <= 2 ? priority : priority - 0.1,
            })
        }
    }

    return pages.map(page => ({
        url: page.url,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page.priority,
    }))
}

// =============================================
// SITEMAP 8: النسخة الإنجليزية
// =============================================
export function getEnglishSitemapPages(): MetadataRoute.Sitemap {
    const allKeywords = getAllMegaKeywords()
    const pages: { url: string; priority: number }[] = []

    for (const keyword of allKeywords) {
        for (const city of saudiCities) {
            const priority = keyword.priority === 1 ? 0.7 : keyword.priority === 2 ? 0.6 : 0.5
            pages.push({
                url: `${baseUrl}/en/marketing/${keyword.slugEn}/${city.id}`,
                priority: city.priority <= 2 ? priority : priority - 0.1,
            })
        }
    }

    return pages.map(page => ({
        url: page.url,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page.priority,
    }))
}
