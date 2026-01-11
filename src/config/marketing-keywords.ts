// كلمات مفتاحية متقدمة للتسويق الرقمي والأتمتة في السعودية
// هذا الملف يولّد آلاف الصفحات المستهدفة للـ SEO

export interface MarketingKeyword {
    id: string;
    slug: string;
    categoryAr: string;
    categoryEn: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    keywords: string[];
    longTailKeywords: string[];
    questions: string[];
    relatedKeywords: string[];
}

// =============================================
// 1. كلمات التسويق الرقمي - 30 كلمة
// =============================================
export const digitalMarketingKeywords: MarketingKeyword[] = [
    {
        id: "social-media-marketing",
        slug: "social-media-marketing",
        categoryAr: "التسويق الرقمي",
        categoryEn: "Digital Marketing",
        nameAr: "التسويق عبر السوشيال ميديا",
        nameEn: "Social Media Marketing",
        descriptionAr: "استراتيجيات التسويق عبر منصات التواصل الاجتماعي لزيادة المبيعات والوعي بالعلامة التجارية في السوق السعودي",
        keywords: ["تسويق سوشيال ميديا", "إعلانات انستقرام", "إعلانات سناب شات", "تسويق تيك توك"],
        longTailKeywords: ["أفضل شركة تسويق سوشيال ميديا", "تكلفة التسويق عبر السوشيال ميديا", "استراتيجية التسويق على انستقرام"],
        questions: ["كم تكلفة التسويق عبر السوشيال ميديا؟", "أي منصة أفضل للتسويق في السعودية؟"],
        relatedKeywords: ["content-marketing", "influencer-marketing"]
    },
    {
        id: "influencer-marketing",
        slug: "influencer-marketing",
        categoryAr: "التسويق الرقمي",
        categoryEn: "Digital Marketing",
        nameAr: "التسويق عبر المؤثرين",
        nameEn: "Influencer Marketing",
        descriptionAr: "التعاون مع المؤثرين السعوديين للترويج لمنتجاتك وخدماتك والوصول لجمهور واسع",
        keywords: ["تسويق مؤثرين", "إعلانات مشاهير", "حملات المؤثرين", "influencer marketing"],
        longTailKeywords: ["أسعار إعلانات المؤثرين في السعودية", "كيف أتعاون مع مؤثر", "أفضل المؤثرين في السعودية"],
        questions: ["كم سعر إعلان المؤثر؟", "كيف أختار المؤثر المناسب؟"],
        relatedKeywords: ["social-media-marketing", "brand-awareness"]
    },
    {
        id: "email-marketing",
        slug: "email-marketing",
        categoryAr: "التسويق الرقمي",
        categoryEn: "Digital Marketing",
        nameAr: "التسويق عبر البريد الإلكتروني",
        nameEn: "Email Marketing",
        descriptionAr: "حملات البريد الإلكتروني الاحترافية لزيادة المبيعات وبناء العلاقات مع العملاء",
        keywords: ["تسويق ايميل", "حملات بريد إلكتروني", "email marketing", "نشرة بريدية"],
        longTailKeywords: ["أفضل أدوات التسويق بالبريد الإلكتروني", "كيف أبني قائمة بريدية", "تصميم نشرة بريدية احترافية"],
        questions: ["هل التسويق بالبريد الإلكتروني فعال؟", "كم معدل فتح الإيميلات الجيد؟"],
        relatedKeywords: ["marketing-automation", "crm"]
    },
    {
        id: "google-ads",
        slug: "google-ads",
        categoryAr: "الإعلانات المدفوعة",
        categoryEn: "Paid Advertising",
        nameAr: "إعلانات جوجل",
        nameEn: "Google Ads",
        descriptionAr: "إدارة حملات إعلانات جوجل المدفوعة للحصول على عملاء فورياً من محركات البحث",
        keywords: ["إعلانات جوجل", "Google Ads", "إعلانات البحث", "PPC"],
        longTailKeywords: ["أفضل شركة إعلانات جوجل", "تكلفة النقرة في السعودية", "إدارة حملات جوجل أدز"],
        questions: ["كم تكلفة إعلانات جوجل؟", "كيف أبدأ حملة جوجل أدز؟"],
        relatedKeywords: ["seo", "sem"]
    },
    {
        id: "facebook-ads",
        slug: "facebook-ads",
        categoryAr: "الإعلانات المدفوعة",
        categoryEn: "Paid Advertising",
        nameAr: "إعلانات فيسبوك",
        nameEn: "Facebook Ads",
        descriptionAr: "حملات إعلانية على فيسبوك وانستقرام للوصول لجمهورك المستهدف في السعودية",
        keywords: ["إعلانات فيسبوك", "Facebook Ads", "إعلانات انستقرام", "Meta Ads"],
        longTailKeywords: ["أفضل استراتيجية إعلانات فيسبوك", "تكلفة إعلانات فيسبوك في السعودية", "استهداف الجمهور السعودي"],
        questions: ["كم ميزانية إعلانات فيسبوك؟", "أيهما أفضل: فيسبوك أم جوجل؟"],
        relatedKeywords: ["social-media-marketing", "instagram-ads"]
    },
    {
        id: "snapchat-ads",
        slug: "snapchat-ads",
        categoryAr: "الإعلانات المدفوعة",
        categoryEn: "Paid Advertising",
        nameAr: "إعلانات سناب شات",
        nameEn: "Snapchat Ads",
        descriptionAr: "إعلانات سناب شات للوصول للشباب السعودي - المنصة الأولى في السعودية",
        keywords: ["إعلانات سناب", "Snapchat Ads", "إعلانات سناب شات", "سناب بزنس"],
        longTailKeywords: ["تكلفة إعلانات سناب شات", "أفضل أنواع إعلانات سناب", "استهداف الجمهور في سناب شات"],
        questions: ["كم سعر إعلان سناب شات؟", "هل سناب شات فعال للتسويق؟"],
        relatedKeywords: ["social-media-marketing", "tiktok-ads"]
    },
    {
        id: "tiktok-ads",
        slug: "tiktok-ads",
        categoryAr: "الإعلانات المدفوعة",
        categoryEn: "Paid Advertising",
        nameAr: "إعلانات تيك توك",
        nameEn: "TikTok Ads",
        descriptionAr: "إعلانات تيك توك للوصول للجيل الجديد وانتشار واسع في السعودية",
        keywords: ["إعلانات تيك توك", "TikTok Ads", "تسويق تيك توك", "فيديوهات قصيرة"],
        longTailKeywords: ["كيف أعمل إعلان تيك توك", "تكلفة إعلانات تيك توك", "أفضل محتوى تيك توك للتسويق"],
        questions: ["هل تيك توك مناسب لعملي؟", "كم تكلفة إعلانات تيك توك؟"],
        relatedKeywords: ["social-media-marketing", "video-marketing"]
    },
    {
        id: "video-marketing",
        slug: "video-marketing",
        categoryAr: "التسويق الرقمي",
        categoryEn: "Digital Marketing",
        nameAr: "التسويق بالفيديو",
        nameEn: "Video Marketing",
        descriptionAr: "إنتاج فيديوهات تسويقية احترافية لزيادة التفاعل والمبيعات",
        keywords: ["تسويق فيديو", "video marketing", "إنتاج فيديو", "موشن جرافيك"],
        longTailKeywords: ["تكلفة إنتاج فيديو تسويقي", "أفضل شركة إنتاج فيديو", "موشن جرافيك للشركات"],
        questions: ["كم تكلفة إنتاج فيديو؟", "ما أفضل طول للفيديو التسويقي؟"],
        relatedKeywords: ["content-marketing", "tiktok-ads"]
    },
    {
        id: "brand-strategy",
        slug: "brand-strategy",
        categoryAr: "العلامة التجارية",
        categoryEn: "Branding",
        nameAr: "استراتيجية العلامة التجارية",
        nameEn: "Brand Strategy",
        descriptionAr: "بناء هوية وعلامة تجارية قوية تميزك عن المنافسين في السوق السعودي",
        keywords: ["بناء علامة تجارية", "هوية بصرية", "brand strategy", "تصميم لوجو"],
        longTailKeywords: ["أفضل شركة تصميم هوية بصرية", "كيف أبني علامة تجارية قوية", "تكلفة تصميم الهوية البصرية"],
        questions: ["كم تكلفة بناء علامة تجارية؟", "ما عناصر الهوية البصرية؟"],
        relatedKeywords: ["logo-design", "content-marketing"]
    },
    {
        id: "lead-generation",
        slug: "lead-generation",
        categoryAr: "التسويق الرقمي",
        categoryEn: "Digital Marketing",
        nameAr: "جمع العملاء المحتملين",
        nameEn: "Lead Generation",
        descriptionAr: "استراتيجيات جمع بيانات العملاء المحتملين وتحويلهم إلى عملاء فعليين",
        keywords: ["جمع عملاء", "lead generation", "عملاء محتملين", "leads"],
        longTailKeywords: ["أفضل طرق جمع العملاء المحتملين", "استراتيجية توليد العملاء", "قمع المبيعات"],
        questions: ["كيف أحصل على عملاء جدد؟", "ما أفضل طريقة لجمع العملاء؟"],
        relatedKeywords: ["crm", "sales-funnel"]
    },
    {
        id: "conversion-optimization",
        slug: "conversion-optimization",
        categoryAr: "التسويق الرقمي",
        categoryEn: "Digital Marketing",
        nameAr: "تحسين معدل التحويل",
        nameEn: "Conversion Rate Optimization",
        descriptionAr: "تحسين موقعك ومتجرك لزيادة نسبة تحويل الزوار إلى عملاء",
        keywords: ["CRO", "تحسين التحويل", "زيادة المبيعات", "تحسين الموقع"],
        longTailKeywords: ["كيف أزيد معدل التحويل", "أفضل ممارسات CRO", "تحليل سلوك المستخدمين"],
        questions: ["ما معدل التحويل الجيد؟", "كيف أحسّن نسبة التحويل؟"],
        relatedKeywords: ["ux-design", "ab-testing"]
    },
    {
        id: "performance-marketing",
        slug: "performance-marketing",
        categoryAr: "الإعلانات المدفوعة",
        categoryEn: "Paid Advertising",
        nameAr: "التسويق بالأداء",
        nameEn: "Performance Marketing",
        descriptionAr: "تسويق قائم على النتائج - ادفع فقط مقابل النتائج الفعلية",
        keywords: ["تسويق بالأداء", "performance marketing", "ROI", "ROAS"],
        longTailKeywords: ["أفضل وكالة تسويق بالأداء", "كيف أحسب ROI التسويق", "استراتيجية التسويق بالأداء"],
        questions: ["ما هو التسويق بالأداء؟", "كيف أقيس نجاح الحملات؟"],
        relatedKeywords: ["google-ads", "facebook-ads"]
    },
    {
        id: "affiliate-marketing",
        slug: "affiliate-marketing",
        categoryAr: "التسويق الرقمي",
        categoryEn: "Digital Marketing",
        nameAr: "التسويق بالعمولة",
        nameEn: "Affiliate Marketing",
        descriptionAr: "برامج التسويق بالعمولة لزيادة المبيعات من خلال شبكة من المسوقين",
        keywords: ["تسويق بالعمولة", "affiliate marketing", "برنامج عمولة", "مسوقين"],
        longTailKeywords: ["كيف أبدأ التسويق بالعمولة", "أفضل برامج التسويق بالعمولة", "نسبة عمولة التسويق"],
        questions: ["كم عمولة التسويق؟", "هل التسويق بالعمولة مربح؟"],
        relatedKeywords: ["ecommerce", "lead-generation"]
    },
    {
        id: "local-seo",
        slug: "local-seo",
        categoryAr: "تحسين محركات البحث",
        categoryEn: "SEO",
        nameAr: "السيو المحلي",
        nameEn: "Local SEO",
        descriptionAr: "تحسين ظهورك في نتائج البحث المحلية وخرائط جوجل للعملاء القريبين",
        keywords: ["سيو محلي", "local SEO", "خرائط جوجل", "Google Business"],
        longTailKeywords: ["تحسين ظهور على خرائط جوجل", "SEO محلي للشركات", "إضافة نشاط تجاري في جوجل"],
        questions: ["كيف أظهر في خرائط جوجل؟", "ما أهمية السيو المحلي؟"],
        relatedKeywords: ["seo", "google-business"]
    },
    {
        id: "ecommerce-marketing",
        slug: "ecommerce-marketing",
        categoryAr: "التجارة الإلكترونية",
        categoryEn: "E-commerce",
        nameAr: "تسويق المتاجر الإلكترونية",
        nameEn: "E-commerce Marketing",
        descriptionAr: "استراتيجيات تسويقية متكاملة لزيادة مبيعات متجرك الإلكتروني",
        keywords: ["تسويق متجر", "تسويق سلة", "تسويق زد", "ecommerce marketing"],
        longTailKeywords: ["أفضل طرق تسويق المتجر الإلكتروني", "زيادة مبيعات المتجر", "تسويق متجر سلة"],
        questions: ["كيف أسوق لمتجري الإلكتروني؟", "كم ميزانية تسويق المتجر؟"],
        relatedKeywords: ["social-media-marketing", "google-ads"]
    }
];

