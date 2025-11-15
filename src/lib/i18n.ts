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
  faq: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
    question3: string;
    answer3: string;
    question4: string;
    answer4: string;
    question5: string;
    answer5: string;
    question6: string;
    answer6: string;
    stillHaveQuestions: string;
    joinDiscord: string;
  };
  roadmap: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    phase1Number: string;
    phase1Title: string;
    phase1Desc: string;
    phase1Status: string;
    phase2Number: string;
    phase2Title: string;
    phase2Desc: string;
    phase2Status: string;
    phase3Number: string;
    phase3Title: string;
    phase3Desc: string;
    phase3Status: string;
    phase4Number: string;
    phase4Title: string;
    phase4Desc: string;
    phase4Status: string;
  };
  team: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    value1Title: string;
    value1Desc: string;
    value2Title: string;
    value2Desc: string;
    value3Title: string;
    value3Desc: string;
    value4Title: string;
    value4Desc: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
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
    nftSingular: string;
    nftPlural: string;
    of: string;
    total: string;
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
    faq: {
      badge: 'FAQ',
      title1: 'Frequently Asked',
      title2: 'Questions',
      subtitle: 'Everything you need to know about Power Grinders',
      question1: 'What is Power Grinders?',
      answer1: 'Power Grinders is an exclusive community of 45 elite members in the Solana ecosystem. We combine unique NFT ownership with access to premium alpha, trading insights, and a network of successful traders.',
      question2: 'How can I join the community?',
      answer2: 'Apply through our application form. All submissions are carefully reviewed. We look for passionate individuals who are active in crypto, bring value to discussions, and align with our community values.',
      question3: 'What benefits do members receive?',
      answer3: 'Members get access to exclusive alpha channels, daily market insights, early project access, private Discord community, networking opportunities with successful traders, and unique NFT ownership representing their membership.',
      question4: 'Why is membership limited to 45?',
      answer4: 'We believe in quality over quantity. Limiting membership to 45 ensures high-quality discussions, stronger relationships, and better opportunities for all members. It maintains the exclusivity and value of the community.',
      question5: 'Do I need crypto experience to apply?',
      answer5: 'Yes, we look for members with proven experience in crypto and NFTs. Whether you\'re a trader, builder, or active community member, demonstrating your knowledge and passion is essential.',
      question6: 'What makes Power Grinders different?',
      answer6: 'Unlike typical NFT projects, we focus on community value first. Every member is carefully vetted, ensuring you\'re surrounded by serious, knowledgeable individuals. The small size creates genuine connections and actionable opportunities.',
      stillHaveQuestions: 'Still have questions?',
      joinDiscord: 'Join Our Discord',
    },
    roadmap: {
      badge: 'ROADMAP',
      title1: 'Our',
      title2: 'Journey',
      subtitle: 'Building the future of exclusive NFT communities',
      phase1Number: 'Phase 1',
      phase1Title: 'Foundation & Launch',
      phase1Desc: 'Collection launch, community building, and establishing core channels. Setting up infrastructure for alpha sharing and member onboarding.',
      phase1Status: 'Completed',
      phase2Number: 'Phase 2',
      phase2Title: 'Community Growth',
      phase2Desc: 'Expanding partnerships with top projects, implementing member verification systems, and launching exclusive alpha channels with proven traders.',
      phase2Status: 'In Progress',
      phase3Number: 'Phase 3',
      phase3Title: 'Advanced Features',
      phase3Desc: 'Points system for community engagement, exclusive IRL events, priority access to partner project whitelists, and enhanced member benefits.',
      phase3Status: 'Upcoming',
      phase4Number: 'Phase 4',
      phase4Title: 'Ecosystem Expansion',
      phase4Desc: 'Launch of community-driven ventures, investment opportunities for members, global meetups, and establishing Power Grinders as the premier Solana community.',
      phase4Status: 'Future',
    },
    team: {
      badge: 'OUR VALUES',
      title1: 'Built',
      title2: 'Different',
      subtitle: 'We\'re not just another NFT project. We\'re building a movement of elite individuals who believe in quality, exclusivity, and real value creation in the Solana ecosystem.',
      missionTitle: 'Our Mission',
      missionDesc: 'To create the most valuable and exclusive community in the Solana ecosystem, where every member contributes, learns, and grows together.',
      value1Title: 'Trust & Security',
      value1Desc: 'Every member is carefully vetted. We prioritize quality and authenticity over growth metrics.',
      value2Title: 'Precision & Focus',
      value2Desc: 'We cut through the noise to deliver actionable insights and real opportunities.',
      value3Title: 'Innovation',
      value3Desc: 'Always ahead of the curve, identifying trends before they become mainstream.',
      value4Title: 'Community First',
      value4Desc: 'Our members are our priority. Every decision is made to benefit the collective.',
      stat1Value: '45',
      stat1Label: 'Elite Members',
      stat2Value: '24/7',
      stat2Label: 'Active Community',
      stat3Value: '100%',
      stat3Label: 'Vetted Access',
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
      nftSingular: 'NFT',
      nftPlural: 'NFTs',
      of: 'of',
      total: 'total',
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
    faq: {
      badge: 'PREGUNTAS',
      title1: 'Preguntas',
      title2: 'Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre Power Grinders',
      question1: '¿Qué es Power Grinders?',
      answer1: 'Power Grinders es una comunidad exclusiva de 45 miembros elite en el ecosistema Solana. Combinamos la propiedad única de NFTs con acceso a alpha premium, insights de trading y una red de traders exitosos.',
      question2: '¿Cómo puedo unirme a la comunidad?',
      answer2: 'Aplica a través de nuestro formulario de aplicación. Todas las solicitudes son revisadas cuidadosamente. Buscamos individuos apasionados que sean activos en crypto, aporten valor a las discusiones y se alineen con nuestros valores comunitarios.',
      question3: '¿Qué beneficios reciben los miembros?',
      answer3: 'Los miembros obtienen acceso a canales de alpha exclusivos, insights diarios del mercado, acceso anticipado a proyectos, comunidad privada de Discord, oportunidades de networking con traders exitosos y propiedad única de NFT que representa su membresía.',
      question4: '¿Por qué la membresía está limitada a 45?',
      answer4: 'Creemos en calidad sobre cantidad. Limitar la membresía a 45 asegura discusiones de alta calidad, relaciones más fuertes y mejores oportunidades para todos los miembros. Mantiene la exclusividad y el valor de la comunidad.',
      question5: '¿Necesito experiencia en crypto para aplicar?',
      answer5: 'Sí, buscamos miembros con experiencia comprobada en crypto y NFTs. Ya seas trader, builder o miembro activo de comunidad, demostrar tu conocimiento y pasión es esencial.',
      question6: '¿Qué hace diferente a Power Grinders?',
      answer6: 'A diferencia de los proyectos NFT típicos, nos enfocamos primero en el valor comunitario. Cada miembro es cuidadosamente verificado, asegurando que estés rodeado de individuos serios y conocedores. El tamaño pequeño crea conexiones genuinas y oportunidades accionables.',
      stillHaveQuestions: '¿Todavía tienes preguntas?',
      joinDiscord: 'Únete a Nuestro Discord',
    },
    roadmap: {
      badge: 'HOJA DE RUTA',
      title1: 'Nuestro',
      title2: 'Viaje',
      subtitle: 'Construyendo el futuro de las comunidades NFT exclusivas',
      phase1Number: 'Fase 1',
      phase1Title: 'Fundación y Lanzamiento',
      phase1Desc: 'Lanzamiento de la colección, construcción de comunidad y establecimiento de canales principales. Configuración de infraestructura para compartir alpha y onboarding de miembros.',
      phase1Status: 'Completado',
      phase2Number: 'Fase 2',
      phase2Title: 'Crecimiento Comunitario',
      phase2Desc: 'Expansión de asociaciones con proyectos top, implementación de sistemas de verificación de miembros y lanzamiento de canales de alpha exclusivos con traders probados.',
      phase2Status: 'En Progreso',
      phase3Number: 'Fase 3',
      phase3Title: 'Características Avanzadas',
      phase3Desc: 'Sistema de puntos para participación comunitaria, eventos IRL exclusivos, acceso prioritario a whitelists de proyectos asociados y beneficios mejorados para miembros.',
      phase3Status: 'Próximamente',
      phase4Number: 'Fase 4',
      phase4Title: 'Expansión del Ecosistema',
      phase4Desc: 'Lanzamiento de ventures impulsadas por la comunidad, oportunidades de inversión para miembros, meetups globales y establecimiento de Power Grinders como la comunidad premier de Solana.',
      phase4Status: 'Futuro',
    },
    team: {
      badge: 'NUESTROS VALORES',
      title1: 'Construidos',
      title2: 'Diferente',
      subtitle: 'No somos solo otro proyecto NFT. Estamos construyendo un movimiento de individuos elite que creen en calidad, exclusividad y creación de valor real en el ecosistema Solana.',
      missionTitle: 'Nuestra Misión',
      missionDesc: 'Crear la comunidad más valiosa y exclusiva en el ecosistema Solana, donde cada miembro contribuye, aprende y crece junto.',
      value1Title: 'Confianza y Seguridad',
      value1Desc: 'Cada miembro es cuidadosamente verificado. Priorizamos calidad y autenticidad sobre métricas de crecimiento.',
      value2Title: 'Precisión y Enfoque',
      value2Desc: 'Cortamos el ruido para entregar insights accionables y oportunidades reales.',
      value3Title: 'Innovación',
      value3Desc: 'Siempre adelante de la curva, identificando tendencias antes de que se vuelvan mainstream.',
      value4Title: 'Comunidad Primero',
      value4Desc: 'Nuestros miembros son nuestra prioridad. Cada decisión se toma para beneficiar al colectivo.',
      stat1Value: '45',
      stat1Label: 'Miembros Elite',
      stat2Value: '24/7',
      stat2Label: 'Comunidad Activa',
      stat3Value: '100%',
      stat3Label: 'Acceso Verificado',
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
      nftSingular: 'NFT',
      nftPlural: 'NFTs',
      of: 'de',
      total: 'total',
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
    faq: { badge: '常见问题', title1: '常见', title2: '问题', subtitle: '关于Power Grinders您需要了解的一切', question1: '什么是Power Grinders？', answer1: 'Power Grinders是Solana生态系统中由45名精英成员组成的独家社区。我们将独特的NFT所有权与优质alpha、交易洞察和成功交易者网络相结合。', question2: '如何加入社区？', answer2: '通过我们的申请表格申请。所有提交的申请都会被仔细审查。我们寻找在加密领域活跃、为讨论带来价值并符合我们社区价值观的热情人士。', question3: '成员可以获得什么好处？', answer3: '成员可以访问独家alpha频道、每日市场洞察、项目早期访问、私人Discord社区、与成功交易者的网络机会，以及代表其会员资格的独特NFT所有权。', question4: '为什么会员人数限制为45？', answer4: '我们相信质量胜于数量。将会员人数限制在45人可确保高质量的讨论、更紧密的关系和为所有成员提供更好的机会。这维护了社区的独家性和价值。', question5: '申请需要加密经验吗？', answer5: '是的，我们寻找在加密和NFT方面有经验的成员。无论您是交易者、建设者还是活跃的社区成员，展示您的知识和热情都是必不可少的。', question6: 'Power Grinders有何不同？', answer6: '与典型的NFT项目不同，我们首先关注社区价值。每位成员都经过仔细审查，确保您周围都是认真、有知识的人。小规模创造真正的联系和可操作的机会。', stillHaveQuestions: '还有疑问？', joinDiscord: '加入我们的Discord' },
    roadmap: { badge: '路线图', title1: '我们的', title2: '旅程', subtitle: '构建独家NFT社区的未来', phase1Number: '第1阶段', phase1Title: '基础与启动', phase1Desc: '收藏发布、社区建设和建立核心渠道。设置alpha共享和成员入职的基础设施。', phase1Status: '已完成', phase2Number: '第2阶段', phase2Title: '社区增长', phase2Desc: '扩大与顶级项目的合作关系，实施成员验证系统，并与经过验证的交易者一起推出独家alpha频道。', phase2Status: '进行中', phase3Number: '第3阶段', phase3Title: '高级功能', phase3Desc: '社区参与积分系统、独家线下活动、优先访问合作项目白名单以及增强的成员福利。', phase3Status: '即将推出', phase4Number: '第4阶段', phase4Title: '生态系统扩展', phase4Desc: '启动社区驱动的ventures、为成员提供投资机会、全球聚会，并确立Power Grinders作为Solana顶级社区的地位。', phase4Status: '未来' },
    team: { badge: '我们的价值观', title1: '与众', title2: '不同', subtitle: '我们不仅仅是另一个NFT项目。我们正在建立一场由精英人士组成的运动，他们相信质量、独家性和在Solana生态系统中创造真正的价值。', missionTitle: '我们的使命', missionDesc: '在Solana生态系统中创建最有价值和最独家的社区，每位成员都能贡献、学习并共同成长。', value1Title: '信任与安全', value1Desc: '每位成员都经过仔细审查。我们优先考虑质量和真实性，而非增长指标。', value2Title: '精准与专注', value2Desc: '我们排除噪音，提供可操作的见解和真正的机会。', value3Title: '创新', value3Desc: '始终领先于趋势，在主流之前识别趋势。', value4Title: '社区至上', value4Desc: '我们的成员是我们的优先事项。每项决策都是为了集体利益而做出的。', stat1Value: '45', stat1Label: '精英成员', stat2Value: '24/7', stat2Label: '活跃社区', stat3Value: '100%', stat3Label: '经过验证的访问' },
    apply: { title: '立即申请', subtitle: '加入45名精英成员的独家社区。只接受最好的成员。', submitted: '申请已提交！', submittedDesc: '感谢您的申请。我们会审查并尽快与您联系。', redirecting: '正在跳转到首页...', fullName: '全名', email: '电子邮件地址', twitterHandle: 'Twitter用户名', discordUsername: 'Discord用户名', experience: 'Crypto/NFT经验', whyJoin: '为什么要加入Power Grinders？', contribution: '您能为社区贡献什么？', submit: '提交申请', submitting: '提交中...', required: '* 所有字段都是必填的。我们会仔细审查所有申请。', namePlaceholder: '输入您的全名', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: '告诉我们您在加密货币和NFT方面的经验...', whyPlaceholder: '是什么让您适合这个社区？', contributionPlaceholder: '您将如何为Power Grinders增值？', totalSpots: '总名额', reviewTime: '审查时间', eliteCommunity: '精英社区' },
    gallery: { title: 'NFT画廊', fullCollection: '完整收藏', nftsCount: '个NFT', nftSingular: 'NFT', nftPlural: 'NFT', of: '的', total: '总共', searchPlaceholder: '按名称、描述或#ID搜索...', loading: '加载NFT中...', noResults: '未找到结果', noResultsDesc: '没有匹配的NFT', clearSearch: '清除搜索', gridLarge: '大网格', gridMedium: '中网格', gridCompact: '紧凑网格' },
    nft: { backToGallery: '返回画廊', connectedWallets: '已连接钱包', noWallets: '无已连接钱包', viewOnBlockchain: '在区块链上查看', share: '分享', imageNotAvailable: '图片不可用', noDescription: '无可用描述' },
    profile: { title: '我的资料', personalInfo: '个人信息', username: '用户名', email: '电子邮件', memberSince: '会员自', connectedAccounts: '已连接账户', discordConnected: 'Discord已连接', twitterConnected: 'Twitter已连接', telegramConnected: 'Telegram已连接', points: '积分', totalPoints: '总积分', pointsComingSoon: '积分系统即将推出', recent: '最近', noUsername: '无用户名' },
    common: { loading: '加载中...', error: '错误', success: '成功', close: '关闭', save: '保存', cancel: '取消' },
  },
  hi: {
    nav: { home: 'होम', gallery: 'गैलरी', profile: 'मेरी प्रोफ़ाइल', apply: 'आवेदन करें', connect: 'कनेक्ट करें', logout: 'लॉग आउट' },
    home: { tagline: 'पोस्ट-एपोकैलिप्टिक सर्वाइवर्स का एलीट समुदाय', applyNow: 'अभी आवेदन करें', totalSupply: 'कुल आपूर्ति', unique: 'अनूठा', ogExclusive: 'विशेष', nftCollection: 'NFT संग्रह', theCollection: 'संग्रह', collectionDesc: 'वेस्टलैंड में जीवित 45 अनूठे पात्र', viewFullGallery: 'पूर्ण गैलरी देखें', benefits: 'लाभ', whyPowerGrinders: 'Power Grinders क्यों', moreThanNFTs: 'NFTs से अधिक - एक एलीट समुदाय', exclusiveAlpha: 'विशेष Alpha', exclusiveAlphaDesc: 'बाजार अंतर्दृष्टि और ट्रेडिंग अवसरों तक प्रारंभिक पहुंच', eliteNetwork: 'एलीट नेटवर्क', eliteNetworkDesc: 'Solana इकोसिस्टम में सफल ट्रेडर्स से जुड़ें', protectedAccess: 'संरक्षित पहुंच', protectedAccessDesc: '45 सदस्यों तक सीमित - गुणवत्ता चर्चाओं की गारंटी', limitedMembers: '45 सदस्यों तक सीमित', readyToGrind: 'Grind करने के लिए तैयार हैं?', readyToGrindDesc: 'Solana OGs के सबसे विशेष समुदाय में शामिल हों। आवेदनों की सावधानीपूर्वक समीक्षा की जाती है।', community247: 'समुदाय', quickLinks: 'त्वरित लिंक', community: 'समुदाय', allRightsReserved: 'सर्वाधिकार सुरक्षित।', communityBadge: 'विशेष समुदाय', communityTitle: 'एलीट समुदाय में शामिल हों', communitySubtitle: 'केवल NFTs से अधिक - एलीट ट्रेडर्स के निजी नेटवर्क, विशेष alpha और अवसरों तक पहुंच प्राप्त करें।', communityBenefit1: 'अनुभवी ट्रेडर्स से दैनिक बाजार अंतर्दृष्टि और ट्रेडिंग संकेत', communityBenefit2: 'सार्वजनिक होने से पहले उच्च क्षमता वाली परियोजनाओं तक प्रारंभिक पहुंच', communityBenefit3: 'वास्तविक समय चर्चा और अलर्ट के साथ निजी Discord चैनल', communityBenefit4: 'सफल ट्रेडर्स के साथ नेटवर्क और उनकी रणनीतियों से सीखें', communityCtaTitle: 'एलीट में शामिल होने के लिए तैयार हैं?', communityCtaDesc: 'केवल 45 सदस्यों तक सीमित। Solana पर सबसे विशेष ट्रेडिंग समुदाय में अपना स्थान सुरक्षित करने के लिए अभी आवेदन करें।', privacyPolicy: 'गोपनीयता नीति', termsOfService: 'सेवा की शर्तें' },
    faq: { badge: 'सामान्य प्रश्न', title1: 'अक्सर पूछे', title2: 'जाने वाले प्रश्न', subtitle: 'Power Grinders के बारे में आपको जो कुछ जानने की आवश्यकता है', question1: 'Power Grinders क्या है?', answer1: 'Power Grinders Solana इकोसिस्टम में 45 एलीट सदस्यों का एक विशेष समुदाय है। हम प्रीमियम alpha, ट्रेडिंग अंतर्दृष्टि और सफल ट्रेडर्स के नेटवर्क तक पहुंच के साथ अद्वितीय NFT स्वामित्व को जोड़ते हैं।', question2: 'मैं समुदाय में कैसे शामिल हो सकता हूं?', answer2: 'हमारे आवेदन फॉर्म के माध्यम से आवेदन करें। सभी सबमिशन की सावधानीपूर्वक समीक्षा की जाती है। हम उत्साही व्यक्तियों की तलाश करते हैं जो crypto में सक्रिय हैं, चर्चाओं में मूल्य लाते हैं और हमारे समुदाय मूल्यों के साथ संरेखित होते हैं।', question3: 'सदस्यों को क्या लाभ मिलते हैं?', answer3: 'सदस्यों को विशेष alpha चैनलों तक पहुंच, दैनिक बाजार अंतर्दृष्टि, प्रारंभिक परियोजना पहुंच, निजी Discord समुदाय, सफल ट्रेडर्स के साथ नेटवर्किंग के अवसर और उनकी सदस्यता का प्रतिनिधित्व करने वाले अद्वितीय NFT स्वामित्व मिलता है।', question4: 'सदस्यता 45 तक क्यों सीमित है?', answer4: 'हम मात्रा से अधिक गुणवत्ता में विश्वास करते हैं। सदस्यता को 45 तक सीमित करना उच्च गुणवत्ता वाली चर्चाओं, मजबूत संबंधों और सभी सदस्यों के लिए बेहतर अवसरों को सुनिश्चित करता है। यह समुदाय की विशिष्टता और मूल्य को बनाए रखता है।', question5: 'क्या आवेदन के लिए crypto अनुभव की आवश्यकता है?', answer5: 'हां, हम crypto और NFTs में सिद्ध अनुभव वाले सदस्यों की तलाश करते हैं। चाहे आप ट्रेडर हों, बिल्डर हों या सक्रिय समुदाय सदस्य हों, अपने ज्ञान और जुनून का प्रदर्शन आवश्यक है।', question6: 'Power Grinders को क्या अलग बनाता है?', answer6: 'विशिष्ट NFT परियोजनाओं के विपरीत, हम पहले समुदाय मूल्य पर ध्यान केंद्रित करते हैं। प्रत्येक सदस्य की सावधानीपूर्वक जांच की जाती है, यह सुनिश्चित करते हुए कि आप गंभीर, जानकार व्यक्तियों से घिरे हैं। छोटा आकार वास्तविक कनेक्शन और कार्रवाई योग्य अवसर बनाता है।', stillHaveQuestions: 'अभी भी प्रश्न हैं?', joinDiscord: 'हमारे Discord में शामिल हों' },
    roadmap: { badge: 'रोडमैप', title1: 'हमारी', title2: 'यात्रा', subtitle: 'विशेष NFT समुदायों का भविष्य बना रहे हैं', phase1Number: 'चरण 1', phase1Title: 'फाउंडेशन और लॉन्च', phase1Desc: 'संग्रह लॉन्च, समुदाय निर्माण और मुख्य चैनलों की स्थापना। alpha साझाकरण और सदस्य ऑनबोर्डिंग के लिए बुनियादी ढांचा स्थापित करना।', phase1Status: 'पूर्ण', phase2Number: 'चरण 2', phase2Title: 'समुदाय वृद्धि', phase2Desc: 'शीर्ष परियोजनाओं के साथ साझेदारी का विस्तार, सदस्य सत्यापन प्रणाली लागू करना और सिद्ध ट्रेडर्स के साथ विशेष alpha चैनलों का शुभारंभ।', phase2Status: 'प्रगति में', phase3Number: 'चरण 3', phase3Title: 'उन्नत सुविधाएं', phase3Desc: 'समुदाय जुड़ाव के लिए अंक प्रणाली, विशेष IRL कार्यक्रम, साझेदार परियोजना व्हाइटलिस्ट तक प्राथमिकता पहुंच और बढ़ाए गए सदस्य लाभ।', phase3Status: 'आने वाला', phase4Number: 'चरण 4', phase4Title: 'इकोसिस्टम विस्तार', phase4Desc: 'समुदाय-संचालित उद्यमों का शुभारंभ, सदस्यों के लिए निवेश के अवसर, वैश्विक मीटअप और Power Grinders को प्रमुख Solana समुदाय के रूप में स्थापित करना।', phase4Status: 'भविष्य' },
    team: { badge: 'हमारे मूल्य', title1: 'अलग तरह से', title2: 'निर्मित', subtitle: 'हम सिर्फ एक और NFT परियोजना नहीं हैं। हम एलीट व्यक्तियों का एक आंदोलन बना रहे हैं जो Solana इकोसिस्टम में गुणवत्ता, विशिष्टता और वास्तविक मूल्य निर्माण में विश्वास करते हैं।', missionTitle: 'हमारा मिशन', missionDesc: 'Solana इकोसिस्टम में सबसे मूल्यवान और विशेष समुदाय बनाना, जहां हर सदस्य योगदान करता है, सीखता है और एक साथ बढ़ता है।', value1Title: 'विश्वास और सुरक्षा', value1Desc: 'प्रत्येक सदस्य की सावधानीपूर्वक जांच की जाती है। हम विकास मेट्रिक्स से अधिक गुणवत्ता और प्रामाणिकता को प्राथमिकता देते हैं।', value2Title: 'सटीकता और फोकस', value2Desc: 'हम शोर को काटकर कार्रवाई योग्य अंतर्दृष्टि और वास्तविक अवसर प्रदान करते हैं।', value3Title: 'नवाचार', value3Desc: 'हमेशा वक्र से आगे, मुख्यधारा बनने से पहले रुझानों की पहचान करना।', value4Title: 'समुदाय पहले', value4Desc: 'हमारे सदस्य हमारी प्राथमिकता हैं। हर निर्णय सामूहिक लाभ के लिए किया जाता है।', stat1Value: '45', stat1Label: 'एलीट सदस्य', stat2Value: '24/7', stat2Label: 'सक्रिय समुदाय', stat3Value: '100%', stat3Label: 'सत्यापित पहुंच' },
    apply: { title: 'अभी आवेदन करें', subtitle: '45 एलीट सदस्यों के विशेष समुदाय में शामिल हों। केवल सर्वश्रेष्ठ को स्वीकार किया जाता है।', submitted: 'आवेदन जमा किया गया!', submittedDesc: 'आपके आवेदन के लिए धन्यवाद। हम इसकी समीक्षा करेंगे और जल्द ही आपसे संपर्क करेंगे।', redirecting: 'होम पर रीडायरेक्ट किया जा रहा है...', fullName: 'पूरा नाम', email: 'ईमेल पता', twitterHandle: 'Twitter हैंडल', discordUsername: 'Discord उपयोगकर्ता नाम', experience: 'Crypto/NFT अनुभव', whyJoin: 'आप Power Grinders में क्यों शामिल होना चाहते हैं?', contribution: 'आप समुदाय में क्या योगदान कर सकते हैं?', submit: 'आवेदन जमा करें', submitting: 'जमा किया जा रहा है...', required: '* सभी फ़ील्ड आवश्यक हैं। हम सभी आवेदनों की सावधानीपूर्वक समीक्षा करते हैं।', namePlaceholder: 'अपना पूरा नाम दर्ज करें', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: 'crypto और NFTs में अपने अनुभव के बारे में बताएं...', whyPlaceholder: 'क्या आपको इस समुदाय के लिए उपयुक्त बनाता है?', contributionPlaceholder: 'आप Power Grinders में मूल्य कैसे जोड़ेंगे?', totalSpots: 'कुल स्थान', reviewTime: 'समीक्षा समय', eliteCommunity: 'एलीट समुदाय' },
    gallery: { title: 'NFT गैलरी', fullCollection: 'पूर्ण संग्रह', nftsCount: 'NFTs', nftSingular: 'NFT', nftPlural: 'NFTs', of: 'में से', total: 'कुल', searchPlaceholder: 'नाम, विवरण या #ID द्वारा खोजें...', loading: 'NFTs लोड हो रहे हैं...', noResults: 'कोई परिणाम नहीं मिला', noResultsDesc: 'कोई NFT मेल नहीं खाता', clearSearch: 'खोज साफ़ करें', gridLarge: 'बड़ी ग्रिड', gridMedium: 'मध्यम ग्रिड', gridCompact: 'कॉम्पैक्ट ग्रिड' },
    nft: { backToGallery: 'गैलरी पर वापस जाएं', connectedWallets: 'कनेक्टेड वॉलेट', noWallets: 'कोई कनेक्टेड वॉलेट नहीं', viewOnBlockchain: 'ब्लॉकचेन पर देखें', share: 'शेयर करें', imageNotAvailable: 'छवि उपलब्ध नहीं', noDescription: 'कोई विवरण उपलब्ध नहीं' },
    profile: { title: 'मेरी प्रोफ़ाइल', personalInfo: 'व्यक्तिगत जानकारी', username: 'उपयोगकर्ता नाम', email: 'ईमेल', memberSince: 'सदस्य कब से', connectedAccounts: 'कनेक्टेड खाते', discordConnected: 'Discord कनेक्टेड', twitterConnected: 'Twitter कनेक्टेड', telegramConnected: 'Telegram कनेक्टेड', points: 'अंक', totalPoints: 'कुल अंक', pointsComingSoon: 'अंक प्रणाली जल्द आ रही है', recent: 'हाल का', noUsername: 'कोई उपयोगकर्ता नाम नहीं' },
    common: { loading: 'लोड हो रहा है...', error: 'त्रुटि', success: 'सफलता', close: 'बंद करें', save: 'सहेजें', cancel: 'रद्द करें' },
  },
  ko: {
    nav: { home: '홈', gallery: '갤러리', profile: '내 프로필', apply: '신청', connect: '연결', logout: '로그아웃' },
    home: { tagline: '포스트 아포칼립스 생존자들의 엘리트 커뮤니티', applyNow: '지금 신청하기', totalSupply: '총 공급량', unique: '고유', ogExclusive: '독점', nftCollection: 'NFT 컬렉션', theCollection: '컬렉션', collectionDesc: '황무지에서 생존하는 45개의 독특한 캐릭터', viewFullGallery: '전체 갤러리 보기', benefits: '혜택', whyPowerGrinders: 'Power Grinders를 선택하는 이유', moreThanNFTs: 'NFT 이상 - 엘리트 커뮤니티', exclusiveAlpha: '독점 Alpha', exclusiveAlphaDesc: '시장 통찰력과 거래 기회에 조기 액세스', eliteNetwork: '엘리트 네트워크', eliteNetworkDesc: 'Solana 생태계의 성공적인 트레이더와 연결', protectedAccess: '보호된 액세스', protectedAccessDesc: '45명으로 제한 - 품질 토론 보장', limitedMembers: '45명으로 제한', readyToGrind: 'Grind할 준비가 되셨나요?', readyToGrindDesc: 'Solana OG의 가장 독점적인 커뮤니티에 참여하세요. 신청서는 신중하게 검토됩니다.', community247: '커뮤니티', quickLinks: '빠른 링크', community: '커뮤니티', allRightsReserved: '모든 권리 보유.', communityBadge: '독점 커뮤니티', communityTitle: '엘리트 커뮤니티 가입', communitySubtitle: 'NFT 이상 - 엘리트 트레이더의 프라이빗 네트워크, 독점 alpha 및 다른 곳에서는 찾을 수 없는 기회에 대한 액세스를 잠금 해제하세요.', communityBenefit1: '경험 많은 트레이더의 일일 시장 통찰력 및 거래 신호', communityBenefit2: '공개되기 전 높은 잠재력을 가진 프로젝트에 조기 액세스', communityBenefit3: '실시간 토론 및 알림이 있는 비공개 Discord 채널', communityBenefit4: '성공적인 트레이더와 네트워크를 형성하고 그들의 전략을 배우세요', communityCtaTitle: '엘리트에 가입할 준비가 되셨나요?', communityCtaDesc: '45명으로만 제한됩니다. Solana에서 가장 독점적인 트레이딩 커뮤니티에서 자리를 확보하려면 지금 신청하세요.', privacyPolicy: '개인정보 처리방침', termsOfService: '서비스 약관' },
    faq: { badge: '자주 묻는 질문', title1: '자주 묻는', title2: '질문', subtitle: 'Power Grinders에 대해 알아야 할 모든 것', question1: 'Power Grinders란 무엇인가요?', answer1: 'Power Grinders는 Solana 생태계에서 45명의 엘리트 회원으로 구성된 독점 커뮤니티입니다. 우리는 프리미엄 alpha, 거래 통찰력 및 성공적인 트레이더 네트워크에 대한 액세스와 함께 독특한 NFT 소유권을 결합합니다.', question2: '커뮤니티에 어떻게 가입할 수 있나요?', answer2: '신청서 양식을 통해 지원하세요. 모든 제출물은 신중하게 검토됩니다. 우리는 crypto에 활발하고 토론에 가치를 제공하며 우리의 커뮤니티 가치와 일치하는 열정적인 개인을 찾고 있습니다.', question3: '회원들은 어떤 혜택을 받나요?', answer3: '회원들은 독점 alpha 채널, 일일 시장 통찰력, 조기 프로젝트 액세스, 비공개 Discord 커뮤니티, 성공적인 트레이더와의 네트워킹 기회 및 회원 자격을 나타내는 독특한 NFT 소유권에 액세스할 수 있습니다.', question4: '회원 수가 45명으로 제한되는 이유는 무엇인가요?', answer4: '우리는 양보다 질을 믿습니다. 회원 수를 45명으로 제한하면 고품질 토론, 더 강한 관계 및 모든 회원에게 더 나은 기회를 보장합니다. 이는 커뮤니티의 독점성과 가치를 유지합니다.', question5: '지원하려면 crypto 경험이 필요한가요?', answer5: '예, 우리는 crypto 및 NFT에서 입증된 경험을 가진 회원을 찾고 있습니다. 트레이더, 빌더 또는 활발한 커뮤니티 회원이든 지식과 열정을 입증하는 것이 필수적입니다.', question6: 'Power Grinders를 특별하게 만드는 것은 무엇인가요?', answer6: '일반적인 NFT 프로젝트와 달리 우리는 커뮤니티 가치를 우선시합니다. 모든 회원은 신중하게 심사되어 진지하고 지식이 풍부한 개인들로 둘러싸여 있음을 보장합니다. 작은 규모는 진정한 연결과 실행 가능한 기회를 만듭니다.', stillHaveQuestions: '여전히 질문이 있으신가요?', joinDiscord: 'Discord에 가입하세요' },
    roadmap: { badge: '로드맵', title1: '우리의', title2: '여정', subtitle: '독점 NFT 커뮤니티의 미래를 구축하고 있습니다', phase1Number: '1단계', phase1Title: '기초 및 출시', phase1Desc: '컬렉션 출시, 커뮤니티 구축 및 핵심 채널 구축. alpha 공유 및 회원 온보딩을 위한 인프라 설정.', phase1Status: '완료', phase2Number: '2단계', phase2Title: '커뮤니티 성장', phase2Desc: '최고 프로젝트와의 파트너십 확대, 회원 검증 시스템 구현 및 검증된 트레이더와 함께 독점 alpha 채널 출시.', phase2Status: '진행 중', phase3Number: '3단계', phase3Title: '고급 기능', phase3Desc: '커뮤니티 참여를 위한 포인트 시스템, 독점 IRL 이벤트, 파트너 프로젝트 화이트리스트 우선 액세스 및 향상된 회원 혜택.', phase3Status: '예정', phase4Number: '4단계', phase4Title: '생태계 확장', phase4Desc: '커뮤니티 주도 벤처 출시, 회원을 위한 투자 기회, 글로벌 밋업 및 Power Grinders를 최고의 Solana 커뮤니티로 확립.', phase4Status: '미래' },
    team: { badge: '우리의 가치', title1: '다르게', title2: '구축됨', subtitle: '우리는 단순한 NFT 프로젝트가 아닙니다. 우리는 Solana 생태계에서 품질, 독점성 및 진정한 가치 창출을 믿는 엘리트 개인들의 운동을 구축하고 있습니다.', missionTitle: '우리의 미션', missionDesc: 'Solana 생태계에서 가장 가치 있고 독점적인 커뮤니티를 만들어 모든 회원이 기여하고 배우며 함께 성장합니다.', value1Title: '신뢰와 보안', value1Desc: '모든 회원은 신중하게 심사됩니다. 우리는 성장 지표보다 품질과 진정성을 우선시합니다.', value2Title: '정밀성과 집중', value2Desc: '우리는 소음을 제거하고 실행 가능한 통찰력과 실제 기회를 제공합니다.', value3Title: '혁신', value3Desc: '항상 곡선의 앞서서 주류가 되기 전에 트렌드를 식별합니다.', value4Title: '커뮤니티 우선', value4Desc: '우리 회원들이 우리의 우선순위입니다. 모든 결정은 집단의 이익을 위해 내려집니다.', stat1Value: '45', stat1Label: '엘리트 회원', stat2Value: '24/7', stat2Label: '활성 커뮤니티', stat3Value: '100%', stat3Label: '검증된 액세스' },
    apply: { title: '지금 신청하기', subtitle: '45명의 엘리트 회원으로 구성된 독점 커뮤니티에 참여하세요. 최고만 받아들입니다.', submitted: '신청서가 제출되었습니다!', submittedDesc: '신청해 주셔서 감사합니다. 검토 후 곧 연락드리겠습니다.', redirecting: '홈으로 리디렉션 중...', fullName: '전체 이름', email: '이메일 주소', twitterHandle: 'Twitter 핸들', discordUsername: 'Discord 사용자 이름', experience: 'Crypto/NFT 경험', whyJoin: 'Power Grinders에 가입하고 싶은 이유는 무엇입니까?', contribution: '커뮤니티에 무엇을 기여할 수 있습니까?', submit: '신청서 제출', submitting: '제출 중...', required: '* 모든 필드는 필수입니다. 모든 신청서를 신중하게 검토합니다.', namePlaceholder: '전체 이름 입력', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: 'crypto 및 NFT 경험에 대해 알려주세요...', whyPlaceholder: '이 커뮤니티에 적합한 이유는 무엇입니까?', contributionPlaceholder: 'Power Grinders에 어떻게 가치를 더할 것인가요?', totalSpots: '총 자리', reviewTime: '검토 시간', eliteCommunity: '엘리트 커뮤니티' },
    gallery: { title: 'NFT 갤러리', fullCollection: '전체 컬렉션', nftsCount: '개 NFT', nftSingular: 'NFT', nftPlural: 'NFT', of: '중', total: '전체', searchPlaceholder: '이름, 설명 또는 #ID로 검색...', loading: 'NFT 로딩 중...', noResults: '결과를 찾을 수 없습니다', noResultsDesc: '일치하는 NFT가 없습니다', clearSearch: '검색 지우기', gridLarge: '큰 그리드', gridMedium: '중간 그리드', gridCompact: '컴팩트 그리드' },
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
    faq: {
      badge: 'FAQ',
      title1: 'Domande',
      title2: 'Frequenti',
      subtitle: 'Tutto quello che devi sapere su Power Grinders',
      question1: 'Cos\'è Power Grinders?',
      answer1: 'Power Grinders è una comunità esclusiva di 45 membri elite nell\'ecosistema Solana. Combiniamo la proprietà unica di NFT con l\'accesso ad alpha premium, insights di trading e una rete di trader di successo.',
      question2: 'Come posso unirmi alla comunità?',
      answer2: 'Candidati attraverso il nostro modulo di candidatura. Tutte le candidature vengono esaminate attentamente. Cerchiamo persone appassionate che sono attive in crypto, portano valore alle discussioni e si allineano ai nostri valori comunitari.',
      question3: 'Quali benefici ricevono i membri?',
      answer3: 'I membri ottengono accesso a canali alpha esclusivi, insights di mercato giornalieri, accesso anticipato ai progetti, comunità Discord privata, opportunità di networking con trader di successo e proprietà NFT unica che rappresenta la loro membership.',
      question4: 'Perché la membership è limitata a 45?',
      answer4: 'Crediamo nella qualità piuttosto che nella quantità. Limitare la membership a 45 garantisce discussioni di alta qualità, relazioni più forti e migliori opportunità per tutti i membri. Mantiene l\'esclusività e il valore della comunità.',
      question5: 'Ho bisogno di esperienza crypto per candidarmi?',
      answer5: 'Sì, cerchiamo membri con esperienza comprovata in crypto e NFT. Che tu sia un trader, builder o membro attivo della comunità, dimostrare la tua conoscenza e passione è essenziale.',
      question6: 'Cosa rende Power Grinders diverso?',
      answer6: 'A differenza dei tipici progetti NFT, ci concentriamo prima sul valore della comunità. Ogni membro viene attentamente esaminato, garantendo che tu sia circondato da individui seri e competenti. Le dimensioni ridotte creano connessioni genuine e opportunità concrete.',
      stillHaveQuestions: 'Hai ancora domande?',
      joinDiscord: 'Unisciti al Nostro Discord',
    },
    roadmap: {
      badge: 'ROADMAP',
      title1: 'Il Nostro',
      title2: 'Percorso',
      subtitle: 'Costruendo il futuro delle comunità NFT esclusive',
      phase1Number: 'Fase 1',
      phase1Title: 'Fondazione e Lancio',
      phase1Desc: 'Lancio della collezione, costruzione della comunità e creazione dei canali principali. Configurazione dell\'infrastruttura per la condivisione di alpha e l\'onboarding dei membri.',
      phase1Status: 'Completata',
      phase2Number: 'Fase 2',
      phase2Title: 'Crescita della Comunità',
      phase2Desc: 'Espansione delle partnership con progetti top, implementazione dei sistemi di verifica dei membri e lancio di canali alpha esclusivi con trader comprovati.',
      phase2Status: 'In Corso',
      phase3Number: 'Fase 3',
      phase3Title: 'Funzionalità Avanzate',
      phase3Desc: 'Sistema di punti per il coinvolgimento della comunità, eventi IRL esclusivi, accesso prioritario alle whitelist di progetti partner e benefici membri migliorati.',
      phase3Status: 'In Arrivo',
      phase4Number: 'Fase 4',
      phase4Title: 'Espansione dell\'Ecosistema',
      phase4Desc: 'Lancio di venture guidate dalla comunità, opportunità di investimento per i membri, meetup globali e affermazione di Power Grinders come la comunità Solana premier.',
      phase4Status: 'Futuro',
    },
    team: {
      badge: 'I NOSTRI VALORI',
      title1: 'Costruiti',
      title2: 'Diversamente',
      subtitle: 'Non siamo solo un altro progetto NFT. Stiamo costruendo un movimento di individui elite che credono nella qualità, nell\'esclusività e nella creazione di valore reale nell\'ecosistema Solana.',
      missionTitle: 'La Nostra Missione',
      missionDesc: 'Creare la comunità più preziosa ed esclusiva nell\'ecosistema Solana, dove ogni membro contribuisce, impara e cresce insieme.',
      value1Title: 'Fiducia e Sicurezza',
      value1Desc: 'Ogni membro viene attentamente esaminato. Diamo priorità alla qualità e all\'autenticità rispetto alle metriche di crescita.',
      value2Title: 'Precisione e Focus',
      value2Desc: 'Eliminiamo il rumore per fornire insights azionabili e opportunità reali.',
      value3Title: 'Innovazione',
      value3Desc: 'Sempre all\'avanguardia, identificando le tendenze prima che diventino mainstream.',
      value4Title: 'Comunità Prima',
      value4Desc: 'I nostri membri sono la nostra priorità. Ogni decisione viene presa per beneficiare il collettivo.',
      stat1Value: '45',
      stat1Label: 'Membri Elite',
      stat2Value: '24/7',
      stat2Label: 'Comunità Attiva',
      stat3Value: '100%',
      stat3Label: 'Accesso Verificato',
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
      nftSingular: 'NFT',
      nftPlural: 'NFT',
      of: 'di',
      total: 'totale',
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
    faq: {
      badge: 'SSS',
      title1: 'Sıkça Sorulan',
      title2: 'Sorular',
      subtitle: 'Power Grinders hakkında bilmeniz gereken her şey',
      question1: 'Power Grinders nedir?',
      answer1: 'Power Grinders, Solana ekosisteminde 45 elit üyeden oluşan özel bir topluluktur. Benzersiz NFT sahipliğini premium alpha, ticaret içgörüleri ve başarılı trader\'lar ağına erişimle birleştiriyoruz.',
      question2: 'Topluluğa nasıl katılabilirim?',
      answer2: 'Başvuru formumuzu doldurun. Tüm başvurular dikkatle incelenir. Crypto\'da aktif olan, tartışmalara değer katan ve topluluk değerlerimizle uyumlu tutkulu bireyler arıyoruz.',
      question3: 'Üyeler hangi avantajları alır?',
      answer3: 'Üyeler özel alpha kanallarına, günlük piyasa içgörülerine, erken proje erişimine, özel Discord topluluğuna, başarılı trader\'larla ağ kurma fırsatlarına ve üyeliklerini temsil eden benzersiz NFT sahipliğine erişir.',
      question4: 'Üyelik neden 45 ile sınırlı?',
      answer4: 'Miktardan çok kaliteye inanıyoruz. Üyeliği 45 ile sınırlamak yüksek kaliteli tartışmaları, daha güçlü ilişkileri ve tüm üyeler için daha iyi fırsatları garanti eder. Topluluğun özelliğini ve değerini korur.',
      question5: 'Başvurmak için crypto deneyimi gerekli mi?',
      answer5: 'Evet, crypto ve NFT\'lerde kanıtlanmış deneyime sahip üyeler arıyoruz. İster trader, ister builder, ister aktif topluluk üyesi olun, bilginizi ve tutkunuzu göstermek esastır.',
      question6: 'Power Grinders\'ı farklı kılan nedir?',
      answer6: 'Tipik NFT projelerinin aksine, önce topluluk değerine odaklanıyoruz. Her üye dikkatle incelenir, ciddi, bilgili bireylerle çevrili olmanızı sağlar. Küçük boyut gerçek bağlantılar ve uygulanabilir fırsatlar yaratır.',
      stillHaveQuestions: 'Hala sorularınız var mı?',
      joinDiscord: 'Discord\'umuza Katılın',
    },
    roadmap: {
      badge: 'YOL HARİTASI',
      title1: 'Yolculuğumuz',
      title2: '',
      subtitle: 'Özel NFT topluluklarının geleceğini inşa ediyoruz',
      phase1Number: 'Faz 1',
      phase1Title: 'Temel ve Lansман',
      phase1Desc: 'Koleksiyon lansmanı, topluluk oluşturma ve ana kanalları kurma. Alpha paylaşımı ve üye katılımı için altyapı kurulumu.',
      phase1Status: 'Tamamlandı',
      phase2Number: 'Faz 2',
      phase2Title: 'Topluluk Büyümesi',
      phase2Desc: 'En iyi projelerle ortaklıkları genişletme, üye doğrulama sistemlerini uygulama ve kanıtlanmış trader\'larla özel alpha kanallarını başlatma.',
      phase2Status: 'Devam Ediyor',
      phase3Number: 'Faz 3',
      phase3Title: 'Gelişmiş Özellikler',
      phase3Desc: 'Topluluk katılımı için puan sistemi, özel IRL etkinlikler, partner proje beyaz listelerine öncelikli erişim ve geliştirilmiş üye avantajları.',
      phase3Status: 'Yakında',
      phase4Number: 'Faz 4',
      phase4Title: 'Ekosistem Genişlemesi',
      phase4Desc: 'Topluluk odaklı girişimlerin lansmanı, üyeler için yatırım fırsatları, küresel buluşmalar ve Power Grinders\'ı önde gelen Solana topluluğu olarak kurma.',
      phase4Status: 'Gelecek',
    },
    team: {
      badge: 'DEĞERLERİMİZ',
      title1: 'Farklı',
      title2: 'İnşa Edildi',
      subtitle: 'Sadece başka bir NFT projesi değiliz. Solana ekosisteminde kalite, özellik ve gerçek değer yaratmaya inanan elit bireylerin bir hareketini inşa ediyoruz.',
      missionTitle: 'Misyonumuz',
      missionDesc: 'Solana ekosisteminde her üyenin katkıda bulunduğu, öğrendiği ve birlikte büyüdüğü en değerli ve özel topluluğu yaratmak.',
      value1Title: 'Güven ve Güvenlik',
      value1Desc: 'Her üye dikkatle incelenir. Büyüme metriklerinden çok kaliteye ve özgünlüğe öncelik veriyoruz.',
      value2Title: 'Hassasiyet ve Odaklanma',
      value2Desc: 'Gürültüyü kesip uygulanabilir içgörüler ve gerçek fırsatlar sunuyoruz.',
      value3Title: 'İnovasyon',
      value3Desc: 'Her zaman eğrinin önünde, ana akım olmadan önce trendleri belirliyoruz.',
      value4Title: 'Önce Topluluk',
      value4Desc: 'Üyelerimiz önceliğimizdir. Her karar topluluğun yararı için alınır.',
      stat1Value: '45',
      stat1Label: 'Elit Üye',
      stat2Value: '24/7',
      stat2Label: 'Aktif Topluluk',
      stat3Value: '100%',
      stat3Label: 'Doğrulanmış Erişim',
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
      nftSingular: 'NFT',
      nftPlural: 'NFT',
      of: 'dan',
      total: 'toplam',
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
    faq: {
      badge: 'FAQ',
      title1: 'Perguntas',
      title2: 'Frequentes',
      subtitle: 'Tudo que você precisa saber sobre Power Grinders',
      question1: 'O que é Power Grinders?',
      answer1: 'Power Grinders é uma comunidade exclusiva de 45 membros elite no ecossistema Solana. Combinamos propriedade única de NFT com acesso a alpha premium, insights de trading e uma rede de traders bem-sucedidos.',
      question2: 'Como posso me juntar à comunidade?',
      answer2: 'Candidate-se através do nosso formulário de candidatura. Todas as submissões são cuidadosamente revisadas. Procuramos indivíduos apaixonados que são ativos em crypto, trazem valor às discussões e se alinham com nossos valores comunitários.',
      question3: 'Quais benefícios os membros recebem?',
      answer3: 'Os membros obtêm acesso a canais alpha exclusivos, insights diários de mercado, acesso antecipado a projetos, comunidade privada do Discord, oportunidades de networking com traders bem-sucedidos e propriedade única de NFT representando sua associação.',
      question4: 'Por que a associação é limitada a 45?',
      answer4: 'Acreditamos em qualidade sobre quantidade. Limitar a associação a 45 garante discussões de alta qualidade, relacionamentos mais fortes e melhores oportunidades para todos os membros. Mantém a exclusividade e o valor da comunidade.',
      question5: 'Preciso de experiência em crypto para me candidatar?',
      answer5: 'Sim, procuramos membros com experiência comprovada em crypto e NFTs. Seja você um trader, construtor ou membro ativo da comunidade, demonstrar seu conhecimento e paixão é essencial.',
      question6: 'O que torna Power Grinders diferente?',
      answer6: 'Ao contrário dos projetos NFT típicos, focamos primeiro no valor da comunidade. Cada membro é cuidadosamente examinado, garantindo que você esteja cercado por indivíduos sérios e conhecedores. O tamanho pequeno cria conexões genuínas e oportunidades acionáveis.',
      stillHaveQuestions: 'Ainda tem dúvidas?',
      joinDiscord: 'Junte-se ao Nosso Discord',
    },
    roadmap: {
      badge: 'ROADMAP',
      title1: 'Nossa',
      title2: 'Jornada',
      subtitle: 'Construindo o futuro das comunidades NFT exclusivas',
      phase1Number: 'Fase 1',
      phase1Title: 'Fundação e Lançamento',
      phase1Desc: 'Lançamento da coleção, construção da comunidade e estabelecimento dos canais principais. Configuração da infraestrutura para compartilhamento de alpha e integração de membros.',
      phase1Status: 'Concluída',
      phase2Number: 'Fase 2',
      phase2Title: 'Crescimento da Comunidade',
      phase2Desc: 'Expansão de parcerias com projetos de ponta, implementação de sistemas de verificação de membros e lançamento de canais alpha exclusivos com traders comprovados.',
      phase2Status: 'Em Progresso',
      phase3Number: 'Fase 3',
      phase3Title: 'Recursos Avançados',
      phase3Desc: 'Sistema de pontos para engajamento da comunidade, eventos IRL exclusivos, acesso prioritário a whitelists de projetos parceiros e benefícios aprimorados para membros.',
      phase3Status: 'Próximo',
      phase4Number: 'Fase 4',
      phase4Title: 'Expansão do Ecossistema',
      phase4Desc: 'Lançamento de empreendimentos impulsionados pela comunidade, oportunidades de investimento para membros, encontros globais e estabelecimento de Power Grinders como a principal comunidade Solana.',
      phase4Status: 'Futuro',
    },
    team: {
      badge: 'NOSSOS VALORES',
      title1: 'Construídos',
      title2: 'Diferente',
      subtitle: 'Não somos apenas mais um projeto NFT. Estamos construindo um movimento de indivíduos elite que acreditam em qualidade, exclusividade e criação de valor real no ecossistema Solana.',
      missionTitle: 'Nossa Missão',
      missionDesc: 'Criar a comunidade mais valiosa e exclusiva no ecossistema Solana, onde cada membro contribui, aprende e cresce junto.',
      value1Title: 'Confiança e Segurança',
      value1Desc: 'Cada membro é cuidadosamente examinado. Priorizamos qualidade e autenticidade sobre métricas de crescimento.',
      value2Title: 'Precisão e Foco',
      value2Desc: 'Cortamos o ruído para entregar insights acionáveis e oportunidades reais.',
      value3Title: 'Inovação',
      value3Desc: 'Sempre à frente da curva, identificando tendências antes de se tornarem mainstream.',
      value4Title: 'Comunidade em Primeiro Lugar',
      value4Desc: 'Nossos membros são nossa prioridade. Cada decisão é tomada para beneficiar o coletivo.',
      stat1Value: '45',
      stat1Label: 'Membros Elite',
      stat2Value: '24/7',
      stat2Label: 'Comunidade Ativa',
      stat3Value: '100%',
      stat3Label: 'Acesso Verificado',
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
      nftSingular: 'NFT',
      nftPlural: 'NFTs',
      of: 'de',
      total: 'total',
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
