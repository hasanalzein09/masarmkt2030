// كلمات مفتاحية SEO لكل خدمة × مدينة
// هذا الملف يحتوي على آلاف الكلمات المفتاحية المستهدفة

export interface ServiceKeyword {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  shortName: string;
  keywords: string[];
  longTailKeywords: string[];
  questions: string[];
  relatedServices: string[];
}

// الخدمات الرئيسية مع الكلمات المفتاحية
export const serviceKeywords: ServiceKeyword[] = [
  {
    id: "whatsapp-bot",
    slug: "whatsapp-bot",
    nameAr: "بوت واتساب",
    nameEn: "WhatsApp Bot",
    shortName: "واتساب",
    keywords: [
      "بوت واتساب", "شات بوت واتساب", "روبوت واتساب", "واتساب بيزنس",
      "رد آلي واتساب", "واتساب API", "WhatsApp chatbot", "واتساب ذكي",
      "بوت رد تلقائي", "برمجة بوت واتساب"
    ],
    longTailKeywords: [
      "أفضل شركة برمجة بوت واتساب",
      "تكلفة بوت واتساب للشركات",
      "بوت واتساب للمتاجر الإلكترونية",
      "بوت واتساب خدمة عملاء",
      "برمجة بوت واتساب بالذكاء الاصطناعي",
      "بوت واتساب للمطاعم والكافيهات",
      "بوت واتساب لحجز المواعيد",
      "بوت واتساب للعيادات والمستشفيات"
    ],
    questions: [
      "كم سعر بوت واتساب؟",
      "كيف اسوي بوت واتساب؟",
      "ما هو أفضل بوت واتساب؟",
      "هل بوت واتساب قانوني؟",
      "كم مدة تفعيل بوت واتساب؟"
    ],
    relatedServices: ["instagram-bot", "messenger-bot", "ai-automation"]
  },
  {
    id: "instagram-bot",
    slug: "instagram-bot",
    nameAr: "بوت انستغرام",
    nameEn: "Instagram Bot",
    shortName: "انستغرام",
    keywords: [
      "بوت انستغرام", "شات بوت انستغرام", "رد آلي انستغرام", "DM bot",
      "بوت دايركت", "أتمتة انستغرام", "Instagram automation", "بوت رسائل"
    ],
    longTailKeywords: [
      "أفضل بوت انستغرام للمتاجر",
      "بوت رد تلقائي انستغرام",
      "بوت انستغرام للبيع",
      "برمجة بوت انستغرام",
      "بوت انستغرام ذكي بالعربي"
    ],
    questions: [
      "كيف اسوي بوت انستغرام؟",
      "كم سعر بوت انستغرام؟",
      "هل بوت انستغرام آمن؟"
    ],
    relatedServices: ["whatsapp-bot", "social-media-management"]
  },
  {
    id: "messenger-bot",
    slug: "messenger-bot",
    nameAr: "بوت ماسنجر",
    nameEn: "Messenger Bot",
    shortName: "ماسنجر",
    keywords: [
      "بوت ماسنجر", "شات بوت فيسبوك", "رد آلي ماسنجر", "فيسبوك بوت",
      "Messenger chatbot", "Facebook automation", "بوت صفحة فيسبوك"
    ],
    longTailKeywords: [
      "أفضل بوت ماسنجر للأعمال",
      "بوت ماسنجر لصفحات فيسبوك",
      "برمجة بوت ماسنجر ذكي"
    ],
    questions: [
      "كيف أفعل بوت ماسنجر؟",
      "ما فائدة بوت ماسنجر؟"
    ],
    relatedServices: ["whatsapp-bot", "instagram-bot"]
  },
  {
    id: "website-design",
    slug: "website-design",
    nameAr: "تصميم مواقع",
    nameEn: "Website Design",
    shortName: "مواقع",
    keywords: [
      "تصميم مواقع", "تصميم موقع", "برمجة مواقع", "مصمم مواقع",
      "شركة تصميم مواقع", "تصميم موقع احترافي", "web design",
      "موقع الكتروني", "إنشاء موقع", "تطوير مواقع"
    ],
    longTailKeywords: [
      "أفضل شركة تصميم مواقع",
      "تصميم موقع تعريفي للشركات",
      "تصميم موقع متجر إلكتروني",
      "أسعار تصميم المواقع",
      "تصميم موقع متجاوب",
      "تصميم موقع سريع",
      "تصميم موقع بالذكاء الاصطناعي"
    ],
    questions: [
      "كم سعر تصميم موقع؟",
      "ما هي أفضل شركة تصميم مواقع؟",
      "كم مدة تصميم الموقع؟",
      "ما هي مكونات الموقع الناجح؟"
    ],
    relatedServices: ["ecommerce-store", "seo", "web-development"]
  },
  {
    id: "ecommerce-store",
    slug: "ecommerce-store",
    nameAr: "متجر إلكتروني",
    nameEn: "E-commerce Store",
    shortName: "متجر",
    keywords: [
      "متجر إلكتروني", "تصميم متجر", "إنشاء متجر", "متجر أونلاين",
      "ecommerce", "online store", "سلة", "شوبيفاي", "ووكومرس",
      "بيع أونلاين", "التجارة الإلكترونية"
    ],
    longTailKeywords: [
      "أفضل منصة متجر إلكتروني",
      "تكلفة إنشاء متجر إلكتروني",
      "تصميم متجر إلكتروني احترافي",
      "متجر إلكتروني مع بوابة دفع",
      "متجر إلكتروني ملابس",
      "متجر إلكتروني عطور",
      "متجر إلكتروني مستحضرات تجميل"
    ],
    questions: [
      "كيف أفتح متجر إلكتروني؟",
      "كم تكلفة المتجر الإلكتروني؟",
      "أيهما أفضل سلة أو شوبيفاي؟",
      "كيف أبدأ التجارة الإلكترونية؟"
    ],
    relatedServices: ["website-design", "seo", "whatsapp-bot"]
  },
  {
    id: "seo",
    slug: "seo",
    nameAr: "تحسين محركات البحث",
    nameEn: "SEO",
    shortName: "سيو",
    keywords: [
      "سيو", "SEO", "تحسين محركات البحث", "تصدر جوجل", "ظهور في جوجل",
      "أرشفة موقع", "تهيئة المواقع", "كلمات مفتاحية", "باك لينك"
    ],
    longTailKeywords: [
      "أفضل شركة سيو",
      "خدمات SEO احترافية",
      "تصدر نتائج البحث",
      "سيو المتاجر الإلكترونية",
      "سيو محلي للشركات",
      "استراتيجية SEO متكاملة"
    ],
    questions: [
      "كم سعر خدمة السيو؟",
      "كم مدة ظهور نتائج السيو؟",
      "ما هو السيو وكيف يعمل؟",
      "كيف أجعل موقعي يظهر أول في جوجل؟"
    ],
    relatedServices: ["website-design", "content-marketing"]
  },
  {
    id: "mobile-app",
    slug: "mobile-app",
    nameAr: "تطبيق جوال",
    nameEn: "Mobile App",
    shortName: "تطبيق",
    keywords: [
      "تطبيق جوال", "تصميم تطبيق", "برمجة تطبيق", "تطبيق أيفون",
      "تطبيق أندرويد", "تطبيق متجر", "تطبيق توصيل", "app development"
    ],
    longTailKeywords: [
      "أفضل شركة برمجة تطبيقات",
      "تكلفة تصميم تطبيق جوال",
      "برمجة تطبيق متجر إلكتروني",
      "تطبيق حجز مواعيد",
      "تطبيق توصيل طلبات"
    ],
    questions: [
      "كم سعر تصميم تطبيق؟",
      "كم مدة برمجة التطبيق؟",
      "ما الفرق بين native و hybrid؟"
    ],
    relatedServices: ["website-design", "ecommerce-store"]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    nameAr: "أتمتة ذكاء اصطناعي",
    nameEn: "AI Automation",
    shortName: "أتمتة",
    keywords: [
      "أتمتة", "ذكاء اصطناعي", "AI", "أتمتة العمليات", "روبوتات",
      "automation", "RPA", "تقنيات ذكية", "أنظمة ذكية"
    ],
    longTailKeywords: [
      "أتمتة العمليات التجارية",
      "حلول الذكاء الاصطناعي للشركات",
      "أتمتة خدمة العملاء",
      "أنظمة ذكية للأعمال"
    ],
    questions: [
      "ما هي أتمتة العمليات؟",
      "كيف يفيد الذكاء الاصطناعي عملي؟",
      "كم توفر الأتمتة من التكاليف؟"
    ],
    relatedServices: ["whatsapp-bot", "chatbot"]
  },
  {
    id: "content-marketing",
    slug: "content-marketing",
    nameAr: "صناعة المحتوى",
    nameEn: "Content Marketing",
    shortName: "محتوى",
    keywords: [
      "صناعة محتوى", "كتابة محتوى", "تسويق بالمحتوى", "content marketing",
      "كاتب محتوى", "إنشاء محتوى", "محتوى سوشيال ميديا", "محتوى إبداعي"
    ],
    longTailKeywords: [
      "أفضل شركة صناعة محتوى",
      "كتابة محتوى SEO احترافي",
      "صناعة محتوى انستغرام",
      "كتابة مقالات للمواقع",
      "صناعة Reels وفيديوهات"
    ],
    questions: [
      "كم سعر صناعة المحتوى؟",
      "كيف أصنع محتوى جذاب؟",
      "ما أهمية المحتوى للتسويق؟"
    ],
    relatedServices: ["social-media-management", "seo"]
  },
  {
    id: "social-media-management",
    slug: "social-media-management",
    nameAr: "إدارة حسابات التواصل",
    nameEn: "Social Media Management",
    shortName: "سوشيال ميديا",
    keywords: [
      "إدارة حسابات", "إدارة سوشيال ميديا", "social media management",
      "إدارة انستغرام", "إدارة تويتر", "إدارة تيك توك", "إدارة سناب شات"
    ],
    longTailKeywords: [
      "أفضل شركة إدارة حسابات",
      "إدارة حسابات التواصل الاجتماعي",
      "شركة إدارة سوشيال ميديا",
      "إدارة حسابات المتاجر الإلكترونية"
    ],
    questions: [
      "كم سعر إدارة الحسابات؟",
      "ماذا تشمل إدارة الحسابات؟",
      "كيف أختار شركة إدارة حسابات؟"
    ],
    relatedServices: ["content-marketing", "instagram-bot"]
  },
  {
    id: "ai-agents",
    slug: "ai-agents",
    nameAr: "وكلاء الذكاء الاصطناعي",
    nameEn: "AI Agents",
    shortName: "وكلاء AI",
    keywords: [
      "وكلاء ذكاء اصطناعي", "AI agents", "موظف افتراضي",
      "وكيل مبيعات ذكي", "وكيل خدمة عملاء", "chatbot متقدم"
    ],
    longTailKeywords: [
      "وكلاء ذكاء اصطناعي للشركات",
      "موظف افتراضي بالذكاء الاصطناعي",
      "وكيل مبيعات آلي 24/7",
      "أتمتة خدمة العملاء بالذكاء الاصطناعي"
    ],
    questions: [
      "ما هو وكيل الذكاء الاصطناعي؟",
      "كم تكلفة وكيل AI؟",
      "كيف يعمل الوكيل الذكي؟"
    ],
    relatedServices: ["whatsapp-bot", "ai-automation"]
  }
];