// =============================================
// 2. كلمات الأتمتة والـ AI - 20 كلمة
// =============================================
export const automationKeywords: MarketingKeyword[] = [
    {
        id: "marketing-automation",
        slug: "marketing-automation",
        categoryAr: "الأتمتة",
        categoryEn: "Automation",
        nameAr: "أتمتة التسويق",
        nameEn: "Marketing Automation",
        descriptionAr: "أنظمة أتمتة التسويق لتوفير الوقت وزيادة الكفاءة والمبيعات",
        keywords: ["أتمتة تسويق", "marketing automation", "حملات آلية", "Zapier"],
        longTailKeywords: ["أفضل أدوات أتمتة التسويق", "كيف أؤتمت التسويق", "أتمتة التسويق عبر البريد"],
        questions: ["ما هي أتمتة التسويق؟", "كم توفر الأتمتة من الوقت؟"],
        relatedKeywords: ["email-marketing", "crm"]
    },
    {
        id: "sales-automation",
        slug: "sales-automation",
        categoryAr: "الأتمتة",
        categoryEn: "Automation",
        nameAr: "أتمتة المبيعات",
        nameEn: "Sales Automation",
        descriptionAr: "أتمت عملية المبيعات من البداية للنهاية وضاعف أرباحك",
        keywords: ["أتمتة مبيعات", "sales automation", "CRM", "متابعة آلية"],
        longTailKeywords: ["أفضل نظام أتمتة مبيعات", "كيف أؤتمت عملية البيع", "متابعة العملاء الآلية"],
        questions: ["كيف أؤتمت المبيعات؟", "ما فائدة أتمتة المبيعات؟"],
        relatedKeywords: ["crm", "lead-generation"]
    },
    {
        id: "customer-service-automation",
        slug: "customer-service-automation",
        categoryAr: "الأتمتة",
        categoryEn: "Automation",
        nameAr: "أتمتة خدمة العملاء",
        nameEn: "Customer Service Automation",
        descriptionAr: "أتمت خدمة العملاء بالذكاء الاصطناعي للرد الفوري على مدار الساعة",
        keywords: ["أتمتة خدمة عملاء", "chatbot", "رد آلي", "support automation"],
        longTailKeywords: ["بوت خدمة عملاء ذكي", "أتمتة الرد على العملاء", "نظام تذاكر آلي"],
        questions: ["كيف أؤتمت خدمة العملاء؟", "هل البوت يغني عن الموظفين؟"],
        relatedKeywords: ["whatsapp-bot", "ai-agents"]
    },
    {
        id: "invoice-automation",
        slug: "invoice-automation",
        categoryAr: "الأتمتة",
        categoryEn: "Automation",
        nameAr: "أتمتة الفواتير",
        nameEn: "Invoice Automation",
        descriptionAr: "نظام فوترة آلي يصدر الفواتير ويتابع المدفوعات تلقائياً",
        keywords: ["أتمتة فواتير", "نظام فوترة", "فواتير إلكترونية", "invoice automation"],
        longTailKeywords: ["أفضل برنامج فواتير آلي", "نظام فوترة سعودي", "أتمتة إصدار الفواتير"],
        questions: ["كيف أؤتمت الفوترة؟", "ما أفضل برنامج فواتير؟"],
        relatedKeywords: ["accounting-automation", "pos-system"]
    },
    {
        id: "inventory-automation",
        slug: "inventory-automation",
        categoryAr: "الأتمتة",
        categoryEn: "Automation",
        nameAr: "أتمتة المخزون",
        nameEn: "Inventory Automation",
        descriptionAr: "نظام إدارة مخزون ذكي يتابع المنتجات ويطلب التعويض تلقائياً",
        keywords: ["أتمتة مخزون", "نظام مخزون", "إدارة المخزون", "inventory management"],
        longTailKeywords: ["أفضل برنامج إدارة مخزون", "أتمتة تتبع المخزون", "نظام جرد آلي"],
        questions: ["كيف أؤتمت إدارة المخزون؟", "ما فائدة نظام المخزون الآلي؟"],
        relatedKeywords: ["pos-system", "ecommerce"]
    },
    {
        id: "appointment-automation",
        slug: "appointment-automation",
        categoryAr: "الأتمتة",
        categoryEn: "Automation",
        nameAr: "أتمتة الحجوزات",
        nameEn: "Appointment Automation",
        descriptionAr: "نظام حجز مواعيد آلي مع تذكيرات وتأكيدات تلقائية",
        keywords: ["أتمتة حجوزات", "نظام حجز", "حجز مواعيد آلي", "booking system"],
        longTailKeywords: ["أفضل نظام حجز مواعيد", "بوت حجز مواعيد", "أتمتة تذكير المواعيد"],
        questions: ["كيف أؤتمت الحجوزات؟", "ما أفضل نظام حجز مواعيد؟"],
        relatedKeywords: ["whatsapp-bot", "customer-service-automation"]
    },
    {
        id: "workflow-automation",
        slug: "workflow-automation",
        categoryAr: "الأتمتة",
        categoryEn: "Automation",
        nameAr: "أتمتة سير العمل",
        nameEn: "Workflow Automation",
        descriptionAr: "أتمتة العمليات والمهام المتكررة لزيادة الإنتاجية",
        keywords: ["أتمتة العمل", "workflow automation", "Zapier", "Make"],
        longTailKeywords: ["أدوات أتمتة سير العمل", "كيف أؤتمت المهام المتكررة", "ربط الأنظمة ببعضها"],
        questions: ["ما هي أتمتة سير العمل؟", "كيف أستخدم Zapier؟"],
        relatedKeywords: ["marketing-automation", "integration"]
    },
    {
        id: "reporting-automation",
        slug: "reporting-automation",
        categoryAr: "الأتمتة",
        categoryEn: "Automation",
        nameAr: "أتمتة التقارير",
        nameEn: "Report Automation",
        descriptionAr: "تقارير آلية يومية وأسبوعية وشهرية بدون مجهود يدوي",
        keywords: ["تقارير آلية", "report automation", "dashboard", "لوحة تحكم"],
        longTailKeywords: ["أتمتة تقارير المبيعات", "لوحة تحكم آلية", "تقارير تسويق آلية"],
        questions: ["كيف أؤتمت التقارير؟", "ما أفضل أداة تقارير آلية؟"],
        relatedKeywords: ["analytics", "dashboard"]
    },
    {
        id: "social-media-automation",
        slug: "social-media-automation",
        categoryAr: "الأتمتة",
        categoryEn: "Automation",
        nameAr: "أتمتة السوشيال ميديا",
        nameEn: "Social Media Automation",
        descriptionAr: "جدولة ونشر المحتوى تلقائياً على جميع منصات التواصل",
        keywords: ["جدولة منشورات", "أتمتة سوشيال", "Hootsuite", "Buffer"],
        longTailKeywords: ["أفضل أدوات جدولة المحتوى", "أتمتة النشر على انستقرام", "جدولة محتوى تويتر"],
        questions: ["كيف أجدول المحتوى؟", "ما أفضل أداة جدولة؟"],
        relatedKeywords: ["social-media-management", "content-marketing"]
    },
    {
        id: "crm-system",
        slug: "crm",
        categoryAr: "إدارة العملاء",
        categoryEn: "CRM",
        nameAr: "نظام إدارة علاقات العملاء",
        nameEn: "CRM System",
        descriptionAr: "نظام CRM لإدارة العملاء ومتابعة الصفقات وزيادة المبيعات",
        keywords: ["CRM", "إدارة عملاء", "نظام عملاء", "Salesforce"],
        longTailKeywords: ["أفضل نظام CRM عربي", "CRM للشركات الصغيرة", "نظام متابعة العملاء"],
        questions: ["ما هو CRM؟", "كم سعر نظام CRM؟"],
        relatedKeywords: ["sales-automation", "lead-generation"]
    },
    {
        id: "ai-assistant",
        slug: "ai-assistant",
        categoryAr: "الذكاء الاصطناعي",
        categoryEn: "AI",
        nameAr: "مساعد ذكاء اصطناعي",
        nameEn: "AI Assistant",
        descriptionAr: "مساعد AI ذكي يساعدك في المهام اليومية والتسويق والمبيعات",
        keywords: ["مساعد AI", "ChatGPT", "ذكاء اصطناعي", "AI assistant"],
        longTailKeywords: ["مساعد ذكي للأعمال", "استخدام ChatGPT في التسويق", "AI للمبيعات"],
        questions: ["كيف أستخدم AI في عملي؟", "ما فائدة المساعد الذكي؟"],
        relatedKeywords: ["ai-agents", "marketing-automation"]
    },
    {
        id: "ai-content-generation",
        slug: "ai-content",
        categoryAr: "الذكاء الاصطناعي",
        categoryEn: "AI",
        nameAr: "إنشاء المحتوى بالذكاء الاصطناعي",
        nameEn: "AI Content Generation",
        descriptionAr: "استخدم الذكاء الاصطناعي لإنشاء محتوى تسويقي احترافي بسرعة",
        keywords: ["محتوى AI", "كتابة بالذكاء الاصطناعي", "AI content", "ChatGPT"],
        longTailKeywords: ["كتابة مقالات بالذكاء الاصطناعي", "إنشاء محتوى سوشيال ميديا بـ AI", "أدوات كتابة المحتوى"],
        questions: ["هل محتوى AI جيد للـ SEO؟", "كيف أستخدم AI للكتابة؟"],
        relatedKeywords: ["content-marketing", "ai-assistant"]
    },
    {
        id: "data-analysis",
        slug: "data-analysis",
        categoryAr: "تحليل البيانات",
        categoryEn: "Analytics",
        nameAr: "تحليل البيانات",
        nameEn: "Data Analysis",
        descriptionAr: "تحليل بيانات التسويق والمبيعات لاتخاذ قرارات ذكية",
        keywords: ["تحليل بيانات", "data analysis", "Google Analytics", "تحليلات"],
        longTailKeywords: ["تحليل بيانات التسويق", "أدوات تحليل البيانات", "تقارير Google Analytics"],
        questions: ["كيف أحلل بيانات التسويق؟", "ما أهم مؤشرات الأداء؟"],
        relatedKeywords: ["reporting-automation", "conversion-optimization"]
    }
];

