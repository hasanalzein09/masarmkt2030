export const siteConfig = {
  name: "مسار للتسويق",
  nameAr: "مسار للتسويق",
  description: "الشركة الرائدة في حلول الذكاء الاصطناعي وبوتات واتساب في السعودية. نحوّل أعمالك إلى ماكينة مبيعات تشتغل على مدار الساعة",
  descriptionEn: "Leading AI Solutions & WhatsApp Chatbots in Saudi Arabia. Transform your business into a 24/7 sales machine",
  url: "https://www.masarmkt2030.online",
  logo: "https://www.masarmkt2030.online/logo.svg",
  ogImage: "https://www.masarmkt2030.online/og.svg",

  contact: {
    phone: "+966 53 260 1326",
    phoneClean: "+966532601326",
    email: "info@masarmkt.com",
    whatsapp: "966532601326",
    address: "الرياض، المملكة العربية السعودية",
    addressEn: "Riyadh, Saudi Arabia"
  },

  social: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    tiktok: ""
  },

  cities: [
    { id: "riyadh", nameAr: "الرياض", nameEn: "Riyadh", nameCursive: "الرياض" },
    { id: "jeddah", nameAr: "جدة", nameEn: "Jeddah", nameCursive: "جدة" },
    { id: "dammam", nameAr: "الدمام", nameEn: "Dammam", nameCursive: "الدمام" },
    { id: "makkah", nameAr: "مكة المكرمة", nameEn: "Makkah", nameCursive: "مكة" },
    { id: "madinah", nameAr: "المدينة المنورة", nameEn: "Madinah", nameCursive: "المدينة" },
    { id: "khobar", nameAr: "الخبر", nameEn: "Khobar", nameCursive: "الخبر" },
    { id: "taif", nameAr: "الطائف", nameEn: "Taif", nameCursive: "الطائف" },
    { id: "abha", nameAr: "أبها", nameEn: "Abha", nameCursive: "أبها" },
    { id: "tabuk", nameAr: "تبوك", nameEn: "Tabuk", nameCursive: "تبوك" },
    { id: "buraidah", nameAr: "بريدة", nameEn: "Buraidah", nameCursive: "بريدة" }
  ],

  stats: {
    projects: "150+",
    clients: "800+",
    satisfaction: "99%",
    support: "24/7"
  }
}

