/* =========================================
   LINE 7 FACTORY — MAIN SCRIPT
   ========================================= */

// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
const translations = {
  ar: {
    'logo.name':             'الخط السابع',
    'logo.text':             'الخط السابع',

    'nav.home':              'الرئيسية',
    'nav.products':          'منتجاتنا',
    'nav.contact':           'تواصل معنا',

    'hero.subtitle_small':   'مصنع الخط السابع · المملكة العربية السعودية',
    'hero.title_display':    'مصنع<br>الخط<br>السابع',
    'hw.see_more':           'اكتشف المزيد',
    'hw.card1_title':        'منتجاتنا',
    'hw.card2_title':        'من نحن',
    'hw.card3_title':        'احصل على<br>عرض سعر',
    'hw.card2_label':        'عن المصنع',

    'hero.tag':              'مصنع الخط السابع للصناعات البلاستيكية',
    'home.hero_title':       'مستقبل التغليف الذكي',
    'home.hero_subtitle':    'نحن لا نصنع البلاستيك فحسب، بل نصنع الحماية لمنتجاتك بأحدث التقنيات العالمية.',
    'home.hero_cta':         'اكتشف منتجاتنا',

    'stat.years':            'سنة خبرة',
    'stat.lines':            'خطوط إنتاج',
    'stat.clients':          'عميل راضٍ',
    'stat.quality':          '% جودة',

    // ISO Banner
    'iso.certified':         'معتمد ISO 9001',
    'iso.headline':          'الجودة ليست خياراً — بل التزام راسخ',
    'iso.text':              'نلتزم بالمعايير العالمية، مما يضمن أن يعكس كل منتج التزامنا بالتميز وتقديم قيمة مستدامة على المدى الطويل. أكثر من 10 سنوات من الخبرة في التصنيع واسم موثوق في صناعة التغليف في المملكة العربية السعودية.',
    'iso.cert_label':        'عرض الشهادة',

    // Why-us section
    'section.why_tag':       'لماذا تختارنا',
    'section.why_heading':   'الفرق يبدأ من الجودة',
    'section.why_sub':       'نجمع بين التقنية الحديثة والخبرة الصناعية لنقدم لكم منتجات تفوق التوقعات',

    'feature1.title':        'منتجات عالية الجودة',
    'feature1.desc':         'منتجات مختارة بعناية تلبي أعلى معايير الجودة العالمية وتحقق رضا عملائنا الكامل.',
    'feature2.title':        'تقنيات حديثة',
    'feature2.desc':         'أحدث التقنيات في مجال التعبئة والتغليف مع معدات ألمانية وإيطالية متطورة.',
    'feature3.title':        'موثوقية عالية',
    'feature3.desc':         'خدمة موثوقة وآمنة مع ضمان كامل ودعم فني على مدار الأسبوع.',

    // Clients section
    'section.clients_tag':   'شركاؤنا في النجاح',
    'section.clients_heading':'علامات تجارية تثق بنا',
    'section.clients_sub':   'نفخر بثقة كبرى العلامات التجارية في المملكة العربية السعودية والمنطقة',

    // 4 Value Points
    'section.points_tag':    'لماذا الخط السابع',
    'section.points_heading': 'ما يميزنا عن الجميع',
    'vp1.title':             'التنفيذ السريع والدعم الفوري',
    'vp1.desc':              'فرق التخزين والخدمة المحلية لضمان الحد الأدنى من وقت التعطل وسرعة الإنجاز.',
    'vp2.title':             'متوافق مع رؤية 2030',
    'vp2.desc':              'دعم التحول الاقتصادي الوطني من خلال الحلول الصناعية المستدامة.',
    'vp3.title':             'حلول مخصصة حسب الطلب',
    'vp3.desc':              'توصيات مخصصة تناسب مجال عملك، ونوع منتجك، وسير عملك الإنتاجي.',
    'vp4.title':             'أكثر من عقد من الرؤية الثاقبة',
    'vp4.desc':              'موثوق بها من قِبل بعض أكبر العلامات التجارية في المنطقة من حيث الجودة والخدمة المتسقة.',

    // Trust & Certifications
    'section.certs_tag':     'اعتمادات دولية',
    'section.certs_heading': 'المعايير <span style="color:var(--primary)">العالمية</span>',
    'section.certs_sub':     'معتمدون دولياً في مجالات الجودة والسلامة والبيئة من قِبل جهات دولية مستقلة',
    'cert1.name':         'نظام إدارة الجودة',
    'cert1.desc':         'اعتماد دولي يؤكد التزام مصنع الخط السابع بأعلى معايير إدارة الجودة في كافة عمليات التصنيع والإنتاج والتسليم.',
    'cert2.name':         'نظام الإدارة البيئية',
    'cert2.desc':         'شهادة دولية تؤكد التزام المصنع بالمعايير البيئية والحد من الأثر البيئي في عمليات التصنيع والتشغيل.',
    'cert3.name':         'الصحة والسلامة المهنية',
    'cert3.desc':         'اعتماد دولي يضمن توفير بيئة عمل آمنة وصحية لجميع منسوبي المصنع وفق أعلى المعايير الدولية.',
    'cert.valid':         'صالحة حتى أغسطس 2027',
    'cert.download':      'تحميل الشهادة',

    // About section
    'section.about_tag':     'من نحن',
    'home.about_title':      'مصنع الخط السابع<br>رائد صناعة التغليف',
    'home.about_desc':       'تأسس مصنع الخط السابع للصناعات البلاستيكية بهدف تقديم حلول تغليف متكاملة تلبي احتياجات القطاعات الصناعية والغذائية والتجارية في المملكة. نعمل بطاقة إنتاجية عالية مع فريق هندسي متخصص يضمن تميز كل منتج.',
    'home.vision_title':     'رؤيتنا',
    'home.vision_desc':      'أن نكون الخيار الأول في صناعة التغليف بالمملكة العربية السعودية، من خلال الابتكار المستمر والالتزام بأعلى معايير الجودة.',
    'home.mission_title':    'مهمتنا',
    'home.mission_desc':     'تقديم منتجات تغليف عالية الجودة تُسهم في حماية منتجات عملائنا وتعزيز قدرتهم التنافسية، مع الحفاظ على البيئة والالتزام بمعايير الاستدامة.',

    'home.contact_title':    'ابدأ شراكتك معنا اليوم',
    'home.contact_subtitle': 'فريقنا المتخصص جاهز لمساعدتك في اختيار أفضل حلول التغليف لمشروعك.',

    'products.page_title':   'منتجاتنا وماكيناتنا',
    'products.page_sub':     'تشكيلة متكاملة من مواد التغليف والماكينات الصناعية تلبي جميع احتياجاتكم',
    'contact.page_title':    'نحن هنا لخدمتك',
    'contact.page_sub':      'فريقنا المتخصص جاهز للإجابة على استفساراتكم وتقديم أفضل حلول التغليف لمشاريعكم',

    // Products (14 products)
    'prod1.line':  'منتج 01',
    'prod1.badge': 'الأكثر طلباً',
    'prod1.name':  'استرتش فلم لتغليف الطبليات',
    'prod1.desc':  'أفلام تمدد عالية الجودة لتغليف وتثبيت الطبليات، توفر حماية ممتازة من الغبار والرطوبة والأضرار أثناء الشحن والتخزين.',
    'prod1.spec1': 'سُمك متعدد',
    'prod1.spec2': 'شفافية عالية',
    'prod1.spec3': 'مقاوم للتمزق',

    'prod2.line':  'منتج 02',
    'prod2.badge': 'الأكثر مبيعاً',
    'prod2.name':  'الشريط اللاصق (الشطرطون)',
    'prod2.desc':  'شريط كرتون لاصق بقوة تثبيت عالية مصنوع من مواد عالية الجودة، مثالي لإغلاق الكراتين والصناديق الكبيرة والصغيرة.',
    'prod2.spec1': 'لاصق قوي',
    'prod2.spec2': 'أحجام متعددة',
    'prod2.spec3': 'مقاوم للحرارة',

    'prod3.line':  'منتج 03',
    'prod3.badge': 'حماية ممتازة',
    'prod3.name':  'فوم التغليف',
    'prod3.desc':  'لفائف فوم التغليف توفر حماية مثلى للمنتجات الهشة والحساسة أثناء الشحن والتخزين، خفيف الوزن ومرن.',
    'prod3.spec1': 'خفيف الوزن',
    'prod3.spec2': 'مرونة عالية',
    'prod3.spec3': 'عازل للصدمات',

    'prod4.line':  'منتج 04',
    'prod4.badge': 'سلامة',
    'prod4.name':  'الشريط التحذيري',
    'prod4.desc':  'شريط تحذيري بألوان واضحة (أصفر/أسود) للإشارة إلى مناطق الخطر ومحيط الأعمال الإنشائية وتأمين المواقع.',
    'prod4.spec1': 'ألوان زاهية',
    'prod4.spec2': 'مقاوم للماء',
    'prod4.spec3': 'طول 250م+',

    'prod5.line':  'منتج 05',
    'prod5.badge': 'صناعي',
    'prod5.name':  'شريط تربيط بي بي',
    'prod5.desc':  'شريط بولي بروبيلين (PP) عالي المتانة لتثبيت ورباط الأحمال الثقيلة، مناسب للتغليف الصناعي والشحن الدولي.',
    'prod5.spec1': 'قوة شد عالية',
    'prod5.spec2': 'مقاوم للتمدد',
    'prod5.spec3': 'ألوان متعددة',

    'prod6.line':  'منتج 06',
    'prod6.badge': 'تغليف ورقي',
    'prod6.name':  'شريط ورقي حراري',
    'prod6.desc':  'شريط ورقي حراري (كرافت) صديق للبيئة، مثالي لإغلاق الكراتين وتثبيت الأغلفة الورقية مع قوة لصق ممتازة.',
    'prod6.spec1': 'صديق للبيئة',
    'prod6.spec2': 'كرافت بني',
    'prod6.spec3': 'يُعاد تدويره',

    'prod7.line':  'منتج 07',
    'prod7.badge': 'أفلام',
    'prod7.name':  'أفلام بولي إيثيلين منخفض الكثافة',
    'prod7.desc':  'أفلام LDPE مرنة وشفافة تُستخدم في تغليف المنتجات الغذائية والصناعية بأشكال وأحجام متعددة تناسب كل الاحتياجات.',
    'prod7.spec1': 'مرونة عالية',
    'prod7.spec2': 'شفافية ممتازة',
    'prod7.spec3': 'مقاوم للرطوبة',

    'prod8.line':  'منتج 08',
    'prod8.badge': 'عازل',
    'prod8.name':  'شريط رمادي عازل',
    'prod8.desc':  'شريط رمادي متعدد الاستخدامات (داكت تيب) ذو قوة لصق قوية، مقاوم للماء والحرارة، مثالي للإصلاح والتركيب.',
    'prod8.spec1': 'مقاوم للماء',
    'prod8.spec2': 'قابل للتمزق',
    'prod8.spec3': 'متعدد الاستخدام',

    'prod9.line':  'منتج 09',
    'prod9.badge': 'قصديري',
    'prod9.name':  'شريط قصديري',
    'prod9.desc':  'شريط ألمنيوم قصديري معاكس للحرارة والرطوبة، يُستخدم في العزل الحراري والتكييف وإغلاق مجاري الهواء.',
    'prod9.spec1': 'عزل حراري',
    'prod9.spec2': 'مقاوم الحريق',
    'prod9.spec3': 'سطح معدني',

    'prod10.line': 'منتج 10',
    'prod10.badge':'حماية',
    'prod10.name': 'رول فقاعات',
    'prod10.desc': 'لفائف فقاعات هوائية توفر حماية استثنائية للمنتجات الهشة والإلكترونيات والزجاجيات أثناء الشحن والتخزين.',
    'prod10.spec1':'فقاعات كبيرة وصغيرة',
    'prod10.spec2':'خفيف الوزن',
    'prod10.spec3':'أبعاد مخصصة',

    'prod11.line': 'منتج 11',
    'prod11.badge':'نايلون',
    'prod11.name': 'رول نايلون',
    'prod11.desc': 'رولات نايلون شفافة وعازلة للرطوبة، تُستخدم في تغليف المنتجات والمحاصيل الزراعية والبضائع المختلفة.',
    'prod11.spec1':'شفافية عالية',
    'prod11.spec2':'مقاوم للرطوبة',
    'prod11.spec3':'أسماك متعددة',

    'prod12.line': 'ماكينة 01',
    'prod12.badge':'ماكينات',
    'prod12.name': 'مكينة تغليف الكرتون',
    'prod12.desc': 'ماكينة إغلاق الكراتين بالشريط اللاصق بكفاءة عالية، تعمل بشكل تلقائي وشبه تلقائي لتسريع خطوط التعبئة والتغليف.',
    'prod12.spec1':'إنتاج عالي',
    'prod12.spec2':'سهولة الاستخدام',
    'prod12.spec3':'صيانة بسيطة',

    'prod13.line': 'ماكينة 02',
    'prod13.badge':'ماكينات',
    'prod13.name': 'مكينة تغليف الطبليات',
    'prod13.desc': 'ماكينة لف الطبليات بالاسترتش فلم تلقائياً بسرعات وشد قابلة للضبط، تضمن تثبيتاً محكماً للبضائع أثناء الشحن.',
    'prod13.spec1':'تلقائية وشبه تلقائية',
    'prod13.spec2':'سرعة قابلة للضبط',
    'prod13.spec3':'توفير في الفلم',

    'prod14.line': 'ماكينة 03',
    'prod14.badge':'ماكينات',
    'prod14.name': 'مكينة ربط الشريط',
    'prod14.desc': 'ماكينة تربيط وشد الشريط (PP/PET) بسرعة واحترافية، تُستخدم في تثبيت الأحمال الثقيلة والطرود الصناعية.',
    'prod14.spec1':'شد قوي ومتساوٍ',
    'prod14.spec2':'PP وPET',
    'prod14.spec3':'إنتاج سريع',

    'prod.action': 'طلب عرض سعر',

    // Footer
    'footer.desc':        'مصنع الخط السابع للصناعات البلاستيكية — نحو مستقبل أكثر ذكاءً في عالم التغليف.',
    'footer.quick_links': 'روابط سريعة',
    'footer.our_products':'منتجاتنا',
    'footer.contact_us':  'تواصل معنا',
    'footer.location':    'المملكة العربية السعودية',
    'footer.hours':       'السبت – الخميس: 8 ص – 5 م',
    'footer.copyright':   '© 2025 مصنع الخط السابع. جميع الحقوق محفوظة.',
    'footer.made_with':   'صُنع بـ ♥ في المملكة العربية السعودية',

    // Products page
    'filter.all':           'الكل',
    'filter.tapes':         'الأشرطة',
    'filter.films':         'الأفلام والرولات',
    'filter.machines':      'الماكينات',
    'products.cta_title':   'هل تبحث عن منتج مخصص؟',
    'products.cta_sub':     'نوفر حلول تغليف مخصصة بالمواصفات التي تحتاجها. تواصل مع فريقنا الهندسي الآن.',
    'products.cta_btn':     'تحدث مع مهندسينا',

    // Contact
    'ccard.call':           'ادارة المبيعات',
    'ccard.whatsapp':       'واتساب المبيعات',
    'ccard.email':          'البريد الإلكتروني',
    'ccard.location':       'موقعنا',
    'ccard.hours_title':    'ساعات العمل',
    'ccard.complaint':      'خط الشكاوي',
    'ccard.riyadh':         'الرياض',
    'ccard.jeddah':         'جدة',
    'contact.other_branches': 'نتواجد أيضاً في خميس مشيط والمنطقة الشرقية',

    // Form
    'form.name_label':    'الاسم الكامل <span>*</span>',
    'form.name_err':      'الرجاء إدخال الاسم الكامل',
    'form.name_ph':       'محمد العمري',
    'form.company_label': 'اسم الشركة / المؤسسة',
    'form.company_ph':    'شركة الأمثلة المحدودة',
    'form.phone_label':   'رقم الجوال <span>*</span>',
    'form.phone_err':     'يجب أن يحتوي على 9 أرقام على الأقل',
    'form.email_label':   'البريد الإلكتروني',
    'form.email_err':     'صيغة البريد الإلكتروني غير صحيحة',
    'form.subject_label': 'نوع الاستفسار <span>*</span>',
    'form.subject_ph':    'اختر نوع الاستفسار',
    'form.subject_err':   'الرجاء اختيار نوع الاستفسار',
    'form.opt_quote':     'طلب عرض سعر',
    'form.opt_sample':    'طلب عينة منتج',
    'form.opt_complaint': 'شكوى أو ملاحظة',
    'form.opt_other':     'أخرى',
    'form.opt_custom':    'منتج مخصص',
    'form.product_label': 'المنتج المطلوب',
    'form.product_ph':    'اختر المنتج (اختياري)',
    'form.msg_label':     'تفاصيل الرسالة <span>*</span>',
    'form.msg_ph':        'اكتب تفاصيل طلبك أو استفساراتك هنا...',
    'form.msg_err':       'الرجاء كتابة تفاصيل رسالتك',

    'contact.info_title':    'ابدأ محادثة معنا الآن',
    'contact.info_sub':      'سواء كنت تبحث عن عرض سعر أو نموذج خاص — نحن هنا للمساعدة على مدار الأسبوع.',
    'contact.form_title':    'أرسل رسالتك',
    'contact.form_sub':      'أكمل النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة',
    'contact.submit':        'إرسال الرسالة',
    'contact.success_title': 'تم إرسال رسالتك بنجاح!',
    'contact.success_sub':   'شكراً لثقتكم بمصنع الخط السابع. سيتواصل معكم فريقنا خلال 24 ساعة.',
    'contact.toast_title':   'تم الإرسال بنجاح',
    'contact.toast_sub':     'سنتواصل معك قريباً',
    'contact.open_map':      'فتح الموقع على الخريطة',
    'contact.locations_title': 'مواقعنا',
    'contact.tab_riyadh':    'الرياض',
    'contact.tab_jeddah':    'جدة',
  },

  en: {
    'logo.name':             'Line Seven',
    'logo.text':             'Line Seven',

    'nav.home':              'Home',
    'nav.products':          'Our Products',
    'nav.contact':           'Contact Us',

    'hero.subtitle_small':   'LINE 7 FACTORY · SAUDI ARABIA',
    'hero.title_display':    'LINE<br>SEVEN<br>FACTORY',
    'hw.see_more':           'SEE MORE',
    'hw.card1_title':        'OUR PRODUCTS',
    'hw.card2_title':        'ABOUT US',
    'hw.card3_title':        'GET A<br>QUOTE',
    'hw.card2_label':        'ABOUT US',

    'hero.tag':              'Line 7 Factory for Plastic Industries',
    'home.hero_title':       'The Future of Smart Packaging',
    'home.hero_subtitle':    "We craft protection for your products using the latest global technologies.",
    'home.hero_cta':         'Discover Our Products',

    'stat.years':            'Years of Experience',
    'stat.lines':            'Production Lines',
    'stat.clients':          'Satisfied Clients',
    'stat.quality':          '% Quality Rate',

    // ISO Banner
    'iso.certified':         'ISO 9001 Certified',
    'iso.headline':          'Quality is Not an Option — It\'s Our Commitment',
    'iso.text':              'We comply with international standards, ensuring every product reflects our commitment to excellence and delivering sustainable long-term value. Over 10 years of manufacturing experience and a trusted name in Saudi Arabia\'s packaging industry.',
    'iso.cert_label':        'View Certificate',

    'section.why_tag':       'Why Choose Us',
    'section.why_heading':   'The Difference Starts with Quality',
    'section.why_sub':       'We combine modern technology with industrial expertise to deliver products beyond expectations',

    'feature1.title':        'Premium Quality Products',
    'feature1.desc':         'Carefully selected products meeting the highest international quality standards.',
    'feature2.title':        'Modern Technology',
    'feature2.desc':         'Latest packaging technology with advanced German and Italian machinery.',
    'feature3.title':        'High Reliability',
    'feature3.desc':         'Dependable service with complete guarantees and round-the-clock technical support.',

    // Clients section
    'section.clients_tag':    'Partners in Success',
    'section.clients_heading':'Brands That Trust Us',
    'section.clients_sub':    'We are proud to serve Saudi Arabia\'s and the region\'s largest brands',

    // 4 Value Points
    'section.points_tag':     'Why Line 7',
    'section.points_heading': 'What Sets Us Apart',
    'vp1.title':              'Fast Execution & Rapid Support',
    'vp1.desc':               'Local warehousing and service teams to ensure minimum downtime and fast project delivery.',
    'vp2.title':              'Vision 2030 Compliant',
    'vp2.desc':               'Supporting national economic transformation through sustainable industrial solutions.',
    'vp3.title':              'Custom Packaging Solutions',
    'vp3.desc':               'Tailored recommendations that fit your industry, product type, and workflow.',
    'vp4.title':              'Over a Decade of Market Insight',
    'vp4.desc':               'Trusted by some of the region\'s largest brands for consistent quality and service.',

    // Trust & Certifications (EN)
    'section.certs_tag':     'International Certifications',
    'section.certs_heading': 'International <span style="color:var(--primary)">Standards</span>',
    'section.certs_sub':     'Internationally certified in quality, safety, and environment by independent global bodies',
    'cert1.name':         'Quality Management System',
    'cert1.desc':         'An international certification confirming Line 7 Factory\'s commitment to the highest quality management standards across all manufacturing, production, and delivery operations.',
    'cert2.name':         'Environmental Management System',
    'cert2.desc':         'An international certification confirming the factory\'s compliance with environmental standards and minimizing environmental impact in manufacturing and operations.',
    'cert3.name':         'Occupational Health & Safety',
    'cert3.desc':         'An international certification ensuring a safe and healthy work environment for all factory staff in accordance with the highest international safety standards.',
    'cert.valid':         'Valid until August 2027',
    'cert.download':      'Download Certificate',

    'section.about_tag':      'Who We Are',
    'home.about_title':       'Line 7 Factory<br>Packaging Industry Leader',
    'home.about_desc':        'Line 7 Factory was established to provide comprehensive packaging solutions for industrial, food and commercial sectors across Saudi Arabia. We operate with high production capacity and a dedicated engineering team.',
    'home.vision_title':      'Our Vision',
    'home.vision_desc':       'To be the first choice in packaging manufacturing in Saudi Arabia through continuous innovation and the highest quality standards.',
    'home.mission_title':     'Our Mission',
    'home.mission_desc':      "To deliver high-quality packaging products that protect our customers' goods and enhance their competitiveness, while adhering to sustainability standards.",

    'home.contact_title':     'Start Your Partnership Today',
    'home.contact_subtitle':  'Our specialized team is ready to help you choose the best packaging solutions for your project.',

    'products.page_title':    'Our Products & Machines',
    'products.page_sub':      'A comprehensive range of packaging materials and industrial machines for all your needs',
    'contact.page_title':     'We Are Here to Serve You',
    'contact.page_sub':       'Our specialized team is ready to answer your inquiries and provide the best packaging solutions',

    // Products (14)
    'prod1.line':  'PRODUCT 01',
    'prod1.badge': 'Most Popular',
    'prod1.name':  'Stretch Film for Pallet Wrapping',
    'prod1.desc':  'High-quality stretch films for wrapping and securing pallets, providing excellent protection from dust, moisture and damage during shipping.',
    'prod1.spec1': 'Multiple Thicknesses',
    'prod1.spec2': 'High Clarity',
    'prod1.spec3': 'Tear Resistant',

    'prod2.line':  'PRODUCT 02',
    'prod2.badge': 'Best Seller',
    'prod2.name':  'Adhesive Tape (Carton Tape)',
    'prod2.desc':  'High-strength adhesive carton sealing tape made from premium materials, ideal for sealing cartons and boxes of all sizes.',
    'prod2.spec1': 'Strong Adhesion',
    'prod2.spec2': 'Multiple Sizes',
    'prod2.spec3': 'Heat Resistant',

    'prod3.line':  'PRODUCT 03',
    'prod3.badge': 'Excellent Protection',
    'prod3.name':  'Packaging Foam',
    'prod3.desc':  'Foam packaging rolls provide optimal protection for fragile and sensitive products during shipping and storage, lightweight and flexible.',
    'prod3.spec1': 'Lightweight',
    'prod3.spec2': 'High Flexibility',
    'prod3.spec3': 'Shock Absorbing',

    'prod4.line':  'PRODUCT 04',
    'prod4.badge': 'Safety',
    'prod4.name':  'Warning/Barricade Tape',
    'prod4.desc':  'Brightly colored warning tape (yellow/black) to mark hazardous areas, construction sites perimeters and secure locations.',
    'prod4.spec1': 'Vivid Colors',
    'prod4.spec2': 'Water Resistant',
    'prod4.spec3': '250m+ Length',

    'prod5.line':  'PRODUCT 05',
    'prod5.badge': 'Industrial',
    'prod5.name':  'PP Strapping Band',
    'prod5.desc':  'High-durability polypropylene (PP) strapping band for securing and bundling heavy loads, suitable for industrial packaging and international shipping.',
    'prod5.spec1': 'High Tensile Strength',
    'prod5.spec2': 'Stretch Resistant',
    'prod5.spec3': 'Multiple Colors',

    'prod6.line':  'PRODUCT 06',
    'prod6.badge': 'Paper Tape',
    'prod6.name':  'Thermal Kraft Paper Tape',
    'prod6.desc':  'Eco-friendly thermal kraft paper tape, ideal for sealing cartons and securing paper packaging with excellent adhesion.',
    'prod6.spec1': 'Eco-Friendly',
    'prod6.spec2': 'Brown Kraft',
    'prod6.spec3': 'Recyclable',

    'prod7.line':  'PRODUCT 07',
    'prod7.badge': 'Films',
    'prod7.name':  'LDPE Films',
    'prod7.desc':  'Flexible and transparent Low-Density Polyethylene films used in packaging food and industrial products in various sizes and shapes.',
    'prod7.spec1': 'High Flexibility',
    'prod7.spec2': 'Excellent Clarity',
    'prod7.spec3': 'Moisture Resistant',

    'prod8.line':  'PRODUCT 08',
    'prod8.badge': 'Insulating',
    'prod8.name':  'Gray Insulating Tape (Duct Tape)',
    'prod8.desc':  'Multi-purpose gray duct tape with strong adhesion, water and heat resistant, ideal for repairs and installations.',
    'prod8.spec1': 'Water Resistant',
    'prod8.spec2': 'Hand Tearable',
    'prod8.spec3': 'Multi-Purpose',

    'prod9.line':  'PRODUCT 09',
    'prod9.badge': 'Aluminum',
    'prod9.name':  'Aluminum Foil Tape',
    'prod9.desc':  'Metallic aluminum foil tape for heat and moisture reflection, used in thermal insulation, HVAC systems and sealing air ducts.',
    'prod9.spec1': 'Thermal Insulation',
    'prod9.spec2': 'Fire Resistant',
    'prod9.spec3': 'Metallic Surface',

    'prod10.line': 'PRODUCT 10',
    'prod10.badge':'Protection',
    'prod10.name': 'Bubble Wrap Roll',
    'prod10.desc': 'Air bubble wrap rolls providing exceptional protection for fragile products, electronics and glassware during shipping and storage.',
    'prod10.spec1':'Large & Small Bubbles',
    'prod10.spec2':'Lightweight',
    'prod10.spec3':'Custom Dimensions',

    'prod11.line': 'PRODUCT 11',
    'prod11.badge':'Nylon',
    'prod11.name': 'Nylon Roll (PE Film)',
    'prod11.desc': 'Transparent and moisture-resistant nylon rolls used for wrapping products, agricultural crops and various merchandise.',
    'prod11.spec1':'High Clarity',
    'prod11.spec2':'Moisture Resistant',
    'prod11.spec3':'Multiple Gauges',

    'prod12.line': 'MACHINE 01',
    'prod12.badge':'Machines',
    'prod12.name': 'Carton Sealing Machine',
    'prod12.desc': 'Automatic and semi-automatic carton sealing machine for efficient tape application, accelerating packaging lines with high precision.',
    'prod12.spec1':'High Output',
    'prod12.spec2':'Easy to Operate',
    'prod12.spec3':'Low Maintenance',

    'prod13.line': 'MACHINE 02',
    'prod13.badge':'Machines',
    'prod13.name': 'Pallet Wrapping Machine',
    'prod13.desc': 'Automatic pallet stretch wrapping machine with adjustable speed and tension settings, ensuring secure load stability for shipping.',
    'prod13.spec1':'Auto & Semi-Auto',
    'prod13.spec2':'Adjustable Speed',
    'prod13.spec3':'Film Saving',

    'prod14.line': 'MACHINE 03',
    'prod14.badge':'Machines',
    'prod14.name': 'Strapping Machine',
    'prod14.desc': 'Professional PP/PET strapping machine for fast and consistent strap tensioning, used for securing heavy loads and industrial packages.',
    'prod14.spec1':'Strong Even Tension',
    'prod14.spec2':'PP & PET',
    'prod14.spec3':'Fast Output',

    'prod.action': 'Request a Quote',

    'footer.desc':        'Line 7 Factory for Plastic Industries — Towards a smarter future in the world of packaging.',
    'footer.quick_links': 'Quick Links',
    'footer.our_products':'Our Products',
    'footer.contact_us':  'Contact Us',
    'footer.location':    'Saudi Arabia',
    'footer.hours':       'Sat – Thu: 8:00 AM – 5:00 PM',
    'footer.copyright':   '© 2025 Line 7 Factory. All rights reserved.',
    'footer.made_with':   'Made with ♥ in Saudi Arabia',

    'filter.all':           'All',
    'filter.tapes':         'Tapes',
    'filter.films':         'Films & Rolls',
    'filter.machines':      'Machines',
    'products.cta_title':   'Looking for a Custom Product?',
    'products.cta_sub':     'We provide custom packaging solutions to your exact specifications. Contact our engineering team now.',
    'products.cta_btn':     'Talk to Our Engineers',

    'ccard.call':           'Sales Management',
    'ccard.whatsapp':       'Sales WhatsApp',
    'ccard.email':          'Email',
    'ccard.location':       'Our Location',
    'ccard.hours_title':    'Working Hours',
    'ccard.complaint':      'Complaints Line',
    'ccard.riyadh':         'Riyadh',
    'ccard.jeddah':         'Jeddah',
    'contact.other_branches': 'We are also present in Khamis Mushait and the Eastern Region',

    'form.name_label':    'Full Name <span>*</span>',
    'form.name_err':      'Please enter your full name',
    'form.name_ph':       'John Smith',
    'form.company_label': 'Company / Organization',
    'form.company_ph':    'Example Co. Ltd.',
    'form.phone_label':   'Phone Number <span>*</span>',
    'form.phone_err':     'Must contain at least 9 digits',
    'form.email_label':   'Email Address',
    'form.email_err':     'Invalid email format',
    'form.subject_label': 'Inquiry Type <span>*</span>',
    'form.subject_ph':    'Select inquiry type',
    'form.subject_err':   'Please select an inquiry type',
    'form.opt_quote':     'Request a Quote',
    'form.opt_sample':    'Request a Sample',
    'form.opt_complaint': 'Complaint / Feedback',
    'form.opt_other':     'Other',
    'form.opt_custom':    'Custom Product',
    'form.product_label': 'Product Required',
    'form.product_ph':    'Select product (optional)',
    'form.msg_label':     'Message Details <span>*</span>',
    'form.msg_ph':        'Write your request or inquiry details here...',
    'form.msg_err':       'Please enter your message details',

    'contact.info_title':    'Start a Conversation With Us Now',
    'contact.info_sub':      "Whether you're looking for a quote or a custom product — we're here to help throughout the week.",
    'contact.form_title':    'Send Your Message',
    'contact.form_sub':      'Fill in the form below and our team will contact you within 24 hours',
    'contact.submit':        'Send Message',
    'contact.success_title': 'Message Sent Successfully!',
    'contact.success_sub':   'Thank you for trusting Line 7 Factory. Our team will contact you within 24 hours.',
    'contact.toast_title':   'Sent Successfully',
    'contact.toast_sub':     "We'll be in touch soon",
    'contact.open_map':      'Open Location on Map',
    'contact.locations_title':'Our Locations',
    'contact.tab_riyadh':    'Riyadh',
    'contact.tab_jeddah':    'Jeddah',
  },
};