// =============================================
// 3. كلمات بناء المواقع والتطبيقات - 20 كلمة
// =============================================
export const developmentKeywords: MarketingKeyword[] = [
    {
        id: "website-design",
        slug: "web-design",
        categoryAr: "تصميم المواقع",
        categoryEn: "Web Design",
        nameAr: "تصميم مواقع",
        nameEn: "Website Design",
        descriptionAr: "تصميم مواقع احترافية وسريعة ومتوافقة مع محركات البحث",
        keywords: ["تصميم موقع", "موقع إلكتروني", "web design", "شركة تصميم"],
        longTailKeywords: ["أفضل شركة تصميم مواقع", "تكلفة تصميم موقع", "تصميم موقع تعريفي"],
        questions: ["كم سعر تصميم موقع؟", "كم يستغرق تصميم الموقع؟"],
        relatedKeywords: ["seo", "hosting"]
    },
    {
        id: "ecommerce-development",
        slug: "ecommerce-development",
        categoryAr: "التجارة الإلكترونية",
        categoryEn: "E-commerce",
        nameAr: "برمجة متجر إلكتروني",
        nameEn: "E-commerce Development",
        descriptionAr: "برمجة متاجر إلكترونية متكاملة مع بوابات الدفع والشحن",
        keywords: ["متجر إلكتروني", "ecommerce", "سلة", "زد", "شوبيفاي"],
        longTailKeywords: ["أفضل منصة متجر إلكتروني", "تكلفة إنشاء متجر", "متجر سلة مخصص"],
        questions: ["سلة أو زد: أيهما أفضل؟", "كم تكلفة المتجر الإلكتروني؟"],
        relatedKeywords: ["payment-integration", "shipping-integration"]
    },
    {
        id: "mobile-app-development",
        slug: "mobile-app-dev",
        categoryAr: "تطبيقات الجوال",
        categoryEn: "Mobile Apps",
        nameAr: "برمجة تطبيقات جوال",
        nameEn: "Mobile App Development",
        descriptionAr: "برمجة تطبيقات iOS و Android احترافية للشركات والمتاجر",
        keywords: ["تطبيق جوال", "برمجة تطبيق", "iOS", "Android", "Flutter"],
        longTailKeywords: ["تكلفة برمجة تطبيق", "شركة برمجة تطبيقات", "تطبيق متجر إلكتروني"],
        questions: ["كم سعر برمجة تطبيق؟", "Flutter أم Native: أيهما أفضل؟"],
        relatedKeywords: ["flutter-development", "react-native"]
    },
    {
        id: "flutter-development",
        slug: "flutter",
        categoryAr: "تطبيقات الجوال",
        categoryEn: "Mobile Apps",
        nameAr: "برمجة بـ Flutter",
        nameEn: "Flutter Development",
        descriptionAr: "تطبيقات Flutter لـ iOS و Android بكود واحد وتكلفة أقل",
        keywords: ["Flutter", "فلاتر", "تطبيق كروس بلاتفورم", "Dart"],
        longTailKeywords: ["أفضل شركة Flutter", "تكلفة تطبيق Flutter", "مميزات Flutter"],
        questions: ["ما مميزات Flutter؟", "هل Flutter مناسب لتطبيقي؟"],
        relatedKeywords: ["mobile-app-development", "react-native"]
    },
    {
        id: "wordpress-development",
        slug: "wordpress",
        categoryAr: "أنظمة إدارة المحتوى",
        categoryEn: "CMS",
        nameAr: "تصميم مواقع ووردبريس",
        nameEn: "WordPress Development",
        descriptionAr: "مواقع ووردبريس احترافية سهلة الإدارة والتعديل",
        keywords: ["ووردبريس", "WordPress", "موقع ووردبريس", "قالب ووردبريس"],
        longTailKeywords: ["تصميم موقع ووردبريس", "أفضل قوالب ووردبريس", "تخصيص ووردبريس"],
        questions: ["هل ووردبريس مناسب لموقعي؟", "كم سعر موقع ووردبريس؟"],
        relatedKeywords: ["seo", "website-design"]
    },
    {
        id: "landing-page",
        slug: "landing-page",
        categoryAr: "تصميم المواقع",
        categoryEn: "Web Design",
        nameAr: "تصميم صفحة هبوط",
        nameEn: "Landing Page Design",
        descriptionAr: "صفحات هبوط احترافية محسنة للتحويل وجمع العملاء",
        keywords: ["صفحة هبوط", "landing page", "صفحة بيع", "صفحة تسويقية"],
        longTailKeywords: ["تصميم صفحة هبوط احترافية", "أفضل صفحات الهبوط", "تحسين صفحة الهبوط"],
        questions: ["ما هي صفحة الهبوط؟", "كم سعر تصميم صفحة هبوط؟"],
        relatedKeywords: ["conversion-optimization", "google-ads"]
    },
    {
        id: "ui-ux-design",
        slug: "ui-ux",
        categoryAr: "التصميم",
        categoryEn: "Design",
        nameAr: "تصميم واجهات المستخدم",
        nameEn: "UI/UX Design",
        descriptionAr: "تصميم UI/UX احترافي لتجربة مستخدم مميزة",
        keywords: ["UI UX", "تصميم واجهات", "تجربة المستخدم", "Figma"],
        longTailKeywords: ["أفضل شركة UI UX", "تصميم واجهة تطبيق", "تحسين تجربة المستخدم"],
        questions: ["ما الفرق بين UI و UX؟", "لماذا UI/UX مهم؟"],
        relatedKeywords: ["mobile-app-development", "website-design"]
    },
    {
        id: "api-development",
        slug: "api-development",
        categoryAr: "البرمجة",
        categoryEn: "Development",
        nameAr: "برمجة API",
        nameEn: "API Development",
        descriptionAr: "برمجة واجهات برمجة التطبيقات لربط الأنظمة ببعضها",
        keywords: ["API", "برمجة API", "REST API", "integration"],
        longTailKeywords: ["برمجة API مخصص", "ربط الأنظمة ببعضها", "تكامل API"],
        questions: ["ما هو API؟", "كيف أربط نظامي بنظام آخر؟"],
        relatedKeywords: ["workflow-automation", "integration"]
    },
    {
        id: "hosting-services",
        slug: "hosting",
        categoryAr: "الاستضافة",
        categoryEn: "Hosting",
        nameAr: "استضافة المواقع",
        nameEn: "Web Hosting",
        descriptionAr: "خدمات استضافة سريعة وآمنة لموقعك",
        keywords: ["استضافة", "hosting", "سيرفر", "VPS", "cloud"],
        longTailKeywords: ["أفضل استضافة سعودية", "استضافة ووردبريس", "استضافة سحابية"],
        questions: ["ما أفضل استضافة؟", "كم سعر الاستضافة؟"],
        relatedKeywords: ["website-design", "domain"]
    },
    {
        id: "payment-integration",
        slug: "payment-gateway",
        categoryAr: "التجارة الإلكترونية",
        categoryEn: "E-commerce",
        nameAr: "ربط بوابات الدفع",
        nameEn: "Payment Gateway Integration",
        descriptionAr: "ربط موقعك بجميع بوابات الدفع السعودية والعالمية",
        keywords: ["بوابة دفع", "mada", "Apple Pay", "تابي", "تمارا"],
        longTailKeywords: ["ربط مدى بالموقع", "أفضل بوابة دفع سعودية", "تفعيل Apple Pay"],
        questions: ["كيف أربط بوابة الدفع؟", "ما أفضل بوابة دفع؟"],
        relatedKeywords: ["ecommerce-development", "tabby-tamara"]
    }
];

