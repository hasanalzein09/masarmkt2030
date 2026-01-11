// ===========================================
// روابط SEO مخفية للفهرسة الداخلية
// هذا المكون يضيف آلاف الروابط الداخلية بشكل مخفي
// لتحسين اكتشاف الصفحات من قبل محركات البحث
// ===========================================

import { saudiCities } from '@/data/saudi-cities-full';
import { getAllMegaKeywords } from '@/data/mega-keywords';

interface HiddenSeoLinksProps {
    currentKeyword?: string;
    currentCity?: string;
    maxLinks?: number;
}

// الروابط المخفية - تظهر لمحركات البحث فقط
export function HiddenSeoLinks({
    currentKeyword,
    currentCity,
    maxLinks = 50
}: HiddenSeoLinksProps) {
    const keywords = getAllMegaKeywords();
    const majorCities = saudiCities.filter(c => c.priority <= 2).slice(0, 10);

    // توليد روابط عشوائية مختلفة لكل صفحة
    const getRandomLinks = () => {
        const links: { href: string; text: string }[] = [];

        // روابط كلمات مفتاحية × مدن رئيسية
        for (let i = 0; i < Math.min(maxLinks / 2, keywords.length); i++) {
            const keyword = keywords[Math.floor(Math.random() * keywords.length)];
            const city = majorCities[Math.floor(Math.random() * majorCities.length)];

            if (keyword.slug !== currentKeyword || city.id !== currentCity) {
                links.push({
                    href: `/marketing/${keyword.slug}/${city.id}`,
                    text: `${keyword.nameAr} في ${city.nameAr}`
                });
            }
        }

        // روابط بالإنجليزية
        for (let i = 0; i < maxLinks / 4; i++) {
            const keyword = keywords[Math.floor(Math.random() * keywords.length)];
            const city = majorCities[Math.floor(Math.random() * majorCities.length)];

            links.push({
                href: `/en/marketing/${keyword.slugEn}/${city.id}`,
                text: `${keyword.nameEn} in ${city.nameEn}`
            });
        }

        return links.slice(0, maxLinks);
    };

    const hiddenLinks = getRandomLinks();

    return (
        <>
            {/* روابط مخفية بصرياً لكن مرئية لمحركات البحث */}
            <div
                className="opacity-0 h-0 overflow-hidden absolute -z-50 pointer-events-none"
                aria-hidden="true"
                role="presentation"
            >
                <nav aria-label="روابط ذات صلة">
                    <h2 className="sr-only">خدماتنا في جميع المدن السعودية</h2>
                    <ul>
                        {hiddenLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} tabIndex={-1}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

// روابط الفوتر المخفية - شبكة ضخمة من الروابط
export function HiddenFooterLinks() {
    const keywords = getAllMegaKeywords().slice(0, 100); // أهم 100 كلمة
    const topCities = saudiCities.filter(c => c.priority <= 2);

    return (
        <div
            className="opacity-0 h-0 overflow-hidden absolute -z-50"
            aria-hidden="true"
        >
            <div className="container mx-auto">
                <h3 className="sr-only">جميع خدماتنا</h3>

                {/* شبكة الروابط */}
                <div className="grid grid-cols-10 gap-1">
                    {keywords.map(keyword => (
                        <div key={keyword.slug}>
                            <h4 className="sr-only">{keyword.nameAr}</h4>
                            <ul>
                                {topCities.map(city => (
                                    <li key={`${keyword.slug}-${city.id}`}>
                                        <a
                                            href={`/marketing/${keyword.slug}/${city.id}`}
                                            tabIndex={-1}
                                        >
                                            {keyword.nameAr} {city.nameAr}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* روابط الخدمات */}
                <div>
                    <h4 className="sr-only">الخدمات</h4>
                    <ul>
                        {['whatsapp-bot', 'instagram-bot', 'website-design', 'ecommerce-store', 'seo', 'mobile-app'].map(service => (
                            topCities.map(city => (
                                <li key={`service-${service}-${city.id}`}>
                                    <a href={`/services/${service}/${city.id}`} tabIndex={-1}>
                                        {service} {city.nameAr}
                                    </a>
                                </li>
                            ))
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

// المزيد من الروابط للصفحة الحالية
export function RelatedHiddenLinks({
    categoryAr,
    currentCity
}: {
    categoryAr: string;
    currentCity: string;
}) {
    const keywords = getAllMegaKeywords().filter(k => k.categoryAr === categoryAr);
    const citiesInRegion = saudiCities.filter(c => c.id !== currentCity).slice(0, 20);

    return (
        <div
            className="opacity-0 h-0 overflow-hidden absolute -z-50"
            aria-hidden="true"
        >
            <nav>
                <h2 className="sr-only">خدمات {categoryAr} في مدن أخرى</h2>
                <ul>
                    {keywords.flatMap(keyword =>
                        citiesInRegion.map(city => (
                            <li key={`${keyword.slug}-${city.id}`}>
                                <a href={`/marketing/${keyword.slug}/${city.id}`} tabIndex={-1}>
                                    {keyword.nameAr} في {city.nameAr}
                                </a>
                            </li>
                        ))
                    )}
                </ul>
            </nav>
        </div>
    );
}

// Schema.org للروابط
export function generateInternalLinksSchema() {
    const keywords = getAllMegaKeywords().slice(0, 50);
    const topCities = saudiCities.filter(c => c.priority <= 2).slice(0, 10);

    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'خدمات مسار للتسويق',
        numberOfItems: keywords.length * topCities.length,
        itemListElement: keywords.flatMap((keyword, ki) =>
            topCities.map((city, ci) => ({
                '@type': 'ListItem',
                position: ki * topCities.length + ci + 1,
                url: `https://www.masarmkt2030.online/marketing/${keyword.slug}/${city.id}`,
                name: `${keyword.nameAr} في ${city.nameAr}`
            }))
        ).slice(0, 100) // أول 100 فقط للـ Schema
    };
}

export default HiddenSeoLinks;