export const services = [
  {
    id: "whatsapp-ai",
    slug: "whatsapp-ai",
    icon: "MessageCircle",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    nameAr: "واتساب AI شات بوت",
    nameEn: "WhatsApp AI Chatbot",
    shortDescAr: "بوت ذكي يرد على عملائك 24/7 ويحولهم لمشترين",
    shortDescEn: "Smart bot that responds to your customers 24/7 and converts them to buyers",
    descriptionAr: "حوّل واتساب إلى ماكينة مبيعات تشتغل على طول! بوت الذكاء الاصطناعي يرد على عملائك فوراً، يجاوب أسئلتهم، يعرض منتجاتك، ويقفل الصفقات وأنت نايم. ما تفوّت أي عميل بعد اليوم!",
    descriptionEn: "Transform WhatsApp into a sales machine that never sleeps! AI bot responds instantly, answers questions, showcases products, and closes deals while you sleep.",
    features: [
      { ar: "ردود فورية على مدار الساعة - بدون انتظار", en: "Instant 24/7 responses - no waiting" },
      { ar: "ذكاء اصطناعي يفهم العربي واللهجة السعودية", en: "AI that understands Arabic & Saudi dialect" },
      { ar: "عرض المنتجات والأسعار تلقائياً", en: "Auto display products & prices" },
      { ar: "حجز المواعيد وتأكيدها", en: "Book & confirm appointments" },
      { ar: "إرسال العروض والتنبيهات", en: "Send offers & notifications" },
      { ar: "تقارير مفصلة عن العملاء", en: "Detailed customer reports" }
    ],
    benefits: [
      { stat: "300%", text: "زيادة في المبيعات", textEn: "increase in sales" },
      { stat: "90%", text: "توفير في الوقت", textEn: "time saved" },
      { stat: "24/7", text: "خدمة بدون توقف", textEn: "non-stop service" },
      { stat: "50%", text: "تقليل التكاليف", textEn: "cost reduction" }
    ],
    priceOriginal: 6500,
    priceFrom: 4500,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "instagram-ai",
    slug: "instagram-ai",
    icon: "Instagram",
    color: "from-pink-500 to-purple-600",
    bgColor: "bg-pink-500/10",
    nameAr: "انستغرام AI شات بوت",
    nameEn: "Instagram AI Chatbot",
    shortDescAr: "حوّل متابعينك إلى عملاء يدفعون",
    shortDescEn: "Turn your followers into paying customers",
    descriptionAr: "كل رسالة DM فرصة مبيعات! بوتنا الذكي يرد على طول على كل استفسار، يعرض منتجاتك بشكل جذاب، ويحوّل المتابعين الفضوليين إلى عملاء يدفعون. ما تخلي أي رسالة تضيع!",
    descriptionEn: "Every DM is a sales opportunity! Our smart bot responds instantly, showcases products attractively, and converts curious followers into paying customers.",
    features: [
      { ar: "رد تلقائي على كل DM", en: "Auto-reply to every DM" },
      { ar: "عرض المنتجات مع الصور والأسعار", en: "Display products with images & prices" },
      { ar: "ربط مع المتجر الإلكتروني", en: "Connect with e-commerce store" },
      { ar: "إرسال روابط الدفع", en: "Send payment links" },
      { ar: "متابعة العملاء المهتمين", en: "Follow up with interested customers" },
      { ar: "تحليل سلوك المتابعين", en: "Analyze follower behavior" }
    ],
    benefits: [
      { stat: "400%", text: "زيادة في التحويلات", textEn: "increase in conversions" },
      { stat: "100%", text: "رد على كل رسالة", textEn: "response to every message" },
      { stat: "70%", text: "زيادة المبيعات", textEn: "sales increase" },
      { stat: "0", text: "رسائل ضائعة", textEn: "missed messages" }
    ],
    priceOriginal: 5200,
    priceFrom: 3900,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "messenger-ai",
    slug: "messenger-ai",
    icon: "Facebook",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    nameAr: "ماسنجر AI شات بوت",
    nameEn: "Messenger AI Chatbot",
    shortDescAr: "استغل قوة فيسبوك في المبيعات",
    shortDescEn: "Leverage Facebook's power for sales",
    descriptionAr: "فيسبوك من أكبر الأسواق في السعودية! بوتنا الذكي يحوّل صفحتك إلى موظف مبيعات يشتغل على طول. يرد على التعليقات والرسائل، يجمع بيانات العملاء، ويقفل الصفقات تلقائياً!",
    descriptionEn: "Facebook is a major marketplace in Saudi Arabia! Our smart bot turns your page into a tireless sales employee. Responds to comments & messages, collects leads, and closes deals automatically!",
    features: [
      { ar: "رد تلقائي على التعليقات والرسائل", en: "Auto-reply to comments & messages" },
      { ar: "ذكاء اصطناعي متقدم", en: "Advanced AI capabilities" },
      { ar: "تكامل مع إعلانات فيسبوك", en: "Facebook Ads integration" },
      { ar: "جمع بيانات العملاء المحتملين", en: "Lead generation & collection" },
      { ar: "إرسال العروض الترويجية", en: "Send promotional offers" },
      { ar: "تقارير الأداء المفصلة", en: "Detailed performance reports" }
    ],
    benefits: [
      { stat: "200%", text: "زيادة التفاعل", textEn: "engagement increase" },
      { stat: "85%", text: "توفير الوقت", textEn: "time saved" },
      { stat: "3X", text: "مضاعفة العملاء", textEn: "more leads" },
      { stat: "60%", text: "تكلفة أقل", textEn: "lower costs" }
    ],
    priceOriginal: 4550,
    priceFrom: 3250,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "web-development",
    slug: "web-development",
    icon: "Globe",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    nameAr: "تطوير مواقع Next.js",
    nameEn: "Next.js Web Development",
    shortDescAr: "مواقع سريعة كالبرق تسيطر على Google",
    shortDescEn: "Lightning-fast websites that dominate Google",
    descriptionAr: "موقعك هو واجهتك للعالم! نبني مواقع بأحدث التقنيات، سريعة مثل البرق، تطلع في أول نتائج Google، وتحوّل الزوار إلى عملاء. استثمر في موقع يشتغل لك على مدار الساعة!",
    descriptionEn: "Your website is your face to the world! We build sites with latest tech, lightning-fast, ranking on Google, converting visitors to customers. Invest in a site that works 24/7!",
    features: [
      { ar: "تصميم عصري وجذاب", en: "Modern attractive design" },
      { ar: "سرعة فائقة (أقل من 2 ثانية)", en: "Ultra-fast (under 2 seconds)" },
      { ar: "متوافق مع الجوال 100%", en: "100% mobile responsive" },
      { ar: "SEO مدمج للظهور في Google", en: "Built-in SEO for Google ranking" },
      { ar: "لوحة تحكم سهلة", en: "Easy admin panel" },
      { ar: "حماية وأمان عالي", en: "High security & protection" }
    ],
    benefits: [
      { stat: "10X", text: "أسرع من المنافسين", textEn: "faster than competitors" },
      { stat: "#1", text: "ترتيب في Google", textEn: "Google ranking" },
      { stat: "200%", text: "زيادة الزوار", textEn: "more visitors" },
      { stat: "150%", text: "زيادة المبيعات", textEn: "sales increase" }
    ],
    priceOriginal: 19500,
    priceFrom: 13000,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    icon: "Cpu",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-500/10",
    nameAr: "أتمتة بالذكاء الاصطناعي",
    nameEn: "AI Automation",
    shortDescAr: "أتمت عملك ووفر آلاف الساعات",
    shortDescEn: "Automate your business and save thousands of hours",
    descriptionAr: "وقّف الشغل اليدوي المتكرر! نحوّل عملياتك الروتينية إلى أنظمة ذكية تشتغل لحالها. المخزون، الفواتير، التقارير، المتابعات... كل شيء يشتغل تلقائياً وأنت تركز على النمو!",
    descriptionEn: "Stop repetitive manual work! We transform your routine operations into smart systems that work autonomously. Inventory, invoices, reports, follow-ups... everything automated while you focus on growth!",
    features: [
      { ar: "أتمتة المهام المتكررة", en: "Automate repetitive tasks" },
      { ar: "ربط الأنظمة ببعضها", en: "Connect systems together" },
      { ar: "تقارير ذكية تلقائية", en: "Smart automated reports" },
      { ar: "إشعارات وتنبيهات ذكية", en: "Smart notifications & alerts" },
      { ar: "تكامل مع أي برنامج", en: "Integration with any software" },
      { ar: "ذكاء اصطناعي متعلم", en: "Learning AI system" }
    ],
    benefits: [
      { stat: "80%", text: "توفير الوقت", textEn: "time saved" },
      { stat: "95%", text: "دقة بدون أخطاء", textEn: "error-free accuracy" },
      { stat: "50%", text: "تقليل التكاليف", textEn: "cost reduction" },
      { stat: "∞", text: "قابلية للتوسع", textEn: "scalability" }
    ],
    priceOriginal: 13000,
    priceFrom: 8500,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "seo",
    slug: "seo",
    icon: "Search",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
    nameAr: "خدمات SEO المتقدمة",
    nameEn: "Advanced SEO Services",
    shortDescAr: "اجعل Google يعشق موقعك",
    shortDescEn: "Make Google love your website",
    descriptionAr: "كن الأول في Google لما يدور العملاء! نستخدم أحدث تقنيات SEO والذكاء الاصطناعي عشان نحط موقعك في القمة. عملاء يدورون عليك الحين... هل بيلقونك أو منافسينك؟",
    descriptionEn: "Be #1 on Google when customers search! We use latest SEO techniques & AI to put your site on top. Customers are searching now... will they find you or your competitors?",
    features: [
      { ar: "تحليل شامل للموقع", en: "Comprehensive site analysis" },
      { ar: "بحث الكلمات المفتاحية", en: "Keyword research" },
      { ar: "تحسين المحتوى بالـ AI", en: "AI content optimization" },
      { ar: "بناء الروابط الخارجية", en: "Link building" },
      { ar: "SEO محلي للمدن السعودية", en: "Local SEO for Saudi cities" },
      { ar: "تقارير شهرية مفصلة", en: "Detailed monthly reports" }
    ],
    benefits: [
      { stat: "#1", text: "ترتيب في Google", textEn: "Google ranking" },
      { stat: "500%", text: "زيادة الزيارات", textEn: "traffic increase" },
      { stat: "300%", text: "زيادة العملاء", textEn: "more leads" },
      { stat: "ROI", text: "عائد استثمار مضمون", textEn: "guaranteed ROI" }
    ],
    priceOriginal: 5200,
    priceFrom: 3900,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال",
    perMonth: true
  },
  {
    id: "content-marketing",
    slug: "content-marketing",
    icon: "Pencil",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500/10",
    nameAr: "صناعة المحتوى",
    nameEn: "Content Marketing",
    shortDescAr: "محتوى يجذب العملاء ويبني الثقة ويرفع المبيعات",
    shortDescEn: "Content that attracts customers, builds trust and increases sales",
    descriptionAr: "المحتوى هو الملك! فريقنا المتخصص بمساعدة الذكاء الاصطناعي يصنع محتوى احترافي يتصدر نتائج البحث ويحول المتابعين إلى عملاء. من المقالات والفيديوهات إلى الانفوجرافيك والـ Reels.",
    descriptionEn: "Content is King! Our specialized team with AI assistance creates professional content that ranks on search and converts followers to customers. From articles and videos to infographics and Reels.",
    features: [
      { ar: "كتابة مقالات SEO احترافية", en: "Professional SEO article writing" },
      { ar: "تصميم انفوجرافيك جذاب", en: "Attractive infographic design" },
      { ar: "إنتاج Reels و فيديوهات قصيرة", en: "Reels & short video production" },
      { ar: "محتوى بمساعدة الذكاء الاصطناعي", en: "AI-assisted content creation" },
      { ar: "تقويم محتوى شهري", en: "Monthly content calendar" },
      { ar: "محتوى مخصص للسوق السعودي", en: "Saudi market customized content" }
    ],
    benefits: [
      { stat: "500%", text: "زيادة التفاعل", textEn: "engagement increase" },
      { stat: "300%", text: "زيادة الظهور", textEn: "visibility increase" },
      { stat: "200%", text: "زيادة المتابعين", textEn: "followers increase" },
      { stat: "150%", text: "زيادة المبيعات", textEn: "sales increase" }
    ],
    priceOriginal: 6500,
    priceFrom: 4500,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال",
    perMonth: true
  },
  {
    id: "social-media-management",
    slug: "social-media-management",
    icon: "Users",
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-500/10",
    nameAr: "إدارة حسابات التواصل",
    nameEn: "Social Media Management",
    shortDescAr: "فريق متخصص يدير حساباتك بالكامل",
    shortDescEn: "Specialized team manages your accounts completely",
    descriptionAr: "وفّر وقتك وخلّ فريقنا المتخصص يدير حساباتك! من إنشاء المحتوى والنشر إلى الرد على التعليقات والرسائل وتحليل الأداء. نحول حساباتك إلى ماكينة تسويق تشتغل 24/7!",
    descriptionEn: "Save your time and let our specialized team manage your accounts! From content creation and posting to responding to comments and messages and analyzing performance.",
    features: [
      { ar: "إدارة كاملة لجميع الحسابات", en: "Complete management of all accounts" },
      { ar: "جدولة ونشر المحتوى", en: "Content scheduling and posting" },
      { ar: "الرد على التعليقات والرسائل", en: "Responding to comments and messages" },
      { ar: "تقارير أداء أسبوعية وشهرية", en: "Weekly and monthly performance reports" },
      { ar: "استراتيجية نمو مخصصة", en: "Customized growth strategy" },
      { ar: "تصميم احترافي للمنشورات", en: "Professional post design" }
    ],
    benefits: [
      { stat: "10X", text: "توفير الوقت", textEn: "time saved" },
      { stat: "400%", text: "زيادة التفاعل", textEn: "engagement increase" },
      { stat: "250%", text: "زيادة المتابعين", textEn: "followers increase" },
      { stat: "100%", text: "احترافية مضمونة", textEn: "guaranteed professionalism" }
    ],
    priceOriginal: 10400,
    priceFrom: 7800,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال",
    perMonth: true
  },
  {
    id: "ai-agents",
    slug: "ai-agents",
    icon: "Bot",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    nameAr: "وكلاء الذكاء الاصطناعي",
    nameEn: "AI Agents",
    shortDescAr: "موظفين افتراضيين يعملون لك 24/7 بدون راتب",
    shortDescEn: "Virtual employees working for you 24/7 without salary",
    descriptionAr: "تخيل عندك موظف ذكي يشتغل 24 ساعة، ما يتعب، ما يمرض، ما يطلب إجازة، ويخدم ألف عميل في نفس الوقت! وكلاء الذكاء الاصطناعي يقومون بالمبيعات، خدمة العملاء، الحجوزات، وأكثر.",
    descriptionEn: "Imagine having a smart employee working 24 hours, never tired, never sick, never asks for vacation, serving 1000 customers simultaneously! AI agents handle sales, customer service, bookings, and more.",
    features: [
      { ar: "وكيل مبيعات ذكي يقفل الصفقات", en: "Smart sales agent that closes deals" },
      { ar: "وكيل خدمة عملاء 24/7", en: "24/7 customer service agent" },
      { ar: "وكيل حجوزات ومواعيد", en: "Booking and appointment agent" },
      { ar: "وكيل استفسارات ومعلومات", en: "Inquiry and information agent" },
      { ar: "تكامل مع أنظمتك الحالية", en: "Integration with your current systems" },
      { ar: "تدريب على منتجاتك وخدماتك", en: "Training on your products and services" }
    ],
    benefits: [
      { stat: "24/7", text: "خدمة بدون توقف", textEn: "non-stop service" },
      { stat: "1000+", text: "عميل في نفس الوقت", textEn: "simultaneous customers" },
      { stat: "90%", text: "توفير تكاليف الموظفين", textEn: "employee cost savings" },
      { stat: "0", text: "أخطاء بشرية", textEn: "human errors" }
    ],
    priceOriginal: 15600,
    priceFrom: 10400,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  // === خدمات AI الجديدة ===
  {
    id: "ai-image-generation",
    slug: "ai-image-generation",
    icon: "Image",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/10",
    nameAr: "إنشاء صور AI",
    nameEn: "AI Image Generation",
    shortDescAr: "صور احترافية بالذكاء الاصطناعي لمنتجاتك وإعلاناتك",
    shortDescEn: "Professional AI-generated images for your products and ads",
    descriptionAr: "احصل على صور مذهلة لمنتجاتك، إعلاناتك، ومحتوى السوشيال ميديا باستخدام أحدث تقنيات الذكاء الاصطناعي. Midjourney, DALL-E, Stable Diffusion - نختار الأنسب لمشروعك!",
    descriptionEn: "Get stunning images for your products, ads, and social media content using cutting-edge AI. Midjourney, DALL-E, Stable Diffusion - we choose the best for your project!",
    features: [
      { ar: "صور منتجات احترافية بدون تصوير", en: "Professional product images without photography" },
      { ar: "تصاميم إعلانية جذابة", en: "Attractive ad designs" },
      { ar: "صور سوشيال ميديا مخصصة", en: "Custom social media images" },
      { ar: "موكابات ومعاينات واقعية", en: "Realistic mockups and previews" },
      { ar: "تسليم سريع خلال 24-48 ساعة", en: "Fast delivery within 24-48 hours" },
      { ar: "حقوق استخدام كاملة", en: "Full usage rights" }
    ],
    benefits: [
      { stat: "90%", text: "توفير تكلفة التصوير", textEn: "photography cost savings" },
      { stat: "24h", text: "تسليم سريع", textEn: "fast delivery" },
      { stat: "∞", text: "أفكار لا محدودة", textEn: "unlimited ideas" },
      { stat: "100%", text: "حقوق ملكية كاملة", textEn: "full ownership" }
    ],
    priceOriginal: 2600,
    priceFrom: 1500,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "ai-image-editing",
    slug: "ai-image-editing",
    icon: "ImagePlus",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    nameAr: "تعديل صور AI",
    nameEn: "AI Image Editing",
    shortDescAr: "إزالة الخلفيات، تحسين الجودة، وتعديلات ذكية",
    shortDescEn: "Remove backgrounds, enhance quality, and smart edits",
    descriptionAr: "حوّل صورك العادية لتحف فنية! إزالة الخلفيات بنقرة، تحسين الجودة 4X، تغيير الملابس، إضافة عناصر - كل هذا بالذكاء الاصطناعي بدون فوتوشوب!",
    descriptionEn: "Transform your ordinary photos into masterpieces! One-click background removal, 4X quality enhancement, change clothes, add elements - all with AI!",
    features: [
      { ar: "إزالة الخلفيات بدقة عالية", en: "High-precision background removal" },
      { ar: "تحسين جودة الصور حتى 4K", en: "Image upscaling up to 4K" },
      { ar: "تعديل الوجوه وتحسينها", en: "Face editing and enhancement" },
      { ar: "إضافة أو حذف عناصر من الصور", en: "Add or remove elements" },
      { ar: "توسيع حدود الصورة (Outpainting)", en: "Expand image boundaries" },
      { ar: "تغيير الألوان والأنماط", en: "Change colors and styles" }
    ],
    benefits: [
      { stat: "4X", text: "تحسين الجودة", textEn: "quality improvement" },
      { stat: "1 min", text: "إزالة الخلفية", textEn: "background removal" },
      { stat: "95%", text: "دقة التعديل", textEn: "editing accuracy" },
      { stat: "∞", text: "تعديلات ممكنة", textEn: "possible edits" }
    ],
    priceOriginal: 900,
    priceFrom: 500,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "ai-video-generation",
    slug: "ai-video-generation",
    icon: "Video",
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-500/10",
    nameAr: "إنشاء فيديو AI",
    nameEn: "AI Video Generation",
    shortDescAr: "فيديوهات إعلانية مذهلة من نص أو صور",
    shortDescEn: "Stunning promotional videos from text or images",
    descriptionAr: "اصنع فيديوهات إعلانية مذهلة بدون كاميرا! من نص بسيط أو صورة نخلق فيديو احترافي لـ Reels, TikTok, YouTube. تقنيات Runway, Sora, Pika الأحدث!",
    descriptionEn: "Create stunning promotional videos without a camera! From simple text or image we create professional videos for Reels, TikTok, YouTube!",
    features: [
      { ar: "تحويل النص إلى فيديو (Text-to-Video)", en: "Text-to-Video conversion" },
      { ar: "تحويل الصور إلى فيديو متحرك", en: "Image-to-Video animation" },
      { ar: "فيديوهات منتجات 360°", en: "360° product videos" },
      { ar: "فيديوهات Reels و TikTok", en: "Reels & TikTok videos" },
      { ar: "فيديوهات شرح وتعليم", en: "Explainer and tutorial videos" },
      { ar: "مؤثرات بصرية احترافية", en: "Professional visual effects" }
    ],
    benefits: [
      { stat: "95%", text: "توفير تكلفة الإنتاج", textEn: "production cost savings" },
      { stat: "48h", text: "تسليم الفيديو", textEn: "video delivery" },
      { stat: "4K", text: "جودة عالية", textEn: "high quality" },
      { stat: "10X", text: "تفاعل أكثر", textEn: "more engagement" }
    ],
    priceOriginal: 5500,
    priceFrom: 3000,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "ai-video-editing",
    slug: "ai-video-editing",
    icon: "Film",
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-500/10",
    nameAr: "تعديل فيديو AI",
    nameEn: "AI Video Editing",
    shortDescAr: "مونتاج ذكي، ترجمة تلقائية، وتحسين الجودة",
    shortDescEn: "Smart editing, auto subtitles, and quality enhancement",
    descriptionAr: "مونتاج احترافي بالذكاء الاصطناعي! إزالة خلفية الفيديو، ترجمة وإضافة Subtitles تلقائية، تحسين الجودة، تصحيح الألوان - كل هذا بسرعة خيالية!",
    descriptionEn: "Professional AI-powered editing! Video background removal, auto subtitles, quality enhancement, color correction - all at incredible speed!",
    features: [
      { ar: "إزالة خلفية الفيديو تلقائياً", en: "Auto video background removal" },
      { ar: "ترجمة وإضافة Subtitles تلقائية", en: "Auto subtitles and translation" },
      { ar: "تحسين جودة الفيديو القديم", en: "Old video quality enhancement" },
      { ar: "تصحيح الألوان والإضاءة", en: "Color and lighting correction" },
      { ar: "تحويل Horizontal لـ Vertical", en: "Horizontal to Vertical conversion" },
      { ar: "إزالة الضوضاء والتشويش", en: "Noise and blur removal" }
    ],
    benefits: [
      { stat: "10X", text: "أسرع من المونتاج التقليدي", textEn: "faster than traditional editing" },
      { stat: "60%", text: "توفير التكلفة", textEn: "cost savings" },
      { stat: "4K", text: "جودة الإخراج", textEn: "output quality" },
      { stat: "99%", text: "دقة الترجمة", textEn: "translation accuracy" }
    ],
    priceOriginal: 3600,
    priceFrom: 2000,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "ai-marketing-campaigns",
    slug: "ai-marketing-campaigns",
    icon: "Megaphone",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500/10",
    nameAr: "حملات تسويقية AI",
    nameEn: "AI Marketing Campaigns",
    shortDescAr: "حملات ذكية تتعلم وتتحسن تلقائياً",
    shortDescEn: "Smart campaigns that learn and improve automatically",
    descriptionAr: "حملات إعلانية مدعومة بالذكاء الاصطناعي! تحليل جمهورك، إنشاء الإعلانات، A/B Testing تلقائي، وتحسين مستمر للأداء. ميزانيتك تصرف بذكاء!",
    descriptionEn: "AI-powered advertising campaigns! Audience analysis, ad creation, automatic A/B Testing, and continuous performance optimization!",
    features: [
      { ar: "تحليل الجمهور المستهدف بالـ AI", en: "AI audience analysis" },
      { ar: "إنشاء نصوص إعلانية ذكية", en: "Smart ad copy generation" },
      { ar: "A/B Testing تلقائي ومستمر", en: "Auto continuous A/B Testing" },
      { ar: "تحسين الميزانية في الوقت الفعلي", en: "Real-time budget optimization" },
      { ar: "تقارير أداء مفصلة", en: "Detailed performance reports" },
      { ar: "توقع النتائج قبل الإطلاق", en: "Pre-launch results prediction" }
    ],
    benefits: [
      { stat: "3X", text: "عائد أعلى على الإعلانات", textEn: "higher ad ROI" },
      { stat: "50%", text: "تكلفة أقل للعميل", textEn: "lower cost per customer" },
      { stat: "24/7", text: "تحسين مستمر", textEn: "continuous optimization" },
      { stat: "AI", text: "ذكاء اصطناعي متقدم", textEn: "advanced AI" }
    ],
    priceOriginal: 9100,
    priceFrom: 5000,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال",
    perMonth: true
  },
  {
    id: "ai-voice-generation",
    slug: "ai-voice-generation",
    icon: "Mic",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-500/10",
    nameAr: "تعليق صوتي AI",
    nameEn: "AI Voice Generation",
    shortDescAr: "أصوات احترافية بالعربي والإنجليزي",
    shortDescEn: "Professional voices in Arabic and English",
    descriptionAr: "تعليقات صوتية احترافية بالذكاء الاصطناعي! أصوات عربية وإنجليزية طبيعية لإعلاناتك، فيديوهاتك، البودكاست. ElevenLabs, PlayHT - الأفضل عالمياً!",
    descriptionEn: "Professional AI voiceovers! Natural Arabic and English voices for your ads, videos, podcasts. ElevenLabs, PlayHT - world's best!",
    features: [
      { ar: "أصوات عربية بلهجات متعددة", en: "Arabic voices with multiple dialects" },
      { ar: "تحكم كامل بالسرعة والنبرة", en: "Full control over speed and tone" },
      { ar: "استنساخ صوتك الخاص", en: "Clone your own voice" },
      { ar: "دعم 50+ لغة", en: "50+ languages support" },
      { ar: "جودة استوديو احترافية", en: "Professional studio quality" },
      { ar: "تسليم فوري", en: "Instant delivery" }
    ],
    benefits: [
      { stat: "80%", text: "توفير تكلفة المعلق", textEn: "voiceover cost savings" },
      { stat: "5 min", text: "تسليم فوري", textEn: "instant delivery" },
      { stat: "50+", text: "لغة متاحة", textEn: "languages available" },
      { stat: "99%", text: "واقعية الصوت", textEn: "voice realism" }
    ],
    priceOriginal: 1200,
    priceFrom: 500,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "ai-video-avatars",
    slug: "ai-video-avatars",
    icon: "User",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-500/10",
    nameAr: "أفاتار فيديو AI",
    nameEn: "AI Video Avatars",
    shortDescAr: "شخصيات AI تتكلم وتقدم محتواك",
    shortDescEn: "AI characters that speak and present your content",
    descriptionAr: "فيديوهات بشخصيات AI تتكلم باسمك! للتدريب، التسويق، خدمة العملاء. HeyGen, Synthesia - شخصيات عربية واقعية تقدم رسالتك!",
    descriptionEn: "Videos with AI characters speaking on your behalf! For training, marketing, customer service. HeyGen, Synthesia - realistic Arabic characters!",
    features: [
      { ar: "شخصيات AI عربية واقعية", en: "Realistic Arabic AI characters" },
      { ar: "تحريك الشفاه متزامن مع الصوت", en: "Lip-sync with voice" },
      { ar: "فيديوهات تدريبية", en: "Training videos" },
      { ar: "رسائل تسويقية مخصصة", en: "Personalized marketing messages" },
      { ar: "Integration مع البوتات", en: "Bot integration" },
      { ar: "تعدد اللغات في نفس الفيديو", en: "Multi-language in same video" }
    ],
    benefits: [
      { stat: "90%", text: "توفير تكلفة التصوير", textEn: "filming cost savings" },
      { stat: "24h", text: "تسليم سريع", textEn: "fast delivery" },
      { stat: "∞", text: "فيديوهات بدون حدود", textEn: "unlimited videos" },
      { stat: "0", text: "حاجة لاستوديو", textEn: "studio needed" }
    ],
    priceOriginal: 4500,
    priceFrom: 2500,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "ai-content-writing",
    slug: "ai-content-writing",
    icon: "FileText",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    nameAr: "كتابة محتوى AI",
    nameEn: "AI Content Writing",
    shortDescAr: "مقالات ونصوص تسويقية محسّنة لـ SEO",
    shortDescEn: "SEO-optimized articles and marketing copy",
    descriptionAr: "محتوى احترافي بالذكاء الاصطناعي! مقالات SEO، وصف منتجات، نصوص إعلانية، إيميلات تسويقية. Claude, GPT-4 مع مراجعة بشرية للجودة!",
    descriptionEn: "Professional AI content! SEO articles, product descriptions, ad copy, marketing emails. Claude, GPT-4 with human quality review!",
    features: [
      { ar: "مقالات SEO محسّنة للترتيب", en: "SEO-optimized ranking articles" },
      { ar: "وصف منتجات جذاب", en: "Attractive product descriptions" },
      { ar: "نصوص إعلانية مقنعة", en: "Persuasive ad copy" },
      { ar: "إيميلات تسويقية", en: "Marketing emails" },
      { ar: "محتوى سوشيال ميديا", en: "Social media content" },
      { ar: "مراجعة بشرية للجودة", en: "Human quality review" }
    ],
    benefits: [
      { stat: "10X", text: "أسرع من الكتابة التقليدية", textEn: "faster than traditional writing" },
      { stat: "SEO", text: "محسّن للترتيب", textEn: "optimized for ranking" },
      { stat: "0%", text: "نسخ أو سرقة", textEn: "plagiarism" },
      { stat: "∞", text: "أفكار إبداعية", textEn: "creative ideas" }
    ],
    priceOriginal: 1800,
    priceFrom: 1000,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "ai-data-analytics",
    slug: "ai-data-analytics",
    icon: "BarChart3",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
    nameAr: "تحليل بيانات AI",
    nameEn: "AI Data Analytics",
    shortDescAr: "تحليلات ذكية وتوقعات دقيقة لعملك",
    shortDescEn: "Smart analytics and accurate predictions for your business",
    descriptionAr: "حوّل بياناتك لذهب! تحليل المبيعات، سلوك العملاء، أداء الحملات. توقعات ذكية وتوصيات عملية لزيادة أرباحك!",
    descriptionEn: "Turn your data into gold! Sales analysis, customer behavior, campaign performance. Smart predictions and actionable recommendations!",
    features: [
      { ar: "تحليل المبيعات والتوقعات", en: "Sales analysis and forecasting" },
      { ar: "تقسيم العملاء الذكي", en: "Smart customer segmentation" },
      { ar: "تحليل أداء الحملات", en: "Campaign performance analysis" },
      { ar: "اكتشاف الفرص المخفية", en: "Hidden opportunity discovery" },
      { ar: "تقارير تفاعلية", en: "Interactive reports" },
      { ar: "توصيات عملية قابلة للتنفيذ", en: "Actionable recommendations" }
    ],
    benefits: [
      { stat: "25%", text: "زيادة في المبيعات", textEn: "sales increase" },
      { stat: "AI", text: "توقعات ذكية", textEn: "smart predictions" },
      { stat: "∞", text: "رؤى مخفية", textEn: "hidden insights" },
      { stat: "ROI", text: "تحسين العائد", textEn: "improved ROI" }
    ],
    priceOriginal: 7800,
    priceFrom: 4000,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  },
  {
    id: "ai-graphic-design",
    slug: "ai-graphic-design",
    icon: "Palette",
    color: "from-fuchsia-500 to-pink-600",
    bgColor: "bg-fuchsia-500/10",
    nameAr: "تصميم جرافيك AI",
    nameEn: "AI Graphic Design",
    shortDescAr: "لوجو، هوية بصرية، وتصاميم احترافية",
    shortDescEn: "Logo, brand identity, and professional designs",
    descriptionAr: "تصاميم احترافية بالذكاء الاصطناعي! لوجوهات، هوية بصرية، بروشورات، كروت أعمال، بوسترات. Adobe Firefly, Canva AI - تصميم بجودة عالمية!",
    descriptionEn: "Professional AI designs! Logos, brand identity, brochures, business cards, posters. Adobe Firefly, Canva AI - world-class design quality!",
    features: [
      { ar: "تصميم لوجوهات فريدة", en: "Unique logo design" },
      { ar: "هوية بصرية متكاملة", en: "Complete brand identity" },
      { ar: "بروشورات وكتالوجات", en: "Brochures and catalogs" },
      { ar: "كروت أعمال وأوراق رسمية", en: "Business cards and stationery" },
      { ar: "تصاميم سوشيال ميديا", en: "Social media designs" },
      { ar: "موكابات احترافية", en: "Professional mockups" }
    ],
    benefits: [
      { stat: "50%", text: "توفير التكلفة", textEn: "cost savings" },
      { stat: "24h", text: "تسليم سريع", textEn: "fast delivery" },
      { stat: "∞", text: "تعديلات مجانية", textEn: "free revisions" },
      { stat: "100%", text: "حقوق ملكية كاملة", textEn: "full ownership" }
    ],
    priceOriginal: 3600,
    priceFrom: 2000,
    priceLabelAr: "ابتداءً من",
    priceLabelEn: "Starting from",
    currency: "ريال"
  }
]

export const whyChooseUs = [
  {
    icon: "Zap",
    titleAr: "نتائج سريعة ومضمونة",
    titleEn: "Guaranteed Fast Results",
    descAr: "بدون وعود فارغة. نتائج ملموسة خلال أسبوع واحد أو نرجع لك فلوسك",
    descEn: "No empty promises. Tangible results within one week or your money back"
  },
  {
    icon: "Shield",
    titleAr: "خبرة سعودية محلية",
    titleEn: "Local Saudi Expertise",
    descAr: "نفهم السوق السعودي، نتكلم لغتك، ونعرف كيف يفكر عملائك",
    descEn: "We understand the Saudi market, speak your language, know how your customers think"
  },
  {
    icon: "HeartHandshake",
    titleAr: "دعم على مدار الساعة باللغة العربية",
    titleEn: "24/7 Arabic Support",
    descAr: "فريق دعم سعودي متاح دايماً. مشكلتك تنحل فوراً، أي وقت",
    descEn: "Saudi support team always available. Your problem solved instantly, anytime"
  },
  {
    icon: "TrendingUp",
    titleAr: "أسعار تناسب الجميع",
    titleEn: "Prices for Everyone",
    descAr: "حلول متكاملة بأسعار منافسة. ابدأ صغير وتوسع معنا",
    descEn: "Complete solutions at competitive prices. Start small and grow with us"
  }
]