// =============================================
// دالة الحصول على جميع الكلمات
// =============================================
export const getAllMarketingKeywords = (): MarketingKeyword[] => {
    return [...digitalMarketingKeywords, ...automationKeywords, ...developmentKeywords];
};

// دالة الحصول على كلمة بالـ slug
export const getMarketingKeywordBySlug = (slug: string): MarketingKeyword | undefined => {
    // البحث في الكلمات الأساسية
    const basicKeyword = getAllMarketingKeywords().find(k => k.slug === slug);
    if (basicKeyword) return basicKeyword;

    // البحث في mega keywords وتحويلها للشكل المطلوب
    // يتم التعامل مع هذا في الصفحة الديناميكية مباشرة
    return undefined;
};

// دالة توليد عنوان SEO
export const generateKeywordCityTitle = (keyword: MarketingKeyword, cityName: string): string => {
    return `${keyword.nameAr} في ${cityName} | أفضل شركة ${keyword.nameAr} ${cityName} 2025`;
};

// دالة توليد الوصف
export const generateKeywordCityDescription = (keyword: MarketingKeyword, cityName: string): string => {
    return `${keyword.descriptionAr}. نقدم خدمات ${keyword.nameAr} الاحترافية في ${cityName} وجميع المناطق السعودية. احصل على استشارة مجانية الآن!`;
};

