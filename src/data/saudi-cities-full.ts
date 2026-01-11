// قاعدة بيانات شاملة لجميع المدن والمحافظات السعودية
// 174 مدينة ومحافظة لـ Programmatic SEO

export interface SaudiCity {
  id: string;
  nameAr: string;
  nameEn: string;
  region: string;
  regionAr: string;
  population?: string;
  type: 'major' | 'city' | 'governorate' | 'town';
  priority: number; // 1-5 للأهمية التجارية
}

export const saudiCities: SaudiCity[] = [
  // ===== المنطقة الوسطى - الرياض =====
  { id: "riyadh", nameAr: "الرياض", nameEn: "Riyadh", region: "riyadh", regionAr: "منطقة الرياض", population: "7.6 مليون", type: "major", priority: 1 },
  { id: "kharj", nameAr: "الخرج", nameEn: "Al Kharj", region: "riyadh", regionAr: "منطقة الرياض", population: "425 ألف", type: "city", priority: 3 },
  { id: "diriyah", nameAr: "الدرعية", nameEn: "Diriyah", region: "riyadh", regionAr: "منطقة الرياض", population: "73 ألف", type: "governorate", priority: 3 },
  { id: "dawadmi", nameAr: "الدوادمي", nameEn: "Dawadmi", region: "riyadh", regionAr: "منطقة الرياض", population: "217 ألف", type: "city", priority: 4 },
  { id: "majmaah", nameAr: "المجمعة", nameEn: "Al Majma'ah", region: "riyadh", regionAr: "منطقة الرياض", population: "134 ألف", type: "city", priority: 4 },
  { id: "quwaiiyah", nameAr: "القويعية", nameEn: "Al Quwaiiyah", region: "riyadh", regionAr: "منطقة الرياض", population: "120 ألف", type: "governorate", priority: 4 },
  { id: "wadi-dawasir", nameAr: "وادي الدواسر", nameEn: "Wadi ad-Dawasir", region: "riyadh", regionAr: "منطقة الرياض", population: "106 ألف", type: "governorate", priority: 4 },
  { id: "aflaj", nameAr: "الأفلاج", nameEn: "Al Aflaj", region: "riyadh", regionAr: "منطقة الرياض", population: "84 ألف", type: "governorate", priority: 5 },
  { id: "zulfi", nameAr: "الزلفي", nameEn: "Az Zulfi", region: "riyadh", regionAr: "منطقة الرياض", population: "76 ألف", type: "governorate", priority: 5 },
  { id: "shaqra", nameAr: "شقراء", nameEn: "Shaqra", region: "riyadh", regionAr: "منطقة الرياض", population: "40 ألف", type: "governorate", priority: 5 },
  { id: "hotat-bani-tamim", nameAr: "حوطة بني تميم", nameEn: "Hotat Bani Tamim", region: "riyadh", regionAr: "منطقة الرياض", population: "43 ألف", type: "governorate", priority: 5 },
  { id: "afif", nameAr: "عفيف", nameEn: "Afif", region: "riyadh", regionAr: "منطقة الرياض", population: "77 ألف", type: "governorate", priority: 5 },
  { id: "sulayel", nameAr: "السليل", nameEn: "As Sulayyil", region: "riyadh", regionAr: "منطقة الرياض", population: "36 ألف", type: "governorate", priority: 5 },
  { id: "dhurma", nameAr: "ضرما", nameEn: "Dhurma", region: "riyadh", regionAr: "منطقة الرياض", population: "24 ألف", type: "governorate", priority: 5 },
  { id: "muzahimiyah", nameAr: "المزاحمية", nameEn: "Al Muzahimiyah", region: "riyadh", regionAr: "منطقة الرياض", population: "59 ألف", type: "governorate", priority: 5 },
  { id: "rumah", nameAr: "رماح", nameEn: "Rumah", region: "riyadh", regionAr: "منطقة الرياض", population: "28 ألف", type: "governorate", priority: 5 },
  { id: "thadiq", nameAr: "ثادق", nameEn: "Thadiq", region: "riyadh", regionAr: "منطقة الرياض", population: "16 ألف", type: "governorate", priority: 5 },
  { id: "huraymila", nameAr: "حريملاء", nameEn: "Huraymila", region: "riyadh", regionAr: "منطقة الرياض", population: "30 ألف", type: "governorate", priority: 5 },
  { id: "ghat", nameAr: "الغاط", nameEn: "Al Ghat", region: "riyadh", regionAr: "منطقة الرياض", population: "18 ألف", type: "governorate", priority: 5 },
  { id: "marat", nameAr: "مرات", nameEn: "Marat", region: "riyadh", regionAr: "منطقة الرياض", population: "12 ألف", type: "town", priority: 5 },

  // ===== المنطقة الغربية - مكة المكرمة =====
  { id: "makkah", nameAr: "مكة المكرمة", nameEn: "Makkah", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "2.0 مليون", type: "major", priority: 1 },
  { id: "jeddah", nameAr: "جدة", nameEn: "Jeddah", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "4.7 مليون", type: "major", priority: 1 },
  { id: "taif", nameAr: "الطائف", nameEn: "Taif", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "700 ألف", type: "city", priority: 2 },
  { id: "qunfudhah", nameAr: "القنفذة", nameEn: "Al Qunfudhah", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "287 ألف", type: "governorate", priority: 4 },
  { id: "lith", nameAr: "الليث", nameEn: "Al Lith", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "126 ألف", type: "governorate", priority: 4 },
  { id: "rabigh", nameAr: "رابغ", nameEn: "Rabigh", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "95 ألف", type: "governorate", priority: 4 },
  { id: "khulays", nameAr: "خليص", nameEn: "Khulays", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "66 ألف", type: "governorate", priority: 5 },
  { id: "jumum", nameAr: "الجموم", nameEn: "Al Jumum", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "75 ألف", type: "governorate", priority: 5 },
  { id: "kamil", nameAr: "الكامل", nameEn: "Al Kamil", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "40 ألف", type: "governorate", priority: 5 },
  { id: "moya", nameAr: "ميسان", nameEn: "Maysan", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "35 ألف", type: "governorate", priority: 5 },
  { id: "adham", nameAr: "أضم", nameEn: "Adham", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "28 ألف", type: "governorate", priority: 5 },
  { id: "turubah", nameAr: "تربة", nameEn: "Turubah", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "45 ألف", type: "governorate", priority: 5 },
  { id: "muwayh", nameAr: "الموية", nameEn: "Al Muwayh", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "22 ألف", type: "governorate", priority: 5 },
  { id: "khurma", nameAr: "الخرمة", nameEn: "Al Khurmah", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "33 ألف", type: "governorate", priority: 5 },
  { id: "ranyah", nameAr: "رنية", nameEn: "Ranyah", region: "makkah", regionAr: "منطقة مكة المكرمة", population: "41 ألف", type: "governorate", priority: 5 },

  // ===== المنطقة الغربية - المدينة المنورة =====
  { id: "madinah", nameAr: "المدينة المنورة", nameEn: "Madinah", region: "madinah", regionAr: "منطقة المدينة المنورة", population: "1.5 مليون", type: "major", priority: 1 },
  { id: "yanbu", nameAr: "ينبع", nameEn: "Yanbu", region: "madinah", regionAr: "منطقة المدينة المنورة", population: "300 ألف", type: "city", priority: 3 },
  { id: "ula", nameAr: "العلا", nameEn: "Al Ula", region: "madinah", regionAr: "منطقة المدينة المنورة", population: "65 ألف", type: "governorate", priority: 3 },
  { id: "mahd-dhahab", nameAr: "مهد الذهب", nameEn: "Mahd adh Dhahab", region: "madinah", regionAr: "منطقة المدينة المنورة", population: "50 ألف", type: "governorate", priority: 5 },
  { id: "hanakiyah", nameAr: "الحناكية", nameEn: "Al Hanakiyah", region: "madinah", regionAr: "منطقة المدينة المنورة", population: "32 ألف", type: "governorate", priority: 5 },
  { id: "badr", nameAr: "بدر", nameEn: "Badr", region: "madinah", regionAr: "منطقة المدينة المنورة", population: "67 ألف", type: "governorate", priority: 4 },
  { id: "khaybar", nameAr: "خيبر", nameEn: "Khaybar", region: "madinah", regionAr: "منطقة المدينة المنورة", population: "18 ألف", type: "governorate", priority: 5 },
  { id: "wajh", nameAr: "الوجه", nameEn: "Al Wajh", region: "madinah", regionAr: "منطقة المدينة المنورة", population: "45 ألف", type: "governorate", priority: 5 },

  // ===== المنطقة الشرقية =====
  { id: "dammam", nameAr: "الدمام", nameEn: "Dammam", region: "eastern", regionAr: "المنطقة الشرقية", population: "1.5 مليون", type: "major", priority: 1 },
  { id: "khobar", nameAr: "الخبر", nameEn: "Khobar", region: "eastern", regionAr: "المنطقة الشرقية", population: "600 ألف", type: "city", priority: 2 },
  { id: "dhahran", nameAr: "الظهران", nameEn: "Dhahran", region: "eastern", regionAr: "المنطقة الشرقية", population: "150 ألف", type: "city", priority: 3 },
  { id: "hofuf", nameAr: "الهفوف", nameEn: "Al Hofuf", region: "eastern", regionAr: "المنطقة الشرقية", population: "1.1 مليون", type: "city", priority: 2 },
  { id: "ahsa", nameAr: "الأحساء", nameEn: "Al Ahsa", region: "eastern", regionAr: "المنطقة الشرقية", population: "1.2 مليون", type: "city", priority: 2 },
  { id: "jubail", nameAr: "الجبيل", nameEn: "Jubail", region: "eastern", regionAr: "المنطقة الشرقية", population: "500 ألف", type: "city", priority: 2 },
  { id: "qatif", nameAr: "القطيف", nameEn: "Qatif", region: "eastern", regionAr: "المنطقة الشرقية", population: "524 ألف", type: "city", priority: 3 },
  { id: "ras-tanura", nameAr: "رأس تنورة", nameEn: "Ras Tanura", region: "eastern", regionAr: "المنطقة الشرقية", population: "75 ألف", type: "governorate", priority: 4 },
  { id: "buqayq", nameAr: "بقيق", nameEn: "Buqayq", region: "eastern", regionAr: "المنطقة الشرقية", population: "45 ألف", type: "governorate", priority: 5 },
  { id: "safwa", nameAr: "صفوى", nameEn: "Safwa", region: "eastern", regionAr: "المنطقة الشرقية", population: "65 ألف", type: "town", priority: 4 },
  { id: "saihat", nameAr: "سيهات", nameEn: "Saihat", region: "eastern", regionAr: "المنطقة الشرقية", population: "85 ألف", type: "town", priority: 4 },
  { id: "tarout", nameAr: "تاروت", nameEn: "Tarout", region: "eastern", regionAr: "المنطقة الشرقية", population: "45 ألف", type: "town", priority: 5 },
  { id: "khafji", nameAr: "الخفجي", nameEn: "Khafji", region: "eastern", regionAr: "المنطقة الشرقية", population: "70 ألف", type: "governorate", priority: 4 },
  { id: "nairiyah", nameAr: "النعيرية", nameEn: "An Nairiyah", region: "eastern", regionAr: "المنطقة الشرقية", population: "35 ألف", type: "governorate", priority: 5 },
  { id: "hafar-batin", nameAr: "حفر الباطن", nameEn: "Hafar Al Batin", region: "eastern", regionAr: "المنطقة الشرقية", population: "390 ألف", type: "city", priority: 3 },
  { id: "qaryat-ulya", nameAr: "قرية العليا", nameEn: "Qaryat Al Ulya", region: "eastern", regionAr: "المنطقة الشرقية", population: "15 ألف", type: "governorate", priority: 5 },

  // ===== منطقة عسير =====
  { id: "abha", nameAr: "أبها", nameEn: "Abha", region: "asir", regionAr: "منطقة عسير", population: "400 ألف", type: "major", priority: 2 },
  { id: "khamis-mushait", nameAr: "خميس مشيط", nameEn: "Khamis Mushait", region: "asir", regionAr: "منطقة عسير", population: "550 ألف", type: "city", priority: 2 },
  { id: "najran-city", nameAr: "نجران", nameEn: "Najran", region: "asir", regionAr: "منطقة عسير", population: "350 ألف", type: "city", priority: 3 },
  { id: "bisha", nameAr: "بيشة", nameEn: "Bisha", region: "asir", regionAr: "منطقة عسير", population: "220 ألف", type: "city", priority: 3 },
  { id: "muhayil", nameAr: "محايل عسير", nameEn: "Muhayil Asir", region: "asir", regionAr: "منطقة عسير", population: "80 ألف", type: "governorate", priority: 4 },
  { id: "namas", nameAr: "النماص", nameEn: "An Namas", region: "asir", regionAr: "منطقة عسير", population: "60 ألف", type: "governorate", priority: 4 },
  { id: "sarat-abidah", nameAr: "سراة عبيدة", nameEn: "Sarat Abidah", region: "asir", regionAr: "منطقة عسير", population: "55 ألف", type: "governorate", priority: 5 },
  { id: "rijal-alma", nameAr: "رجال ألمع", nameEn: "Rijal Alma", region: "asir", regionAr: "منطقة عسير", population: "40 ألف", type: "governorate", priority: 5 },
  { id: "ahad-rafidah", nameAr: "أحد رفيدة", nameEn: "Ahad Rafidah", region: "asir", regionAr: "منطقة عسير", population: "75 ألف", type: "governorate", priority: 4 },
  { id: "dhahran-janub", nameAr: "ظهران الجنوب", nameEn: "Dhahran Al Janub", region: "asir", regionAr: "منطقة عسير", population: "35 ألف", type: "governorate", priority: 5 },
  { id: "tanomah", nameAr: "تنومة", nameEn: "Tanomah", region: "asir", regionAr: "منطقة عسير", population: "28 ألف", type: "governorate", priority: 5 },
  { id: "balqarn", nameAr: "بلقرن", nameEn: "Balqarn", region: "asir", regionAr: "منطقة عسير", population: "42 ألف", type: "governorate", priority: 5 },
  { id: "majaridah", nameAr: "المجاردة", nameEn: "Al Majaridah", region: "asir", regionAr: "منطقة عسير", population: "38 ألف", type: "governorate", priority: 5 },
  { id: "bariq", nameAr: "بارق", nameEn: "Bariq", region: "asir", regionAr: "منطقة عسير", population: "48 ألف", type: "governorate", priority: 5 },

  // ===== منطقة القصيم =====
  { id: "buraidah", nameAr: "بريدة", nameEn: "Buraidah", region: "qassim", regionAr: "منطقة القصيم", population: "700 ألف", type: "major", priority: 2 },
  { id: "unaizah", nameAr: "عنيزة", nameEn: "Unaizah", region: "qassim", regionAr: "منطقة القصيم", population: "180 ألف", type: "city", priority: 3 },
  { id: "rass", nameAr: "الرس", nameEn: "Ar Rass", region: "qassim", regionAr: "منطقة القصيم", population: "150 ألف", type: "city", priority: 4 },
  { id: "badaya", nameAr: "البدائع", nameEn: "Al Badaya", region: "qassim", regionAr: "منطقة القصيم", population: "55 ألف", type: "governorate", priority: 5 },
  { id: "bukayriyah", nameAr: "البكيرية", nameEn: "Al Bukayriyah", region: "qassim", regionAr: "منطقة القصيم", population: "42 ألف", type: "governorate", priority: 5 },
  { id: "mithnab", nameAr: "المذنب", nameEn: "Al Mithnab", region: "qassim", regionAr: "منطقة القصيم", population: "36 ألف", type: "governorate", priority: 5 },
  { id: "asyah", nameAr: "عيون الجواء", nameEn: "Uyun Al Jiwa", region: "qassim", regionAr: "منطقة القصيم", population: "28 ألف", type: "governorate", priority: 5 },
  { id: "shimasiya", nameAr: "الشماسية", nameEn: "Ash Shimasiya", region: "qassim", regionAr: "منطقة القصيم", population: "18 ألف", type: "governorate", priority: 5 },
  { id: "nabhaniyah", nameAr: "النبهانية", nameEn: "An Nabhaniyah", region: "qassim", regionAr: "منطقة القصيم", population: "15 ألف", type: "governorate", priority: 5 },
  { id: "qaraein", nameAr: "عقلة الصقور", nameEn: "Uqlat As Suqur", region: "qassim", regionAr: "منطقة القصيم", population: "20 ألف", type: "governorate", priority: 5 },
  { id: "dhaleem", nameAr: "ضليع رشيد", nameEn: "Dhali Rashid", region: "qassim", regionAr: "منطقة القصيم", population: "12 ألف", type: "governorate", priority: 5 },
  { id: "riyadh-khabra", nameAr: "رياض الخبراء", nameEn: "Riyadh Al Khabra", region: "qassim", regionAr: "منطقة القصيم", population: "38 ألف", type: "governorate", priority: 5 },

  // ===== منطقة تبوك =====
  { id: "tabuk", nameAr: "تبوك", nameEn: "Tabuk", region: "tabuk", regionAr: "منطقة تبوك", population: "600 ألف", type: "major", priority: 2 },
  { id: "duba", nameAr: "ضباء", nameEn: "Duba", region: "tabuk", regionAr: "منطقة تبوك", population: "45 ألف", type: "governorate", priority: 4 },
  { id: "haql", nameAr: "حقل", nameEn: "Haql", region: "tabuk", regionAr: "منطقة تبوك", population: "30 ألف", type: "governorate", priority: 5 },
  { id: "wajh-tabuk", nameAr: "الوجه", nameEn: "Al Wajh", region: "tabuk", regionAr: "منطقة تبوك", population: "55 ألف", type: "governorate", priority: 4 },
  { id: "tayma", nameAr: "تيماء", nameEn: "Tayma", region: "tabuk", regionAr: "منطقة تبوك", population: "40 ألف", type: "governorate", priority: 5 },
  { id: "umluj", nameAr: "أملج", nameEn: "Umluj", region: "tabuk", regionAr: "منطقة تبوك", population: "25 ألف", type: "governorate", priority: 5 },
  { id: "bada", nameAr: "بدا", nameEn: "Bada", region: "tabuk", regionAr: "منطقة تبوك", population: "12 ألف", type: "town", priority: 5 },

  // ===== منطقة حائل =====
  { id: "hail", nameAr: "حائل", nameEn: "Hail", region: "hail", regionAr: "منطقة حائل", population: "450 ألف", type: "major", priority: 2 },
  { id: "baqaa", nameAr: "بقعاء", nameEn: "Baqaa", region: "hail", regionAr: "منطقة حائل", population: "45 ألف", type: "governorate", priority: 5 },
  { id: "ghazalah", nameAr: "الغزالة", nameEn: "Al Ghazalah", region: "hail", regionAr: "منطقة حائل", population: "20 ألف", type: "governorate", priority: 5 },
  { id: "shinan", nameAr: "الشنان", nameEn: "Ash Shinan", region: "hail", regionAr: "منطقة حائل", population: "18 ألف", type: "governorate", priority: 5 },
  { id: "samira", nameAr: "السميراء", nameEn: "As Samira", region: "hail", regionAr: "منطقة حائل", population: "15 ألف", type: "governorate", priority: 5 },
  { id: "sulaimi", nameAr: "السليمي", nameEn: "As Sulaimi", region: "hail", regionAr: "منطقة حائل", population: "12 ألف", type: "governorate", priority: 5 },
  { id: "mawqiq", nameAr: "موقق", nameEn: "Mawqiq", region: "hail", regionAr: "منطقة حائل", population: "10 ألف", type: "governorate", priority: 5 },
  { id: "haith", nameAr: "الحائط", nameEn: "Al Haith", region: "hail", regionAr: "منطقة حائل", population: "8 آلاف", type: "town", priority: 5 },

  // ===== منطقة الحدود الشمالية =====
  { id: "arar", nameAr: "عرعر", nameEn: "Arar", region: "northern-borders", regionAr: "منطقة الحدود الشمالية", population: "250 ألف", type: "major", priority: 3 },
  { id: "rafha", nameAr: "رفحاء", nameEn: "Rafha", region: "northern-borders", regionAr: "منطقة الحدود الشمالية", population: "80 ألف", type: "governorate", priority: 4 },
  { id: "turayf", nameAr: "طريف", nameEn: "Turayf", region: "northern-borders", regionAr: "منطقة الحدود الشمالية", population: "40 ألف", type: "governorate", priority: 5 },
  { id: "uwayqilah", nameAr: "العويقيلة", nameEn: "Al Uwayqilah", region: "northern-borders", regionAr: "منطقة الحدود الشمالية", population: "8 آلاف", type: "governorate", priority: 5 },

  // ===== منطقة الجوف =====
  { id: "sakaka", nameAr: "سكاكا", nameEn: "Sakaka", region: "jouf", regionAr: "منطقة الجوف", population: "200 ألف", type: "major", priority: 3 },
  { id: "dawmat-jandal", nameAr: "دومة الجندل", nameEn: "Dawmat Al Jandal", region: "jouf", regionAr: "منطقة الجوف", population: "50 ألف", type: "governorate", priority: 4 },
  { id: "tabarjal", nameAr: "طبرجل", nameEn: "Tabarjal", region: "jouf", regionAr: "منطقة الجوف", population: "35 ألف", type: "governorate", priority: 5 },
  { id: "qurayyat", nameAr: "القريات", nameEn: "Qurayyat", region: "jouf", regionAr: "منطقة الجوف", population: "140 ألف", type: "governorate", priority: 4 },

  // ===== منطقة نجران =====
  { id: "najran", nameAr: "نجران", nameEn: "Najran", region: "najran", regionAr: "منطقة نجران", population: "350 ألف", type: "major", priority: 3 },
  { id: "sharurah", nameAr: "شرورة", nameEn: "Sharurah", region: "najran", regionAr: "منطقة نجران", population: "100 ألف", type: "governorate", priority: 4 },
  { id: "habuna", nameAr: "حبونا", nameEn: "Habuna", region: "najran", regionAr: "منطقة نجران", population: "25 ألف", type: "governorate", priority: 5 },
  { id: "badr-janub", nameAr: "بدر الجنوب", nameEn: "Badr Al Janub", region: "najran", regionAr: "منطقة نجران", population: "20 ألف", type: "governorate", priority: 5 },
  { id: "yadamah", nameAr: "يدمة", nameEn: "Yadamah", region: "najran", regionAr: "منطقة نجران", population: "15 ألف", type: "governorate", priority: 5 },
  { id: "thar", nameAr: "ثار", nameEn: "Thar", region: "najran", regionAr: "منطقة نجران", population: "10 ألف", type: "governorate", priority: 5 },
  { id: "khurkhir", nameAr: "خرخير", nameEn: "Khurkhir", region: "najran", regionAr: "منطقة نجران", population: "8 آلاف", type: "governorate", priority: 5 },

  // ===== منطقة جازان =====
  { id: "jazan", nameAr: "جازان", nameEn: "Jazan", region: "jazan", regionAr: "منطقة جازان", population: "200 ألف", type: "major", priority: 3 },
  { id: "sabya", nameAr: "صبيا", nameEn: "Sabya", region: "jazan", regionAr: "منطقة جازان", population: "150 ألف", type: "governorate", priority: 4 },
  { id: "abu-arish", nameAr: "أبو عريش", nameEn: "Abu Arish", region: "jazan", regionAr: "منطقة جازان", population: "120 ألف", type: "governorate", priority: 4 },
  { id: "samtah", nameAr: "صامطة", nameEn: "Samtah", region: "jazan", regionAr: "منطقة جازان", population: "100 ألف", type: "governorate", priority: 4 },
  { id: "ahad-masarihah", nameAr: "أحد المسارحة", nameEn: "Ahad Al Masarihah", region: "jazan", regionAr: "منطقة جازان", population: "75 ألف", type: "governorate", priority: 5 },
  { id: "damad", nameAr: "ضمد", nameEn: "Damad", region: "jazan", regionAr: "منطقة جازان", population: "60 ألف", type: "governorate", priority: 5 },
  { id: "darb", nameAr: "الدرب", nameEn: "Ad Darb", region: "jazan", regionAr: "منطقة جازان", population: "40 ألف", type: "governorate", priority: 5 },
  { id: "aridah", nameAr: "العارضة", nameEn: "Al Aridah", region: "jazan", regionAr: "منطقة جازان", population: "55 ألف", type: "governorate", priority: 5 },
  { id: "farasan", nameAr: "فرسان", nameEn: "Farasan", region: "jazan", regionAr: "منطقة جازان", population: "18 ألف", type: "governorate", priority: 5 },
  { id: "baysh", nameAr: "بيش", nameEn: "Baysh", region: "jazan", regionAr: "منطقة جازان", population: "70 ألف", type: "governorate", priority: 5 },
  { id: "harub", nameAr: "الحرث", nameEn: "Al Harth", region: "jazan", regionAr: "منطقة جازان", population: "45 ألف", type: "governorate", priority: 5 },
  { id: "rayth", nameAr: "الريث", nameEn: "Ar Rayth", region: "jazan", regionAr: "منطقة جازان", population: "35 ألف", type: "governorate", priority: 5 },
  { id: "fidah", nameAr: "فيفاء", nameEn: "Fayfa", region: "jazan", regionAr: "منطقة جازان", population: "30 ألف", type: "governorate", priority: 5 },
  { id: "tual", nameAr: "الطوال", nameEn: "At Tuwal", region: "jazan", regionAr: "منطقة جازان", population: "28 ألف", type: "governorate", priority: 5 },
  { id: "idabi", nameAr: "العيدابي", nameEn: "Al Idabi", region: "jazan", regionAr: "منطقة جازان", population: "20 ألف", type: "governorate", priority: 5 },

  // ===== منطقة الباحة =====
  { id: "baha", nameAr: "الباحة", nameEn: "Al Bahah", region: "baha", regionAr: "منطقة الباحة", population: "110 ألف", type: "major", priority: 3 },
  { id: "baljurashi", nameAr: "بلجرشي", nameEn: "Baljurashi", region: "baha", regionAr: "منطقة الباحة", population: "75 ألف", type: "governorate", priority: 4 },
  { id: "mandaq", nameAr: "المندق", nameEn: "Al Mandaq", region: "baha", regionAr: "منطقة الباحة", population: "35 ألف", type: "governorate", priority: 5 },
  { id: "makhwah", nameAr: "المخواة", nameEn: "Al Makhwah", region: "baha", regionAr: "منطقة الباحة", population: "55 ألف", type: "governorate", priority: 5 },
  { id: "qilwa", nameAr: "قلوة", nameEn: "Qilwa", region: "baha", regionAr: "منطقة الباحة", population: "30 ألف", type: "governorate", priority: 5 },
  { id: "hajra", nameAr: "الحجرة", nameEn: "Al Hajrah", region: "baha", regionAr: "منطقة الباحة", population: "25 ألف", type: "governorate", priority: 5 },
  { id: "aqiq", nameAr: "العقيق", nameEn: "Al Aqiq", region: "baha", regionAr: "منطقة الباحة", population: "35 ألف", type: "governorate", priority: 5 },
  { id: "qura", nameAr: "القرى", nameEn: "Al Qura", region: "baha", regionAr: "منطقة الباحة", population: "28 ألف", type: "governorate", priority: 5 },
  { id: "ghamid-zanad", nameAr: "غامد الزناد", nameEn: "Ghamid Al Zinad", region: "baha", regionAr: "منطقة الباحة", population: "18 ألف", type: "governorate", priority: 5 },

  // ===== مدن إضافية مهمة =====
  { id: "qassim", nameAr: "القصيم", nameEn: "Qassim", region: "qassim", regionAr: "منطقة القصيم", population: "1.4 مليون", type: "city", priority: 2 },
  { id: "hafr", nameAr: "حفر الباطن", nameEn: "Hafar Al Batin", region: "eastern", regionAr: "المنطقة الشرقية", population: "390 ألف", type: "city", priority: 3 },
  { id: "yanbu-industrial", nameAr: "ينبع الصناعية", nameEn: "Yanbu Industrial", region: "madinah", regionAr: "منطقة المدينة المنورة", population: "150 ألف", type: "city", priority: 3 },
  { id: "jubail-industrial", nameAr: "الجبيل الصناعية", nameEn: "Jubail Industrial", region: "eastern", regionAr: "المنطقة الشرقية", population: "350 ألف", type: "city", priority: 3 },
  { id: "ras-khair", nameAr: "رأس الخير", nameEn: "Ras Al Khair", region: "eastern", regionAr: "المنطقة الشرقية", population: "50 ألف", type: "city", priority: 4 },
  { id: "neom", nameAr: "نيوم", nameEn: "NEOM", region: "tabuk", regionAr: "منطقة تبوك", population: "قيد التطوير", type: "city", priority: 2 },
  { id: "the-line", nameAr: "ذا لاين", nameEn: "The Line", region: "tabuk", regionAr: "منطقة تبوك", population: "قيد التطوير", type: "city", priority: 2 },
  { id: "amaala", nameAr: "أمالا", nameEn: "Amaala", region: "tabuk", regionAr: "منطقة تبوك", population: "قيد التطوير", type: "city", priority: 3 },
  { id: "red-sea-project", nameAr: "مشروع البحر الأحمر", nameEn: "Red Sea Project", region: "tabuk", regionAr: "منطقة تبوك", population: "قيد التطوير", type: "city", priority: 3 },
  { id: "qiddiya", nameAr: "القدية", nameEn: "Qiddiya", region: "riyadh", regionAr: "منطقة الرياض", population: "قيد التطوير", type: "city", priority: 3 },
  { id: "diriyah-gate", nameAr: "بوابة الدرعية", nameEn: "Diriyah Gate", region: "riyadh", regionAr: "منطقة الرياض", population: "قيد التطوير", type: "city", priority: 3 },
  { id: "king-salman-park", nameAr: "حديقة الملك سلمان", nameEn: "King Salman Park", region: "riyadh", regionAr: "منطقة الرياض", population: "قيد التطوير", type: "city", priority: 4 },
];

