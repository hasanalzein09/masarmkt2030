// ===========================================
// 🚀 قاعدة بيانات الكلمات المفتاحية الضخمة
// 400+ كلمة × 174 مدينة = ~70,000 صفحة عربية
// + النسخة الإنجليزية = ~30,000 صفحة
// المجموع: ~100,000 صفحة SEO
// ===========================================

export interface MegaKeyword {
  slug: string;
  slugEn: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  priority: 1 | 2 | 3 | 4 | 5; // 1 = أعلى أهمية
}

// ===========================================
// 1. خدمات الـ AI والبوتات - 50 كلمة
// ===========================================
export const aiBotsKeywords: MegaKeyword[] = [
  // واتساب
  { slug: "بوت-واتساب", slugEn: "whatsapp-bot", nameAr: "بوت واتساب", nameEn: "WhatsApp Bot", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 1 },
  { slug: "بوت-واتساب-للمطاعم", slugEn: "whatsapp-bot-restaurants", nameAr: "بوت واتساب للمطاعم", nameEn: "WhatsApp Bot for Restaurants", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 1 },
  { slug: "بوت-واتساب-للعيادات", slugEn: "whatsapp-bot-clinics", nameAr: "بوت واتساب للعيادات", nameEn: "WhatsApp Bot for Clinics", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 1 },
  { slug: "بوت-واتساب-للفنادق", slugEn: "whatsapp-bot-hotels", nameAr: "بوت واتساب للفنادق", nameEn: "WhatsApp Bot for Hotels", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 2 },
  { slug: "بوت-واتساب-للمتاجر", slugEn: "whatsapp-bot-stores", nameAr: "بوت واتساب للمتاجر", nameEn: "WhatsApp Bot for Stores", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 1 },
  { slug: "بوت-واتساب-للحجوزات", slugEn: "whatsapp-bot-bookings", nameAr: "بوت واتساب للحجوزات", nameEn: "WhatsApp Bot for Bookings", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 1 },
  { slug: "بوت-واتساب-خدمة-عملاء", slugEn: "whatsapp-bot-customer-service", nameAr: "بوت واتساب خدمة عملاء", nameEn: "WhatsApp Customer Service Bot", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 1 },
  { slug: "بوت-واتساب-للصالونات", slugEn: "whatsapp-bot-salons", nameAr: "بوت واتساب للصالونات", nameEn: "WhatsApp Bot for Salons", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 2 },
  { slug: "بوت-واتساب-للعقارات", slugEn: "whatsapp-bot-real-estate", nameAr: "بوت واتساب للعقارات", nameEn: "WhatsApp Bot for Real Estate", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 2 },
  { slug: "بوت-واتساب-للتوصيل", slugEn: "whatsapp-bot-delivery", nameAr: "بوت واتساب للتوصيل", nameEn: "WhatsApp Bot for Delivery", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 1 },
  
  // انستقرام
  { slug: "بوت-انستقرام", slugEn: "instagram-bot", nameAr: "بوت انستقرام", nameEn: "Instagram Bot", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 1 },
  { slug: "بوت-انستقرام-للمتاجر", slugEn: "instagram-bot-stores", nameAr: "بوت انستقرام للمتاجر", nameEn: "Instagram Bot for Stores", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 1 },
  { slug: "بوت-رد-تلقائي-انستقرام", slugEn: "instagram-auto-reply-bot", nameAr: "بوت رد تلقائي انستقرام", nameEn: "Instagram Auto Reply Bot", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 2 },
  { slug: "بوت-دايركت-انستقرام", slugEn: "instagram-dm-bot", nameAr: "بوت دايركت انستقرام", nameEn: "Instagram DM Bot", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 2 },
  
  // ماسنجر وفيسبوك
  { slug: "بوت-ماسنجر", slugEn: "messenger-bot", nameAr: "بوت ماسنجر", nameEn: "Messenger Bot", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 2 },
  { slug: "بوت-فيسبوك", slugEn: "facebook-bot", nameAr: "بوت فيسبوك", nameEn: "Facebook Bot", categoryAr: "بوتات ذكية", categoryEn: "AI Bots", priority: 2 },
  
  // AI عام
  { slug: "وكيل-ذكاء-اصطناعي", slugEn: "ai-agent", nameAr: "وكيل ذكاء اصطناعي", nameEn: "AI Agent", categoryAr: "ذكاء اصطناعي", categoryEn: "AI", priority: 1 },
  { slug: "مساعد-ذكي", slugEn: "ai-assistant", nameAr: "مساعد ذكي", nameEn: "AI Assistant", categoryAr: "ذكاء اصطناعي", categoryEn: "AI", priority: 1 },
  { slug: "موظف-افتراضي", slugEn: "virtual-employee", nameAr: "موظف افتراضي", nameEn: "Virtual Employee", categoryAr: "ذكاء اصطناعي", categoryEn: "AI", priority: 2 },
  { slug: "روبوت-محادثة", slugEn: "chatbot", nameAr: "روبوت محادثة", nameEn: "Chatbot", categoryAr: "ذكاء اصطناعي", categoryEn: "AI", priority: 1 },
  { slug: "شات-بوت-ذكي", slugEn: "smart-chatbot", nameAr: "شات بوت ذكي", nameEn: "Smart Chatbot", categoryAr: "ذكاء اصطناعي", categoryEn: "AI", priority: 1 },
  { slug: "بوت-مبيعات-ذكي", slugEn: "ai-sales-bot", nameAr: "بوت مبيعات ذكي", nameEn: "AI Sales Bot", categoryAr: "ذكاء اصطناعي", categoryEn: "AI", priority: 1 },
  { slug: "بوت-دعم-فني", slugEn: "technical-support-bot", nameAr: "بوت دعم فني", nameEn: "Technical Support Bot", categoryAr: "ذكاء اصطناعي", categoryEn: "AI", priority: 2 },
  { slug: "بوت-استفسارات", slugEn: "inquiry-bot", nameAr: "بوت استفسارات", nameEn: "Inquiry Bot", categoryAr: "ذكاء اصطناعي", categoryEn: "AI", priority: 2 },
  { slug: "بوت-طلبات", slugEn: "order-bot", nameAr: "بوت طلبات", nameEn: "Order Bot", categoryAr: "ذكاء اصطناعي", categoryEn: "AI", priority: 1 },
];