// دالة توليد FAQ
export const generateKeywordCityFAQ = (keyword: MarketingKeyword, cityName: string): { question: string; answer: string }[] => {
    return [
        {
            question: `ما هي أفضل شركة ${keyword.nameAr} في ${cityName}؟`,
            answer: `مسار للتسويق هي الشركة الرائدة في خدمات ${keyword.nameAr} في ${cityName}. نقدم حلول احترافية بأسعار تنافسية مع فريق متخصص ودعم فني على مدار الساعة.`
        },
        {
            question: `كم تكلفة ${keyword.nameAr} في ${cityName}؟`,
            answer: `تختلف تكلفة خدمات ${keyword.nameAr} حسب حجم المشروع ومتطلباته. نقدم عروض أسعار مجانية ومخصصة. تواصل معنا للحصول على عرض سعر لمشروعك.`
        },
        {
            question: `هل تقدمون خدمات ${keyword.nameAr} لجميع أنحاء ${cityName}؟`,
            answer: `نعم، نقدم خدمات ${keyword.nameAr} لجميع أحياء ومناطق ${cityName}. خدماتنا رقمية 100% ونوفر دعم عن بعد مع إمكانية الزيارات الميدانية عند الحاجة.`
        },
        {
            question: `ما المدة المطلوبة لتنفيذ خدمة ${keyword.nameAr}؟`,
            answer: `تعتمد مدة التنفيذ على نطاق المشروع. عادة تتراوح من أسبوع إلى شهر. نحرص على التسليم في الموعد المحدد مع ضمان الجودة.`
        },
        {
            question: `هل تقدمون ضمان على خدمات ${keyword.nameAr}؟`,
            answer: `نعم، نقدم ضمان كامل على جميع خدماتنا مع دعم فني مستمر. هدفنا رضاك التام ونعمل حتى تحقيق النتائج المطلوبة.`
        }
    ];
};

