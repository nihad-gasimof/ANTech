import { PortfolioItem, TeamMember, Testimonial, ServiceDetail } from "./types";

export const IMAGES = {
  homeHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf-QFgN8FiYaf_w1UfzueMQAQdj9aebaX4N4KCr8OS98iyPFv_CnRl91B-dGehXuaHd2wYRD8137c-UTbxGXSDVGcqDw7p8FzoT3LD4tDIYLG8PkxGgXAM2WMxyJMS5cL6YLGX0yNqm4af-H1uirt3GVDH0owyPZ9hdbIFuOmYbd3_5ua2qr78eiMCqVa81Mcv_c6lzSPkg4l_qLQweraIqrCz0rO0-XI7lrWuUcxXV12Gz8mbbC4hFj0oSLPGk17knlJhQhOSb4k",
  homeFans: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWtjxV-quLIeN6Gl0nkyfOew1_zOovZhF5Gf8IA9eUGy0uBeI4UcbxdPuMcTZp7tl3J-nC0lZhmwl4t9rlaDzjQP8wDB2llncaBQWFqlMr59-lHshJ60yhuEjdjuStfUunpc0L4gXmbQ4fHx804HZrZABe-BOCq3UqAJDAiugUqcTzncl23HDe_mqphf-JMT4L1QLlNKDbgT2C07rFvgrUlXdV_8jxouVLirC9Wvon2WC_xk8BOdmu5z2xbLjn0B7RtzQlOUAdyMY",
  aboutHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXRQ4WOTNemzckAwl1UN-4WZu3BhhcCWOLpTPWZPW30elSExU-npi37tYx1hSi5_uv7YKwGSUojYchyXhO6GtaEt5m1eRdGf-v6ORZ0GP22o_Wk4MAiVZGMA-OJbvu_L9gebwciRbIaElZTO3QSAgSqPZIVgPlWBUQHhHiLwJdxj1xydPgB_aI-M0b1f7xjmNr8VwZ0KOoKuo_4u18e1NmEY9qVVdmY1Rk2egjpz-9mS7dJizNTKo_0l6NpWA4m7jfXU0iI19ff08",
  aboutGlobal: "https://lh3.googleusercontent.com/aida-public/AB6AXuD88Qzq38f72QSTlIv6DLcyZmlsujp02sSSTN3N8EwAM0W-E4Wj4OZsf0E-CxomHevtVTeQwxYV2g3SPNUiN9ThcWKUd035jLP-KcrNRwCe5Nkq4uzMMLDtI-y7Ri3H--Bhbk7eokvMfUokeOi_rZ8g5KnkyGAtPI-1bi9iAFtyZmBdxa159eGik988l5sC6qGqtG6XYvwd5f_Bc3MdhLkoLIM82UYGHQH0E1QZLKgNOCKKdE9GnbQiFYQxmT44Xy_-gfxv4kOpang",
  crmHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj0R4yMTvdRj-F2MHbFP6r3uPawEMvSq9qf3mqOwuKtKGouV6XOwGAAYSnZq5YmOu-mNqQ2h4ewTO-2rj7qbIKLLKaHcIVm73MwO-Oix_TNHly8lbNQhrN-bu5oWO-GoqFsr2nbt7gBI6OvHgORvhGEx8hI_2h9KZLG6YlD3tqW0Scj9ecwwqLydx0N1WHuJ8iMaC3QKaC5bKyhnG26UJ8z9y7s9jk_9YWmWPyOUnq6IN0HlJe9LpV1TbuMma3hbDnT9SVPYaf0vc",
  contactHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUA7eAErPoxH349r2qN7WG6eI7rfffEiMJ4W2jcU0eeKASsjMo7e44HL3pmFvSazAZmZiEHOMSb8ClVMBVRXlXEptxLfhOBAiG34xBA-qr0RvyQ0QcSrmSmnMZx2OOmShZ7WsQI5lsSszfL1B_pHL1Yeoug5Jv2GXiLmL1e6fdk8-OuVGvBHfx3eZieYulH-0LmY7j9ucEaF49oEqJDnOMW9RJ9YufZgDh-fA_V4sPCpu3DWxZdO5F_IP2o6ymVCfk6scSV0db2a8"
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Korporativ Maliyyə Portalı",
    category: "web",
    techStack: ["React", "Node.js", "Express", "Tailwind CSS"],
    description: "Korporativ müəssisələr üçün nəzərdə tutulmuş geniş maliyyə idarəetmə və hesabatlıq portalı. Avtomatlaşdırılmış audit, dinamik qrafiklər və bank sistemləri ilə birbaşa inteqrasiya.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXFaAGqgRXiCbRQCqnj4hAYKG-InzB2n1_vjlND_8YWX5GX7Oefkdnyu57yUOdocA3duu_Ev4BYwjoW5nU2WW9M66e2IKKYj8Wmg64WKBs0ldmRQf7KmAdBf33CMMiWTjpIX2Kmp5yzvZSVMR7wXP4PcQIAQPsf226gjpJtoExXIs18xeSb-XMvPFXD7Zc-o7G57qJzUpwuYl2Mh_XyPAH-3znrbZz5i3nROIdtdB4vwWjo09-N8EHY4Jt9nKLqupwO_N39j4f35Y",
    features: ["Real-time Pul Axını Analizi", "Excel/PDF Hesabat Yaradılması", "İki-faktorlu Autentifikasiya", "Rollar Üzrə Səlahiyyətləndirmə"],
    duration: "4 Ay",
    client: "Capital Finance Azerbaijan"
  },
  {
    id: "2",
    title: "Logistika İzləmə Tətbiqi",
    category: "mobile",
    techStack: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
    description: "Böyük həcmli yükdaşıma şirkətləri üçün real-time kuryer, avtomobil və yük izləmə tətbiqi. Avtomatik marşrut optimallaşdırılması və çatdırılma sübutu (POD) sistemi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOKoTC8J06ZqxgM5V09buPcZYyKkRiD1t6FCGmIvWTU49Lchw7GzOQf4jBdFKLZy1wBfpvshz3I9hbYyVcnTD75SxBPr_1i_mW5DHylWT0Vr5ivEfXlq1RW0uMGNGOBxz9zENiDzIWJoT-3tfbj8F52Px3J8ME0reFm1erKifLHjc-Ll2tQISYxJZTCurTrcGqbCogCyZRzPjBVsJW901RsOVIJfUmFIKouC0-tpmNZq-wXNj2XL9jlBhxWK4YLI_quIQzPdTNMtc",
    features: ["Canlı GPS İzləmə", "Oflayn Rejim Dəstəyi", "Süni İntellektli Marşrutlama", "Müştəri Bildirişləri"],
    duration: "3 Ay",
    client: "Baku Logistics Group"
  },
  {
    id: "3",
    title: "Enterprise Sales CRM",
    category: "crm",
    techStack: ["Next.js", "PostgreSQL", "D3.js", "Redis"],
    description: "Satış komandalarının fəaliyyətini tamamilə optimallaşdıran fərdi CRM sistemi. Satış boru kəməri (pipeline) vizuallaşdırılması, KPI izləmə və ağıllı e-poçt bildirişləri.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqn-KDpT-mNQYYGmykxw1CKchbAI1r8gY3KrZoolgrM7mHJaVqYUlMs8FbBeXru_qm2Uw9mgf90ynbUntuxlvsGvQ8dvyWvSRuS_4WmdF32jkkFfELtCAGtfpAFRilxuOFB3n0abuxJwLKzd4pMIhergLKtBObyoPW0Yg0MiZ-4Bv1Unelh5zp9AFQQG7q-yr3j1mTtb2Y2uLAuAXWO6ecjUFYk79cKnvnICM2mFOuLJrx6KOUKec6xO2rUaRLixgpP0Ak1mHs02I",
    features: ["Fərdi Kanban Lövhəsi", "Avtomatlaşdırılmış Tasks sistemi", "Süni İntellekt ilə Müştəri Qiymətləndirilməsi", "WhatsApp & E-poçt İnteqrasiyası"],
    duration: "5 Ay",
    client: "Alliance Business Solutions"
  },
  {
    id: "4",
    title: "Premium E-ticarət Platforması",
    category: "web",
    techStack: ["React", "TypeScript", "Stripe API", "GraphQL"],
    description: "Yüksək sürətli, SEO yönümlü, müasir e-ticarət ekosistemi. Çoxdilli dəstək, fərdi səbət alqoritmi və yerli ödəniş sistemləri (MilliÖN, GoldenPay) ilə tam inteqrasiya.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLWYS5F4cTqEcjUgFvJivYUi0cZ1QIReaVsnbiw5XTLecK1xoCdiouPW86zrvJxorrifVI6PrFm-8awFB8XAtWAy-rqfbWsFbuUZYH49I9r3wezmOe3u6tOWS4e2p1ENKTo7ztztI5c6isdUSr1p5UDHeawEe1UVnW-PW1_UVd0D43T7xSuSQQA3TrAOAhDEvj53BCWCV83TkJm1Gbz7n0bS4sUBpvlhE5YTXMD3xDhuH36RnX1CttVNeha2tKpEnp9jwUQ8uTQ1I",
    features: ["İntuitiv Səbət & Sifariş Sistemi", "Yerli Ödəniş Gateway İnteqrasiyası", "Geniş Admin İdarəetmə Paneli", "Real-time Stok İzlənməsi"],
    duration: "3.5 Ay",
    client: "Azeri Premium Retail LLC"
  },
  {
    id: "5",
    title: "Analitik Müştəri Portalı",
    category: "crm",
    techStack: ["Python", "Django", "Tableau API", "Docker"],
    description: "Böyük həcmli məlumatları (Big Data) emal edib interaktiv qrafiklər şəklində istifadəçilərə təqdim edən platforma. Marketinq kampaniyalarının effektivliyini ölçmək üçün ideal həll.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPAfaaRDg3cyQANJLfAEdsl2Fwyj87MPAiP2iSsOyewMrvhkQJY_Qwei9z0ycEQv6xRf6-jFMuRRe7wD_DzyFUv_cLO3cK6GJtJdZ1BiGA3mb23t0Z5QAfOjeE1nGMRp3l9M4WqUlyL0lZUR6vuxp_Itwh_JJg3S-O58LO1krHcLHOcTWaO-c2qi77AAxwwLlOkK2lr-E6G_sJl6i5D-Y936b-lSwHdJZDuvHZOTB9WWVY_uPEU2Tc71Usj7IR6yZ6LPbI7mpcDHk",
    features: ["Interaktiv Tableau Panelləri", "Müştəri Davranış Analizi", "Süni İntellektli Trend Proqnozlaşdırma", "API Data Export (JSON, CSV, Excel)"],
    duration: "4.5 Ay",
    client: "Baku Telecom Consulting"
  },
  {
    id: "6",
    title: "HealthTech Mobil Həll",
    category: "mobile",
    techStack: ["Swift", "SwiftUI", "AWS", "Cognito"],
    description: "Xəstələr və həkimlər arasında birbaşa əlaqə yaradan, video-məsləhətləşmə və resept idarəetmə funksiyalarını dəstəkləyən təhlükəsiz tibbi iOS tətbiqi. HIPAA standartlarına uyğundur.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ4CGNQ5zkUMgDMC4ZyYPCFZp41qwl86b9OyleuxB4tyOfEYualblKr5Mg3ZAIh0w6Itw95UBpZmW7ml3YK4OGCIwXIyKBNX3orlMy-MJzfsgKCFpUlSPdt5RI11IuC1TP0--i7qXVITOSgPg8DWIcRRoiY19l7Jkro26ZUw-zNKJWe7wnKSe4BF_Xbt6LriMKG9iK9-i0pIX5GNBBxlgtsLN5i5tswi3gPMyTHYsX1cpI9StLGqwjLaK2SHoSNWiEl4s2ZyKpBY0",
    features: ["Təhlükəsiz Video Zənglər", "Rəqəmsal Tibbi Reseptlər", "Biometrik Giriş (FaceID)", "Xatırladıcı Bildirişlər"],
    duration: "5 Ay",
    client: "Medica Baku Clinics"
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Anar Nəzərov",
    role: "Təsisçi & CEO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-njBceH2K5bFejtzRVMUjwrII7PZ7uOVslcQ07yqNST4u3Vi28I7lz9q365zgyF-fqjvAnPbd4CmGMY_I0Lqo5TUka4QmxtRyhAdBmOmjSgkh6pPOVBLMbm3vP1dJid40U42K5ukj0my9tID3iMwAZlatvT76-XyX3sh0PY1iMGTXOnlfY7PJ8yjhqWo1wwbaXGjRnsvD_DjQCDIGc82ZwnuYuYGJ6EFB7XNakbszR6nVN1fpjmf6nPkmNMeaotxX641VnTJcOhY",
    bio: "IT sahəsində 15 ildən artıq təcrübəyə malikdir. Azərbaycanın və regionun ən böyük infrastruktur və proqram təminatı layihələrinə rəhbərlik etmişdir.",
    specialties: ["Sistem Arxitekturası", "Texnoloji Strategiya", "Layihə İdarəedilməsi"]
  },
  {
    name: "Leyla Əliyeva",
    role: "Texniki Direktor (CTO)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRdnlxFUiV_sZ7d9oNnX3AJbnaNWVkDafnB40FUsTXA1TFrNeOhgrD9EVSkVNIAtYfFd9Yxffz56enx908X2afGjCgqUy2Qr8MAXNlv7zS3UkxBFkAuAQVYyglHFAvfLYlLjjfsnJgzGcwL_EJjglypgUub979W8GbJ12wHVSjkmWX-qZgSgFwmOqwidX2Eg9zlRX760gYbtXFqr1FFWBJkFHZj65FD508z43ZOcY3r-OmEhotE73vXrIGVVg2YRW3cBo40YsIpfI",
    bio: "Xaricdə təhsil almış proqramlaşdırma mütəxəssisi. Böyük miqyaslı bulud sistemlərinin, mikroservislərin və yüksək performanslı veb platformaların qurulmasında ekspertdir.",
    specialties: ["Bulud Texnologiyaları", "TypeScript / Go", "Microservices"]
  },
  {
    name: "Tural Məmmədov",
    role: "Kiber Təhlükəsizlik Rəhbəri",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxk_iY6kWDKywNckEs6J3ZILFXQxc75ZW64_4W5TZscK4TrAQ6hTjiJXGYALsKkDFMXKUDJwEHwwpFSQtkjBFAPjzZOc47d12SoVGMK1ijUtYcCLyaMGPsSrcVmtZS2Tqu6XtntUwGTMg4COiYTmwmX5ukdNlhnL99DCftRAdgJdOPOMTkJpLb1x7s1bhKPPWK7XsBQt3TVbli7U3Ag2xaN2XsyaT07t3P_6f9PoWDJAd1q0d2SM05JpnvB-ZhUD6VqZNqzhEQ7U4",
    bio: "Sertifikatlaşdırılmış CISSP və Ethical Hacker mütəxəssisi. Korporativ məlumatların mühafizəsi, sızma testləri (pentesting) və təhlükəsiz proqram inkişafı sahəsində çalışır.",
    specialties: ["Sızma Testləri", "ISO 27001", "Kriptoqrafiya"]
  },
  {
    name: "Orxan Quliyev",
    role: "Biznes Strategiyaları Rəhbəri",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC63BUnZm_syJpI2rhTXL2naqqKwZg5y0UC4Cob3kvRkPaUVnEtccWLzc00q0KOBhhqdXuc574X-IXniJVcuawgTk4X2H0yLn2qzOkhSycTlA3VR7ltdc5R0LtAn2LAltfYeW6oiLof8K1Z6jOst_IYx7HUTviYIK04nBcoxsgwtS59hSZCG6Lw5Rn9HWU64F9cPRX7_3KTMybizXLwgUtfsm3CY7CUhIPgS3SBUC_jbY9wj19_G9K-K5k2qMndHyrYbSPoNx5y99M",
    bio: "MBA məzunu, biznes analitiki. Müştərilərin ehtiyaclarını dərindən analiz edərək optimal rəqəmsal transformasya həlləri və CRM/ERP konseptlərini hazırlayır.",
    specialties: ["Biznes Analizi", "Müştəri Təcrübəsi (CX)", "ERP/CRM Məsləhətçiliyi"]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Elvin Məmmədov",
    role: "Logistika Direktoru",
    company: "Baku Logistics Group",
    feedback: "AN Tech Solutions komandası bizim üçün hazırladığı logistika tətbiqi ilə işimizi 40% sürətləndirdi. Canlı izləmə və GPS inteqrasiyası qüsursuz işləyir. Hər bir IT ehtiyacı olan şirkətə tövsiyə edirik.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlmzQJejczOLvkcBdwDG9Ql8Ek9sCpunSAoiWvvOANAoGY6zap86NIk_amIAFL46aSSzVKbnYtiUm_sOmAEKpTF-2e_Fm3sHw_kVbOaA-SY78Phc_HnZVDrg5QAe2XKxh-FE6_MHNOfUqxAAYf9BPWtExwj5jvnenfZM8JQZe-V-iufmDDTQsqUCcGF9n0PPxfT0t2k4WEpSC7wd80B9MiLNZ0yfj_9L-ranDdxxLxljxbpx1AmRi0OAN1HF-55t1bUPkU3JtBhzE"
  },
  {
    name: "Lalə Qasımova",
    role: "Təsisçi",
    company: "Azeri Premium Retail LLC",
    feedback: "Ölkədaxili ödəniş sistemləri və kiber təhlükəsizlik qaydalarına uyğun premium e-ticarət platformamız çox qısa zamanda istifadəyə verildi. Müştərilərimiz sürətli və asan alış-veriş təcrübəsini çox bəyənirlər.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuNFCJTF7sitRuFHNOzbCX3EC76jv8RTJRPmwyAKbf1_8UqQSl9yegaEY6XCMb6ZRG1Xtbkqwo64m_aH861bmsIeL_HP_txD-djK26AjLsgDByKkpUofrwUefWexMY0dqwW3bnTSOWwAek0MOAysOkwswIwZIl9KzPPFUVOYdJ5WfpQ_rF9FsUUOP46av-mlS1z8kGRG1hvKbl-gvRHx_o2uUk8ORgtacppsOJ4nwjBlD17Rcu9AzrlFza1Em0AU1A2iK1bAAod-s"
  },
  {
    name: "Orxan Əliyev",
    role: "Baş Direktor",
    company: "Capital Finance Azerbaijan",
    feedback: "Maliyyə portalımızın audit və təhlükəsizlik standartları olduqca yüksək səviyyədə quruldu. AN Tech Solutions proqram təminatı inkişafında keyfiyyət və etibarlılığın ünvanıdır.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2twnJPrKc4yGYluMUwrLKjiK-ow0-YJXx0Pw0IMJY8coVou2qT2bkHMxRjeJLMQPRUy78UuGDtcC3C1k0dDraT9doL6AFFLDGnVElcRQbTIziQKp4KERricoTxFB7Fxd0jQAzsycEEBIksJUpFdGrMkGmQDWCBK-ZRryTeIGdTELjrbnmT7v6fbdYsWZFsEodia4tX8DAtLUOaHwJCkI4s4n1MCZwPPTAmj3eX0Y3sF-6PoHGOasoOVZyapt-NvzI1AN_To81kFU"
  }
];

