// Extended translation system with all app text

export type Language = 'en' | 'es' | 'zh' | 'hi' | 'ko';

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
] as const;

export type TranslationKeys = {
  nav: {
    home: string;
    gallery: string;
    profile: string;
    apply: string;
    connect: string;
    logout: string;
  };
  home: {
    tagline: string;
    applyNow: string;
    totalSupply: string;
    unique: string;
    ogExclusive: string;
    nftCollection: string;
    theCollection: string;
    collectionDesc: string;
    viewFullGallery: string;
    benefits: string;
    whyPowerGrinders: string;
    moreThanNFTs: string;
    exclusiveAlpha: string;
    exclusiveAlphaDesc: string;
    eliteNetwork: string;
    eliteNetworkDesc: string;
    protectedAccess: string;
    protectedAccessDesc: string;
    limitedMembers: string;
    readyToGrind: string;
    readyToGrindDesc: string;
    community247: string;
    quickLinks: string;
    community: string;
    allRightsReserved: string;
  };
  apply: {
    title: string;
    subtitle: string;
    submitted: string;
    submittedDesc: string;
    redirecting: string;
    fullName: string;
    email: string;
    twitterHandle: string;
    discordUsername: string;
    experience: string;
    whyJoin: string;
    contribution: string;
    submit: string;
    submitting: string;
    required: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    twitterPlaceholder: string;
    discordPlaceholder: string;
    experiencePlaceholder: string;
    whyPlaceholder: string;
    contributionPlaceholder: string;
    totalSpots: string;
    reviewTime: string;
    eliteCommunity: string;
  };
  gallery: {
    title: string;
    fullCollection: string;
    nftsCount: string;
    searchPlaceholder: string;
    loading: string;
    noResults: string;
    noResultsDesc: string;
    clearSearch: string;
    gridLarge: string;
    gridMedium: string;
    gridCompact: string;
  };
  nft: {
    backToGallery: string;
    connectedWallets: string;
    noWallets: string;
    viewOnBlockchain: string;
    share: string;
    imageNotAvailable: string;
    noDescription: string;
  };
  profile: {
    title: string;
    personalInfo: string;
    username: string;
    email: string;
    memberSince: string;
    connectedAccounts: string;
    discordConnected: string;
    twitterConnected: string;
    telegramConnected: string;
    points: string;
    totalPoints: string;
    pointsComingSoon: string;
    recent: string;
    noUsername: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    close: string;
    save: string;
    cancel: string;
  };
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      profile: 'My Profile',
      apply: 'Apply',
      connect: 'Connect',
      logout: 'Logout',
    },
    home: {
      tagline: 'Elite Community of Post-Apocalyptic Survivors',
      applyNow: 'Apply Now',
      totalSupply: 'Total Supply',
      unique: 'Unique',
      ogExclusive: 'Exclusive',
      nftCollection: 'NFT Collection',
      theCollection: 'The Collection',
      collectionDesc: '45 unique characters surviving the wasteland',
      viewFullGallery: 'View Full Gallery',
      benefits: 'Benefits',
      whyPowerGrinders: 'Why Power Grinders',
      moreThanNFTs: 'More than NFTs - an elite community',
      exclusiveAlpha: 'Exclusive Alpha',
      exclusiveAlphaDesc: 'Early access to market insights and trading opportunities',
      eliteNetwork: 'Elite Network',
      eliteNetworkDesc: 'Connect with successful traders in the Solana ecosystem',
      protectedAccess: 'Protected Access',
      protectedAccessDesc: 'Limited to 45 members - quality discussions guaranteed',
      limitedMembers: 'Limited to 45 Members',
      readyToGrind: 'Ready to Grind?',
      readyToGrindDesc: 'Join the most exclusive community of Solana OGs. Applications are reviewed carefully.',
      community247: 'Community',
      quickLinks: 'Quick Links',
      community: 'Community',
      allRightsReserved: 'All rights reserved.',
    },
    apply: {
      title: 'Apply Now',
      subtitle: 'Join an exclusive community of 45 elite members. Only the best grinders are accepted.',
      submitted: 'Application Submitted!',
      submittedDesc: "Thank you for your application. We'll review it and get back to you soon.",
      redirecting: 'Redirecting to home...',
      fullName: 'Full Name',
      email: 'Email Address',
      twitterHandle: 'Twitter Handle',
      discordUsername: 'Discord Username',
      experience: 'Crypto/NFT Experience',
      whyJoin: 'Why do you want to join Power Grinders?',
      contribution: 'What can you contribute to the community?',
      submit: 'Submit Application',
      submitting: 'Submitting...',
      required: '* All fields are required. We review all applications carefully.',
      namePlaceholder: 'Enter your full name',
      emailPlaceholder: 'your.email@example.com',
      twitterPlaceholder: '@yourhandle',
      discordPlaceholder: 'username#0000',
      experiencePlaceholder: 'Tell us about your experience in crypto and NFTs...',
      whyPlaceholder: 'What makes you a good fit for this community?',
      contributionPlaceholder: 'How will you add value to Power Grinders?',
      totalSpots: 'Total Spots',
      reviewTime: 'Review Time',
      eliteCommunity: 'Elite Community',
    },
    gallery: {
      title: 'NFT Gallery',
      fullCollection: 'Full Collection',
      nftsCount: 'NFTs',
      searchPlaceholder: 'Search by name, description or #ID...',
      loading: 'Loading NFTs...',
      noResults: 'No results found',
      noResultsDesc: 'No NFTs match',
      clearSearch: 'Clear search',
      gridLarge: 'Large grid',
      gridMedium: 'Medium grid',
      gridCompact: 'Compact grid',
    },
    nft: {
      backToGallery: 'Back to gallery',
      connectedWallets: 'Connected Wallets',
      noWallets: 'No connected wallets',
      viewOnBlockchain: 'View on Blockchain',
      share: 'Share',
      imageNotAvailable: 'Image not available',
      noDescription: 'No description available',
    },
    profile: {
      title: 'My Profile',
      personalInfo: 'Personal Information',
      username: 'Username',
      email: 'Email',
      memberSince: 'Member since',
      connectedAccounts: 'Connected Accounts',
      discordConnected: 'Discord connected',
      twitterConnected: 'Twitter connected',
      telegramConnected: 'Telegram connected',
      points: 'Points',
      totalPoints: 'Total points',
      pointsComingSoon: 'Points system coming soon',
      recent: 'Recent',
      noUsername: 'No username',
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      gallery: 'Galería',
      profile: 'Mi Perfil',
      apply: 'Aplicar',
      connect: 'Conectar',
      logout: 'Salir',
    },
    home: {
      tagline: 'Comunidad Elite de Supervivientes Post-Apocalípticos',
      applyNow: 'Aplicar Ahora',
      totalSupply: 'Suministro Total',
      unique: 'Único',
      ogExclusive: 'Exclusivo',
      nftCollection: 'Colección NFT',
      theCollection: 'La Colección',
      collectionDesc: '45 personajes únicos sobreviviendo en el páramo',
      viewFullGallery: 'Ver Galería Completa',
      benefits: 'Beneficios',
      whyPowerGrinders: 'Por qué Power Grinders',
      moreThanNFTs: 'Más que NFTs - una comunidad elite',
      exclusiveAlpha: 'Alpha Exclusivo',
      exclusiveAlphaDesc: 'Acceso anticipado a insights del mercado y oportunidades de trading',
      eliteNetwork: 'Red Elite',
      eliteNetworkDesc: 'Conéctate con traders exitosos en el ecosistema Solana',
      protectedAccess: 'Acceso Protegido',
      protectedAccessDesc: 'Limitado a 45 miembros - discusiones de calidad garantizadas',
      limitedMembers: 'Limitado a 45 Miembros',
      readyToGrind: '¿Listo para Grindear?',
      readyToGrindDesc: 'Únete a la comunidad más exclusiva de OGs de Solana. Las aplicaciones se revisan cuidadosamente.',
      community247: 'Comunidad',
      quickLinks: 'Enlaces Rápidos',
      community: 'Comunidad',
      allRightsReserved: 'Todos los derechos reservados.',
    },
    apply: {
      title: 'Aplicar Ahora',
      subtitle: 'Únete a una comunidad exclusiva de 45 miembros elite. Solo se aceptan los mejores grinders.',
      submitted: '¡Aplicación Enviada!',
      submittedDesc: 'Gracias por tu aplicación. La revisaremos y te contactaremos pronto.',
      redirecting: 'Redirigiendo al inicio...',
      fullName: 'Nombre Completo',
      email: 'Correo Electrónico',
      twitterHandle: 'Usuario de Twitter',
      discordUsername: 'Usuario de Discord',
      experience: 'Experiencia en Crypto/NFT',
      whyJoin: '¿Por qué quieres unirte a Power Grinders?',
      contribution: '¿Qué puedes contribuir a la comunidad?',
      submit: 'Enviar Aplicación',
      submitting: 'Enviando...',
      required: '* Todos los campos son requeridos. Revisamos todas las aplicaciones cuidadosamente.',
      namePlaceholder: 'Ingresa tu nombre completo',
      emailPlaceholder: 'tu.correo@ejemplo.com',
      twitterPlaceholder: '@tuusuario',
      discordPlaceholder: 'usuario#0000',
      experiencePlaceholder: 'Cuéntanos sobre tu experiencia en crypto y NFTs...',
      whyPlaceholder: '¿Qué te hace un buen candidato para esta comunidad?',
      contributionPlaceholder: '¿Cómo agregarás valor a Power Grinders?',
      totalSpots: 'Espacios Totales',
      reviewTime: 'Tiempo de Revisión',
      eliteCommunity: 'Comunidad Elite',
    },
    gallery: {
      title: 'Galería NFT',
      fullCollection: 'Colección Completa',
      nftsCount: 'NFTs',
      searchPlaceholder: 'Buscar por nombre, descripción o #ID...',
      loading: 'Cargando NFTs...',
      noResults: 'No se encontraron resultados',
      noResultsDesc: 'No hay NFTs que coincidan con',
      clearSearch: 'Limpiar búsqueda',
      gridLarge: 'Grid grande',
      gridMedium: 'Grid medio',
      gridCompact: 'Grid compacto',
    },
    nft: {
      backToGallery: 'Volver a la galería',
      connectedWallets: 'Wallets Conectadas',
      noWallets: 'No hay wallets conectadas',
      viewOnBlockchain: 'Ver en Blockchain',
      share: 'Compartir',
      imageNotAvailable: 'Imagen no disponible',
      noDescription: 'Sin descripción disponible',
    },
    profile: {
      title: 'Mi Perfil',
      personalInfo: 'Información Personal',
      username: 'Nombre de usuario',
      email: 'Correo electrónico',
      memberSince: 'Miembro desde',
      connectedAccounts: 'Cuentas Conectadas',
      discordConnected: 'Discord conectado',
      twitterConnected: 'Twitter conectado',
      telegramConnected: 'Telegram conectado',
      points: 'Puntos',
      totalPoints: 'Puntos totales',
      pointsComingSoon: 'Sistema de puntos próximamente',
      recent: 'Reciente',
      noUsername: 'Sin nombre',
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar',
    },
  },
  // Minimal translations for other languages (zh, hi, ko) - keeping it shorter
  zh: {
    nav: { home: '首页', gallery: '画廊', profile: '我的资料', apply: '申请', connect: '连接', logout: '登出' },
    home: { tagline: '精英后启示录幸存者社区', applyNow: '立即申请', totalSupply: '总供应量', unique: '独特', ogExclusive: '专属', nftCollection: 'NFT收藏', theCollection: '收藏品', collectionDesc: '45个独特角色在荒地中生存', viewFullGallery: '查看完整画廊', benefits: '福利', whyPowerGrinders: '为什么选择Power Grinders', moreThanNFTs: '不仅仅是NFT - 精英社区', exclusiveAlpha: '独家Alpha', exclusiveAlphaDesc: '早期访问市场洞察和交易机会', eliteNetwork: '精英网络', eliteNetworkDesc: '与Solana生态系统中的成功交易者建立联系', protectedAccess: '受保护访问', protectedAccessDesc: '限45名成员 - 保证高质量讨论', limitedMembers: '限45名成员', readyToGrind: '准备好了吗？', readyToGrindDesc: '加入最独家的Solana OG社区。申请将被仔细审查。', community247: '社区', quickLinks: '快速链接', community: '社区', allRightsReserved: '版权所有。' },
    apply: { title: '立即申请', subtitle: '加入45名精英成员的独家社区。只接受最好的成员。', submitted: '申请已提交！', submittedDesc: '感谢您的申请。我们会审查并尽快与您联系。', redirecting: '正在跳转到首页...', fullName: '全名', email: '电子邮件地址', twitterHandle: 'Twitter用户名', discordUsername: 'Discord用户名', experience: 'Crypto/NFT经验', whyJoin: '为什么要加入Power Grinders？', contribution: '您能为社区贡献什么？', submit: '提交申请', submitting: '提交中...', required: '* 所有字段都是必填的。我们会仔细审查所有申请。', namePlaceholder: '输入您的全名', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: '告诉我们您在加密货币和NFT方面的经验...', whyPlaceholder: '是什么让您适合这个社区？', contributionPlaceholder: '您将如何为Power Grinders增值？', totalSpots: '总名额', reviewTime: '审查时间', eliteCommunity: '精英社区' },
    gallery: { title: 'NFT画廊', fullCollection: '完整收藏', nftsCount: '个NFT', searchPlaceholder: '按名称、描述或#ID搜索...', loading: '加载NFT中...', noResults: '未找到结果', noResultsDesc: '没有匹配的NFT', clearSearch: '清除搜索', gridLarge: '大网格', gridMedium: '中网格', gridCompact: '紧凑网格' },
    nft: { backToGallery: '返回画廊', connectedWallets: '已连接钱包', noWallets: '无已连接钱包', viewOnBlockchain: '在区块链上查看', share: '分享', imageNotAvailable: '图片不可用', noDescription: '无可用描述' },
    profile: { title: '我的资料', personalInfo: '个人信息', username: '用户名', email: '电子邮件', memberSince: '会员自', connectedAccounts: '已连接账户', discordConnected: 'Discord已连接', twitterConnected: 'Twitter已连接', telegramConnected: 'Telegram已连接', points: '积分', totalPoints: '总积分', pointsComingSoon: '积分系统即将推出', recent: '最近', noUsername: '无用户名' },
    common: { loading: '加载中...', error: '错误', success: '成功', close: '关闭', save: '保存', cancel: '取消' },
  },
  hi: {
    nav: { home: 'होम', gallery: 'गैलरी', profile: 'मेरी प्रोफ़ाइल', apply: 'आवेदन करें', connect: 'कनेक्ट करें', logout: 'लॉग आउट' },
    home: { tagline: 'पोस्ट-एपोकैलिप्टिक सर्वाइवर्स का एलीट समुदाय', applyNow: 'अभी आवेदन करें', totalSupply: 'कुल आपूर्ति', unique: 'अनूठा', ogExclusive: 'विशेष', nftCollection: 'NFT संग्रह', theCollection: 'संग्रह', collectionDesc: 'वेस्टलैंड में जीवित 45 अनूठे पात्र', viewFullGallery: 'पूर्ण गैलरी देखें', benefits: 'लाभ', whyPowerGrinders: 'Power Grinders क्यों', moreThanNFTs: 'NFTs से अधिक - एक एलीट समुदाय', exclusiveAlpha: 'विशेष Alpha', exclusiveAlphaDesc: 'बाजार अंतर्दृष्टि और ट्रेडिंग अवसरों तक प्रारंभिक पहुंच', eliteNetwork: 'एलीट नेटवर्क', eliteNetworkDesc: 'Solana इकोसिस्टम में सफल ट्रेडर्स से जुड़ें', protectedAccess: 'संरक्षित पहुंच', protectedAccessDesc: '45 सदस्यों तक सीमित - गुणवत्ता चर्चाओं की गारंटी', limitedMembers: '45 सदस्यों तक सीमित', readyToGrind: 'Grind करने के लिए तैयार हैं?', readyToGrindDesc: 'Solana OGs के सबसे विशेष समुदाय में शामिल हों। आवेदनों की सावधानीपूर्वक समीक्षा की जाती है।', community247: 'समुदाय', quickLinks: 'त्वरित लिंक', community: 'समुदाय', allRightsReserved: 'सर्वाधिकार सुरक्षित।' },
    apply: { title: 'अभी आवेदन करें', subtitle: '45 एलीट सदस्यों के विशेष समुदाय में शामिल हों। केवल सर्वश्रेष्ठ को स्वीकार किया जाता है।', submitted: 'आवेदन जमा किया गया!', submittedDesc: 'आपके आवेदन के लिए धन्यवाद। हम इसकी समीक्षा करेंगे और जल्द ही आपसे संपर्क करेंगे।', redirecting: 'होम पर रीडायरेक्ट किया जा रहा है...', fullName: 'पूरा नाम', email: 'ईमेल पता', twitterHandle: 'Twitter हैंडल', discordUsername: 'Discord उपयोगकर्ता नाम', experience: 'Crypto/NFT अनुभव', whyJoin: 'आप Power Grinders में क्यों शामिल होना चाहते हैं?', contribution: 'आप समुदाय में क्या योगदान कर सकते हैं?', submit: 'आवेदन जमा करें', submitting: 'जमा किया जा रहा है...', required: '* सभी फ़ील्ड आवश्यक हैं। हम सभी आवेदनों की सावधानीपूर्वक समीक्षा करते हैं।', namePlaceholder: 'अपना पूरा नाम दर्ज करें', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: 'crypto और NFTs में अपने अनुभव के बारे में बताएं...', whyPlaceholder: 'क्या आपको इस समुदाय के लिए उपयुक्त बनाता है?', contributionPlaceholder: 'आप Power Grinders में मूल्य कैसे जोड़ेंगे?', totalSpots: 'कुल स्थान', reviewTime: 'समीक्षा समय', eliteCommunity: 'एलीट समुदाय' },
    gallery: { title: 'NFT गैलरी', fullCollection: 'पूर्ण संग्रह', nftsCount: 'NFTs', searchPlaceholder: 'नाम, विवरण या #ID द्वारा खोजें...', loading: 'NFTs लोड हो रहे हैं...', noResults: 'कोई परिणाम नहीं मिला', noResultsDesc: 'कोई NFT मेल नहीं खाता', clearSearch: 'खोज साफ़ करें', gridLarge: 'बड़ी ग्रिड', gridMedium: 'मध्यम ग्रिड', gridCompact: 'कॉम्पैक्ट ग्रिड' },
    nft: { backToGallery: 'गैलरी पर वापस जाएं', connectedWallets: 'कनेक्टेड वॉलेट', noWallets: 'कोई कनेक्टेड वॉलेट नहीं', viewOnBlockchain: 'ब्लॉकचेन पर देखें', share: 'शेयर करें', imageNotAvailable: 'छवि उपलब्ध नहीं', noDescription: 'कोई विवरण उपलब्ध नहीं' },
    profile: { title: 'मेरी प्रोफ़ाइल', personalInfo: 'व्यक्तिगत जानकारी', username: 'उपयोगकर्ता नाम', email: 'ईमेल', memberSince: 'सदस्य कब से', connectedAccounts: 'कनेक्टेड खाते', discordConnected: 'Discord कनेक्टेड', twitterConnected: 'Twitter कनेक्टेड', telegramConnected: 'Telegram कनेक्टेड', points: 'अंक', totalPoints: 'कुल अंक', pointsComingSoon: 'अंक प्रणाली जल्द आ रही है', recent: 'हाल का', noUsername: 'कोई उपयोगकर्ता नाम नहीं' },
    common: { loading: 'लोड हो रहा है...', error: 'त्रुटि', success: 'सफलता', close: 'बंद करें', save: 'सहेजें', cancel: 'रद्द करें' },
  },
  ko: {
    nav: { home: '홈', gallery: '갤러리', profile: '내 프로필', apply: '신청', connect: '연결', logout: '로그아웃' },
    home: { tagline: '포스트 아포칼립스 생존자들의 엘리트 커뮤니티', applyNow: '지금 신청하기', totalSupply: '총 공급량', unique: '고유', ogExclusive: '독점', nftCollection: 'NFT 컬렉션', theCollection: '컬렉션', collectionDesc: '황무지에서 생존하는 45개의 독특한 캐릭터', viewFullGallery: '전체 갤러리 보기', benefits: '혜택', whyPowerGrinders: 'Power Grinders를 선택하는 이유', moreThanNFTs: 'NFT 이상 - 엘리트 커뮤니티', exclusiveAlpha: '독점 Alpha', exclusiveAlphaDesc: '시장 통찰력과 거래 기회에 조기 액세스', eliteNetwork: '엘리트 네트워크', eliteNetworkDesc: 'Solana 생태계의 성공적인 트레이더와 연결', protectedAccess: '보호된 액세스', protectedAccessDesc: '45명으로 제한 - 품질 토론 보장', limitedMembers: '45명으로 제한', readyToGrind: 'Grind할 준비가 되셨나요?', readyToGrindDesc: 'Solana OG의 가장 독점적인 커뮤니티에 참여하세요. 신청서는 신중하게 검토됩니다.', community247: '커뮤니티', quickLinks: '빠른 링크', community: '커뮤니티', allRightsReserved: '모든 권리 보유.' },
    apply: { title: '지금 신청하기', subtitle: '45명의 엘리트 회원으로 구성된 독점 커뮤니티에 참여하세요. 최고만 받아들입니다.', submitted: '신청서가 제출되었습니다!', submittedDesc: '신청해 주셔서 감사합니다. 검토 후 곧 연락드리겠습니다.', redirecting: '홈으로 리디렉션 중...', fullName: '전체 이름', email: '이메일 주소', twitterHandle: 'Twitter 핸들', discordUsername: 'Discord 사용자 이름', experience: 'Crypto/NFT 경험', whyJoin: 'Power Grinders에 가입하고 싶은 이유는 무엇입니까?', contribution: '커뮤니티에 무엇을 기여할 수 있습니까?', submit: '신청서 제출', submitting: '제출 중...', required: '* 모든 필드는 필수입니다. 모든 신청서를 신중하게 검토합니다.', namePlaceholder: '전체 이름 입력', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: 'crypto 및 NFT 경험에 대해 알려주세요...', whyPlaceholder: '이 커뮤니티에 적합한 이유는 무엇입니까?', contributionPlaceholder: 'Power Grinders에 어떻게 가치를 더할 것인가요?', totalSpots: '총 자리', reviewTime: '검토 시간', eliteCommunity: '엘리트 커뮤니티' },
    gallery: { title: 'NFT 갤러리', fullCollection: '전체 컬렉션', nftsCount: '개 NFT', searchPlaceholder: '이름, 설명 또는 #ID로 검색...', loading: 'NFT 로딩 중...', noResults: '결과를 찾을 수 없습니다', noResultsDesc: '일치하는 NFT가 없습니다', clearSearch: '검색 지우기', gridLarge: '큰 그리드', gridMedium: '중간 그리드', gridCompact: '컴팩트 그리드' },
    nft: { backToGallery: '갤러리로 돌아가기', connectedWallets: '연결된 지갑', noWallets: '연결된 지갑 없음', viewOnBlockchain: '블록체인에서 보기', share: '공유', imageNotAvailable: '이미지를 사용할 수 없습니다', noDescription: '설명 없음' },
    profile: { title: '내 프로필', personalInfo: '개인 정보', username: '사용자 이름', email: '이메일', memberSince: '가입일', connectedAccounts: '연결된 계정', discordConnected: 'Discord 연결됨', twitterConnected: 'Twitter 연결됨', telegramConnected: 'Telegram 연결됨', points: '포인트', totalPoints: '총 포인트', pointsComingSoon: '포인트 시스템 출시 예정', recent: '최근', noUsername: '사용자 이름 없음' },
    common: { loading: '로딩 중...', error: '오류', success: '성공', close: '닫기', save: '저장', cancel: '취소' },
  },
};

export function getTranslation(lang: Language): TranslationKeys {
  return translations[lang] || translations.en;
}
