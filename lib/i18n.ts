export type Language = "en" | "hi" | "pa"

export interface Translations {
  // Common
  welcome: string
  loading: string
  error: string
  success: string
  cancel: string
  save: string
  delete: string
  edit: string
  back: string
  next: string
  previous: string
  search: string
  filter: string

  // Navigation
  home: string
  dashboard: string
  lessons: string
  progress: string
  achievements: string
  settings: string
  logout: string
  login: string
  signup: string

  // User roles
  student: string
  teacher: string
  admin: string

  // Platform
  platformName: string
  platformDescription: string
  offlineFirst: string
  multiLanguage: string
  interactiveContent: string

  // Student interface
  myLessons: string
  startLesson: string
  continueLesson: string
  completeLesson: string
  lessonCompleted: string
  overallProgress: string
  recentActivity: string

  // Teacher interface
  studentProgress: string
  classOverview: string
  topPerformers: string
  generateReport: string

  // Admin interface
  contentLibrary: string
  userManagement: string
  platformSettings: string
  uploadContent: string

  // Authentication
  emailAddress: string
  password: string
  confirmPassword: string
  fullName: string
  preferredLanguage: string
  createAccount: string
  signIn: string
  dontHaveAccount: string
  alreadyHaveAccount: string

  // Lessons
  beginner: string
  intermediate: string
  advanced: string
  video: string
  interactive: string
  quiz: string
  epub: string

  // Categories
  digitalLiteracy: string
  mathematics: string
  language: string
  science: string
}