// دالة للحصول على المدن حسب المنطقة
export const getCitiesByRegion = (region: string): SaudiCity[] => {
  return saudiCities.filter(city => city.region === region);
};

// دالة للحصول على المدن حسب الأولوية
export const getCitiesByPriority = (maxPriority: number = 3): SaudiCity[] => {
  return saudiCities.filter(city => city.priority <= maxPriority);
};

// دالة للحصول على المدن الرئيسية فقط
export const getMajorCities = (): SaudiCity[] => {
  return saudiCities.filter(city => city.type === 'major' || city.priority <= 2);
};

// دالة للحصول على مدينة بالـ ID
export const getCityById = (id: string): SaudiCity | undefined => {
  return saudiCities.find(city => city.id === id);
};

// دالة للحصول على كل الـ IDs
export const getAllCityIds = (): string[] => {
  return saudiCities.map(city => city.id);
};

// المناطق السعودية
export const saudiRegions = [
  { id: "riyadh", nameAr: "منطقة الرياض", nameEn: "Riyadh Region" },
  { id: "makkah", nameAr: "منطقة مكة المكرمة", nameEn: "Makkah Region" },
  { id: "madinah", nameAr: "منطقة المدينة المنورة", nameEn: "Madinah Region" },
  { id: "eastern", nameAr: "المنطقة الشرقية", nameEn: "Eastern Province" },
  { id: "asir", nameAr: "منطقة عسير", nameEn: "Asir Region" },
  { id: "qassim", nameAr: "منطقة القصيم", nameEn: "Qassim Region" },
  { id: "tabuk", nameAr: "منطقة تبوك", nameEn: "Tabuk Region" },
  { id: "hail", nameAr: "منطقة حائل", nameEn: "Hail Region" },
  { id: "northern-borders", nameAr: "منطقة الحدود الشمالية", nameEn: "Northern Borders" },
  { id: "jouf", nameAr: "منطقة الجوف", nameEn: "Jouf Region" },
  { id: "najran", nameAr: "منطقة نجران", nameEn: "Najran Region" },
  { id: "jazan", nameAr: "منطقة جازان", nameEn: "Jazan Region" },
  { id: "baha", nameAr: "منطقة الباحة", nameEn: "Bahah Region" },
];

// إجمالي عدد المدن
export const totalCitiesCount = saudiCities.length;