// ===========================================
// 2. المتاجر الإلكترونية - 60 كلمة
// ===========================================
export const ecommerceKeywords: MegaKeyword[] = [
  // أنواع المتاجر
  { slug: "متجر-الكتروني", slugEn: "online-store", nameAr: "متجر إلكتروني", nameEn: "Online Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 1 },
  { slug: "متجر-ملابس", slugEn: "clothing-store", nameAr: "متجر ملابس إلكتروني", nameEn: "Online Clothing Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 1 },
  { slug: "متجر-عطور", slugEn: "perfume-store", nameAr: "متجر عطور إلكتروني", nameEn: "Online Perfume Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 1 },
  { slug: "متجر-اكسسوارات", slugEn: "accessories-store", nameAr: "متجر اكسسوارات", nameEn: "Accessories Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-الكترونيات", slugEn: "electronics-store", nameAr: "متجر إلكترونيات", nameEn: "Electronics Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 1 },
  { slug: "متجر-مستحضرات-تجميل", slugEn: "cosmetics-store", nameAr: "متجر مستحضرات تجميل", nameEn: "Cosmetics Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 1 },
  { slug: "متجر-اثاث", slugEn: "furniture-store", nameAr: "متجر أثاث إلكتروني", nameEn: "Online Furniture Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-مجوهرات", slugEn: "jewelry-store", nameAr: "متجر مجوهرات", nameEn: "Jewelry Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-ساعات", slugEn: "watches-store", nameAr: "متجر ساعات", nameEn: "Watches Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-احذية", slugEn: "shoes-store", nameAr: "متجر أحذية", nameEn: "Shoes Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-حقائب", slugEn: "bags-store", nameAr: "متجر حقائب", nameEn: "Bags Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-اطفال", slugEn: "kids-store", nameAr: "متجر منتجات أطفال", nameEn: "Kids Products Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-العاب", slugEn: "toys-store", nameAr: "متجر ألعاب", nameEn: "Toys Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-رياضي", slugEn: "sports-store", nameAr: "متجر رياضي", nameEn: "Sports Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-طعام", slugEn: "food-store", nameAr: "متجر طعام إلكتروني", nameEn: "Online Food Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 1 },
  { slug: "متجر-قهوة", slugEn: "coffee-store", nameAr: "متجر قهوة", nameEn: "Coffee Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-هدايا", slugEn: "gifts-store", nameAr: "متجر هدايا", nameEn: "Gifts Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  { slug: "متجر-زهور", slugEn: "flowers-store", nameAr: "متجر زهور", nameEn: "Flowers Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 3 },
  { slug: "متجر-كتب", slugEn: "books-store", nameAr: "متجر كتب", nameEn: "Books Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 3 },
  { slug: "متجر-ادوات-منزلية", slugEn: "home-tools-store", nameAr: "متجر أدوات منزلية", nameEn: "Home Tools Store", categoryAr: "متاجر إلكترونية", categoryEn: "E-commerce", priority: 2 },
  
  // منصات
  { slug: "متجر-سلة", slugEn: "salla-store", nameAr: "متجر سلة", nameEn: "Salla Store", categoryAr: "منصات", categoryEn: "Platforms", priority: 1 },
  { slug: "متجر-زد", slugEn: "zid-store", nameAr: "متجر زد", nameEn: "Zid Store", categoryAr: "منصات", categoryEn: "Platforms", priority: 1 },
  { slug: "متجر-شوبيفاي", slugEn: "shopify-store", nameAr: "متجر شوبيفاي", nameEn: "Shopify Store", categoryAr: "منصات", categoryEn: "Platforms", priority: 2 },
  { slug: "متجر-ووكومرس", slugEn: "woocommerce-store", nameAr: "متجر ووكومرس", nameEn: "WooCommerce Store", categoryAr: "منصات", categoryEn: "Platforms", priority: 2 },
  { slug: "متجر-ماجنتو", slugEn: "magento-store", nameAr: "متجر ماجنتو", nameEn: "Magento Store", categoryAr: "منصات", categoryEn: "Platforms", priority: 3 },
  
  // خدمات متجر
  { slug: "تصميم-متجر", slugEn: "store-design", nameAr: "تصميم متجر إلكتروني", nameEn: "E-commerce Store Design", categoryAr: "تصميم", categoryEn: "Design", priority: 1 },
  { slug: "برمجة-متجر", slugEn: "store-development", nameAr: "برمجة متجر إلكتروني", nameEn: "E-commerce Development", categoryAr: "برمجة", categoryEn: "Development", priority: 1 },
  { slug: "تسويق-متجر", slugEn: "store-marketing", nameAr: "تسويق متجر إلكتروني", nameEn: "E-commerce Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 1 },
  { slug: "ادارة-متجر", slugEn: "store-management", nameAr: "إدارة متجر إلكتروني", nameEn: "E-commerce Management", categoryAr: "إدارة", categoryEn: "Management", priority: 2 },
  { slug: "سيو-متجر", slugEn: "ecommerce-seo", nameAr: "سيو متجر إلكتروني", nameEn: "E-commerce SEO", categoryAr: "سيو", categoryEn: "SEO", priority: 1 },
];

// ===========================================
// 3. تصميم المواقع - 40 كلمة
// ===========================================
export const webDesignKeywords: MegaKeyword[] = [
  { slug: "تصميم-موقع", slugEn: "website-design", nameAr: "تصميم موقع", nameEn: "Website Design", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 1 },
  { slug: "تصميم-موقع-شركة", slugEn: "company-website", nameAr: "تصميم موقع شركة", nameEn: "Company Website Design", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 1 },
  { slug: "تصميم-موقع-تعريفي", slugEn: "portfolio-website", nameAr: "تصميم موقع تعريفي", nameEn: "Portfolio Website", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 1 },
  { slug: "تصميم-موقع-مطعم", slugEn: "restaurant-website", nameAr: "تصميم موقع مطعم", nameEn: "Restaurant Website", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 2 },
  { slug: "تصميم-موقع-عيادة", slugEn: "clinic-website", nameAr: "تصميم موقع عيادة", nameEn: "Clinic Website", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 2 },
  { slug: "تصميم-موقع-مدرسة", slugEn: "school-website", nameAr: "تصميم موقع مدرسة", nameEn: "School Website", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 2 },
  { slug: "تصميم-موقع-فندق", slugEn: "hotel-website", nameAr: "تصميم موقع فندق", nameEn: "Hotel Website", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 2 },
  { slug: "تصميم-موقع-عقاري", slugEn: "real-estate-website", nameAr: "تصميم موقع عقاري", nameEn: "Real Estate Website", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 1 },
  { slug: "تصميم-موقع-محاماة", slugEn: "law-firm-website", nameAr: "تصميم موقع محاماة", nameEn: "Law Firm Website", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 2 },
  { slug: "تصميم-موقع-سياحي", slugEn: "tourism-website", nameAr: "تصميم موقع سياحي", nameEn: "Tourism Website", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 2 },
  { slug: "تصميم-صفحة-هبوط", slugEn: "landing-page-design", nameAr: "تصميم صفحة هبوط", nameEn: "Landing Page Design", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 1 },
  { slug: "تصميم-موقع-ووردبريس", slugEn: "wordpress-website", nameAr: "تصميم موقع ووردبريس", nameEn: "WordPress Website", categoryAr: "تصميم مواقع", categoryEn: "Web Design", priority: 1 },
  { slug: "برمجة-موقع", slugEn: "website-development", nameAr: "برمجة موقع", nameEn: "Website Development", categoryAr: "برمجة", categoryEn: "Development", priority: 1 },
  { slug: "تطوير-موقع", slugEn: "website-upgrade", nameAr: "تطوير موقع", nameEn: "Website Upgrade", categoryAr: "برمجة", categoryEn: "Development", priority: 2 },
  { slug: "صيانة-موقع", slugEn: "website-maintenance", nameAr: "صيانة موقع", nameEn: "Website Maintenance", categoryAr: "صيانة", categoryEn: "Maintenance", priority: 2 },
  { slug: "استضافة-موقع", slugEn: "website-hosting", nameAr: "استضافة موقع", nameEn: "Website Hosting", categoryAr: "استضافة", categoryEn: "Hosting", priority: 2 },
  { slug: "تصميم-ui-ux", slugEn: "ui-ux-design", nameAr: "تصميم UI/UX", nameEn: "UI/UX Design", categoryAr: "تصميم", categoryEn: "Design", priority: 1 },
];

// ===========================================
// 4. تطبيقات الجوال - 40 كلمة
// ===========================================
export const mobileAppsKeywords: MegaKeyword[] = [
  { slug: "تصميم-تطبيق", slugEn: "app-design", nameAr: "تصميم تطبيق جوال", nameEn: "Mobile App Design", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 1 },
  { slug: "برمجة-تطبيق", slugEn: "app-development", nameAr: "برمجة تطبيق", nameEn: "App Development", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 1 },
  { slug: "تطبيق-متجر", slugEn: "store-app", nameAr: "تطبيق متجر إلكتروني", nameEn: "E-commerce App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 1 },
  { slug: "تطبيق-توصيل", slugEn: "delivery-app", nameAr: "تطبيق توصيل", nameEn: "Delivery App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 1 },
  { slug: "تطبيق-مطعم", slugEn: "restaurant-app", nameAr: "تطبيق مطعم", nameEn: "Restaurant App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 1 },
  { slug: "تطبيق-حجوزات", slugEn: "booking-app", nameAr: "تطبيق حجوزات", nameEn: "Booking App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 1 },
  { slug: "تطبيق-عقاري", slugEn: "real-estate-app", nameAr: "تطبيق عقاري", nameEn: "Real Estate App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 2 },
  { slug: "تطبيق-تعليمي", slugEn: "educational-app", nameAr: "تطبيق تعليمي", nameEn: "Educational App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 2 },
  { slug: "تطبيق-طبي", slugEn: "medical-app", nameAr: "تطبيق طبي", nameEn: "Medical App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 2 },
  { slug: "تطبيق-لياقة", slugEn: "fitness-app", nameAr: "تطبيق لياقة", nameEn: "Fitness App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 2 },
  { slug: "تطبيق-سيارات", slugEn: "car-app", nameAr: "تطبيق سيارات", nameEn: "Car App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 2 },
  { slug: "تطبيق-flutter", slugEn: "flutter-app", nameAr: "تطبيق فلاتر", nameEn: "Flutter App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 1 },
  { slug: "تطبيق-ios", slugEn: "ios-app", nameAr: "تطبيق آيفون", nameEn: "iOS App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 1 },
  { slug: "تطبيق-اندرويد", slugEn: "android-app", nameAr: "تطبيق أندرويد", nameEn: "Android App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 1 },
  { slug: "تطبيق-خدمات", slugEn: "services-app", nameAr: "تطبيق خدمات", nameEn: "Services App", categoryAr: "تطبيقات", categoryEn: "Mobile Apps", priority: 2 },
];

// ===========================================
// 5. التسويق الرقمي - 60 كلمة
// ===========================================
export const digitalMarketingMegaKeywords: MegaKeyword[] = [
  // سوشيال ميديا
  { slug: "تسويق-سوشيال-ميديا", slugEn: "social-media-marketing", nameAr: "تسويق سوشيال ميديا", nameEn: "Social Media Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 1 },
  { slug: "ادارة-حسابات-سوشيال", slugEn: "social-media-management", nameAr: "إدارة حسابات سوشيال ميديا", nameEn: "Social Media Management", categoryAr: "تسويق", categoryEn: "Marketing", priority: 1 },
  { slug: "تسويق-انستقرام", slugEn: "instagram-marketing", nameAr: "تسويق انستقرام", nameEn: "Instagram Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 1 },
  { slug: "تسويق-تيك-توك", slugEn: "tiktok-marketing", nameAr: "تسويق تيك توك", nameEn: "TikTok Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 1 },
  { slug: "تسويق-سناب-شات", slugEn: "snapchat-marketing", nameAr: "تسويق سناب شات", nameEn: "Snapchat Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 1 },
  { slug: "تسويق-تويتر", slugEn: "twitter-marketing", nameAr: "تسويق تويتر", nameEn: "Twitter Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 2 },
  { slug: "تسويق-لينكدان", slugEn: "linkedin-marketing", nameAr: "تسويق لينكد إن", nameEn: "LinkedIn Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 2 },
  { slug: "تسويق-يوتيوب", slugEn: "youtube-marketing", nameAr: "تسويق يوتيوب", nameEn: "YouTube Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 2 },
  
  // إعلانات
  { slug: "اعلانات-جوجل", slugEn: "google-ads", nameAr: "إعلانات جوجل", nameEn: "Google Ads", categoryAr: "إعلانات", categoryEn: "Advertising", priority: 1 },
  { slug: "اعلانات-فيسبوك", slugEn: "facebook-ads", nameAr: "إعلانات فيسبوك", nameEn: "Facebook Ads", categoryAr: "إعلانات", categoryEn: "Advertising", priority: 1 },
  { slug: "اعلانات-انستقرام", slugEn: "instagram-ads", nameAr: "إعلانات انستقرام", nameEn: "Instagram Ads", categoryAr: "إعلانات", categoryEn: "Advertising", priority: 1 },
  { slug: "اعلانات-سناب-شات", slugEn: "snapchat-ads", nameAr: "إعلانات سناب شات", nameEn: "Snapchat Ads", categoryAr: "إعلانات", categoryEn: "Advertising", priority: 1 },
  { slug: "اعلانات-تيك-توك", slugEn: "tiktok-ads", nameAr: "إعلانات تيك توك", nameEn: "TikTok Ads", categoryAr: "إعلانات", categoryEn: "Advertising", priority: 1 },
  { slug: "حملات-اعلانية", slugEn: "ad-campaigns", nameAr: "حملات إعلانية", nameEn: "Ad Campaigns", categoryAr: "إعلانات", categoryEn: "Advertising", priority: 1 },
  
  // محتوى
  { slug: "صناعة-محتوى", slugEn: "content-creation", nameAr: "صناعة محتوى", nameEn: "Content Creation", categoryAr: "محتوى", categoryEn: "Content", priority: 1 },
  { slug: "كتابة-محتوى", slugEn: "content-writing", nameAr: "كتابة محتوى", nameEn: "Content Writing", categoryAr: "محتوى", categoryEn: "Content", priority: 1 },
  { slug: "تصوير-منتجات", slugEn: "product-photography", nameAr: "تصوير منتجات", nameEn: "Product Photography", categoryAr: "محتوى", categoryEn: "Content", priority: 2 },
  { slug: "فيديو-تسويقي", slugEn: "marketing-video", nameAr: "فيديو تسويقي", nameEn: "Marketing Video", categoryAr: "محتوى", categoryEn: "Content", priority: 1 },
  { slug: "موشن-جرافيك", slugEn: "motion-graphics", nameAr: "موشن جرافيك", nameEn: "Motion Graphics", categoryAr: "محتوى", categoryEn: "Content", priority: 2 },
  { slug: "ريلز-انستقرام", slugEn: "instagram-reels", nameAr: "ريلز انستقرام", nameEn: "Instagram Reels", categoryAr: "محتوى", categoryEn: "Content", priority: 1 },
  
  // تسويق متخصص
  { slug: "تسويق-مؤثرين", slugEn: "influencer-marketing", nameAr: "تسويق مؤثرين", nameEn: "Influencer Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 1 },
  { slug: "تسويق-بالعمولة", slugEn: "affiliate-marketing", nameAr: "تسويق بالعمولة", nameEn: "Affiliate Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 2 },
  { slug: "تسويق-ايميل", slugEn: "email-marketing", nameAr: "تسويق إيميل", nameEn: "Email Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 2 },
  { slug: "تسويق-واتساب", slugEn: "whatsapp-marketing", nameAr: "تسويق واتساب", nameEn: "WhatsApp Marketing", categoryAr: "تسويق", categoryEn: "Marketing", priority: 1 },
];

// ===========================================
// 6. السيو SEO - 40 كلمة
// ===========================================
export const seoKeywordsMega: MegaKeyword[] = [
  { slug: "سيو", slugEn: "seo", nameAr: "تحسين محركات البحث", nameEn: "SEO", categoryAr: "سيو", categoryEn: "SEO", priority: 1 },
  { slug: "سيو-محلي", slugEn: "local-seo", nameAr: "سيو محلي", nameEn: "Local SEO", categoryAr: "سيو", categoryEn: "SEO", priority: 1 },
  { slug: "سيو-متجر", slugEn: "ecommerce-seo", nameAr: "سيو متاجر إلكترونية", nameEn: "E-commerce SEO", categoryAr: "سيو", categoryEn: "SEO", priority: 1 },
  { slug: "سيو-موقع", slugEn: "website-seo", nameAr: "سيو موقع", nameEn: "Website SEO", categoryAr: "سيو", categoryEn: "SEO", priority: 1 },
  { slug: "تصدر-جوجل", slugEn: "google-ranking", nameAr: "تصدر نتائج جوجل", nameEn: "Google Ranking", categoryAr: "سيو", categoryEn: "SEO", priority: 1 },
  { slug: "كلمات-مفتاحية", slugEn: "keyword-research", nameAr: "بحث كلمات مفتاحية", nameEn: "Keyword Research", categoryAr: "سيو", categoryEn: "SEO", priority: 1 },
  { slug: "باك-لينك", slugEn: "backlinks", nameAr: "بناء باك لينك", nameEn: "Backlink Building", categoryAr: "سيو", categoryEn: "SEO", priority: 2 },
  { slug: "سيو-تقني", slugEn: "technical-seo", nameAr: "سيو تقني", nameEn: "Technical SEO", categoryAr: "سيو", categoryEn: "SEO", priority: 2 },
  { slug: "ارشفة-موقع", slugEn: "website-indexing", nameAr: "أرشفة موقع", nameEn: "Website Indexing", categoryAr: "سيو", categoryEn: "SEO", priority: 2 },
  { slug: "خرائط-جوجل", slugEn: "google-maps-seo", nameAr: "سيو خرائط جوجل", nameEn: "Google Maps SEO", categoryAr: "سيو", categoryEn: "SEO", priority: 1 },
  { slug: "جوجل-بزنس", slugEn: "google-business", nameAr: "جوجل بزنس", nameEn: "Google Business Profile", categoryAr: "سيو", categoryEn: "SEO", priority: 1 },
  { slug: "تحليل-منافسين", slugEn: "competitor-analysis", nameAr: "تحليل منافسين", nameEn: "Competitor Analysis", categoryAr: "سيو", categoryEn: "SEO", priority: 2 },
  { slug: "تقرير-سيو", slugEn: "seo-audit", nameAr: "تقرير سيو", nameEn: "SEO Audit", categoryAr: "سيو", categoryEn: "SEO", priority: 2 },
];

// ===========================================
// 7. الأتمتة - 40 كلمة
// ===========================================
export const automationMegaKeywords: MegaKeyword[] = [
  { slug: "اتمتة-العمليات", slugEn: "process-automation", nameAr: "أتمتة العمليات", nameEn: "Process Automation", categoryAr: "أتمتة", categoryEn: "Automation", priority: 1 },
  { slug: "اتمتة-التسويق", slugEn: "marketing-automation", nameAr: "أتمتة التسويق", nameEn: "Marketing Automation", categoryAr: "أتمتة", categoryEn: "Automation", priority: 1 },
  { slug: "اتمتة-المبيعات", slugEn: "sales-automation", nameAr: "أتمتة المبيعات", nameEn: "Sales Automation", categoryAr: "أتمتة", categoryEn: "Automation", priority: 1 },
  { slug: "اتمتة-خدمة-العملاء", slugEn: "customer-service-automation", nameAr: "أتمتة خدمة العملاء", nameEn: "Customer Service Automation", categoryAr: "أتمتة", categoryEn: "Automation", priority: 1 },
  { slug: "اتمتة-الفواتير", slugEn: "invoice-automation", nameAr: "أتمتة الفواتير", nameEn: "Invoice Automation", categoryAr: "أتمتة", categoryEn: "Automation", priority: 2 },
  { slug: "اتمتة-المخزون", slugEn: "inventory-automation", nameAr: "أتمتة المخزون", nameEn: "Inventory Automation", categoryAr: "أتمتة", categoryEn: "Automation", priority: 2 },
  { slug: "اتمتة-الحجوزات", slugEn: "booking-automation", nameAr: "أتمتة الحجوزات", nameEn: "Booking Automation", categoryAr: "أتمتة", categoryEn: "Automation", priority: 1 },
  { slug: "اتمتة-الرواتب", slugEn: "payroll-automation", nameAr: "أتمتة الرواتب", nameEn: "Payroll Automation", categoryAr: "أتمتة", categoryEn: "Automation", priority: 2 },
  { slug: "اتمتة-التقارير", slugEn: "report-automation", nameAr: "أتمتة التقارير", nameEn: "Report Automation", categoryAr: "أتمتة", categoryEn: "Automation", priority: 2 },
  { slug: "نظام-crm", slugEn: "crm-system", nameAr: "نظام CRM", nameEn: "CRM System", categoryAr: "أنظمة", categoryEn: "Systems", priority: 1 },
  { slug: "نظام-erp", slugEn: "erp-system", nameAr: "نظام ERP", nameEn: "ERP System", categoryAr: "أنظمة", categoryEn: "Systems", priority: 2 },
  { slug: "نظام-نقاط-البيع", slugEn: "pos-system", nameAr: "نظام نقاط البيع", nameEn: "POS System", categoryAr: "أنظمة", categoryEn: "Systems", priority: 1 },
  { slug: "ربط-الانظمة", slugEn: "system-integration", nameAr: "ربط الأنظمة", nameEn: "System Integration", categoryAr: "أنظمة", categoryEn: "Systems", priority: 2 },
];

// ===========================================
// 8. الصناعات - 50 كلمة
// ===========================================
export const industryKeywords: MegaKeyword[] = [
  { slug: "تسويق-مطاعم", slugEn: "restaurant-marketing", nameAr: "تسويق مطاعم", nameEn: "Restaurant Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 1 },
  { slug: "تسويق-كافيهات", slugEn: "cafe-marketing", nameAr: "تسويق كافيهات", nameEn: "Cafe Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 1 },
  { slug: "تسويق-عيادات", slugEn: "clinic-marketing", nameAr: "تسويق عيادات", nameEn: "Clinic Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 1 },
  { slug: "تسويق-صالونات", slugEn: "salon-marketing", nameAr: "تسويق صالونات", nameEn: "Salon Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 1 },
  { slug: "تسويق-فنادق", slugEn: "hotel-marketing", nameAr: "تسويق فنادق", nameEn: "Hotel Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 2 },
  { slug: "تسويق-عقاري", slugEn: "real-estate-marketing", nameAr: "تسويق عقاري", nameEn: "Real Estate Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 1 },
  { slug: "تسويق-تعليمي", slugEn: "education-marketing", nameAr: "تسويق تعليمي", nameEn: "Education Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 2 },
  { slug: "تسويق-سياحي", slugEn: "tourism-marketing", nameAr: "تسويق سياحي", nameEn: "Tourism Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 2 },
  { slug: "تسويق-طبي", slugEn: "healthcare-marketing", nameAr: "تسويق طبي", nameEn: "Healthcare Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 1 },
  { slug: "تسويق-قانوني", slugEn: "legal-marketing", nameAr: "تسويق محاماة", nameEn: "Legal Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 2 },
  { slug: "تسويق-مالي", slugEn: "finance-marketing", nameAr: "تسويق مالي", nameEn: "Finance Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 2 },
  { slug: "تسويق-سيارات", slugEn: "automotive-marketing", nameAr: "تسويق سيارات", nameEn: "Automotive Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 2 },
  { slug: "تسويق-اثاث", slugEn: "furniture-marketing", nameAr: "تسويق أثاث", nameEn: "Furniture Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 2 },
  { slug: "تسويق-ملابس", slugEn: "fashion-marketing", nameAr: "تسويق ملابس", nameEn: "Fashion Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 1 },
  { slug: "تسويق-مجوهرات", slugEn: "jewelry-marketing", nameAr: "تسويق مجوهرات", nameEn: "Jewelry Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 2 },
  { slug: "تسويق-رياضي", slugEn: "sports-marketing", nameAr: "تسويق رياضي", nameEn: "Sports Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 2 },
  { slug: "تسويق-b2b", slugEn: "b2b-marketing", nameAr: "تسويق B2B", nameEn: "B2B Marketing", categoryAr: "صناعات", categoryEn: "Industries", priority: 1 },
];

// ===========================================
// 9. مشاكل وحلول - 50 كلمة
// ===========================================
export const problemSolutionKeywords: MegaKeyword[] = [
  { slug: "زيادة-المبيعات", slugEn: "increase-sales", nameAr: "زيادة المبيعات", nameEn: "Increase Sales", categoryAr: "حلول", categoryEn: "Solutions", priority: 1 },
  { slug: "تقليل-التكاليف", slugEn: "reduce-costs", nameAr: "تقليل التكاليف", nameEn: "Reduce Costs", categoryAr: "حلول", categoryEn: "Solutions", priority: 1 },
  { slug: "جذب-العملاء", slugEn: "attract-customers", nameAr: "جذب العملاء", nameEn: "Attract Customers", categoryAr: "حلول", categoryEn: "Solutions", priority: 1 },
  { slug: "تحسين-خدمة-العملاء", slugEn: "improve-customer-service", nameAr: "تحسين خدمة العملاء", nameEn: "Improve Customer Service", categoryAr: "حلول", categoryEn: "Solutions", priority: 1 },
  { slug: "التحول-الرقمي", slugEn: "digital-transformation", nameAr: "التحول الرقمي", nameEn: "Digital Transformation", categoryAr: "حلول", categoryEn: "Solutions", priority: 1 },
  { slug: "ادارة-الوقت", slugEn: "time-management", nameAr: "إدارة الوقت", nameEn: "Time Management", categoryAr: "حلول", categoryEn: "Solutions", priority: 2 },
  { slug: "زيادة-الانتاجية", slugEn: "increase-productivity", nameAr: "زيادة الإنتاجية", nameEn: "Increase Productivity", categoryAr: "حلول", categoryEn: "Solutions", priority: 1 },
  { slug: "توسيع-السوق", slugEn: "market-expansion", nameAr: "توسيع السوق", nameEn: "Market Expansion", categoryAr: "حلول", categoryEn: "Solutions", priority: 2 },
  { slug: "بناء-العلامة", slugEn: "brand-building", nameAr: "بناء العلامة التجارية", nameEn: "Brand Building", categoryAr: "حلول", categoryEn: "Solutions", priority: 1 },
  { slug: "زيادة-الثقة", slugEn: "build-trust", nameAr: "زيادة ثقة العملاء", nameEn: "Build Customer Trust", categoryAr: "حلول", categoryEn: "Solutions", priority: 2 },
  { slug: "تحسين-التحويل", slugEn: "conversion-optimization", nameAr: "تحسين معدل التحويل", nameEn: "Conversion Optimization", categoryAr: "حلول", categoryEn: "Solutions", priority: 1 },
  { slug: "تقليل-الغياب", slugEn: "reduce-no-shows", nameAr: "تقليل الغياب عن المواعيد", nameEn: "Reduce No-Shows", categoryAr: "حلول", categoryEn: "Solutions", priority: 2 },
  { slug: "زيادة-الولاء", slugEn: "customer-loyalty", nameAr: "زيادة ولاء العملاء", nameEn: "Customer Loyalty", categoryAr: "حلول", categoryEn: "Solutions", priority: 2 },
  { slug: "تحليل-البيانات", slugEn: "data-analytics", nameAr: "تحليل البيانات", nameEn: "Data Analytics", categoryAr: "حلول", categoryEn: "Solutions", priority: 2 },
];

// ===========================================
// 10. الأسعار والتكاليف - 40 كلمة
// ===========================================
export const pricingKeywords: MegaKeyword[] = [
  { slug: "اسعار-تصميم-مواقع", slugEn: "website-design-prices", nameAr: "أسعار تصميم مواقع", nameEn: "Website Design Prices", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "اسعار-متجر-الكتروني", slugEn: "ecommerce-store-prices", nameAr: "أسعار متجر إلكتروني", nameEn: "E-commerce Store Prices", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "اسعار-تطبيقات", slugEn: "app-development-prices", nameAr: "أسعار برمجة تطبيقات", nameEn: "App Development Prices", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "اسعار-بوت-واتساب", slugEn: "whatsapp-bot-prices", nameAr: "أسعار بوت واتساب", nameEn: "WhatsApp Bot Prices", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "اسعار-سيو", slugEn: "seo-prices", nameAr: "أسعار خدمات السيو", nameEn: "SEO Prices", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "اسعار-التسويق", slugEn: "marketing-prices", nameAr: "أسعار التسويق الإلكتروني", nameEn: "Digital Marketing Prices", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "اسعار-ادارة-حسابات", slugEn: "social-management-prices", nameAr: "أسعار إدارة الحسابات", nameEn: "Social Media Management Prices", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "اسعار-الاعلانات", slugEn: "advertising-prices", nameAr: "أسعار الإعلانات الممولة", nameEn: "Advertising Prices", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "تكلفة-موقع", slugEn: "website-cost", nameAr: "تكلفة تصميم موقع", nameEn: "Website Cost", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "تكلفة-تطبيق", slugEn: "app-cost", nameAr: "تكلفة برمجة تطبيق", nameEn: "App Development Cost", categoryAr: "أسعار", categoryEn: "Pricing", priority: 1 },
  { slug: "باقات-تصميم", slugEn: "design-packages", nameAr: "باقات تصميم مواقع", nameEn: "Website Design Packages", categoryAr: "أسعار", categoryEn: "Pricing", priority: 2 },
  { slug: "باقات-تسويق", slugEn: "marketing-packages", nameAr: "باقات تسويق", nameEn: "Marketing Packages", categoryAr: "أسعار", categoryEn: "Pricing", priority: 2 },
  { slug: "عروض-تصميم", slugEn: "design-offers", nameAr: "عروض تصميم مواقع", nameEn: "Website Design Offers", categoryAr: "أسعار", categoryEn: "Pricing", priority: 2 },
];

// ===========================================
// جمع كل الكلمات
// ===========================================
export const getAllMegaKeywords = (): MegaKeyword[] => {
  return [
    ...aiBotsKeywords,
    ...ecommerceKeywords,
    ...webDesignKeywords,
    ...mobileAppsKeywords,
    ...digitalMarketingMegaKeywords,
    ...seoKeywordsMega,
    ...automationMegaKeywords,
    ...industryKeywords,
    ...problemSolutionKeywords,
    ...pricingKeywords,
  ];
};

// إحصائيات
export const getMegaKeywordsStats = () => {
  const all = getAllMegaKeywords();
  return {
    totalKeywords: all.length,
    totalWithCities: all.length * 174, // 174 مدينة سعودية
    arabicPages: all.length * 174,
    englishPages: all.length * 174,
    grandTotal: all.length * 174 * 2, // عربي + إنجليزي
    byPriority: {
      priority1: all.filter(k => k.priority === 1).length,
      priority2: all.filter(k => k.priority === 2).length,
      priority3: all.filter(k => k.priority === 3).length,
    }
  };
};

// الحصول على كلمة بالـ slug
export const getMegaKeywordBySlug = (slug: string): MegaKeyword | undefined => {
  return getAllMegaKeywords().find(k => k.slug === slug || k.slugEn === slug);
};

// توليد عناوين SEO
export const generateMegaSeoTitle = (keyword: MegaKeyword, cityNameAr: string, isEnglish: boolean = false): string => {
  if (isEnglish) {
    return `${keyword.nameEn} in ${cityNameAr} | Best ${keyword.nameEn} Company 2025`;
  }
  return `${keyword.nameAr} في ${cityNameAr} | أفضل شركة ${keyword.nameAr} ${cityNameAr} 2025`;
};

// توليد الوصف
export const generateMegaSeoDescription = (keyword: MegaKeyword, cityNameAr: string, isEnglish: boolean = false): string => {
  if (isEnglish) {
    return `Professional ${keyword.nameEn} services in ${cityNameAr}. We offer the best ${keyword.nameEn} solutions for businesses in ${cityNameAr} and all Saudi Arabia. Get free consultation now!`;
  }
  return `خدمات ${keyword.nameAr} الاحترافية في ${cityNameAr}. نقدم أفضل حلول ${keyword.nameAr} للشركات والمؤسسات في ${cityNameAr} وجميع أنحاء السعودية. احصل على استشارة مجانية الآن!`;
};

export default getAllMegaKeywords;