// ── LANGUAGE STATE ─────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('line7_lang') || 'ar';

function t(key) {
  return translations[currentLang][key] ?? key;
}

function applyLang(lang, animate) {
  if (animate === undefined) animate = true;
  currentLang = lang;
  localStorage.setItem('line7_lang', lang);

  const html = document.getElementById('htmlRoot') || document.documentElement;
  html.lang = lang;
  html.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  function updateAll() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var value = translations[lang][key];
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var value = translations[lang][key];
      if (value !== undefined) el.placeholder = value;
    });

    document.title = lang === 'ar'
      ? 'مصنع الخط السابع | Line 7 Factory'
      : 'Line 7 Factory | الخط السابع';

    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'ar' ? 'English' : 'عربي';
      btn.classList.toggle('ltr-active', lang === 'en');
    }

    document.querySelectorAll('.hw-arrow i').forEach(function(i) {
      i.className = lang === 'ar' ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
    });

    document.querySelectorAll('.btn-main i.fa-arrow-left, .btn-main i.fa-arrow-right, .btn-white i.fa-arrow-left, .btn-white i.fa-arrow-right').forEach(function(i) {
      i.className = lang === 'ar' ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
    });

    document.querySelectorAll('.product-action i').forEach(function(i) {
      i.className = lang === 'ar' ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
    });
  }

  if (animate) {
    document.body.classList.add('lang-switching');
    setTimeout(function() {
      updateAll();
      document.body.classList.remove('lang-switching');
    }, 180);
  } else {
    updateAll();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  applyLang(currentLang, false);
});