const translations: Record<Language, Translations> = {
  en: {
    // Common
    welcome: "Welcome",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    back: "Back",
    next: "Next",
    previous: "Previous",
    search: "Search",
    filter: "Filter",

    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    lessons: "Lessons",
    progress: "Progress",
    achievements: "Achievements",
    settings: "Settings",
    logout: "Logout",
    login: "Login",
    signup: "Sign Up",

    // User roles
    student: "Student",
    teacher: "Teacher",
    admin: "Administrator",

    // Platform
    platformName: "Nabha Learning",
    platformDescription: "Digital Education Platform",
    offlineFirst: "Offline First",
    multiLanguage: "Multi-Language",
    interactiveContent: "Interactive Content",

    // Student interface
    myLessons: "My Lessons",
    startLesson: "Start Lesson",
    continueLesson: "Continue Lesson",
    completeLesson: "Complete Lesson",
    lessonCompleted: "Lesson Completed",
    overallProgress: "Overall Progress",
    recentActivity: "Recent Activity",

    // Teacher interface
    studentProgress: "Student Progress",
    classOverview: "Class Overview",
    topPerformers: "Top Performers",
    generateReport: "Generate Report",

    // Admin interface
    contentLibrary: "Content Library",
    userManagement: "User Management",
    platformSettings: "Platform Settings",
    uploadContent: "Upload Content",

    // Authentication
    emailAddress: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    fullName: "Full Name",
    preferredLanguage: "Preferred Language",
    createAccount: "Create Account",
    signIn: "Sign In",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",

    // Lessons
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    video: "Video",
    interactive: "Interactive",
    quiz: "Quiz",
    epub: "E-Book",

    // Categories
    digitalLiteracy: "Digital Literacy",
    mathematics: "Mathematics",
    language: "Language",
    science: "Science",
  },

  hi: {
    // Common
    welcome: "स्वागत है",
    loading: "लोड हो रहा है...",
    error: "त्रुटि",
    success: "सफलता",
    cancel: "रद्द करें",
    save: "सहेजें",
    delete: "हटाएं",
    edit: "संपादित करें",
    back: "वापस",
    next: "अगला",
    previous: "पिछला",
    search: "खोजें",
    filter: "फ़िल्टर",

    // Navigation
    home: "होम",
    dashboard: "डैशबोर्ड",
    lessons: "पाठ",
    progress: "प्रगति",
    achievements: "उपलब्धियां",
    settings: "सेटिंग्स",
    logout: "लॉगआउट",
    login: "लॉगिन",
    signup: "साइन अप",

    // User roles
    student: "छात्र",
    teacher: "शिक्षक",
    admin: "प्रशासक",

    // Platform
    platformName: "नाभा लर्निंग",
    platformDescription: "डिजिटल शिक्षा मंच",
    offlineFirst: "ऑफलाइन फर्स्ट",
    multiLanguage: "बहु-भाषा",
    interactiveContent: "इंटरैक्टिव सामग्री",

    // Student interface
    myLessons: "मेरे पाठ",
    startLesson: "पाठ शुरू करें",
    continueLesson: "पाठ जारी रखें",
    completeLesson: "पाठ पूरा करें",
    lessonCompleted: "पाठ पूरा हुआ",
    overallProgress: "समग्र प्रगति",
    recentActivity: "हाल की गतिविधि",

    // Teacher interface
    studentProgress: "छात्र प्रगति",
    classOverview: "कक्षा अवलोकन",
    topPerformers: "शीर्ष प्रदर्शनकर्ता",
    generateReport: "रिपोर्ट बनाएं",

    // Admin interface
    contentLibrary: "सामग्री पुस्तकालय",
    userManagement: "उपयोगकर्ता प्रबंधन",
    platformSettings: "प्लेटफॉर्म सेटिंग्स",
    uploadContent: "सामग्री अपलोड करें",

    // Authentication
    emailAddress: "ईमेल पता",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    fullName: "पूरा नाम",
    preferredLanguage: "पसंदीदा भाषा",
    createAccount: "खाता बनाएं",
    signIn: "साइन इन करें",
    dontHaveAccount: "खाता नहीं है?",
    alreadyHaveAccount: "पहले से खाता है?",

    // Lessons
    beginner: "शुरुआती",
    intermediate: "मध्यम",
    advanced: "उन्नत",
    video: "वीडियो",
    interactive: "इंटरैक्टिव",
    quiz: "प्रश्नोत्तरी",
    epub: "ई-बुक",

    // Categories
    digitalLiteracy: "डिजिटल साक्षरता",
    mathematics: "गणित",
    language: "भाषा",
    science: "विज्ञान",
  },

  pa: {
    // Common
    welcome: "ਜੀ ਆਇਆਂ ਨੂੰ",
    loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    error: "ਗਲਤੀ",
    success: "ਸਫਲਤਾ",
    cancel: "ਰੱਦ ਕਰੋ",
    save: "ਸੇਵ ਕਰੋ",
    delete: "ਮਿਟਾਓ",
    edit: "ਸੰਪਾਦਨ",
    back: "ਵਾਪਸ",
    next: "ਅਗਲਾ",
    previous: "ਪਿਛਲਾ",
    search: "ਖੋਜੋ",
    filter: "ਫਿਲਟਰ",

    // Navigation
    home: "ਘਰ",
    dashboard: "ਡੈਸ਼ਬੋਰਡ",
    lessons: "ਪਾਠ",
    progress: "ਤਰੱਕੀ",
    achievements: "ਪ੍ਰਾਪਤੀਆਂ",
    settings: "ਸੈਟਿੰਗਜ਼",
    logout: "ਲਾਗਆਉਟ",
    login: "ਲਾਗਇਨ",
    signup: "ਸਾਈਨ ਅੱਪ",

    // User roles
    student: "ਵਿਦਿਆਰਥੀ",
    teacher: "ਅਧਿਆਪਕ",
    admin: "ਪ੍ਰਸ਼ਾਸਕ",

    // Platform
    platformName: "ਨਾਭਾ ਲਰਨਿੰਗ",
    platformDescription: "ਡਿਜੀਟਲ ਸਿੱਖਿਆ ਪਲੇਟਫਾਰਮ",
    offlineFirst: "ਆਫਲਾਈਨ ਫਰਸਟ",
    multiLanguage: "ਬਹੁ-ਭਾਸ਼ਾ",
    interactiveContent: "ਇੰਟਰਐਕਟਿਵ ਸਮੱਗਰੀ",

    // Student interface
    myLessons: "ਮੇਰੇ ਪਾਠ",
    startLesson: "ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ",
    continueLesson: "ਪਾਠ ਜਾਰੀ ਰੱਖੋ",
    completeLesson: "ਪਾਠ ਪੂਰਾ ਕਰੋ",
    lessonCompleted: "ਪਾਠ ਪੂਰਾ ਹੋਇਆ",
    overallProgress: "ਸਮੁੱਚੀ ਤਰੱਕੀ",
    recentActivity: "ਹਾਲ ਦੀ ਗਤੀਵਿਧੀ",

    // Teacher interface
    studentProgress: "ਵਿਦਿਆਰਥੀ ਤਰੱਕੀ",
    classOverview: "ਕਲਾਸ ਸਮੀਖਿਆ",
    topPerformers: "ਸਿਖਰਲੇ ਪ੍ਰਦਰਸ਼ਨਕਾਰ",
    generateReport: "ਰਿਪੋਰਟ ਬਣਾਓ",

    // Admin interface
    contentLibrary: "ਸਮੱਗਰੀ ਲਾਇਬ੍ਰੇਰੀ",
    userManagement: "ਉਪਭੋਗਤਾ ਪ੍ਰਬੰਧਨ",
    platformSettings: "ਪਲੇਟਫਾਰਮ ਸੈਟਿੰਗਜ਼",
    uploadContent: "ਸਮੱਗਰੀ ਅੱਪਲੋਡ ਕਰੋ",

    // Authentication
    emailAddress: "ਈਮੇਲ ਪਤਾ",
    password: "ਪਾਸਵਰਡ",
    confirmPassword: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    fullName: "ਪੂਰਾ ਨਾਮ",
    preferredLanguage: "ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ",
    createAccount: "ਖਾਤਾ ਬਣਾਓ",
    signIn: "ਸਾਈਨ ਇਨ ਕਰੋ",
    dontHaveAccount: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
    alreadyHaveAccount: "ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?",

    // Lessons
    beginner: "ਸ਼ੁਰੂਆਤੀ",
    intermediate: "ਮੱਧਮ",
    advanced: "ਉੱਨਤ",
    video: "ਵੀਡੀਓ",
    interactive: "ਇੰਟਰਐਕਟਿਵ",
    quiz: "ਪ੍ਰਸ਼ਨੋਤਰੀ",
    epub: "ਈ-ਬੁੱਕ",

    // Categories
    digitalLiteracy: "ਡਿਜੀਟਲ ਸਾਖਰਤਾ",
    mathematics: "ਗਣਿਤ",
    language: "ਭਾਸ਼ਾ",
    science: "ਵਿਗਿਆਨ",
  },
}

class I18nService {
  private currentLanguage: Language = "en"
  private readonly LANGUAGE_KEY = "nabha-language"

  init(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) as Language
    if (savedLanguage && translations[savedLanguage]) {
      this.currentLanguage = savedLanguage
    }
  }

  setLanguage(language: Language): void {
    this.currentLanguage = language
    localStorage.setItem(this.LANGUAGE_KEY, language)
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage
  }

  t(key: keyof Translations): string {
    return translations[this.currentLanguage][key] || translations.en[key] || key
  }

  getLanguageOptions(): Array<{ value: Language; label: string; nativeLabel: string }> {
    return [
      { value: "en", label: "English", nativeLabel: "English" },
      { value: "hi", label: "Hindi", nativeLabel: "हिंदी" },
      { value: "pa", label: "Punjabi", nativeLabel: "ਪੰਜਾਬੀ" },
    ]
  }
}

export const i18n = new I18nService()
