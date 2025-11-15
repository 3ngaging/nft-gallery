// Sistema de internacionalización (i18n)

export type Language = 'en' | 'es' | 'zh' | 'hi' | 'ko';

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
] as const;

type TranslationKeys = {
  // Navbar
  nav: {
    home: string;
    gallery: string;
    profile: string;
    connect: string;
    logout: string;
  };
  // Landing Page
  landing: {
    exclusiveBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    exploreGallery: string;
    connectWallet: string;
    whyOurCollection: string;
    uniqueArt: string;
    uniqueArtDesc: string;
    activeCommunity: string;
    activeCommunityDesc: string;
    verified: string;
    verifiedDesc: string;
    readyToStart: string;
    readyToStartDesc: string;
    viewFullGallery: string;
    notJustNFT: string;
    notJustNFTDesc: string;
    exclusiveAlpha: string;
    exclusiveAlphaDesc: string;
    eliteNetwork: string;
    eliteNetworkDesc: string;
    ogStatus: string;
    ogStatusDesc: string;
    holderBenefits: string;
    holderBenefitsDesc: string;
    limitedBadge: string;
    stats: {
      unique: string;
      eachPiece: string;
      sinceDay1: string;
      exclusive: string;
    };
  };
  // Gallery Page
  gallery: {
    title: string;
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
  // NFT Detail Page
  nft: {
    backToGallery: string;
    connectedWallets: string;
    noWallets: string;
    viewOnBlockchain: string;
    share: string;
    imageNotAvailable: string;
    noDescription: string;
  };
  // Profile Page
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
  // Common
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
      connect: 'Connect',
      logout: 'Logout',
    },
    landing: {
      exclusiveBadge: 'EXCLUSIVE COLLECTION - 45 UNIQUE NFTs',
      heroTitle: 'Exclusive NFT Collection',
      heroSubtitle: 'Discover 45 unique pieces of digital art on the Solana blockchain',
      exploreGallery: 'Explore Gallery',
      connectWallet: 'Connect Wallet',
      whyOurCollection: 'Why our collection?',
      uniqueArt: 'Unique Art',
      uniqueArtDesc: '45 carefully designed pieces with unique characteristics',
      activeCommunity: 'Active Community',
      activeCommunityDesc: 'Join a vibrant community on Discord, Telegram and Twitter',
      verified: 'Verified',
      verifiedDesc: 'Verified collection on Solana with audited contracts',
      readyToStart: 'Ready to get started?',
      readyToStartDesc: 'Explore the full collection and find your favorite NFT',
      viewFullGallery: 'View Full Gallery',
      notJustNFT: 'Not Just an NFT, It\'s Access',
      notJustNFTDesc: 'Join an elite community of Solana OGs sharing alpha, insights, and building lasting connections',
      exclusiveAlpha: 'Exclusive Alpha',
      exclusiveAlphaDesc: 'Access premium market insights, early project alerts, and trading strategies you won\'t find anywhere else',
      eliteNetwork: 'Elite Network',
      eliteNetworkDesc: 'Connect with successful builders, traders, and visionaries in exclusive Discord & Telegram channels',
      ogStatus: 'OG Status',
      ogStatusDesc: 'Been here since Solana\'s early days. Join a community that understands the ecosystem inside out',
      holderBenefits: 'What You Get as a Holder',
      holderBenefitsDesc: 'More than just a JPEG',
      limitedBadge: 'LIMITED TO 45 MEMBERS',
      stats: {
        unique: 'Unique NFTs',
        eachPiece: 'Each Piece',
        sinceDay1: 'Since Day 1',
        exclusive: 'Exclusive',
      },
    },
    gallery: {
      title: 'Full Gallery',
      nftsCount: 'unique NFTs',
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
      connect: 'Conectar',
      logout: 'Salir',
    },
    landing: {
      exclusiveBadge: 'COLECCIÓN EXCLUSIVA - 45 NFTs ÚNICOS',
      heroTitle: 'Colección Exclusiva de NFTs',
      heroSubtitle: 'Descubre 45 piezas únicas de arte digital en la blockchain de Solana',
      exploreGallery: 'Explorar Galería',
      connectWallet: 'Conectar Wallet',
      whyOurCollection: '¿Por qué nuestra colección?',
      uniqueArt: 'Arte Único',
      uniqueArtDesc: '45 piezas cuidadosamente diseñadas con características únicas',
      activeCommunity: 'Comunidad Activa',
      activeCommunityDesc: 'Únete a una comunidad vibrante en Discord, Telegram y Twitter',
      verified: 'Verificado',
      verifiedDesc: 'Colección verificada en Solana con contratos auditados',
      readyToStart: '¿Listo para empezar?',
      readyToStartDesc: 'Explora la colección completa y encuentra tu NFT favorito',
      viewFullGallery: 'Ver Galería Completa',
      notJustNFT: 'No es Solo un NFT, Es Acceso',
      notJustNFTDesc: 'Únete a una comunidad élite de OGs de Solana compartiendo alpha, insights y creando conexiones duraderas',
      exclusiveAlpha: 'Alpha Exclusivo',
      exclusiveAlphaDesc: 'Accede a insights premium del mercado, alertas tempranas de proyectos y estrategias de trading que no encontrarás en ningún otro lugar',
      eliteNetwork: 'Red Élite',
      eliteNetworkDesc: 'Conéctate con builders, traders y visionarios exitosos en canales exclusivos de Discord y Telegram',
      ogStatus: 'Estado OG',
      ogStatusDesc: 'Aquí desde los primeros días de Solana. Únete a una comunidad que entiende el ecosistema por completo',
      holderBenefits: 'Lo Que Obtienes como Holder',
      holderBenefitsDesc: 'Más que solo un JPEG',
      limitedBadge: 'LIMITADO A 45 MIEMBROS',
      stats: {
        unique: 'NFTs Únicos',
        eachPiece: 'Cada Pieza',
        sinceDay1: 'Desde el Día 1',
        exclusive: 'Exclusivo',
      },
    },
    gallery: {
      title: 'Galería Completa',
      nftsCount: 'NFTs únicos',
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
      pointsComingSoon: 'Sistema de puntos próximamente disponible',
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
  zh: {
    nav: {
      home: '首页',
      gallery: '画廊',
      profile: '我的资料',
      connect: '连接',
      logout: '登出',
    },
    landing: {
      heroTitle: '独家NFT收藏',
      heroSubtitle: '在Solana区块链上发现45件独特的数字艺术品',
      exploreGallery: '探索画廊',
      connectWallet: '连接钱包',
      whyOurCollection: '为什么选择我们的收藏？',
      uniqueArt: '独特艺术',
      uniqueArtDesc: '45件精心设计的独特作品',
      activeCommunity: '活跃社区',
      activeCommunityDesc: '在Discord、Telegram和Twitter上加入充满活力的社区',
      verified: '已验证',
      verifiedDesc: 'Solana上的已验证收藏，合约已审计',
      readyToStart: '准备开始了吗？',
      readyToStartDesc: '探索完整收藏并找到您最喜欢的NFT',
      viewFullGallery: '查看完整画廊',
    },
    gallery: {
      title: '完整画廊',
      nftsCount: '个独特NFT',
      searchPlaceholder: '按名称、描述或#ID搜索...',
      loading: '加载NFT中...',
      noResults: '未找到结果',
      noResultsDesc: '没有匹配的NFT',
      clearSearch: '清除搜索',
      gridLarge: '大网格',
      gridMedium: '中网格',
      gridCompact: '紧凑网格',
    },
    nft: {
      backToGallery: '返回画廊',
      connectedWallets: '已连接钱包',
      noWallets: '无已连接钱包',
      viewOnBlockchain: '在区块链上查看',
      share: '分享',
      imageNotAvailable: '图片不可用',
      noDescription: '无可用描述',
    },
    profile: {
      title: '我的资料',
      personalInfo: '个人信息',
      username: '用户名',
      email: '电子邮件',
      memberSince: '会员自',
      connectedAccounts: '已连接账户',
      discordConnected: 'Discord已连接',
      twitterConnected: 'Twitter已连接',
      telegramConnected: 'Telegram已连接',
      points: '积分',
      totalPoints: '总积分',
      pointsComingSoon: '积分系统即将推出',
      recent: '最近',
      noUsername: '无用户名',
    },
    common: {
      loading: '加载中...',
      error: '错误',
      success: '成功',
      close: '关闭',
      save: '保存',
      cancel: '取消',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      gallery: 'गैलरी',
      profile: 'मेरी प्रोफ़ाइल',
      connect: 'कनेक्ट करें',
      logout: 'लॉग आउट',
    },
    landing: {
      heroTitle: 'विशेष NFT संग्रह',
      heroSubtitle: 'Solana ब्लॉकचेन पर 45 अनूठी डिजिटल कला के टुकड़े खोजें',
      exploreGallery: 'गैलरी एक्सप्लोर करें',
      connectWallet: 'वॉलेट कनेक्ट करें',
      whyOurCollection: 'हमारा संग्रह क्यों?',
      uniqueArt: 'अनूठी कला',
      uniqueArtDesc: 'अनूठी विशेषताओं के साथ 45 सावधानीपूर्वक डिज़ाइन किए गए टुकड़े',
      activeCommunity: 'सक्रिय समुदाय',
      activeCommunityDesc: 'Discord, Telegram और Twitter पर एक जीवंत समुदाय में शामिल हों',
      verified: 'सत्यापित',
      verifiedDesc: 'ऑडिट किए गए अनुबंधों के साथ Solana पर सत्यापित संग्रह',
      readyToStart: 'शुरू करने के लिए तैयार हैं?',
      readyToStartDesc: 'पूर्ण संग्रह का अन्वेषण करें और अपना पसंदीदा NFT खोजें',
      viewFullGallery: 'पूर्ण गैलरी देखें',
    },
    gallery: {
      title: 'पूर्ण गैलरी',
      nftsCount: 'अनूठे NFT',
      searchPlaceholder: 'नाम, विवरण या #ID द्वारा खोजें...',
      loading: 'NFT लोड हो रहे हैं...',
      noResults: 'कोई परिणाम नहीं मिला',
      noResultsDesc: 'कोई NFT मेल नहीं खाता',
      clearSearch: 'खोज साफ़ करें',
      gridLarge: 'बड़ी ग्रिड',
      gridMedium: 'मध्यम ग्रिड',
      gridCompact: 'कॉम्पैक्ट ग्रिड',
    },
    nft: {
      backToGallery: 'गैलरी पर वापस जाएं',
      connectedWallets: 'कनेक्टेड वॉलेट',
      noWallets: 'कोई कनेक्टेड वॉलेट नहीं',
      viewOnBlockchain: 'ब्लॉकचेन पर देखें',
      share: 'शेयर करें',
      imageNotAvailable: 'छवि उपलब्ध नहीं',
      noDescription: 'कोई विवरण उपलब्ध नहीं',
    },
    profile: {
      title: 'मेरी प्रोफ़ाइल',
      personalInfo: 'व्यक्तिगत जानकारी',
      username: 'उपयोगकर्ता नाम',
      email: 'ईमेल',
      memberSince: 'सदस्य कब से',
      connectedAccounts: 'कनेक्टेड खाते',
      discordConnected: 'Discord कनेक्टेड',
      twitterConnected: 'Twitter कनेक्टेड',
      telegramConnected: 'Telegram कनेक्टेड',
      points: 'अंक',
      totalPoints: 'कुल अंक',
      pointsComingSoon: 'अंक प्रणाली जल्द आ रही है',
      recent: 'हाल का',
      noUsername: 'कोई उपयोगकर्ता नाम नहीं',
    },
    common: {
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफलता',
      close: 'बंद करें',
      save: 'सहेजें',
      cancel: 'रद्द करें',
    },
  },
  ko: {
    nav: {
      home: '홈',
      gallery: '갤러리',
      profile: '내 프로필',
      connect: '연결',
      logout: '로그아웃',
    },
    landing: {
      heroTitle: '독점 NFT 컬렉션',
      heroSubtitle: 'Solana 블록체인에서 45개의 독특한 디지털 아트 작품을 발견하세요',
      exploreGallery: '갤러리 탐색',
      connectWallet: '지갑 연결',
      whyOurCollection: '우리 컬렉션을 선택해야 하는 이유?',
      uniqueArt: '독특한 예술',
      uniqueArtDesc: '독특한 특성을 가진 45개의 정교하게 디자인된 작품',
      activeCommunity: '활발한 커뮤니티',
      activeCommunityDesc: 'Discord, Telegram, Twitter에서 활기찬 커뮤니티에 참여하세요',
      verified: '검증됨',
      verifiedDesc: '감사된 계약이 있는 Solana의 검증된 컬렉션',
      readyToStart: '시작할 준비가 되셨나요?',
      readyToStartDesc: '전체 컬렉션을 탐색하고 좋아하는 NFT를 찾으세요',
      viewFullGallery: '전체 갤러리 보기',
    },
    gallery: {
      title: '전체 갤러리',
      nftsCount: '개의 독특한 NFT',
      searchPlaceholder: '이름, 설명 또는 #ID로 검색...',
      loading: 'NFT 로딩 중...',
      noResults: '결과를 찾을 수 없습니다',
      noResultsDesc: '일치하는 NFT가 없습니다',
      clearSearch: '검색 지우기',
      gridLarge: '큰 그리드',
      gridMedium: '중간 그리드',
      gridCompact: '컴팩트 그리드',
    },
    nft: {
      backToGallery: '갤러리로 돌아가기',
      connectedWallets: '연결된 지갑',
      noWallets: '연결된 지갑 없음',
      viewOnBlockchain: '블록체인에서 보기',
      share: '공유',
      imageNotAvailable: '이미지를 사용할 수 없습니다',
      noDescription: '설명 없음',
    },
    profile: {
      title: '내 프로필',
      personalInfo: '개인 정보',
      username: '사용자 이름',
      email: '이메일',
      memberSince: '가입일',
      connectedAccounts: '연결된 계정',
      discordConnected: 'Discord 연결됨',
      twitterConnected: 'Twitter 연결됨',
      telegramConnected: 'Telegram 연결됨',
      points: '포인트',
      totalPoints: '총 포인트',
      pointsComingSoon: '포인트 시스템 출시 예정',
      recent: '최근',
      noUsername: '사용자 이름 없음',
    },
    common: {
      loading: '로딩 중...',
      error: '오류',
      success: '성공',
      close: '닫기',
      save: '저장',
      cancel: '취소',
    },
  },
};

export function getTranslation(lang: Language): TranslationKeys {
  return translations[lang] || translations.en;
}