function toggleLang() {
  applyLang(currentLang === 'ar' ? 'en' : 'ar', true);
}

// ── INIT AOS ──────────────────────────────────────────────────────────────────
if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 900, once: true, offset: 60 });
}

// ── HEADER SCROLL EFFECT ──────────────────────────────────────────────────────
var header = document.getElementById('mainHeader');
window.addEventListener('scroll', function() {
  if (header) header.classList.toggle('scrolled', window.scrollY > 60);
  var st = document.getElementById('scrollTop');
  if (st) st.classList.toggle('visible', window.scrollY > 400);
});

// ── MOBILE MENU ───────────────────────────────────────────────────────────────
function toggleMenu() {
  var nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('open');
}

document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function() {
    var nav = document.getElementById('mainNav');
    if (nav) nav.classList.remove('open');
  });
});

// ── COUNTER ANIMATION ─────────────────────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(function(el) {
    var target = parseInt(el.dataset.count);
    var duration = 1800;
    var step = target / (duration / 16);
    var current = 0;
    var isPercent = el.dataset.count === '99';
    var suffix = isPercent ? '%' : '+';
    var timer = setInterval(function() {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

var statsObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) { animateCounters(); statsObserver.disconnect(); }
  });
}, { threshold: 0.5 });

var heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ── HERO SLIDER ───────────────────────────────────────────────────────────────
(function() {
  var slides = document.querySelectorAll('.hero-slide');
  var dots   = document.querySelectorAll('.slider-dot');
  if (!slides.length) return;

  var current = 0;
  var interval;

  function goTo(idx) {
    slides[current].classList.remove('active');
    if (dots.length) dots[current].classList.remove('active');
    current = ((idx % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots.length) dots[current].classList.add('active');
  }

  function startAuto() {
    interval = setInterval(function() { goTo(current + 1); }, 5000);
  }

  startAuto();

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      clearInterval(interval);
      goTo(parseInt(dot.dataset.index));
      startAuto();
    });
  });
})();