// توليد FAQ من mega keyword
export const generateMegaKeywordFAQ = (nameAr: string, cityName: string): { question: string; answer: string }[] => {
    return [
        {
            question: `ما هي أفضل شركة ${nameAr} في ${cityName}؟`,
            answer: `مسار للتسويق هي الشركة الرائدة في خدمات ${nameAr} في ${cityName}. نقدم حلول احترافية بأسعار تنافسية مع فريق متخصص ودعم فني على مدار الساعة.`
        },
        {
            question: `كم تكلفة ${nameAr} في ${cityName}؟`,
            answer: `تختلف تكلفة خدمات ${nameAr} حسب حجم المشروع ومتطلباته. نقدم عروض أسعار مجانية ومخصصة. تواصل معنا للحصول على عرض سعر لمشروعك.`
        },
        {
            question: `هل تقدمون خدمات ${nameAr} لجميع أنحاء ${cityName}؟`,
            answer: `نعم، نقدم خدمات ${nameAr} لجميع أحياء ومناطق ${cityName}. خدماتنا رقمية 100% ونوفر دعم عن بعد مع إمكانية الزيارات الميدانية عند الحاجة.`
        },
        {
            question: `ما المدة المطلوبة لتنفيذ خدمة ${nameAr}؟`,
            answer: `تعتمد مدة التنفيذ على نطاق المشروع. عادة تتراوح من أسبوع إلى شهر. نحرص على التسليم في الموعد المحدد مع ضمان الجودة.`
        },
        {
            question: `هل تقدمون ضمان على خدمات ${nameAr}؟`,
            answer: `نعم، نقدم ضمان كامل على جميع خدماتنا مع دعم فني مستمر. هدفنا رضاك التام ونعمل حتى تحقيق النتائج المطلوبة.`
        }
    ];
};

export default getAllMarketingKeywords;

