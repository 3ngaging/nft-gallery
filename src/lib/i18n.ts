// Extended translation system with all app text

export type Language = 'en' | 'es' | 'zh' | 'hi' | 'ko' | 'it' | 'tr' | 'pt';

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
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
    communityBadge: string;
    communityTitle: string;
    communitySubtitle: string;
    communityBenefit1: string;
    communityBenefit2: string;
    communityBenefit3: string;
    communityBenefit4: string;
    communityCtaTitle: string;
    communityCtaDesc: string;
    privacyPolicy: string;
    termsOfService: string;
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
      communityBadge: 'Exclusive Community',
      communityTitle: 'Join the Elite Community',
      communitySubtitle: 'More than just NFTs - unlock access to a private network of elite traders, exclusive alpha, and opportunities you won\'t find anywhere else.',
      communityBenefit1: 'Daily market insights and trading signals from experienced traders',
      communityBenefit2: 'Early access to high-potential projects before they go public',
      communityBenefit3: 'Private Discord channels with real-time discussions and alerts',
      communityBenefit4: 'Network with successful traders and learn from their strategies',
      communityCtaTitle: 'Ready to Join the Elite?',
      communityCtaDesc: 'Limited to 45 members only. Apply now to secure your spot in the most exclusive trading community on Solana.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
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
      communityBadge: 'Comunidad Exclusiva',
      communityTitle: 'Únete a la Comunidad Elite',
      communitySubtitle: 'Más que solo NFTs - desbloquea acceso a una red privada de traders elite, alpha exclusivo y oportunidades que no encontrarás en ningún otro lugar.',
      communityBenefit1: 'Información diaria del mercado y señales de trading de traders experimentados',
      communityBenefit2: 'Acceso anticipado a proyectos de alto potencial antes de hacerse públicos',
      communityBenefit3: 'Canales privados de Discord con discusiones y alertas en tiempo real',
      communityBenefit4: 'Conecta con traders exitosos y aprende de sus estrategias',
      communityCtaTitle: '¿Listo para Unirte a la Elite?',
      communityCtaDesc: 'Limitado a solo 45 miembros. Aplica ahora para asegurar tu lugar en la comunidad de trading más exclusiva en Solana.',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
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
    home: { tagline: '精英后启示录幸存者社区', applyNow: '立即申请', totalSupply: '总供应量', unique: '独特', ogExclusive: '专属', nftCollection: 'NFT收藏', theCollection: '收藏品', collectionDesc: '45个独特角色在荒地中生存', viewFullGallery: '查看完整画廊', benefits: '福利', whyPowerGrinders: '为什么选择Power Grinders', moreThanNFTs: '不仅仅是NFT - 精英社区', exclusiveAlpha: '独家Alpha', exclusiveAlphaDesc: '早期访问市场洞察和交易机会', eliteNetwork: '精英网络', eliteNetworkDesc: '与Solana生态系统中的成功交易者建立联系', protectedAccess: '受保护访问', protectedAccessDesc: '限45名成员 - 保证高质量讨论', limitedMembers: '限45名成员', readyToGrind: '准备好了吗？', readyToGrindDesc: '加入最独家的Solana OG社区。申请将被仔细审查。', community247: '社区', quickLinks: '快速链接', community: '社区', allRightsReserved: '版权所有。', communityBadge: '独家社区', communityTitle: '加入精英社区', communitySubtitle: '不仅仅是NFT - 解锁精英交易者私人网络、独家Alpha和您在其他地方找不到的机会。', communityBenefit1: '来自经验丰富交易者的每日市场洞察和交易信号', communityBenefit2: '在公开之前抢先获得高潜力项目', communityBenefit3: '带有实时讨论和警报的私人Discord频道', communityBenefit4: '与成功的交易者建立联系并学习他们的策略', communityCtaTitle: '准备加入精英？', communityCtaDesc: '仅限45名成员。立即申请，在Solana最独家的交易社区中占据您的位置。', privacyPolicy: '隐私政策', termsOfService: '服务条款' },
    apply: { title: '立即申请', subtitle: '加入45名精英成员的独家社区。只接受最好的成员。', submitted: '申请已提交！', submittedDesc: '感谢您的申请。我们会审查并尽快与您联系。', redirecting: '正在跳转到首页...', fullName: '全名', email: '电子邮件地址', twitterHandle: 'Twitter用户名', discordUsername: 'Discord用户名', experience: 'Crypto/NFT经验', whyJoin: '为什么要加入Power Grinders？', contribution: '您能为社区贡献什么？', submit: '提交申请', submitting: '提交中...', required: '* 所有字段都是必填的。我们会仔细审查所有申请。', namePlaceholder: '输入您的全名', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: '告诉我们您在加密货币和NFT方面的经验...', whyPlaceholder: '是什么让您适合这个社区？', contributionPlaceholder: '您将如何为Power Grinders增值？', totalSpots: '总名额', reviewTime: '审查时间', eliteCommunity: '精英社区' },
    gallery: { title: 'NFT画廊', fullCollection: '完整收藏', nftsCount: '个NFT', searchPlaceholder: '按名称、描述或#ID搜索...', loading: '加载NFT中...', noResults: '未找到结果', noResultsDesc: '没有匹配的NFT', clearSearch: '清除搜索', gridLarge: '大网格', gridMedium: '中网格', gridCompact: '紧凑网格' },
    nft: { backToGallery: '返回画廊', connectedWallets: '已连接钱包', noWallets: '无已连接钱包', viewOnBlockchain: '在区块链上查看', share: '分享', imageNotAvailable: '图片不可用', noDescription: '无可用描述' },
    profile: { title: '我的资料', personalInfo: '个人信息', username: '用户名', email: '电子邮件', memberSince: '会员自', connectedAccounts: '已连接账户', discordConnected: 'Discord已连接', twitterConnected: 'Twitter已连接', telegramConnected: 'Telegram已连接', points: '积分', totalPoints: '总积分', pointsComingSoon: '积分系统即将推出', recent: '最近', noUsername: '无用户名' },
    common: { loading: '加载中...', error: '错误', success: '成功', close: '关闭', save: '保存', cancel: '取消' },
  },
  hi: {
    nav: { home: 'होम', gallery: 'गैलरी', profile: 'मेरी प्रोफ़ाइल', apply: 'आवेदन करें', connect: 'कनेक्ट करें', logout: 'लॉग आउट' },
    home: { tagline: 'पोस्ट-एपोकैलिप्टिक सर्वाइवर्स का एलीट समुदाय', applyNow: 'अभी आवेदन करें', totalSupply: 'कुल आपूर्ति', unique: 'अनूठा', ogExclusive: 'विशेष', nftCollection: 'NFT संग्रह', theCollection: 'संग्रह', collectionDesc: 'वेस्टलैंड में जीवित 45 अनूठे पात्र', viewFullGallery: 'पूर्ण गैलरी देखें', benefits: 'लाभ', whyPowerGrinders: 'Power Grinders क्यों', moreThanNFTs: 'NFTs से अधिक - एक एलीट समुदाय', exclusiveAlpha: 'विशेष Alpha', exclusiveAlphaDesc: 'बाजार अंतर्दृष्टि और ट्रेडिंग अवसरों तक प्रारंभिक पहुंच', eliteNetwork: 'एलीट नेटवर्क', eliteNetworkDesc: 'Solana इकोसिस्टम में सफल ट्रेडर्स से जुड़ें', protectedAccess: 'संरक्षित पहुंच', protectedAccessDesc: '45 सदस्यों तक सीमित - गुणवत्ता चर्चाओं की गारंटी', limitedMembers: '45 सदस्यों तक सीमित', readyToGrind: 'Grind करने के लिए तैयार हैं?', readyToGrindDesc: 'Solana OGs के सबसे विशेष समुदाय में शामिल हों। आवेदनों की सावधानीपूर्वक समीक्षा की जाती है।', community247: 'समुदाय', quickLinks: 'त्वरित लिंक', community: 'समुदाय', allRightsReserved: 'सर्वाधिकार सुरक्षित।', communityBadge: 'विशेष समुदाय', communityTitle: 'एलीट समुदाय में शामिल हों', communitySubtitle: 'केवल NFTs से अधिक - एलीट ट्रेडर्स के निजी नेटवर्क, विशेष alpha और अवसरों तक पहुंच प्राप्त करें।', communityBenefit1: 'अनुभवी ट्रेडर्स से दैनिक बाजार अंतर्दृष्टि और ट्रेडिंग संकेत', communityBenefit2: 'सार्वजनिक होने से पहले उच्च क्षमता वाली परियोजनाओं तक प्रारंभिक पहुंच', communityBenefit3: 'वास्तविक समय चर्चा और अलर्ट के साथ निजी Discord चैनल', communityBenefit4: 'सफल ट्रेडर्स के साथ नेटवर्क और उनकी रणनीतियों से सीखें', communityCtaTitle: 'एलीट में शामिल होने के लिए तैयार हैं?', communityCtaDesc: 'केवल 45 सदस्यों तक सीमित। Solana पर सबसे विशेष ट्रेडिंग समुदाय में अपना स्थान सुरक्षित करने के लिए अभी आवेदन करें।', privacyPolicy: 'गोपनीयता नीति', termsOfService: 'सेवा की शर्तें' },
    apply: { title: 'अभी आवेदन करें', subtitle: '45 एलीट सदस्यों के विशेष समुदाय में शामिल हों। केवल सर्वश्रेष्ठ को स्वीकार किया जाता है।', submitted: 'आवेदन जमा किया गया!', submittedDesc: 'आपके आवेदन के लिए धन्यवाद। हम इसकी समीक्षा करेंगे और जल्द ही आपसे संपर्क करेंगे।', redirecting: 'होम पर रीडायरेक्ट किया जा रहा है...', fullName: 'पूरा नाम', email: 'ईमेल पता', twitterHandle: 'Twitter हैंडल', discordUsername: 'Discord उपयोगकर्ता नाम', experience: 'Crypto/NFT अनुभव', whyJoin: 'आप Power Grinders में क्यों शामिल होना चाहते हैं?', contribution: 'आप समुदाय में क्या योगदान कर सकते हैं?', submit: 'आवेदन जमा करें', submitting: 'जमा किया जा रहा है...', required: '* सभी फ़ील्ड आवश्यक हैं। हम सभी आवेदनों की सावधानीपूर्वक समीक्षा करते हैं।', namePlaceholder: 'अपना पूरा नाम दर्ज करें', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: 'crypto और NFTs में अपने अनुभव के बारे में बताएं...', whyPlaceholder: 'क्या आपको इस समुदाय के लिए उपयुक्त बनाता है?', contributionPlaceholder: 'आप Power Grinders में मूल्य कैसे जोड़ेंगे?', totalSpots: 'कुल स्थान', reviewTime: 'समीक्षा समय', eliteCommunity: 'एलीट समुदाय' },
    gallery: { title: 'NFT गैलरी', fullCollection: 'पूर्ण संग्रह', nftsCount: 'NFTs', searchPlaceholder: 'नाम, विवरण या #ID द्वारा खोजें...', loading: 'NFTs लोड हो रहे हैं...', noResults: 'कोई परिणाम नहीं मिला', noResultsDesc: 'कोई NFT मेल नहीं खाता', clearSearch: 'खोज साफ़ करें', gridLarge: 'बड़ी ग्रिड', gridMedium: 'मध्यम ग्रिड', gridCompact: 'कॉम्पैक्ट ग्रिड' },
    nft: { backToGallery: 'गैलरी पर वापस जाएं', connectedWallets: 'कनेक्टेड वॉलेट', noWallets: 'कोई कनेक्टेड वॉलेट नहीं', viewOnBlockchain: 'ब्लॉकचेन पर देखें', share: 'शेयर करें', imageNotAvailable: 'छवि उपलब्ध नहीं', noDescription: 'कोई विवरण उपलब्ध नहीं' },
    profile: { title: 'मेरी प्रोफ़ाइल', personalInfo: 'व्यक्तिगत जानकारी', username: 'उपयोगकर्ता नाम', email: 'ईमेल', memberSince: 'सदस्य कब से', connectedAccounts: 'कनेक्टेड खाते', discordConnected: 'Discord कनेक्टेड', twitterConnected: 'Twitter कनेक्टेड', telegramConnected: 'Telegram कनेक्टेड', points: 'अंक', totalPoints: 'कुल अंक', pointsComingSoon: 'अंक प्रणाली जल्द आ रही है', recent: 'हाल का', noUsername: 'कोई उपयोगकर्ता नाम नहीं' },
    common: { loading: 'लोड हो रहा है...', error: 'त्रुटि', success: 'सफलता', close: 'बंद करें', save: 'सहेजें', cancel: 'रद्द करें' },
  },
  ko: {
    nav: { home: '홈', gallery: '갤러리', profile: '내 프로필', apply: '신청', connect: '연결', logout: '로그아웃' },
    home: { tagline: '포스트 아포칼립스 생존자들의 엘리트 커뮤니티', applyNow: '지금 신청하기', totalSupply: '총 공급량', unique: '고유', ogExclusive: '독점', nftCollection: 'NFT 컬렉션', theCollection: '컬렉션', collectionDesc: '황무지에서 생존하는 45개의 독특한 캐릭터', viewFullGallery: '전체 갤러리 보기', benefits: '혜택', whyPowerGrinders: 'Power Grinders를 선택하는 이유', moreThanNFTs: 'NFT 이상 - 엘리트 커뮤니티', exclusiveAlpha: '독점 Alpha', exclusiveAlphaDesc: '시장 통찰력과 거래 기회에 조기 액세스', eliteNetwork: '엘리트 네트워크', eliteNetworkDesc: 'Solana 생태계의 성공적인 트레이더와 연결', protectedAccess: '보호된 액세스', protectedAccessDesc: '45명으로 제한 - 품질 토론 보장', limitedMembers: '45명으로 제한', readyToGrind: 'Grind할 준비가 되셨나요?', readyToGrindDesc: 'Solana OG의 가장 독점적인 커뮤니티에 참여하세요. 신청서는 신중하게 검토됩니다.', community247: '커뮤니티', quickLinks: '빠른 링크', community: '커뮤니티', allRightsReserved: '모든 권리 보유.', communityBadge: '독점 커뮤니티', communityTitle: '엘리트 커뮤니티 가입', communitySubtitle: 'NFT 이상 - 엘리트 트레이더의 프라이빗 네트워크, 독점 alpha 및 다른 곳에서는 찾을 수 없는 기회에 대한 액세스를 잠금 해제하세요.', communityBenefit1: '경험 많은 트레이더의 일일 시장 통찰력 및 거래 신호', communityBenefit2: '공개되기 전 높은 잠재력을 가진 프로젝트에 조기 액세스', communityBenefit3: '실시간 토론 및 알림이 있는 비공개 Discord 채널', communityBenefit4: '성공적인 트레이더와 네트워크를 형성하고 그들의 전략을 배우세요', communityCtaTitle: '엘리트에 가입할 준비가 되셨나요?', communityCtaDesc: '45명으로만 제한됩니다. Solana에서 가장 독점적인 트레이딩 커뮤니티에서 자리를 확보하려면 지금 신청하세요.', privacyPolicy: '개인정보 처리방침', termsOfService: '서비스 약관' },
    apply: { title: '지금 신청하기', subtitle: '45명의 엘리트 회원으로 구성된 독점 커뮤니티에 참여하세요. 최고만 받아들입니다.', submitted: '신청서가 제출되었습니다!', submittedDesc: '신청해 주셔서 감사합니다. 검토 후 곧 연락드리겠습니다.', redirecting: '홈으로 리디렉션 중...', fullName: '전체 이름', email: '이메일 주소', twitterHandle: 'Twitter 핸들', discordUsername: 'Discord 사용자 이름', experience: 'Crypto/NFT 경험', whyJoin: 'Power Grinders에 가입하고 싶은 이유는 무엇입니까?', contribution: '커뮤니티에 무엇을 기여할 수 있습니까?', submit: '신청서 제출', submitting: '제출 중...', required: '* 모든 필드는 필수입니다. 모든 신청서를 신중하게 검토합니다.', namePlaceholder: '전체 이름 입력', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: 'crypto 및 NFT 경험에 대해 알려주세요...', whyPlaceholder: '이 커뮤니티에 적합한 이유는 무엇입니까?', contributionPlaceholder: 'Power Grinders에 어떻게 가치를 더할 것인가요?', totalSpots: '총 자리', reviewTime: '검토 시간', eliteCommunity: '엘리트 커뮤니티' },
    gallery: { title: 'NFT 갤러리', fullCollection: '전체 컬렉션', nftsCount: '개 NFT', searchPlaceholder: '이름, 설명 또는 #ID로 검색...', loading: 'NFT 로딩 중...', noResults: '결과를 찾을 수 없습니다', noResultsDesc: '일치하는 NFT가 없습니다', clearSearch: '검색 지우기', gridLarge: '큰 그리드', gridMedium: '중간 그리드', gridCompact: '컴팩트 그리드' },
    nft: { backToGallery: '갤러리로 돌아가기', connectedWallets: '연결된 지갑', noWallets: '연결된 지갑 없음', viewOnBlockchain: '블록체인에서 보기', share: '공유', imageNotAvailable: '이미지를 사용할 수 없습니다', noDescription: '설명 없음' },
    profile: { title: '내 프로필', personalInfo: '개인 정보', username: '사용자 이름', email: '이메일', memberSince: '가입일', connectedAccounts: '연결된 계정', discordConnected: 'Discord 연결됨', twitterConnected: 'Twitter 연결됨', telegramConnected: 'Telegram 연결됨', points: '포인트', totalPoints: '총 포인트', pointsComingSoon: '포인트 시스템 출시 예정', recent: '최근', noUsername: '사용자 이름 없음' },
    common: { loading: '로딩 중...', error: '오류', success: '성공', close: '닫기', save: '저장', cancel: '취소' },
  },
  it: {
    nav: {
      home: 'Home',
      gallery: 'Galleria',
      profile: 'Il Mio Profilo',
      apply: 'Candidati',
      connect: 'Connetti',
      logout: 'Esci',
    },
    home: {
      tagline: 'Comunità Elite di Sopravvissuti Post-Apocalittici',
      applyNow: 'Candidati Ora',
      totalSupply: 'Fornitura Totale',
      unique: 'Unico',
      ogExclusive: 'Esclusivo',
      nftCollection: 'Collezione NFT',
      theCollection: 'La Collezione',
      collectionDesc: '45 personaggi unici che sopravvivono nella terra desolata',
      viewFullGallery: 'Vedi Galleria Completa',
      benefits: 'Benefici',
      whyPowerGrinders: 'Perché Power Grinders',
      moreThanNFTs: 'Più che NFT - una comunità elite',
      exclusiveAlpha: 'Alpha Esclusivo',
      exclusiveAlphaDesc: 'Accesso anticipato a informazioni di mercato e opportunità di trading',
      eliteNetwork: 'Rete Elite',
      eliteNetworkDesc: 'Connettiti con trader di successo nell\'ecosistema Solana',
      protectedAccess: 'Accesso Protetto',
      protectedAccessDesc: 'Limitato a 45 membri - discussioni di qualità garantite',
      limitedMembers: 'Limitato a 45 Membri',
      readyToGrind: 'Pronto a Macinare?',
      readyToGrindDesc: 'Unisciti alla comunità più esclusiva di OG di Solana. Le candidature vengono esaminate attentamente.',
      community247: 'Comunità',
      quickLinks: 'Link Rapidi',
      community: 'Comunità',
      allRightsReserved: 'Tutti i diritti riservati.',
      communityBadge: 'Comunità Esclusiva',
      communityTitle: 'Unisciti alla Comunità Elite',
      communitySubtitle: 'Più di semplici NFT - sblocca l\'accesso a una rete privata di trader elite, alpha esclusivo e opportunità che non troverai altrove.',
      communityBenefit1: 'Approfondimenti di mercato giornalieri e segnali di trading da trader esperti',
      communityBenefit2: 'Accesso anticipato a progetti ad alto potenziale prima che diventino pubblici',
      communityBenefit3: 'Canali Discord privati con discussioni e avvisi in tempo reale',
      communityBenefit4: 'Connettiti con trader di successo e impara dalle loro strategie',
      communityCtaTitle: 'Pronto a Unirti all\'Elite?',
      communityCtaDesc: 'Limitato a soli 45 membri. Candidati ora per assicurarti il tuo posto nella comunità di trading più esclusiva su Solana.',
      privacyPolicy: 'Informativa sulla Privacy',
      termsOfService: 'Termini di Servizio',
    },
    apply: {
      title: 'Candidati Ora',
      subtitle: 'Unisciti a una comunità esclusiva di 45 membri elite. Vengono accettati solo i migliori.',
      submitted: 'Candidatura Inviata!',
      submittedDesc: 'Grazie per la tua candidatura. La esamineremo e ti contatteremo presto.',
      redirecting: 'Reindirizzamento alla home...',
      fullName: 'Nome Completo',
      email: 'Indirizzo Email',
      twitterHandle: 'Nome Utente Twitter',
      discordUsername: 'Nome Utente Discord',
      experience: 'Esperienza Crypto/NFT',
      whyJoin: 'Perché vuoi unirti a Power Grinders?',
      contribution: 'Cosa puoi contribuire alla comunità?',
      submit: 'Invia Candidatura',
      submitting: 'Invio in corso...',
      required: '* Tutti i campi sono obbligatori. Esaminiamo tutte le candidature attentamente.',
      namePlaceholder: 'Inserisci il tuo nome completo',
      emailPlaceholder: 'tua.email@esempio.com',
      twitterPlaceholder: '@tuonome',
      discordPlaceholder: 'nomeutente#0000',
      experiencePlaceholder: 'Raccontaci della tua esperienza con crypto e NFT...',
      whyPlaceholder: 'Cosa ti rende adatto a questa comunità?',
      contributionPlaceholder: 'Come aggiungerai valore a Power Grinders?',
      totalSpots: 'Posti Totali',
      reviewTime: 'Tempo di Revisione',
      eliteCommunity: 'Comunità Elite',
    },
    gallery: {
      title: 'Galleria NFT',
      fullCollection: 'Collezione Completa',
      nftsCount: 'NFT',
      searchPlaceholder: 'Cerca per nome, descrizione o #ID...',
      loading: 'Caricamento NFT...',
      noResults: 'Nessun risultato trovato',
      noResultsDesc: 'Nessun NFT corrisponde a',
      clearSearch: 'Cancella ricerca',
      gridLarge: 'Griglia grande',
      gridMedium: 'Griglia media',
      gridCompact: 'Griglia compatta',
    },
    nft: {
      backToGallery: 'Torna alla galleria',
      connectedWallets: 'Wallet Collegati',
      noWallets: 'Nessun wallet collegato',
      viewOnBlockchain: 'Visualizza su Blockchain',
      share: 'Condividi',
      imageNotAvailable: 'Immagine non disponibile',
      noDescription: 'Nessuna descrizione disponibile',
    },
    profile: {
      title: 'Il Mio Profilo',
      personalInfo: 'Informazioni Personali',
      username: 'Nome utente',
      email: 'Email',
      memberSince: 'Membro dal',
      connectedAccounts: 'Account Collegati',
      discordConnected: 'Discord collegato',
      twitterConnected: 'Twitter collegato',
      telegramConnected: 'Telegram collegato',
      points: 'Punti',
      totalPoints: 'Punti totali',
      pointsComingSoon: 'Sistema punti in arrivo',
      recent: 'Recente',
      noUsername: 'Nessun nome utente',
    },
    common: {
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo',
      close: 'Chiudi',
      save: 'Salva',
      cancel: 'Annulla',
    },
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      gallery: 'Galeri',
      profile: 'Profilim',
      apply: 'Başvur',
      connect: 'Bağlan',
      logout: 'Çıkış',
    },
    home: {
      tagline: 'Post-Apokaliptik Hayatta Kalanların Elit Topluluğu',
      applyNow: 'Şimdi Başvur',
      totalSupply: 'Toplam Arz',
      unique: 'Benzersiz',
      ogExclusive: 'Özel',
      nftCollection: 'NFT Koleksiyonu',
      theCollection: 'Koleksiyon',
      collectionDesc: 'Çorak arazide hayatta kalan 45 benzersiz karakter',
      viewFullGallery: 'Tam Galeriyi Görüntüle',
      benefits: 'Avantajlar',
      whyPowerGrinders: 'Neden Power Grinders',
      moreThanNFTs: "NFT'lerden fazlası - elit bir topluluk",
      exclusiveAlpha: 'Özel Alpha',
      exclusiveAlphaDesc: 'Piyasa içgörülerine ve ticaret fırsatlarına erken erişim',
      eliteNetwork: 'Elit Ağ',
      eliteNetworkDesc: 'Solana ekosisteminde başarılı trader\'larla bağlantı kur',
      protectedAccess: 'Korumalı Erişim',
      protectedAccessDesc: '45 üye ile sınırlı - kaliteli tartışmalar garanti',
      limitedMembers: '45 Üye ile Sınırlı',
      readyToGrind: 'Grind\'e Hazır mısın?',
      readyToGrindDesc: 'Solana OG\'lerinin en özel topluluğuna katıl. Başvurular dikkatle incelenir.',
      community247: 'Topluluk',
      quickLinks: 'Hızlı Bağlantılar',
      community: 'Topluluk',
      allRightsReserved: 'Tüm hakları saklıdır.',
      communityBadge: 'Özel Topluluk',
      communityTitle: 'Elit Topluluğa Katıl',
      communitySubtitle: 'Sadece NFT\'lerden fazlası - elit trader\'ların özel ağına, özel alpha\'ya ve başka hiçbir yerde bulamayacağınız fırsatlara erişim kazanın.',
      communityBenefit1: 'Deneyimli trader\'lardan günlük piyasa içgörüleri ve ticaret sinyalleri',
      communityBenefit2: 'Yüksek potansiyelli projelere kamuya açılmadan önce erken erişim',
      communityBenefit3: 'Gerçek zamanlı tartışmalar ve uyarılarla özel Discord kanalları',
      communityBenefit4: 'Başarılı trader\'larla ağ kurun ve stratejilerinden öğrenin',
      communityCtaTitle: 'Elite Katılmaya Hazır mısın?',
      communityCtaDesc: 'Sadece 45 üye ile sınırlı. Solana\'daki en özel ticaret topluluğunda yerinizi garantilemek için şimdi başvurun.',
      privacyPolicy: 'Gizlilik Politikası',
      termsOfService: 'Hizmet Şartları',
    },
    apply: {
      title: 'Şimdi Başvur',
      subtitle: '45 elit üyeden oluşan özel bir topluluğa katıl. Sadece en iyiler kabul edilir.',
      submitted: 'Başvuru Gönderildi!',
      submittedDesc: 'Başvurunuz için teşekkür ederiz. İnceleyip en kısa sürede size geri döneceğiz.',
      redirecting: 'Ana sayfaya yönlendiriliyor...',
      fullName: 'Ad Soyad',
      email: 'E-posta Adresi',
      twitterHandle: 'Twitter Kullanıcı Adı',
      discordUsername: 'Discord Kullanıcı Adı',
      experience: 'Kripto/NFT Deneyimi',
      whyJoin: 'Power Grinders\'a neden katılmak istiyorsun?',
      contribution: 'Topluluğa ne katkıda bulunabilirsin?',
      submit: 'Başvuruyu Gönder',
      submitting: 'Gönderiliyor...',
      required: '* Tüm alanlar zorunludur. Tüm başvuruları dikkatle inceliyoruz.',
      namePlaceholder: 'Ad soyadınızı girin',
      emailPlaceholder: 'e-postaniz@ornek.com',
      twitterPlaceholder: '@kullaniciadi',
      discordPlaceholder: 'kullaniciadi#0000',
      experiencePlaceholder: 'Kripto ve NFT deneyiminiz hakkında bize bilgi verin...',
      whyPlaceholder: 'Seni bu topluluk için uygun kılan nedir?',
      contributionPlaceholder: 'Power Grinders\'a nasıl değer katacaksın?',
      totalSpots: 'Toplam Kontenjan',
      reviewTime: 'İnceleme Süresi',
      eliteCommunity: 'Elit Topluluk',
    },
    gallery: {
      title: 'NFT Galerisi',
      fullCollection: 'Tam Koleksiyon',
      nftsCount: 'NFT',
      searchPlaceholder: 'İsim, açıklama veya #ID ile ara...',
      loading: 'NFT\'ler yükleniyor...',
      noResults: 'Sonuç bulunamadı',
      noResultsDesc: 'Eşleşen NFT yok',
      clearSearch: 'Aramayı temizle',
      gridLarge: 'Büyük grid',
      gridMedium: 'Orta grid',
      gridCompact: 'Kompakt grid',
    },
    nft: {
      backToGallery: 'Galeriye dön',
      connectedWallets: 'Bağlı Cüzdanlar',
      noWallets: 'Bağlı cüzdan yok',
      viewOnBlockchain: 'Blockchain\'de Görüntüle',
      share: 'Paylaş',
      imageNotAvailable: 'Görsel mevcut değil',
      noDescription: 'Açıklama mevcut değil',
    },
    profile: {
      title: 'Profilim',
      personalInfo: 'Kişisel Bilgiler',
      username: 'Kullanıcı adı',
      email: 'E-posta',
      memberSince: 'Üyelik tarihi',
      connectedAccounts: 'Bağlı Hesaplar',
      discordConnected: 'Discord bağlı',
      twitterConnected: 'Twitter bağlı',
      telegramConnected: 'Telegram bağlı',
      points: 'Puanlar',
      totalPoints: 'Toplam puan',
      pointsComingSoon: 'Puan sistemi yakında',
      recent: 'Son',
      noUsername: 'Kullanıcı adı yok',
    },
    common: {
      loading: 'Yükleniyor...',
      error: 'Hata',
      success: 'Başarılı',
      close: 'Kapat',
      save: 'Kaydet',
      cancel: 'İptal',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      gallery: 'Galeria',
      profile: 'Meu Perfil',
      apply: 'Candidatar',
      connect: 'Conectar',
      logout: 'Sair',
    },
    home: {
      tagline: 'Comunidade Elite de Sobreviventes Pós-Apocalípticos',
      applyNow: 'Candidate-se Agora',
      totalSupply: 'Fornecimento Total',
      unique: 'Único',
      ogExclusive: 'Exclusivo',
      nftCollection: 'Coleção NFT',
      theCollection: 'A Coleção',
      collectionDesc: '45 personagens únicos sobrevivendo na terra devastada',
      viewFullGallery: 'Ver Galeria Completa',
      benefits: 'Benefícios',
      whyPowerGrinders: 'Por que Power Grinders',
      moreThanNFTs: 'Mais que NFTs - uma comunidade elite',
      exclusiveAlpha: 'Alpha Exclusivo',
      exclusiveAlphaDesc: 'Acesso antecipado a insights de mercado e oportunidades de trading',
      eliteNetwork: 'Rede Elite',
      eliteNetworkDesc: 'Conecte-se com traders de sucesso no ecossistema Solana',
      protectedAccess: 'Acesso Protegido',
      protectedAccessDesc: 'Limitado a 45 membros - discussões de qualidade garantidas',
      limitedMembers: 'Limitado a 45 Membros',
      readyToGrind: 'Pronto para Grind?',
      readyToGrindDesc: 'Junte-se à comunidade mais exclusiva de OGs da Solana. As candidaturas são revisadas cuidadosamente.',
      community247: 'Comunidade',
      quickLinks: 'Links Rápidos',
      community: 'Comunidade',
      allRightsReserved: 'Todos os direitos reservados.',
      communityBadge: 'Comunidade Exclusiva',
      communityTitle: 'Junte-se à Comunidade Elite',
      communitySubtitle: 'Mais do que apenas NFTs - desbloqueie acesso a uma rede privada de traders elite, alpha exclusivo e oportunidades que você não encontrará em nenhum outro lugar.',
      communityBenefit1: 'Insights diários de mercado e sinais de trading de traders experientes',
      communityBenefit2: 'Acesso antecipado a projetos de alto potencial antes de se tornarem públicos',
      communityBenefit3: 'Canais privados do Discord com discussões e alertas em tempo real',
      communityBenefit4: 'Conecte-se com traders de sucesso e aprenda com suas estratégias',
      communityCtaTitle: 'Pronto para Se Juntar à Elite?',
      communityCtaDesc: 'Limitado a apenas 45 membros. Candidate-se agora para garantir seu lugar na comunidade de trading mais exclusiva em Solana.',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço',
    },
    apply: {
      title: 'Candidate-se Agora',
      subtitle: 'Junte-se a uma comunidade exclusiva de 45 membros elite. Apenas os melhores são aceitos.',
      submitted: 'Candidatura Enviada!',
      submittedDesc: 'Obrigado pela sua candidatura. Vamos analisá-la e entrar em contato em breve.',
      redirecting: 'Redirecionando para o início...',
      fullName: 'Nome Completo',
      email: 'Endereço de Email',
      twitterHandle: 'Nome de Usuário Twitter',
      discordUsername: 'Nome de Usuário Discord',
      experience: 'Experiência Crypto/NFT',
      whyJoin: 'Por que você quer se juntar ao Power Grinders?',
      contribution: 'O que você pode contribuir para a comunidade?',
      submit: 'Enviar Candidatura',
      submitting: 'Enviando...',
      required: '* Todos os campos são obrigatórios. Revisamos todas as candidaturas cuidadosamente.',
      namePlaceholder: 'Digite seu nome completo',
      emailPlaceholder: 'seu.email@exemplo.com',
      twitterPlaceholder: '@seunome',
      discordPlaceholder: 'nomedeusuario#0000',
      experiencePlaceholder: 'Conte-nos sobre sua experiência com crypto e NFTs...',
      whyPlaceholder: 'O que te torna adequado para esta comunidade?',
      contributionPlaceholder: 'Como você vai agregar valor ao Power Grinders?',
      totalSpots: 'Vagas Totais',
      reviewTime: 'Tempo de Análise',
      eliteCommunity: 'Comunidade Elite',
    },
    gallery: {
      title: 'Galeria NFT',
      fullCollection: 'Coleção Completa',
      nftsCount: 'NFTs',
      searchPlaceholder: 'Buscar por nome, descrição ou #ID...',
      loading: 'Carregando NFTs...',
      noResults: 'Nenhum resultado encontrado',
      noResultsDesc: 'Nenhum NFT corresponde a',
      clearSearch: 'Limpar busca',
      gridLarge: 'Grade grande',
      gridMedium: 'Grade média',
      gridCompact: 'Grade compacta',
    },
    nft: {
      backToGallery: 'Voltar para galeria',
      connectedWallets: 'Carteiras Conectadas',
      noWallets: 'Nenhuma carteira conectada',
      viewOnBlockchain: 'Ver na Blockchain',
      share: 'Compartilhar',
      imageNotAvailable: 'Imagem não disponível',
      noDescription: 'Nenhuma descrição disponível',
    },
    profile: {
      title: 'Meu Perfil',
      personalInfo: 'Informações Pessoais',
      username: 'Nome de usuário',
      email: 'Email',
      memberSince: 'Membro desde',
      connectedAccounts: 'Contas Conectadas',
      discordConnected: 'Discord conectado',
      twitterConnected: 'Twitter conectado',
      telegramConnected: 'Telegram conectado',
      points: 'Pontos',
      totalPoints: 'Pontos totais',
      pointsComingSoon: 'Sistema de pontos em breve',
      recent: 'Recente',
      noUsername: 'Sem nome de usuário',
    },
    common: {
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
      close: 'Fechar',
      save: 'Salvar',
      cancel: 'Cancelar',
    },
  },
};

export function getTranslation(lang: Language): TranslationKeys {
  return translations[lang] || translations.en;
}