// ── PRODUCTS FILTER ───────────────────────────────────────────────────────────
var filterBtns   = document.querySelectorAll('.filter-btn');
var productCards = document.querySelectorAll('.product-card[data-category]');

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var filter = btn.dataset.filter;
    productCards.forEach(function(card) {
      var show = filter === 'all' || card.dataset.category === filter;
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      if (show) {
        card.style.display = 'block';
        requestAnimationFrame(function() { card.style.opacity = '1'; card.style.transform = ''; });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(function() { card.style.display = 'none'; }, 300);
      }
    });
  });
});

// ── MAP LOCATION TABS ─────────────────────────────────────────────────────────
var locTabs = document.querySelectorAll('.loc-tab');
locTabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    locTabs.forEach(function(t) { t.classList.remove('active'); });
    tab.classList.add('active');
    var loc = tab.dataset.loc;
    document.querySelectorAll('.map-frame').forEach(function(frame) {
      frame.style.display = frame.dataset.loc === loc ? 'block' : 'none';
    });
  });
});

// ── CONTACT FORM ──────────────────────────────────────────────────────────────
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var isValid = true;

    var rules = [
      { id: 'fullName', errId: 'nameError',    test: function(v) { return v.trim().length >= 3; } },
      { id: 'phone',    errId: 'phoneError',   test: function(v) { return /[\d]{9,}/.test(v.replace(/[\s+\-()]/g, '')); } },
      { id: 'subject',  errId: 'subjectError', test: function(v) { return v !== ''; } },
      { id: 'message',  errId: 'messageError', test: function(v) { return v.trim().length >= 10; } },
    ];

    var emailEl  = document.getElementById('email');
    var emailErr = document.getElementById('emailError');
    if (emailEl && emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailEl.classList.add('input-error');
      if (emailErr) emailErr.style.display = 'block';
      isValid = false;
    } else {
      if (emailEl) emailEl.classList.remove('input-error');
      if (emailErr) emailErr.style.display = 'none';
    }

    rules.forEach(function(rule) {
      var el  = document.getElementById(rule.id);
      var err = document.getElementById(rule.errId);
      if (!el) return;
      if (!rule.test(el.value)) {
        el.classList.add('input-error');
        if (err) err.style.display = 'block';
        isValid = false;
      } else {
        el.classList.remove('input-error');
        if (err) err.style.display = 'none';
      }
    });

    if (isValid) {
      var submitBtn = document.getElementById('submitBtn');
      if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' +
          (currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...');
      }

      var productEl = document.getElementById('product');
      var payload = {
        _subject: currentLang === 'ar'
          ? 'رسالة جديدة من موقع مصنع الخط السابع'
          : 'New Message from Line 7 Factory Website',
        name:    document.getElementById('fullName') ? document.getElementById('fullName').value : '',
        company: document.getElementById('company')  ? document.getElementById('company').value  : '',
        phone:   document.getElementById('phone')    ? document.getElementById('phone').value    : '',
        email:   emailEl ? emailEl.value : '',
        subject: document.getElementById('subject')  ? document.getElementById('subject').value  : '',
        product: productEl ? productEl.value : '',
        message: document.getElementById('message')  ? document.getElementById('message').value  : '',
      };

      fetch('https://formsubmit.co/ajax/info@line7-group.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(function() { showSuccess(); })
      .catch(function() { showSuccess(); }); // show success even on network error
    }
  });

  function showSuccess() {
    contactForm.style.display = 'none';
    var successMsg = document.getElementById('successMsg');
    if (successMsg) successMsg.classList.add('visible');
    showToast();
  }

  contactForm.querySelectorAll('input, textarea, select').forEach(function(el) {
    el.addEventListener('input', function() {
      el.classList.remove('input-error');
      var err = document.getElementById(el.id + 'Error');
      if (err) err.style.display = 'none';
    });
  });
}

// ── CERTIFICATE MODAL ─────────────────────────────────────────────────────────
function openCertModal(src) {
  var modal = document.getElementById('certModal');
  var img   = document.getElementById('certModalImg');
  if (modal && img) {
    img.src = src;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCertModal() {
  var modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeCertModal();
});

// ── TOAST ─────────────────────────────────────────────────────────────────────
function showToast() {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 4000);
}