export const services: ServiceDetail[] = [
  {
    id: "web",
    title: "Veb İnkişafı",
    shortDesc: "Yüksək performanslı, SEO dostu və müasir dizayna malik veb saytların və portalların hazırlanması.",
    longDesc: "Biznesinizin internetdə güclü şəkildə təmsil olunması üçün tam fərdi veb həllər inkişaf etdiririk. React, Next.js və Node.js kimi qabaqcıl texnologiyalarla sürətli, təhlükəsiz və mobil-uyğun platformalar yaradırıq. Ödəniş sistemləri, xəritələr və kənar API-lərlə inteqrasiya tam təmin edilir.",
    icon: "Globe",
    features: ["Fərdi UI/UX Dizaynı", "SEO və Sürət Optimizasiyası", "Müasir İdarəetmə Paneli (CMS)", "Ödəniş Gateway İnteqrasiyası"],
    pricing: "2,500 AZN-dən başlayaraq"
  },
  {
    id: "mobile",
    title: "Mobil Tətbiqlər",
    shortDesc: "iOS və Android platformaları üçün doğma (native) və ya çarpaz-platformalı mobil tətbiqlərin yaradılması.",
    longDesc: "Müştərilərinizin mobil telefonda asanlıqla istifadə edə biləcəyi SwiftUI, Swift, Kotlin və ya Flutter əsaslı gözəl dizaynlı mobil tətbiqlər qururuq. Sürətli işləyən, bildiriş (push notification) göndərən və oflayn işləmə funksiyalarına malik tətbiqlərlə biznesinizi mobil dünyaya daşıyın.",
    icon: "Smartphone",
    features: ["iOS & Android Çarpaz Tətbiqlər", "Push Notification İnteqrasiyası", "Oflayn Rejim Dəstəyi", "App Store və Google Play-ə yerləşdirmə"],
    pricing: "4,000 AZN-dən başlayaraq"
  },
  {
    id: "crm",
    title: "Fərdi CRM və ERP Sistemləri",
    shortDesc: "Daxili biznes proseslərini, satışları və müştəri münasibətlərini idarə edən avtomatlaşdırılmış sistemlər.",
    longDesc: "Hazır qəlib sistemlər biznesinizin bütün özəlliklərini əhatə edə bilməz. Biz sizin iş axışınıza (workflow) tam uyğunlaşan, satışı artıran, əməkdaşların KPI göstəricilərini ölçən və avtomatik e-poçt/SMS göndərən ağıllı, bulud-əsaslı ERP və CRM sistemləri hazırlayırıq.",
    icon: "Database",
    features: ["Satış Boru Kəməri (Kanban)", "Dərin Analitika və Qrafiklər", "İnteqrasiya olunmuş Biznes Alətləri", "Rollar Üzrə Təhlükəsiz Giriş"],
    pricing: "5,000 AZN-dən başlayaraq"
  },
  {
    id: "security",
    title: "Kiber Təhlükəsizlik və Bulud Auditi",
    shortDesc: "Sistemlərinizin sızmalardan qorunması üçün audit, kod analizləri və AWS/Docker miqrasiyası.",
    longDesc: "Məlumatlarınız ən böyük sərvətinizdir. Komandamız sistemlərinizdə sızma testləri (pentesting) keçirir, boşluqları müəyyənləşdirir və ISO 27001 kiber təhlükəsizlik standartlarına uyğunlaşdırır. Həmçinin, server xərclərini azaltmaq üçün AWS bulud miqrasiyasını təşkil edirik.",
    icon: "ShieldCheck",
    features: ["Sızma Testləri (Pentest)", "Server Təhlükəsizlik Auditi", "Docker & Kubernetes Quraşdırılması", "AWS Bulud Miqrasiyası"],
    pricing: "1,500 AZN-dən başlayaraq"
  }
];