// دالة لتوليد العنوان SEO لخدمة في مدينة
export const generateServiceCityTitle = (
  serviceName: string,
  cityName: string
): string => {
  return `${serviceName} في ${cityName} | أفضل شركة ${serviceName} ${cityName} 2025`;
};

// دالة لتوليد الوصف SEO
export const generateServiceCityDescription = (
  serviceName: string,
  cityName: string,
  shortDesc?: string
): string => {
  return `${shortDesc || `أفضل خدمات ${serviceName} في ${cityName}`}. نقدم حلول ${serviceName} احترافية للشركات والمؤسسات في ${cityName}. احصل على استشارة مجانية الآن!`;
};

// دالة لتوليد كلمات مفتاحية للخدمة في المدينة
export const generateServiceCityKeywords = (
  serviceKeyword: ServiceKeyword,
  cityNameAr: string
): string[] => {
  const baseKeywords = serviceKeyword.keywords.map(k => `${k} ${cityNameAr}`);
  const longTail = serviceKeyword.longTailKeywords.map(k => `${k} ${cityNameAr}`);
  const withIn = serviceKeyword.keywords.map(k => `${k} في ${cityNameAr}`);

  return [...new Set([...baseKeywords, ...longTail, ...withIn])];
};

// دالة لتوليد أسئلة FAQ للخدمة في المدينة
export const generateServiceCityFAQ = (
  serviceName: string,
  cityName: string
): { question: string; answer: string }[] => {
  return [
    {
      question: `ما هي أفضل شركة ${serviceName} في ${cityName}؟`,
      answer: `مسار للتسويق هي الشركة الرائدة في خدمات ${serviceName} في ${cityName}. نقدم حلول احترافية بأسعار تنافسية مع دعم فني 24/7.`
    },
    {
      question: `كم سعر ${serviceName} في ${cityName}؟`,
      answer: `أسعار ${serviceName} في ${cityName} تبدأ من أسعار تنافسية حسب احتياجات مشروعك. تواصل معنا للحصول على عرض سعر مخصص مجاناً.`
    },
    {
      question: `كم مدة تنفيذ ${serviceName} في ${cityName}؟`,
      answer: `مدة تنفيذ ${serviceName} تعتمد على حجم المشروع، عادة من أسبوع إلى شهر. نحرص على التسليم في الوقت المحدد مع أعلى جودة.`
    },
    {
      question: `هل تقدمون خدمة ${serviceName} في كل مناطق ${cityName}؟`,
      answer: `نعم، نقدم خدمات ${serviceName} في جميع أحياء ومناطق ${cityName}. خدماتنا رقمية 100% ونوفر دعم عن بعد وزيارات ميدانية عند الحاجة.`
    },
    {
      question: `ما الضمانات التي تقدمونها لـ ${serviceName} في ${cityName}؟`,
      answer: `نقدم ضمان على جميع خدماتنا مع دعم فني مستمر. رضا العميل هو أولويتنا ونعمل حتى تحقيق النتائج المطلوبة.`
    }
  ];
};

// دالة للحصول على خدمة بالـ ID
export const getServiceKeywordById = (id: string): ServiceKeyword | undefined => {
  return serviceKeywords.find(s => s.id === id);
};

// دالة للحصول على خدمة بالـ slug
export const getServiceKeywordBySlug = (slug: string): ServiceKeyword | undefined => {
  return serviceKeywords.find(s => s.slug === slug);
};
