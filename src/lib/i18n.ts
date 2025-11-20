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
    leaderboard: string;
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
    owner: string;
    mintAddress: string;
    viewOnSolscan: string;
    nftNumber: string; // "#{number} of {total}"
    statusDiamondHanded: string;
    statusListed: string;
    statusStaked: string;
    statusHodled: string;
    badgeUnique: string;
    badgeVerified: string;
    badgeOwned: string;
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
    loading: string;
    noBanner: string;
    website: string;
    connectedVia: string;
    mySolanaWallets: string;
    addWallet: string;
    noWallets: string;
    noWalletsDesc: string;
    connectWallet: string;
    wallet: string;
    copy: string;
    nftsOwned: string;
    noNftsYet: string;
    youOwn: string;
    nft: string;
    nfts: string;
    fromCollection: string;
    startEarning: string;
    walletsConnected: string;
    noWalletsConnected: string;
    walletLinked: string;
    walletsLinked: string;
    myNftsCollection: string;
    loadingNfts: string;
    noNftsFound: string;
    noNftsDesc: string;
    activityFeed: string;
    comingSoon: string;
    backToGallery: string;
  };
  leaderboard: {
    title: string;
    subtitle: string;
    loading: string;
    comingSoon: string;
    comingSoonDesc: string;
    rank: string;
    user: string;
    nfts: string;
    points: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    close: string;
    save: string;
    cancel: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    backToHome: string;
    section1Title: string;
    section1Content: string;
    section1List1: string;
    section1List2: string;
    section1List3: string;
    section1List4: string;
    section2Title: string;
    section2Content: string;
    section2List1: string;
    section2List2: string;
    section2List3: string;
    section2List4: string;
    section3Title: string;
    section3Content: string;
    section3List1: string;
    section3List2: string;
    section3List3: string;
    section4Title: string;
    section4Content: string;
    section5Title: string;
    section5Content: string;
    section5List1: string;
    section5List2: string;
    section5List3: string;
    section5List4: string;
    section6Title: string;
    section6Content: string;
  };
  terms: {
    title: string;
    lastUpdated: string;
    backToHome: string;
    section1Title: string;
    section1Content: string;
    section2Title: string;
    section2Content: string;
    section2List1: string;
    section2List2: string;
    section2List3: string;
    section2List4: string;
    section3Title: string;
    section3Content: string;
    section3List1: string;
    section3List2: string;
    section3List3: string;
    section3List4: string;
    section4Title: string;
    section4Content: string;
    section5Title: string;
    section5Content: string;
    section5List1: string;
    section5List2: string;
    section5List3: string;
    section5List4: string;
    section6Title: string;
    section6Content: string;
    section7Title: string;
    section7Content: string;
    section7List1: string;
    section7List2: string;
    section7List3: string;
    section7List4: string;
    section8Title: string;
    section8Content: string;
    section9Title: string;
    section9Content: string;
    section10Title: string;
    section10Content: string;
  };
  notFound: {
    title: string;
    description: string;
    backToGallery: string;
  };
  galleryErrors: {
    failedToFetch: string;
    unknown: string;
    errorHeading: string;
    retryButton: string;
  };
  userProfile: {
    notFoundTitle: string;
    notFoundDescription: string;
    backButton: string;
    backToGallery: string;
    website: string;
    communityPoints: string;
    nftsOwned: string;
    memberSince: string;
    nftCollection: string;
    loadingNfts: string;
    noNftsTitle: string;
    noNftsDescription: string;
  };
  nftDetail: {
    registeredMember: string;
    viewProfile: string;
    leaderboard: string;
    shareOnTwitter: string;
    tweetTemplate: string;
  };
  profileEditor: {
    editButton: string;
    heading: string;
    displayNameLabel: string;
    displayNamePlaceholder: string;
    displayNameHelp: string;
    profilePictureLabel: string;
    uploadImage: string;
    uploading: string;
    remove: string;
    profilePictureHelp: string;
    bannerImageLabel: string;
    uploadBanner: string;
    removeBanner: string;
    bannerImageHelp: string;
    bioLabel: string;
    bioPlaceholder: string;
    charCount: string;
    socialLinksHeading: string;
    twitterLabel: string;
    twitterPlaceholder: string;
    discordLabel: string;
    discordPlaceholder: string;
    telegramLabel: string;
    telegramPlaceholder: string;
    telegramHelp: string;
    websiteLabel: string;
    websitePlaceholder: string;
    saving: string;
    saveButton: string;
    cancelButton: string;
    errorFileSize: string;
    errorFileType: string;
    errorUploadFailed: string;
    errorUpdateFailed: string;
    errorSaveFailed: string;
  };
  displayNameEditor: {
    editButton: string;
    placeholder: string;
    help: string;
    errorLength: string;
    errorUpdateFailed: string;
    errorSaveFailed: string;
  };
  auth: {
    connectTooltip: string;
  };
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      leaderboard: 'Leaderboard',
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
      owner: 'Owner',
      mintAddress: 'Mint Address',
      viewOnSolscan: 'View on Solscan',
      nftNumber: '#{number} of {total}',
      statusDiamondHanded: 'DIAMOND HANDED',
      statusListed: 'LISTED',
      statusStaked: 'STAKED',
      statusHodled: 'HODLED',
      badgeUnique: '1/1 UNIQUE',
      badgeVerified: '✓ VERIFIED',
      badgeOwned: '👑 OWNED BY YOU',
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
      loading: 'Loading...',
      noBanner: 'No banner set',
      website: 'Website',
      connectedVia: 'Connected via:',
      mySolanaWallets: 'My Solana Wallets',
      addWallet: 'Add Wallet',
      noWallets: 'No Solana wallets connected',
      noWalletsDesc: 'Add a Solana wallet to see your NFTs from the collection',
      connectWallet: 'Connect Wallet',
      wallet: 'Wallet',
      copy: 'Copy',
      nftsOwned: 'NFTs Owned',
      noNftsYet: "You don't own any NFTs from this collection yet",
      youOwn: 'You own',
      nft: 'NFT',
      nfts: 'NFTs',
      fromCollection: 'from this collection',
      startEarning: 'Start earning points by being active in the community',
      walletsConnected: 'Wallets Connected',
      noWalletsConnected: 'No wallets connected',
      walletLinked: 'Solana wallet linked',
      walletsLinked: 'Solana wallets linked',
      myNftsCollection: 'My NFTs from Collection',
      loadingNfts: 'Loading your NFTs...',
      noNftsFound: 'No NFTs found',
      noNftsDesc: "You don't own any NFTs from the Power Grinders collection",
      activityFeed: 'Activity Feed',
      comingSoon: 'Coming soon...',
      backToGallery: 'Back to Gallery',
    },
    leaderboard: {
      title: 'Leaderboard',
      subtitle: 'Top Power Grinders members ranked by community points and activity',
      loading: 'Loading leaderboard...',
      comingSoon: 'Leaderboard Coming Soon',
      comingSoonDesc: 'Points system will be activated soon. Start engaging with the community!',
      rank: 'Rank',
      user: 'User',
      nfts: 'NFTs',
      points: 'Points',
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: November 15, 2025',
      backToHome: 'Back to Home',
      section1Title: '1. Information We Collect',
      section1Content: 'Power Grinders collects information to provide better services to our users. We collect information in the following ways:',
      section1List1: 'Information you provide to us (name, email, social media handles)',
      section1List2: 'Information from your use of our services',
      section1List3: 'Wallet addresses you connect to our platform',
      section1List4: 'Activity data from community engagement',
      section2Title: '2. How We Use Information',
      section2Content: 'We use the information we collect for the following purposes:',
      section2List1: 'To provide, maintain, and improve our services',
      section2List2: 'To verify membership and grant access to exclusive content',
      section2List3: 'To track community points and engagement',
      section2List4: 'To communicate with you about updates and opportunities',
      section3Title: '3. Information Sharing',
      section3Content: 'We do not share your personal information with companies, organizations, or individuals outside of Power Grinders except in the following cases:',
      section3List1: 'With your consent',
      section3List2: 'For legal reasons',
      section3List3: 'To protect rights, property, or safety',
      section4Title: '4. Data Security',
      section4Content: 'We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
      section5Title: '5. Your Rights',
      section5Content: 'You have the right to:',
      section5List1: 'Access your personal data',
      section5List2: 'Request correction of your data',
      section5List3: 'Request deletion of your data',
      section5List4: 'Object to processing of your data',
      section6Title: '6. Contact Us',
      section6Content: 'If you have any questions about this Privacy Policy, please contact us through our community channels.',
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: November 15, 2025',
      backToHome: 'Back to Home',
      section1Title: '1. Acceptance of Terms',
      section1Content: 'By accessing and using Power Grinders services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.',
      section2Title: '2. Membership',
      section2Content: 'Power Grinders membership is limited and exclusive:',
      section2List1: 'Limited to 45 members maximum',
      section2List2: 'Application review process required',
      section2List3: 'Membership may be revoked for violations of community guidelines',
      section2List4: 'No refunds for NFT purchases',
      section3Title: '3. Community Guidelines',
      section3Content: 'As a member, you agree to:',
      section3List1: 'Respect other community members',
      section3List2: 'Not share confidential alpha or information outside the community',
      section3List3: 'Participate in good faith',
      section3List4: 'Not engage in spam, scams, or malicious activities',
      section4Title: '4. Intellectual Property',
      section4Content: 'All content, including NFT artwork, logos, and branding materials, are the property of Power Grinders or its licensors. You may not use, reproduce, or distribute any content without explicit permission.',
      section5Title: '5. NFT Ownership',
      section5Content: 'When you purchase a Power Grinders NFT:',
      section5List1: 'You own the NFT and can transfer or sell it',
      section5List2: 'Community access is tied to NFT ownership',
      section5List3: 'Selling your NFT transfers community access to the new owner',
      section5List4: 'You receive a limited license to use the artwork for personal purposes',
      section6Title: '6. Points System',
      section6Content: 'The points system is for gamification and community engagement. Points have no monetary value and cannot be exchanged for cash or other benefits unless explicitly stated.',
      section7Title: '7. Disclaimer',
      section7Content: 'Power Grinders provides information and community access but:',
      section7List1: 'Does not provide financial advice',
      section7List2: 'Makes no guarantees about investment returns',
      section7List3: 'Is not responsible for individual trading decisions',
      section7List4: 'Cryptocurrency trading involves substantial risk',
      section8Title: '8. Limitation of Liability',
      section8Content: 'Power Grinders shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.',
      section9Title: '9. Changes to Terms',
      section9Content: 'We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.',
      section10Title: '10. Contact',
      section10Content: 'For questions about these Terms of Service, please contact us through our official community channels.',
    },
    notFound: {
      title: 'NFT Not Found',
      description: 'Sorry, the NFT you are looking for does not exist or has been moved.',
      backToGallery: 'Back to Gallery',
    },
    galleryErrors: {
      failedToFetch: 'Failed to fetch NFTs',
      unknown: 'Unknown error',
      errorHeading: 'Error Loading NFTs',
      retryButton: 'Retry',
    },
    userProfile: {
      notFoundTitle: 'Profile Not Found',
      notFoundDescription: 'Unable to load or create profile for this user. Please try again later.',
      backButton: 'Back to Gallery',
      backToGallery: 'Back to Gallery',
      website: 'Website',
      communityPoints: 'Community Points',
      nftsOwned: 'NFTs Owned',
      memberSince: 'Member since',
      nftCollection: 'NFT Collection',
      loadingNfts: 'Loading NFTs...',
      noNftsTitle: 'No NFTs found',
      noNftsDescription: 'This user doesn\'t own any NFTs from the Power Grinders collection yet',
    },
    nftDetail: {
      registeredMember: 'Registered Member',
      viewProfile: 'View Profile',
      leaderboard: 'Leaderboard',
      shareOnTwitter: 'Share on Twitter',
      tweetTemplate: 'Check out {name} #{number} from the @Power_Grinders NFT Collection! 🔥',
    },
    profileEditor: {
      editButton: 'Edit Profile',
      heading: 'Edit Profile',
      displayNameLabel: 'Display Name',
      displayNamePlaceholder: 'Your display name',
      displayNameHelp: '2-30 characters. Leave empty to use default name.',
      profilePictureLabel: 'Profile Picture',
      uploadImage: 'Upload Image',
      uploading: 'Uploading...',
      remove: 'Remove',
      profilePictureHelp: 'Upload a square image (500x500px recommended, max 5MB)',
      bannerImageLabel: 'Banner Image',
      uploadBanner: 'Upload Banner',
      removeBanner: 'Remove Banner',
      bannerImageHelp: 'Upload a wide banner image (1500x500px recommended, max 5MB)',
      bioLabel: 'Bio / Description',
      bioPlaceholder: 'Tell us about yourself...',
      charCount: '{count}/500 characters',
      socialLinksHeading: 'Social Links',
      twitterLabel: 'Twitter Handle',
      twitterPlaceholder: 'username',
      discordLabel: 'Discord Username',
      discordPlaceholder: 'username#1234',
      telegramLabel: 'Telegram Username',
      telegramPlaceholder: 'username',
      telegramHelp: '5-32 characters, must start with a letter',
      websiteLabel: 'Website',
      websitePlaceholder: 'https://yourwebsite.com',
      saving: 'Saving...',
      saveButton: 'Save Changes',
      cancelButton: 'Cancel',
      errorFileSize: 'File size must be less than 5MB',
      errorFileType: 'File type must be JPG, PNG, WEBP, or GIF',
      errorUploadFailed: 'Failed to upload image',
      errorUpdateFailed: 'Failed to update profile',
      errorSaveFailed: 'Failed to save profile',
    },
    displayNameEditor: {
      editButton: 'Edit Name',
      placeholder: 'Enter your display name',
      help: '2-30 characters. Letters, numbers, spaces, _ and - allowed.',
      errorLength: 'Name must be 2-30 characters',
      errorUpdateFailed: 'Failed to update name',
      errorSaveFailed: 'Failed to save. Please try again.',
    },
    auth: {
      connectTooltip: 'Connect with Twitter, Discord, Gmail or Solana wallet',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      gallery: 'Galería',
      leaderboard: 'Tabla de Clasificación',
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
      owner: 'Propietario',
      mintAddress: 'Dirección de Mint',
      viewOnSolscan: 'Ver en Solscan',
      nftNumber: '#{number} de {total}',
      statusDiamondHanded: 'MANOS DE DIAMANTE',
      statusListed: 'EN VENTA',
      statusStaked: 'STAKEADO',
      statusHodled: 'HODLEADO',
      badgeUnique: '1/1 ÚNICO',
      badgeVerified: '✓ VERIFICADO',
      badgeOwned: '👑 ES TUYO',
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
      loading: 'Cargando...',
      noBanner: 'Sin banner configurado',
      website: 'Sitio web',
      connectedVia: 'Conectado vía:',
      mySolanaWallets: 'Mis Billeteras Solana',
      addWallet: 'Agregar Billetera',
      noWallets: 'No hay billeteras Solana conectadas',
      noWalletsDesc: 'Agrega una billetera Solana para ver tus NFTs de la colección',
      connectWallet: 'Conectar Billetera',
      wallet: 'Billetera',
      copy: 'Copiar',
      nftsOwned: 'NFTs Poseídos',
      noNftsYet: 'Aún no posees ningún NFT de esta colección',
      youOwn: 'Posees',
      nft: 'NFT',
      nfts: 'NFTs',
      fromCollection: 'de esta colección',
      startEarning: 'Comienza a ganar puntos siendo activo en la comunidad',
      walletsConnected: 'Billeteras Conectadas',
      noWalletsConnected: 'No hay billeteras conectadas',
      walletLinked: 'billetera Solana vinculada',
      walletsLinked: 'billeteras Solana vinculadas',
      myNftsCollection: 'Mis NFTs de la Colección',
      loadingNfts: 'Cargando tus NFTs...',
      noNftsFound: 'No se encontraron NFTs',
      noNftsDesc: 'No posees ningún NFT de la colección Power Grinders',
      activityFeed: 'Feed de Actividad',
      comingSoon: 'Próximamente...',
      backToGallery: 'Volver a la Galería',
    },
    leaderboard: {
      title: 'Tabla de Clasificación',
      subtitle: 'Los mejores miembros de Power Grinders clasificados por puntos y actividad comunitaria',
      loading: 'Cargando tabla de clasificación...',
      comingSoon: 'Tabla de Clasificación Próximamente',
      comingSoonDesc: '¡El sistema de puntos se activará pronto. Empieza a interactuar con la comunidad!',
      rank: 'Posición',
      user: 'Usuario',
      nfts: 'NFTs',
      points: 'Puntos',
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar',
    },
    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 15 de noviembre de 2025',
      backToHome: 'Volver al Inicio',
      section1Title: '1. Información que Recopilamos',
      section1Content: 'Power Grinders recopila información para proporcionar mejores servicios a nuestros usuarios. Recopilamos información de las siguientes maneras:',
      section1List1: 'Información que nos proporciona (nombre, correo electrónico, redes sociales)',
      section1List2: 'Información del uso de nuestros servicios',
      section1List3: 'Direcciones de billetera que conecta a nuestra plataforma',
      section1List4: 'Datos de actividad de participación comunitaria',
      section2Title: '2. Cómo Usamos la Información',
      section2Content: 'Usamos la información que recopilamos para los siguientes propósitos:',
      section2List1: 'Proporcionar, mantener y mejorar nuestros servicios',
      section2List2: 'Verificar membresía y otorgar acceso a contenido exclusivo',
      section2List3: 'Rastrear puntos y participación comunitaria',
      section2List4: 'Comunicarnos con usted sobre actualizaciones y oportunidades',
      section3Title: '3. Compartir Información',
      section3Content: 'No compartimos su información personal con empresas, organizaciones o individuos fuera de Power Grinders excepto en los siguientes casos:',
      section3List1: 'Con su consentimiento',
      section3List2: 'Por razones legales',
      section3List3: 'Para proteger derechos, propiedad o seguridad',
      section4Title: '4. Seguridad de Datos',
      section4Content: 'Implementamos medidas de seguridad apropiadas para proteger su información personal. Sin embargo, ningún método de transmisión por Internet es 100% seguro, y no podemos garantizar seguridad absoluta.',
      section5Title: '5. Sus Derechos',
      section5Content: 'Usted tiene el derecho a:',
      section5List1: 'Acceder a sus datos personales',
      section5List2: 'Solicitar corrección de sus datos',
      section5List3: 'Solicitar eliminación de sus datos',
      section5List4: 'Objetar el procesamiento de sus datos',
      section6Title: '6. Contáctenos',
      section6Content: 'Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos a través de nuestros canales comunitarios.',
    },
    terms: {
      title: 'Términos de Servicio',
      lastUpdated: 'Última actualización: 15 de noviembre de 2025',
      backToHome: 'Volver al Inicio',
      section1Title: '1. Aceptación de Términos',
      section1Content: 'Al acceder y usar los servicios de Power Grinders, acepta y acepta estar sujeto a los términos y disposiciones de este acuerdo. Si no está de acuerdo con estos términos, no use nuestros servicios.',
      section2Title: '2. Membresía',
      section2Content: 'La membresía de Power Grinders es limitada y exclusiva:',
      section2List1: 'Limitado a 45 miembros máximo',
      section2List2: 'Proceso de revisión de solicitud requerido',
      section2List3: 'La membresía puede ser revocada por violaciones de las pautas comunitarias',
      section2List4: 'No hay reembolsos para compras de NFT',
      section3Title: '3. Pautas Comunitarias',
      section3Content: 'Como miembro, acepta:',
      section3List1: 'Respetar a otros miembros de la comunidad',
      section3List2: 'No compartir alpha confidencial o información fuera de la comunidad',
      section3List3: 'Participar de buena fe',
      section3List4: 'No participar en spam, estafas o actividades maliciosas',
      section4Title: '4. Propiedad Intelectual',
      section4Content: 'Todo el contenido, incluido el arte NFT, logotipos y materiales de marca, son propiedad de Power Grinders o sus licenciantes. No puede usar, reproducir o distribuir ningún contenido sin permiso explícito.',
      section5Title: '5. Propiedad de NFT',
      section5Content: 'Cuando compra un NFT de Power Grinders:',
      section5List1: 'Posee el NFT y puede transferirlo o venderlo',
      section5List2: 'El acceso comunitario está vinculado a la propiedad del NFT',
      section5List3: 'Vender su NFT transfiere el acceso comunitario al nuevo propietario',
      section5List4: 'Recibe una licencia limitada para usar la obra de arte con fines personales',
      section6Title: '6. Sistema de Puntos',
      section6Content: 'El sistema de puntos es para gamificación y participación comunitaria. Los puntos no tienen valor monetario y no pueden canjearse por efectivo u otros beneficios a menos que se indique explícitamente.',
      section7Title: '7. Descargo de Responsabilidad',
      section7Content: 'Power Grinders proporciona información y acceso comunitario pero:',
      section7List1: 'No proporciona asesoramiento financiero',
      section7List2: 'No garantiza rendimientos de inversión',
      section7List3: 'No es responsable de las decisiones comerciales individuales',
      section7List4: 'El comercio de criptomonedas implica un riesgo sustancial',
      section8Title: '8. Limitación de Responsabilidad',
      section8Content: 'Power Grinders no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo que resulte de su uso o incapacidad para usar el servicio.',
      section9Title: '9. Cambios en los Términos',
      section9Content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado de nuestros servicios después de los cambios constituye la aceptación de los nuevos términos.',
      section10Title: '10. Contacto',
      section10Content: 'Para preguntas sobre estos Términos de Servicio, contáctenos a través de nuestros canales comunitarios oficiales.',
    },
    notFound: {
      title: 'NFT No Encontrado',
      description: 'Lo sentimos, el NFT que buscas no existe o ha sido movido.',
      backToGallery: 'Volver a la Galería',
    },
    galleryErrors: {
      failedToFetch: 'Error al cargar NFTs',
      unknown: 'Error desconocido',
      errorHeading: 'Error al Cargar NFTs',
      retryButton: 'Reintentar',
    },
    userProfile: {
      notFoundTitle: 'Perfil No Encontrado',
      notFoundDescription: 'No se puede cargar o crear el perfil de este usuario. Por favor, inténtalo más tarde.',
      backButton: 'Volver a la Galería',
      backToGallery: 'Volver a la Galería',
      website: 'Sitio Web',
      communityPoints: 'Puntos de Comunidad',
      nftsOwned: 'NFTs Poseídos',
      memberSince: 'Miembro desde',
      nftCollection: 'Colección de NFTs',
      loadingNfts: 'Cargando NFTs...',
      noNftsTitle: 'No se encontraron NFTs',
      noNftsDescription: 'Este usuario aún no posee ningún NFT de la colección Power Grinders',
    },
    nftDetail: {
      registeredMember: 'Miembro Registrado',
      viewProfile: 'Ver Perfil',
      leaderboard: 'Tabla de Clasificación',
      shareOnTwitter: 'Compartir en Twitter',
      tweetTemplate: '¡Mira {name} #{number} de la Colección NFT @Power_Grinders! 🔥',
    },
    profileEditor: {
      editButton: 'Editar Perfil',
      heading: 'Editar Perfil',
      displayNameLabel: 'Nombre para Mostrar',
      displayNamePlaceholder: 'Tu nombre para mostrar',
      displayNameHelp: '2-30 caracteres. Dejar vacío para usar el nombre predeterminado.',
      profilePictureLabel: 'Foto de Perfil',
      uploadImage: 'Subir Imagen',
      uploading: 'Subiendo...',
      remove: 'Eliminar',
      profilePictureHelp: 'Sube una imagen cuadrada (500x500px recomendado, máx. 5MB)',
      bannerImageLabel: 'Imagen de Banner',
      uploadBanner: 'Subir Banner',
      removeBanner: 'Eliminar Banner',
      bannerImageHelp: 'Sube una imagen de banner ancha (1500x500px recomendado, máx. 5MB)',
      bioLabel: 'Biografía / Descripción',
      bioPlaceholder: 'Cuéntanos sobre ti...',
      charCount: '{count}/500 caracteres',
      socialLinksHeading: 'Enlaces Sociales',
      twitterLabel: 'Usuario de Twitter',
      twitterPlaceholder: 'usuario',
      discordLabel: 'Usuario de Discord',
      discordPlaceholder: 'usuario#1234',
      telegramLabel: 'Usuario de Telegram',
      telegramPlaceholder: 'usuario',
      telegramHelp: '5-32 caracteres, debe comenzar con una letra',
      websiteLabel: 'Sitio Web',
      websitePlaceholder: 'https://tusitio.com',
      saving: 'Guardando...',
      saveButton: 'Guardar Cambios',
      cancelButton: 'Cancelar',
      errorFileSize: 'El tamaño del archivo debe ser menor a 5MB',
      errorFileType: 'El tipo de archivo debe ser JPG, PNG, WEBP o GIF',
      errorUploadFailed: 'Error al subir la imagen',
      errorUpdateFailed: 'Error al actualizar el perfil',
      errorSaveFailed: 'Error al guardar el perfil',
    },
    displayNameEditor: {
      editButton: 'Editar Nombre',
      placeholder: 'Ingresa tu nombre para mostrar',
      help: '2-30 caracteres. Letras, números, espacios, _ y - permitidos.',
      errorLength: 'El nombre debe tener entre 2-30 caracteres',
      errorUpdateFailed: 'Error al actualizar el nombre',
      errorSaveFailed: 'Error al guardar. Por favor, inténtalo de nuevo.',
    },
    auth: {
      connectTooltip: 'Conectar con Twitter, Discord, Gmail o billetera Solana',
    },
  },
  // Minimal translations for other languages (zh, hi, ko) - keeping it shorter
  zh: {
    nav: { home: '首页', gallery: '画廊', leaderboard: '排行榜', profile: '我的资料', apply: '申请', connect: '连接', logout: '登出' },
    home: { tagline: '精英后启示录幸存者社区', applyNow: '立即申请', totalSupply: '总供应量', unique: '独特', ogExclusive: '专属', nftCollection: 'NFT收藏', theCollection: '收藏品', collectionDesc: '45个独特角色在荒地中生存', viewFullGallery: '查看完整画廊', benefits: '福利', whyPowerGrinders: '为什么选择Power Grinders', moreThanNFTs: '不仅仅是NFT - 精英社区', exclusiveAlpha: '独家Alpha', exclusiveAlphaDesc: '早期访问市场洞察和交易机会', eliteNetwork: '精英网络', eliteNetworkDesc: '与Solana生态系统中的成功交易者建立联系', protectedAccess: '受保护访问', protectedAccessDesc: '限45名成员 - 保证高质量讨论', limitedMembers: '限45名成员', readyToGrind: '准备好了吗？', readyToGrindDesc: '加入最独家的Solana OG社区。申请将被仔细审查。', community247: '社区', quickLinks: '快速链接', community: '社区', allRightsReserved: '版权所有。', communityBadge: '独家社区', communityTitle: '加入精英社区', communitySubtitle: '不仅仅是NFT - 解锁精英交易者私人网络、独家Alpha和您在其他地方找不到的机会。', communityBenefit1: '来自经验丰富交易者的每日市场洞察和交易信号', communityBenefit2: '在公开之前抢先获得高潜力项目', communityBenefit3: '带有实时讨论和警报的私人Discord频道', communityBenefit4: '与成功的交易者建立联系并学习他们的策略', communityCtaTitle: '准备加入精英？', communityCtaDesc: '仅限45名成员。立即申请，在Solana最独家的交易社区中占据您的位置。', privacyPolicy: '隐私政策', termsOfService: '服务条款' },
    faq: { badge: '常见问题', title1: '常见', title2: '问题', subtitle: '关于Power Grinders您需要了解的一切', question1: '什么是Power Grinders？', answer1: 'Power Grinders是Solana生态系统中由45名精英成员组成的独家社区。我们将独特的NFT所有权与优质alpha、交易洞察和成功交易者网络相结合。', question2: '如何加入社区？', answer2: '通过我们的申请表格申请。所有提交的申请都会被仔细审查。我们寻找在加密领域活跃、为讨论带来价值并符合我们社区价值观的热情人士。', question3: '成员可以获得什么好处？', answer3: '成员可以访问独家alpha频道、每日市场洞察、项目早期访问、私人Discord社区、与成功交易者的网络机会，以及代表其会员资格的独特NFT所有权。', question4: '为什么会员人数限制为45？', answer4: '我们相信质量胜于数量。将会员人数限制在45人可确保高质量的讨论、更紧密的关系和为所有成员提供更好的机会。这维护了社区的独家性和价值。', question5: '申请需要加密经验吗？', answer5: '是的，我们寻找在加密和NFT方面有经验的成员。无论您是交易者、建设者还是活跃的社区成员，展示您的知识和热情都是必不可少的。', question6: 'Power Grinders有何不同？', answer6: '与典型的NFT项目不同，我们首先关注社区价值。每位成员都经过仔细审查，确保您周围都是认真、有知识的人。小规模创造真正的联系和可操作的机会。', stillHaveQuestions: '还有疑问？', joinDiscord: '加入我们的Discord' },
    roadmap: { badge: '路线图', title1: '我们的', title2: '旅程', subtitle: '构建独家NFT社区的未来', phase1Number: '第1阶段', phase1Title: '基础与启动', phase1Desc: '收藏发布、社区建设和建立核心渠道。设置alpha共享和成员入职的基础设施。', phase1Status: '已完成', phase2Number: '第2阶段', phase2Title: '社区增长', phase2Desc: '扩大与顶级项目的合作关系，实施成员验证系统，并与经过验证的交易者一起推出独家alpha频道。', phase2Status: '进行中', phase3Number: '第3阶段', phase3Title: '高级功能', phase3Desc: '社区参与积分系统、独家线下活动、优先访问合作项目白名单以及增强的成员福利。', phase3Status: '即将推出', phase4Number: '第4阶段', phase4Title: '生态系统扩展', phase4Desc: '启动社区驱动的ventures、为成员提供投资机会、全球聚会，并确立Power Grinders作为Solana顶级社区的地位。', phase4Status: '未来' },
    team: { badge: '我们的价值观', title1: '与众', title2: '不同', subtitle: '我们不仅仅是另一个NFT项目。我们正在建立一场由精英人士组成的运动，他们相信质量、独家性和在Solana生态系统中创造真正的价值。', missionTitle: '我们的使命', missionDesc: '在Solana生态系统中创建最有价值和最独家的社区，每位成员都能贡献、学习并共同成长。', value1Title: '信任与安全', value1Desc: '每位成员都经过仔细审查。我们优先考虑质量和真实性，而非增长指标。', value2Title: '精准与专注', value2Desc: '我们排除噪音，提供可操作的见解和真正的机会。', value3Title: '创新', value3Desc: '始终领先于趋势，在主流之前识别趋势。', value4Title: '社区至上', value4Desc: '我们的成员是我们的优先事项。每项决策都是为了集体利益而做出的。', stat1Value: '45', stat1Label: '精英成员', stat2Value: '24/7', stat2Label: '活跃社区', stat3Value: '100%', stat3Label: '经过验证的访问' },
    apply: { title: '立即申请', subtitle: '加入45名精英成员的独家社区。只接受最好的成员。', submitted: '申请已提交！', submittedDesc: '感谢您的申请。我们会审查并尽快与您联系。', redirecting: '正在跳转到首页...', fullName: '全名', email: '电子邮件地址', twitterHandle: 'Twitter用户名', discordUsername: 'Discord用户名', experience: 'Crypto/NFT经验', whyJoin: '为什么要加入Power Grinders？', contribution: '您能为社区贡献什么？', submit: '提交申请', submitting: '提交中...', required: '* 所有字段都是必填的。我们会仔细审查所有申请。', namePlaceholder: '输入您的全名', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: '告诉我们您在加密货币和NFT方面的经验...', whyPlaceholder: '是什么让您适合这个社区？', contributionPlaceholder: '您将如何为Power Grinders增值？', totalSpots: '总名额', reviewTime: '审查时间', eliteCommunity: '精英社区' },
    gallery: { title: 'NFT画廊', fullCollection: '完整收藏', nftsCount: '个NFT', nftSingular: 'NFT', nftPlural: 'NFT', of: '的', total: '总共', searchPlaceholder: '按名称、描述或#ID搜索...', loading: '加载NFT中...', noResults: '未找到结果', noResultsDesc: '没有匹配的NFT', clearSearch: '清除搜索', gridLarge: '大网格', gridMedium: '中网格', gridCompact: '紧凑网格' },
    nft: { backToGallery: '返回画廊', connectedWallets: '已连接钱包', noWallets: '无已连接钱包', viewOnBlockchain: '在区块链上查看', share: '分享', imageNotAvailable: '图片不可用', noDescription: '无可用描述', owner: '拥有者', mintAddress: '铸币地址', viewOnSolscan: '在Solscan上查看', nftNumber: '#{number} / {total}', statusDiamondHanded: '钻石之手', statusListed: '挂牌中', statusStaked: '质押中', statusHodled: '持有中', badgeUnique: '1/1 独特', badgeVerified: '✓ 已验证', badgeOwned: '👑 你拥有' },
    profile: { title: '我的资料', personalInfo: '个人信息', username: '用户名', email: '电子邮件', memberSince: '会员自', connectedAccounts: '已连接账户', discordConnected: 'Discord已连接', twitterConnected: 'Twitter已连接', telegramConnected: 'Telegram已连接', points: '积分', totalPoints: '总积分', pointsComingSoon: '积分系统即将推出', recent: '最近', noUsername: '无用户名', loading: '加载中...', noBanner: '未设置横幅', website: '网站', connectedVia: '连接方式：', mySolanaWallets: '我的Solana钱包', addWallet: '添加钱包', noWallets: '未连接Solana钱包', noWalletsDesc: '添加Solana钱包以查看您的收藏NFT', connectWallet: '连接钱包', wallet: '钱包', copy: '复制', nftsOwned: '拥有的NFT', noNftsYet: '您还未拥有此收藏的任何NFT', youOwn: '您拥有', nft: 'NFT', nfts: 'NFT', fromCollection: '来自此收藏', startEarning: '通过在社区中活跃来开始赚取积分', walletsConnected: '已连接钱包', noWalletsConnected: '未连接钱包', walletLinked: '已连接Solana钱包', walletsLinked: '已连接Solana钱包', myNftsCollection: '我的收藏NFT', loadingNfts: '正在加载您的NFT...', noNftsFound: '未找到NFT', noNftsDesc: '您没有Power Grinders收藏的任何NFT', activityFeed: '活动动态', comingSoon: '即将推出...', backToGallery: '返回画廊' },
    leaderboard: { title: '排行榜', subtitle: 'Power Grinders顶级成员按社区积分和活动排名', loading: '加载排行榜中...', comingSoon: '排行榜即将推出', comingSoonDesc: '积分系统即将启动。开始与社区互动吧！', rank: '排名', user: '用户', nfts: 'NFTs', points: '积分' },
    common: { loading: '加载中...', error: '错误', success: '成功', close: '关闭', save: '保存', cancel: '取消' },
    privacy: { title: '隐私政策', lastUpdated: '最后更新：2025年11月15日', backToHome: '返回首页', section1Title: '1. 我们收集的信息', section1Content: 'Power Grinders收集信息以向我们的用户提供更好的服务。', section1List1: '您提供给我们的信息', section1List2: '您使用我们服务的信息', section1List3: '您连接到我们平台的钱包地址', section1List4: '社区参与的活动数据', section2Title: '2. 我们如何使用信息', section2Content: '我们将收集的信息用于以下目的：', section2List1: '提供、维护和改进我们的服务', section2List2: '验证会员资格并授予独家内容访问权限', section2List3: '跟踪社区积分和参与度', section2List4: '就更新和机会与您沟通', section3Title: '3. 信息共享', section3Content: '除以下情况外，我们不与Power Grinders以外的公司、组织或个人分享您的个人信息：', section3List1: '经您同意', section3List2: '出于法律原因', section3List3: '保护权利、财产或安全', section4Title: '4. 数据安全', section4Content: '我们实施适当的安全措施来保护您的个人信息。', section5Title: '5. 您的权利', section5Content: '您有权：', section5List1: '访问您的个人数据', section5List2: '要求更正您的数据', section5List3: '要求删除您的数据', section5List4: '反对处理您的数据', section6Title: '6. 联系我们', section6Content: '如果您对本隐私政策有任何疑问，请通过我们的社区渠道与我们联系。' },
    terms: { title: '服务条款', lastUpdated: '最后更新：2025年11月15日', backToHome: '返回首页', section1Title: '1. 接受条款', section1Content: '通过访问和使用Power Grinders服务，您接受并同意受本协议条款和规定的约束。', section2Title: '2. 会员资格', section2Content: 'Power Grinders会员资格有限且独家：', section2List1: '最多限45名成员', section2List2: '需要申请审查流程', section2List3: '违反社区准则可能被撤销会员资格', section2List4: 'NFT购买不退款', section3Title: '3. 社区准则', section3Content: '作为会员，您同意：', section3List1: '尊重其他社区成员', section3List2: '不在社区外分享机密alpha或信息', section3List3: '诚信参与', section3List4: '不从事垃圾邮件、诈骗或恶意活动', section4Title: '4. 知识产权', section4Content: '所有内容，包括NFT艺术品、标志和品牌材料，均为Power Grinders或其许可方的财产。', section5Title: '5. NFT所有权', section5Content: '当您购买Power Grinders NFT时：', section5List1: '您拥有NFT并可以转让或出售', section5List2: '社区访问与NFT所有权相关联', section5List3: '出售您的NFT会将社区访问权转让给新所有者', section5List4: '您获得将艺术品用于个人目的的有限许可', section6Title: '6. 积分系统', section6Content: '积分系统用于游戏化和社区参与。积分没有货币价值。', section7Title: '7. 免责声明', section7Content: 'Power Grinders提供信息和社区访问，但：', section7List1: '不提供财务建议', section7List2: '不保证投资回报', section7List3: '不对个人交易决定负责', section7List4: '加密货币交易涉及重大风险', section8Title: '8. 责任限制', section8Content: 'Power Grinders不对因您使用或无法使用服务而导致的任何间接、偶然、特殊、后果性或惩罚性损害负责。', section9Title: '9. 条款变更', section9Content: '我们保留随时修改这些条款的权利。', section10Title: '10. 联系', section10Content: '有关这些服务条款的问题，请通过我们的官方社区渠道与我们联系。' },
    notFound: { title: '未找到NFT', description: '抱歉，您正在寻找的NFT不存在或已被移动。', backToGallery: '返回画廊' },
    galleryErrors: { failedToFetch: '无法获取NFTs', unknown: '未知错误', errorHeading: '加载NFTs时出错', retryButton: '重试' },
    userProfile: { notFoundTitle: '未找到资料', notFoundDescription: '无法加载或创建此用户的资料。请稍后再试。', backButton: '返回画廊', backToGallery: '返回画廊', website: '网站', communityPoints: '社区积分', nftsOwned: '拥有的NFT', memberSince: '会员自', nftCollection: 'NFT收藏', loadingNfts: '加载NFTs中...', noNftsTitle: '未找到NFT', noNftsDescription: '此用户还没有Power Grinders收藏的任何NFT' },
    nftDetail: { registeredMember: '注册会员', viewProfile: '查看资料', leaderboard: '排行榜', shareOnTwitter: '在Twitter上分享', tweetTemplate: '看看来自@Power_Grinders NFT收藏的{name} #{number}！🔥' },
    profileEditor: { editButton: '编辑资料', heading: '编辑资料', displayNameLabel: '显示名称', displayNamePlaceholder: '您的显示名称', displayNameHelp: '2-30个字符。留空使用默认名称。', profilePictureLabel: '头像', uploadImage: '上传图片', uploading: '上传中...', remove: '移除', profilePictureHelp: '上传正方形图片（建议500x500px，最大5MB）', bannerImageLabel: '横幅图片', uploadBanner: '上传横幅', removeBanner: '移除横幅', bannerImageHelp: '上传宽横幅图片（建议1500x500px，最大5MB）', bioLabel: '简介/描述', bioPlaceholder: '介绍一下自己...', charCount: '{count}/500字符', socialLinksHeading: '社交链接', twitterLabel: 'Twitter用户名', twitterPlaceholder: '用户名', discordLabel: 'Discord用户名', discordPlaceholder: '用户名#1234', telegramLabel: 'Telegram用户名', telegramPlaceholder: '用户名', telegramHelp: '5-32个字符，必须以字母开头', websiteLabel: '网站', websitePlaceholder: 'https://yourwebsite.com', saving: '保存中...', saveButton: '保存更改', cancelButton: '取消', errorFileSize: '文件大小必须小于5MB', errorFileType: '文件类型必须是JPG、PNG、WEBP或GIF', errorUploadFailed: '上传图片失败', errorUpdateFailed: '更新资料失败', errorSaveFailed: '保存资料失败' },
    displayNameEditor: { editButton: '编辑名称', placeholder: '输入您的显示名称', help: '2-30个字符。允许字母、数字、空格、_和-。', errorLength: '名称必须是2-30个字符', errorUpdateFailed: '更新名称失败', errorSaveFailed: '保存失败。请重试。' },
    auth: { connectTooltip: '使用Twitter、Discord、Gmail或Solana钱包连接' },
  },
  hi: {
    nav: { home: 'होम', gallery: 'गैलरी', leaderboard: 'लीडरबोर्ड', profile: 'मेरी प्रोफ़ाइल', apply: 'आवेदन करें', connect: 'कनेक्ट करें', logout: 'लॉग आउट' },
    home: { tagline: 'पोस्ट-एपोकैलिप्टिक सर्वाइवर्स का एलीट समुदाय', applyNow: 'अभी आवेदन करें', totalSupply: 'कुल आपूर्ति', unique: 'अनूठा', ogExclusive: 'विशेष', nftCollection: 'NFT संग्रह', theCollection: 'संग्रह', collectionDesc: 'वेस्टलैंड में जीवित 45 अनूठे पात्र', viewFullGallery: 'पूर्ण गैलरी देखें', benefits: 'लाभ', whyPowerGrinders: 'Power Grinders क्यों', moreThanNFTs: 'NFTs से अधिक - एक एलीट समुदाय', exclusiveAlpha: 'विशेष Alpha', exclusiveAlphaDesc: 'बाजार अंतर्दृष्टि और ट्रेडिंग अवसरों तक प्रारंभिक पहुंच', eliteNetwork: 'एलीट नेटवर्क', eliteNetworkDesc: 'Solana इकोसिस्टम में सफल ट्रेडर्स से जुड़ें', protectedAccess: 'संरक्षित पहुंच', protectedAccessDesc: '45 सदस्यों तक सीमित - गुणवत्ता चर्चाओं की गारंटी', limitedMembers: '45 सदस्यों तक सीमित', readyToGrind: 'Grind करने के लिए तैयार हैं?', readyToGrindDesc: 'Solana OGs के सबसे विशेष समुदाय में शामिल हों। आवेदनों की सावधानीपूर्वक समीक्षा की जाती है।', community247: 'समुदाय', quickLinks: 'त्वरित लिंक', community: 'समुदाय', allRightsReserved: 'सर्वाधिकार सुरक्षित।', communityBadge: 'विशेष समुदाय', communityTitle: 'एलीट समुदाय में शामिल हों', communitySubtitle: 'केवल NFTs से अधिक - एलीट ट्रेडर्स के निजी नेटवर्क, विशेष alpha और अवसरों तक पहुंच प्राप्त करें।', communityBenefit1: 'अनुभवी ट्रेडर्स से दैनिक बाजार अंतर्दृष्टि और ट्रेडिंग संकेत', communityBenefit2: 'सार्वजनिक होने से पहले उच्च क्षमता वाली परियोजनाओं तक प्रारंभिक पहुंच', communityBenefit3: 'वास्तविक समय चर्चा और अलर्ट के साथ निजी Discord चैनल', communityBenefit4: 'सफल ट्रेडर्स के साथ नेटवर्क और उनकी रणनीतियों से सीखें', communityCtaTitle: 'एलीट में शामिल होने के लिए तैयार हैं?', communityCtaDesc: 'केवल 45 सदस्यों तक सीमित। Solana पर सबसे विशेष ट्रेडिंग समुदाय में अपना स्थान सुरक्षित करने के लिए अभी आवेदन करें।', privacyPolicy: 'गोपनीयता नीति', termsOfService: 'सेवा की शर्तें' },
    faq: { badge: 'सामान्य प्रश्न', title1: 'अक्सर पूछे', title2: 'जाने वाले प्रश्न', subtitle: 'Power Grinders के बारे में आपको जो कुछ जानने की आवश्यकता है', question1: 'Power Grinders क्या है?', answer1: 'Power Grinders Solana इकोसिस्टम में 45 एलीट सदस्यों का एक विशेष समुदाय है। हम प्रीमियम alpha, ट्रेडिंग अंतर्दृष्टि और सफल ट्रेडर्स के नेटवर्क तक पहुंच के साथ अद्वितीय NFT स्वामित्व को जोड़ते हैं।', question2: 'मैं समुदाय में कैसे शामिल हो सकता हूं?', answer2: 'हमारे आवेदन फॉर्म के माध्यम से आवेदन करें। सभी सबमिशन की सावधानीपूर्वक समीक्षा की जाती है। हम उत्साही व्यक्तियों की तलाश करते हैं जो crypto में सक्रिय हैं, चर्चाओं में मूल्य लाते हैं और हमारे समुदाय मूल्यों के साथ संरेखित होते हैं।', question3: 'सदस्यों को क्या लाभ मिलते हैं?', answer3: 'सदस्यों को विशेष alpha चैनलों तक पहुंच, दैनिक बाजार अंतर्दृष्टि, प्रारंभिक परियोजना पहुंच, निजी Discord समुदाय, सफल ट्रेडर्स के साथ नेटवर्किंग के अवसर और उनकी सदस्यता का प्रतिनिधित्व करने वाले अद्वितीय NFT स्वामित्व मिलता है।', question4: 'सदस्यता 45 तक क्यों सीमित है?', answer4: 'हम मात्रा से अधिक गुणवत्ता में विश्वास करते हैं। सदस्यता को 45 तक सीमित करना उच्च गुणवत्ता वाली चर्चाओं, मजबूत संबंधों और सभी सदस्यों के लिए बेहतर अवसरों को सुनिश्चित करता है। यह समुदाय की विशिष्टता और मूल्य को बनाए रखता है।', question5: 'क्या आवेदन के लिए crypto अनुभव की आवश्यकता है?', answer5: 'हां, हम crypto और NFTs में सिद्ध अनुभव वाले सदस्यों की तलाश करते हैं। चाहे आप ट्रेडर हों, बिल्डर हों या सक्रिय समुदाय सदस्य हों, अपने ज्ञान और जुनून का प्रदर्शन आवश्यक है।', question6: 'Power Grinders को क्या अलग बनाता है?', answer6: 'विशिष्ट NFT परियोजनाओं के विपरीत, हम पहले समुदाय मूल्य पर ध्यान केंद्रित करते हैं। प्रत्येक सदस्य की सावधानीपूर्वक जांच की जाती है, यह सुनिश्चित करते हुए कि आप गंभीर, जानकार व्यक्तियों से घिरे हैं। छोटा आकार वास्तविक कनेक्शन और कार्रवाई योग्य अवसर बनाता है।', stillHaveQuestions: 'अभी भी प्रश्न हैं?', joinDiscord: 'हमारे Discord में शामिल हों' },
    roadmap: { badge: 'रोडमैप', title1: 'हमारी', title2: 'यात्रा', subtitle: 'विशेष NFT समुदायों का भविष्य बना रहे हैं', phase1Number: 'चरण 1', phase1Title: 'फाउंडेशन और लॉन्च', phase1Desc: 'संग्रह लॉन्च, समुदाय निर्माण और मुख्य चैनलों की स्थापना। alpha साझाकरण और सदस्य ऑनबोर्डिंग के लिए बुनियादी ढांचा स्थापित करना।', phase1Status: 'पूर्ण', phase2Number: 'चरण 2', phase2Title: 'समुदाय वृद्धि', phase2Desc: 'शीर्ष परियोजनाओं के साथ साझेदारी का विस्तार, सदस्य सत्यापन प्रणाली लागू करना और सिद्ध ट्रेडर्स के साथ विशेष alpha चैनलों का शुभारंभ।', phase2Status: 'प्रगति में', phase3Number: 'चरण 3', phase3Title: 'उन्नत सुविधाएं', phase3Desc: 'समुदाय जुड़ाव के लिए अंक प्रणाली, विशेष IRL कार्यक्रम, साझेदार परियोजना व्हाइटलिस्ट तक प्राथमिकता पहुंच और बढ़ाए गए सदस्य लाभ।', phase3Status: 'आने वाला', phase4Number: 'चरण 4', phase4Title: 'इकोसिस्टम विस्तार', phase4Desc: 'समुदाय-संचालित उद्यमों का शुभारंभ, सदस्यों के लिए निवेश के अवसर, वैश्विक मीटअप और Power Grinders को प्रमुख Solana समुदाय के रूप में स्थापित करना।', phase4Status: 'भविष्य' },
    team: { badge: 'हमारे मूल्य', title1: 'अलग तरह से', title2: 'निर्मित', subtitle: 'हम सिर्फ एक और NFT परियोजना नहीं हैं। हम एलीट व्यक्तियों का एक आंदोलन बना रहे हैं जो Solana इकोसिस्टम में गुणवत्ता, विशिष्टता और वास्तविक मूल्य निर्माण में विश्वास करते हैं।', missionTitle: 'हमारा मिशन', missionDesc: 'Solana इकोसिस्टम में सबसे मूल्यवान और विशेष समुदाय बनाना, जहां हर सदस्य योगदान करता है, सीखता है और एक साथ बढ़ता है।', value1Title: 'विश्वास और सुरक्षा', value1Desc: 'प्रत्येक सदस्य की सावधानीपूर्वक जांच की जाती है। हम विकास मेट्रिक्स से अधिक गुणवत्ता और प्रामाणिकता को प्राथमिकता देते हैं।', value2Title: 'सटीकता और फोकस', value2Desc: 'हम शोर को काटकर कार्रवाई योग्य अंतर्दृष्टि और वास्तविक अवसर प्रदान करते हैं।', value3Title: 'नवाचार', value3Desc: 'हमेशा वक्र से आगे, मुख्यधारा बनने से पहले रुझानों की पहचान करना।', value4Title: 'समुदाय पहले', value4Desc: 'हमारे सदस्य हमारी प्राथमिकता हैं। हर निर्णय सामूहिक लाभ के लिए किया जाता है।', stat1Value: '45', stat1Label: 'एलीट सदस्य', stat2Value: '24/7', stat2Label: 'सक्रिय समुदाय', stat3Value: '100%', stat3Label: 'सत्यापित पहुंच' },
    apply: { title: 'अभी आवेदन करें', subtitle: '45 एलीट सदस्यों के विशेष समुदाय में शामिल हों। केवल सर्वश्रेष्ठ को स्वीकार किया जाता है।', submitted: 'आवेदन जमा किया गया!', submittedDesc: 'आपके आवेदन के लिए धन्यवाद। हम इसकी समीक्षा करेंगे और जल्द ही आपसे संपर्क करेंगे।', redirecting: 'होम पर रीडायरेक्ट किया जा रहा है...', fullName: 'पूरा नाम', email: 'ईमेल पता', twitterHandle: 'Twitter हैंडल', discordUsername: 'Discord उपयोगकर्ता नाम', experience: 'Crypto/NFT अनुभव', whyJoin: 'आप Power Grinders में क्यों शामिल होना चाहते हैं?', contribution: 'आप समुदाय में क्या योगदान कर सकते हैं?', submit: 'आवेदन जमा करें', submitting: 'जमा किया जा रहा है...', required: '* सभी फ़ील्ड आवश्यक हैं। हम सभी आवेदनों की सावधानीपूर्वक समीक्षा करते हैं।', namePlaceholder: 'अपना पूरा नाम दर्ज करें', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: 'crypto और NFTs में अपने अनुभव के बारे में बताएं...', whyPlaceholder: 'क्या आपको इस समुदाय के लिए उपयुक्त बनाता है?', contributionPlaceholder: 'आप Power Grinders में मूल्य कैसे जोड़ेंगे?', totalSpots: 'कुल स्थान', reviewTime: 'समीक्षा समय', eliteCommunity: 'एलीट समुदाय' },
    gallery: { title: 'NFT गैलरी', fullCollection: 'पूर्ण संग्रह', nftsCount: 'NFTs', nftSingular: 'NFT', nftPlural: 'NFTs', of: 'में से', total: 'कुल', searchPlaceholder: 'नाम, विवरण या #ID द्वारा खोजें...', loading: 'NFTs लोड हो रहे हैं...', noResults: 'कोई परिणाम नहीं मिला', noResultsDesc: 'कोई NFT मेल नहीं खाता', clearSearch: 'खोज साफ़ करें', gridLarge: 'बड़ी ग्रिड', gridMedium: 'मध्यम ग्रिड', gridCompact: 'कॉम्पैक्ट ग्रिड' },
    nft: { backToGallery: 'गैलरी पर वापस जाएं', connectedWallets: 'कनेक्टेड वॉलेट', noWallets: 'कोई कनेक्टेड वॉलेट नहीं', viewOnBlockchain: 'ब्लॉकचेन पर देखें', share: 'शेयर करें', imageNotAvailable: 'छवि उपलब्ध नहीं', noDescription: 'कोई विवरण उपलब्ध नहीं', owner: 'मालिक', mintAddress: 'मिंट पता', viewOnSolscan: 'Solscan पर देखें', nftNumber: '#{number} का {total}', statusDiamondHanded: 'हीरे के हाथ', statusListed: 'सूचीबद्ध', statusStaked: 'स्टेक किया गया', statusHodled: 'धारण किया गया', badgeUnique: '1/1 अद्वितीय', badgeVerified: '✓ सत्यापित', badgeOwned: '👑 आपका है' },
    profile: { title: 'मेरी प्रोफ़ाइल', personalInfo: 'व्यक्तिगत जानकारी', username: 'उपयोगकर्ता नाम', email: 'ईमेल', memberSince: 'सदस्य कब से', connectedAccounts: 'कनेक्टेड खाते', discordConnected: 'Discord कनेक्टेड', twitterConnected: 'Twitter कनेक्टेड', telegramConnected: 'Telegram कनेक्टेड', points: 'अंक', totalPoints: 'कुल अंक', pointsComingSoon: 'अंक प्रणाली जल्द आ रही है', recent: 'हाल का', noUsername: 'कोई उपयोगकर्ता नाम नहीं', loading: 'लोड हो रहा है...', noBanner: 'कोई बैनर सेट नहीं', website: 'वेबसाइट', connectedVia: 'के माध्यम से कनेक्ट:', mySolanaWallets: 'मेरे Solana वॉलेट', addWallet: 'वॉलेट जोड़ें', noWallets: 'कोई Solana वॉलेट कनेक्ट नहीं', noWalletsDesc: 'संग्रह से अपने NFT देखने के लिए एक Solana वॉलेट जोड़ें', connectWallet: 'वॉलेट कनेक्ट करें', wallet: 'वॉलेट', copy: 'कॉपी करें', nftsOwned: 'स्वामित्व वाले NFT', noNftsYet: 'आपके पास अभी तक इस संग्रह का कोई NFT नहीं है', youOwn: 'आपके पास', nft: 'NFT', nfts: 'NFT', fromCollection: 'इस संग्रह से', startEarning: 'समुदाय में सक्रिय होकर अंक अर्जित करना शुरू करें', walletsConnected: 'कनेक्टेड वॉलेट', noWalletsConnected: 'कोई वॉलेट कनेक्ट नहीं', walletLinked: 'Solana वॉलेट लिंक किया गया', walletsLinked: 'Solana वॉलेट लिंक किए गए', myNftsCollection: 'संग्रह से मेरे NFT', loadingNfts: 'आपके NFT लोड हो रहे हैं...', noNftsFound: 'कोई NFT नहीं मिला', noNftsDesc: 'आपके पास Power Grinders संग्रह का कोई NFT नहीं है', activityFeed: 'गतिविधि फ़ीड', comingSoon: 'जल्द आ रहा है...', backToGallery: 'गैलरी पर वापस जाएं' },
    leaderboard: { title: 'लीडरबोर्ड', subtitle: 'समुदाय अंक और गतिविधि के आधार पर शीर्ष Power Grinders सदस्य', loading: 'लीडरबोर्ड लोड हो रहा है...', comingSoon: 'लीडरबोर्ड जल्द आ रहा है', comingSoonDesc: 'अंक प्रणाली जल्द ही सक्रिय की जाएगी। समुदाय के साथ जुड़ना शुरू करें!', rank: 'रैंक', user: 'उपयोगकर्ता', nfts: 'NFTs', points: 'अंक' },
    common: { loading: 'लोड हो रहा है...', error: 'त्रुटि', success: 'सफलता', close: 'बंद करें', save: 'सहेजें', cancel: 'रद्द करें' },
    privacy: { title: 'गोपनीयता नीति', lastUpdated: 'अंतिम अपडेट: 15 नवंबर 2025', backToHome: 'होम पर वापस जाएं', section1Title: '1. हम जो जानकारी एकत्र करते हैं', section1Content: 'Power Grinders अपने उपयोगकर्ताओं को बेहतर सेवाएं प्रदान करने के लिए जानकारी एकत्र करता है।', section1List1: 'आप हमें जो जानकारी प्रदान करते हैं', section1List2: 'हमारी सेवाओं के आपके उपयोग से जानकारी', section1List3: 'वॉलेट पते जो आप हमारे प्लेटफॉर्म से कनेक्ट करते हैं', section1List4: 'समुदाय जुड़ाव से गतिविधि डेटा', section2Title: '2. हम जानकारी का उपयोग कैसे करते हैं', section2Content: 'हम एकत्रित जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:', section2List1: 'हमारी सेवाओं को प्रदान करने, बनाए रखने और सुधारने के लिए', section2List2: 'सदस्यता सत्यापित करने और विशेष सामग्री तक पहुंच प्रदान करने के लिए', section2List3: 'समुदाय अंक और जुड़ाव को ट्रैक करने के लिए', section2List4: 'अपडेट और अवसरों के बारे में आपसे संवाद करने के लिए', section3Title: '3. जानकारी साझा करना', section3Content: 'हम निम्नलिखित मामलों को छोड़कर Power Grinders के बाहर की कंपनियों, संगठनों या व्यक्तियों के साथ आपकी व्यक्तिगत जानकारी साझा नहीं करते हैं:', section3List1: 'आपकी सहमति से', section3List2: 'कानूनी कारणों से', section3List3: 'अधिकारों, संपत्ति या सुरक्षा की रक्षा के लिए', section4Title: '4. डेटा सुरक्षा', section4Content: 'हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उपयुक्त सुरक्षा उपाय लागू करते हैं।', section5Title: '5. आपके अधिकार', section5Content: 'आपको निम्नलिखित अधिकार हैं:', section5List1: 'अपने व्यक्तिगत डेटा तक पहुंचें', section5List2: 'अपने डेटा के सुधार का अनुरोध करें', section5List3: 'अपने डेटा को हटाने का अनुरोध करें', section5List4: 'अपने डेटा की प्रोसेसिंग पर आपत्ति करें', section6Title: '6. हमसे संपर्क करें', section6Content: 'यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमारे समुदाय चैनलों के माध्यम से हमसे संपर्क करें।' },
    terms: { title: 'सेवा की शर्तें', lastUpdated: 'अंतिम अपडेट: 15 नवंबर 2025', backToHome: 'होम पर वापस जाएं', section1Title: '1. शर्तों की स्वीकृति', section1Content: 'Power Grinders सेवाओं तक पहुंचने और उपयोग करने से, आप इस समझौते की शर्तों और प्रावधानों से बंधे होने के लिए स्वीकार करते हैं और सहमत होते हैं।', section2Title: '2. सदस्यता', section2Content: 'Power Grinders सदस्यता सीमित और विशेष है:', section2List1: 'अधिकतम 45 सदस्यों तक सीमित', section2List2: 'आवेदन समीक्षा प्रक्रिया आवश्यक', section2List3: 'समुदाय दिशानिर्देशों के उल्लंघन के लिए सदस्यता रद्द की जा सकती है', section2List4: 'NFT खरीद के लिए कोई रिफंड नहीं', section3Title: '3. समुदाय दिशानिर्देश', section3Content: 'एक सदस्य के रूप में, आप सहमत हैं:', section3List1: 'अन्य समुदाय सदस्यों का सम्मान करें', section3List2: 'समुदाय के बाहर गोपनीय alpha या जानकारी साझा न करें', section3List3: 'सद्भावना में भाग लें', section3List4: 'स्पैम, स्कैम या दुर्भावनापूर्ण गतिविधियों में संलग्न न हों', section4Title: '4. बौद्धिक संपदा', section4Content: 'NFT कलाकृति, लोगो और ब्रांडिंग सामग्री सहित सभी सामग्री Power Grinders या इसके लाइसेंसदाताओं की संपत्ति है।', section5Title: '5. NFT स्वामित्व', section5Content: 'जब आप Power Grinders NFT खरीदते हैं:', section5List1: 'आप NFT के मालिक हैं और इसे स्थानांतरित या बेच सकते हैं', section5List2: 'समुदाय की पहुंच NFT स्वामित्व से जुड़ी है', section5List3: 'अपने NFT को बेचने से नए मालिक को समुदाय की पहुंच मिलती है', section5List4: 'आपको व्यक्तिगत उद्देश्यों के लिए कलाकृति का उपयोग करने के लिए एक सीमित लाइसेंस मिलता है', section6Title: '6. अंक प्रणाली', section6Content: 'अंक प्रणाली गेमिफिकेशन और समुदाय जुड़ाव के लिए है। अंकों का कोई मौद्रिक मूल्य नहीं है।', section7Title: '7. अस्वीकरण', section7Content: 'Power Grinders जानकारी और समुदाय की पहुंच प्रदान करता है लेकिन:', section7List1: 'वित्तीय सलाह प्रदान नहीं करता है', section7List2: 'निवेश रिटर्न की कोई गारंटी नहीं देता है', section7List3: 'व्यक्तिगत व्यापारिक निर्णयों के लिए जिम्मेदार नहीं है', section7List4: 'क्रिप्टोकरेंसी ट्रेडिंग में पर्याप्त जोखिम शामिल है', section8Title: '8. दायित्व की सीमा', section8Content: 'Power Grinders आपके द्वारा सेवा के उपयोग या उपयोग करने में असमर्थता के परिणामस्वरूप होने वाले किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक नुकसान के लिए उत्तरदायी नहीं होगा।', section9Title: '9. शर्तों में परिवर्तन', section9Content: 'हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं।', section10Title: '10. संपर्क', section10Content: 'इन सेवा की शर्तों के बारे में प्रश्नों के लिए, कृपया हमारे आधिकारिक समुदाय चैनलों के माध्यम से हमसे संपर्क करें।' },
  },
  ko: {
    nav: { home: '홈', gallery: '갤러리', leaderboard: '리더보드', profile: '내 프로필', apply: '신청', connect: '연결', logout: '로그아웃' },
    home: { tagline: '포스트 아포칼립스 생존자들의 엘리트 커뮤니티', applyNow: '지금 신청하기', totalSupply: '총 공급량', unique: '고유', ogExclusive: '독점', nftCollection: 'NFT 컬렉션', theCollection: '컬렉션', collectionDesc: '황무지에서 생존하는 45개의 독특한 캐릭터', viewFullGallery: '전체 갤러리 보기', benefits: '혜택', whyPowerGrinders: 'Power Grinders를 선택하는 이유', moreThanNFTs: 'NFT 이상 - 엘리트 커뮤니티', exclusiveAlpha: '독점 Alpha', exclusiveAlphaDesc: '시장 통찰력과 거래 기회에 조기 액세스', eliteNetwork: '엘리트 네트워크', eliteNetworkDesc: 'Solana 생태계의 성공적인 트레이더와 연결', protectedAccess: '보호된 액세스', protectedAccessDesc: '45명으로 제한 - 품질 토론 보장', limitedMembers: '45명으로 제한', readyToGrind: 'Grind할 준비가 되셨나요?', readyToGrindDesc: 'Solana OG의 가장 독점적인 커뮤니티에 참여하세요. 신청서는 신중하게 검토됩니다.', community247: '커뮤니티', quickLinks: '빠른 링크', community: '커뮤니티', allRightsReserved: '모든 권리 보유.', communityBadge: '독점 커뮤니티', communityTitle: '엘리트 커뮤니티 가입', communitySubtitle: 'NFT 이상 - 엘리트 트레이더의 프라이빗 네트워크, 독점 alpha 및 다른 곳에서는 찾을 수 없는 기회에 대한 액세스를 잠금 해제하세요.', communityBenefit1: '경험 많은 트레이더의 일일 시장 통찰력 및 거래 신호', communityBenefit2: '공개되기 전 높은 잠재력을 가진 프로젝트에 조기 액세스', communityBenefit3: '실시간 토론 및 알림이 있는 비공개 Discord 채널', communityBenefit4: '성공적인 트레이더와 네트워크를 형성하고 그들의 전략을 배우세요', communityCtaTitle: '엘리트에 가입할 준비가 되셨나요?', communityCtaDesc: '45명으로만 제한됩니다. Solana에서 가장 독점적인 트레이딩 커뮤니티에서 자리를 확보하려면 지금 신청하세요.', privacyPolicy: '개인정보 처리방침', termsOfService: '서비스 약관' },
    faq: { badge: '자주 묻는 질문', title1: '자주 묻는', title2: '질문', subtitle: 'Power Grinders에 대해 알아야 할 모든 것', question1: 'Power Grinders란 무엇인가요?', answer1: 'Power Grinders는 Solana 생태계에서 45명의 엘리트 회원으로 구성된 독점 커뮤니티입니다. 우리는 프리미엄 alpha, 거래 통찰력 및 성공적인 트레이더 네트워크에 대한 액세스와 함께 독특한 NFT 소유권을 결합합니다.', question2: '커뮤니티에 어떻게 가입할 수 있나요?', answer2: '신청서 양식을 통해 지원하세요. 모든 제출물은 신중하게 검토됩니다. 우리는 crypto에 활발하고 토론에 가치를 제공하며 우리의 커뮤니티 가치와 일치하는 열정적인 개인을 찾고 있습니다.', question3: '회원들은 어떤 혜택을 받나요?', answer3: '회원들은 독점 alpha 채널, 일일 시장 통찰력, 조기 프로젝트 액세스, 비공개 Discord 커뮤니티, 성공적인 트레이더와의 네트워킹 기회 및 회원 자격을 나타내는 독특한 NFT 소유권에 액세스할 수 있습니다.', question4: '회원 수가 45명으로 제한되는 이유는 무엇인가요?', answer4: '우리는 양보다 질을 믿습니다. 회원 수를 45명으로 제한하면 고품질 토론, 더 강한 관계 및 모든 회원에게 더 나은 기회를 보장합니다. 이는 커뮤니티의 독점성과 가치를 유지합니다.', question5: '지원하려면 crypto 경험이 필요한가요?', answer5: '예, 우리는 crypto 및 NFT에서 입증된 경험을 가진 회원을 찾고 있습니다. 트레이더, 빌더 또는 활발한 커뮤니티 회원이든 지식과 열정을 입증하는 것이 필수적입니다.', question6: 'Power Grinders를 특별하게 만드는 것은 무엇인가요?', answer6: '일반적인 NFT 프로젝트와 달리 우리는 커뮤니티 가치를 우선시합니다. 모든 회원은 신중하게 심사되어 진지하고 지식이 풍부한 개인들로 둘러싸여 있음을 보장합니다. 작은 규모는 진정한 연결과 실행 가능한 기회를 만듭니다.', stillHaveQuestions: '여전히 질문이 있으신가요?', joinDiscord: 'Discord에 가입하세요' },
    roadmap: { badge: '로드맵', title1: '우리의', title2: '여정', subtitle: '독점 NFT 커뮤니티의 미래를 구축하고 있습니다', phase1Number: '1단계', phase1Title: '기초 및 출시', phase1Desc: '컬렉션 출시, 커뮤니티 구축 및 핵심 채널 구축. alpha 공유 및 회원 온보딩을 위한 인프라 설정.', phase1Status: '완료', phase2Number: '2단계', phase2Title: '커뮤니티 성장', phase2Desc: '최고 프로젝트와의 파트너십 확대, 회원 검증 시스템 구현 및 검증된 트레이더와 함께 독점 alpha 채널 출시.', phase2Status: '진행 중', phase3Number: '3단계', phase3Title: '고급 기능', phase3Desc: '커뮤니티 참여를 위한 포인트 시스템, 독점 IRL 이벤트, 파트너 프로젝트 화이트리스트 우선 액세스 및 향상된 회원 혜택.', phase3Status: '예정', phase4Number: '4단계', phase4Title: '생태계 확장', phase4Desc: '커뮤니티 주도 벤처 출시, 회원을 위한 투자 기회, 글로벌 밋업 및 Power Grinders를 최고의 Solana 커뮤니티로 확립.', phase4Status: '미래' },
    team: { badge: '우리의 가치', title1: '다르게', title2: '구축됨', subtitle: '우리는 단순한 NFT 프로젝트가 아닙니다. 우리는 Solana 생태계에서 품질, 독점성 및 진정한 가치 창출을 믿는 엘리트 개인들의 운동을 구축하고 있습니다.', missionTitle: '우리의 미션', missionDesc: 'Solana 생태계에서 가장 가치 있고 독점적인 커뮤니티를 만들어 모든 회원이 기여하고 배우며 함께 성장합니다.', value1Title: '신뢰와 보안', value1Desc: '모든 회원은 신중하게 심사됩니다. 우리는 성장 지표보다 품질과 진정성을 우선시합니다.', value2Title: '정밀성과 집중', value2Desc: '우리는 소음을 제거하고 실행 가능한 통찰력과 실제 기회를 제공합니다.', value3Title: '혁신', value3Desc: '항상 곡선의 앞서서 주류가 되기 전에 트렌드를 식별합니다.', value4Title: '커뮤니티 우선', value4Desc: '우리 회원들이 우리의 우선순위입니다. 모든 결정은 집단의 이익을 위해 내려집니다.', stat1Value: '45', stat1Label: '엘리트 회원', stat2Value: '24/7', stat2Label: '활성 커뮤니티', stat3Value: '100%', stat3Label: '검증된 액세스' },
    apply: { title: '지금 신청하기', subtitle: '45명의 엘리트 회원으로 구성된 독점 커뮤니티에 참여하세요. 최고만 받아들입니다.', submitted: '신청서가 제출되었습니다!', submittedDesc: '신청해 주셔서 감사합니다. 검토 후 곧 연락드리겠습니다.', redirecting: '홈으로 리디렉션 중...', fullName: '전체 이름', email: '이메일 주소', twitterHandle: 'Twitter 핸들', discordUsername: 'Discord 사용자 이름', experience: 'Crypto/NFT 경험', whyJoin: 'Power Grinders에 가입하고 싶은 이유는 무엇입니까?', contribution: '커뮤니티에 무엇을 기여할 수 있습니까?', submit: '신청서 제출', submitting: '제출 중...', required: '* 모든 필드는 필수입니다. 모든 신청서를 신중하게 검토합니다.', namePlaceholder: '전체 이름 입력', emailPlaceholder: 'your.email@example.com', twitterPlaceholder: '@yourhandle', discordPlaceholder: 'username#0000', experiencePlaceholder: 'crypto 및 NFT 경험에 대해 알려주세요...', whyPlaceholder: '이 커뮤니티에 적합한 이유는 무엇입니까?', contributionPlaceholder: 'Power Grinders에 어떻게 가치를 더할 것인가요?', totalSpots: '총 자리', reviewTime: '검토 시간', eliteCommunity: '엘리트 커뮤니티' },
    gallery: { title: 'NFT 갤러리', fullCollection: '전체 컬렉션', nftsCount: '개 NFT', nftSingular: 'NFT', nftPlural: 'NFT', of: '중', total: '전체', searchPlaceholder: '이름, 설명 또는 #ID로 검색...', loading: 'NFT 로딩 중...', noResults: '결과를 찾을 수 없습니다', noResultsDesc: '일치하는 NFT가 없습니다', clearSearch: '검색 지우기', gridLarge: '큰 그리드', gridMedium: '중간 그리드', gridCompact: '컴팩트 그리드' },
    nft: { backToGallery: '갤러리로 돌아가기', connectedWallets: '연결된 지갑', noWallets: '연결된 지갑 없음', viewOnBlockchain: '블록체인에서 보기', share: '공유', imageNotAvailable: '이미지를 사용할 수 없습니다', noDescription: '설명 없음', owner: '소유자', mintAddress: '민트 주소', viewOnSolscan: 'Solscan에서 보기', nftNumber: '#{number} / {total}', statusDiamondHanded: '다이아몬드 핸드', statusListed: '판매 중', statusStaked: '스테이킹됨', statusHodled: '보유 중', badgeUnique: '1/1 유니크', badgeVerified: '✓ 검증됨', badgeOwned: '👑 당신 소유' },
    profile: { title: '내 프로필', personalInfo: '개인 정보', username: '사용자 이름', email: '이메일', memberSince: '가입일', connectedAccounts: '연결된 계정', discordConnected: 'Discord 연결됨', twitterConnected: 'Twitter 연결됨', telegramConnected: 'Telegram 연결됨', points: '포인트', totalPoints: '총 포인트', pointsComingSoon: '포인트 시스템 출시 예정', recent: '최근', noUsername: '사용자 이름 없음', loading: '로딩 중...', noBanner: '배너 미설정', website: '웹사이트', connectedVia: '연결 방법:', mySolanaWallets: '내 Solana 지갑', addWallet: '지갑 추가', noWallets: 'Solana 지갑 미연결', noWalletsDesc: 'Solana 지갑을 추가하여 컬렉션의 NFT를 확인하세요', connectWallet: '지갑 연결', wallet: '지갑', copy: '복사', nftsOwned: '보유 NFT', noNftsYet: '아직 이 컬렉션의 NFT를 보유하고 있지 않습니다', youOwn: '보유', nft: 'NFT', nfts: 'NFT', fromCollection: '이 컬렉션에서', startEarning: '커뮤니티에서 활동하여 포인트를 획득하세요', walletsConnected: '연결된 지갑', noWalletsConnected: '연결된 지갑 없음', walletLinked: 'Solana 지갑 연결됨', walletsLinked: 'Solana 지갑 연결됨', myNftsCollection: '컬렉션의 내 NFT', loadingNfts: 'NFT 로딩 중...', noNftsFound: 'NFT를 찾을 수 없음', noNftsDesc: 'Power Grinders 컬렉션의 NFT를 보유하고 있지 않습니다', activityFeed: '활동 피드', comingSoon: '출시 예정...', backToGallery: '갤러리로 돌아가기' },
    leaderboard: { title: '리더보드', subtitle: '커뮤니티 포인트와 활동으로 순위가 매겨진 상위 Power Grinders 멤버', loading: '리더보드 로딩 중...', comingSoon: '리더보드 출시 예정', comingSoonDesc: '포인트 시스템이 곧 활성화됩니다. 커뮤니티와 함께 참여를 시작하세요!', rank: '순위', user: '사용자', nfts: 'NFTs', points: '포인트' },
    common: { loading: '로딩 중...', error: '오류', success: '성공', close: '닫기', save: '저장', cancel: '취소' },
    privacy: { title: '개인정보 처리방침', lastUpdated: '최종 업데이트: 2025년 11월 15일', backToHome: '홈으로 돌아가기', section1Title: '1. 수집하는 정보', section1Content: 'Power Grinders는 사용자에게 더 나은 서비스를 제공하기 위해 정보를 수집합니다.', section1List1: '귀하가 제공하는 정보', section1List2: '서비스 사용 정보', section1List3: '플랫폼에 연결한 지갑 주소', section1List4: '커뮤니티 참여 활동 데이터', section2Title: '2. 정보 사용 방법', section2Content: '수집한 정보를 다음 목적으로 사용합니다:', section2List1: '서비스 제공, 유지 및 개선', section2List2: '회원 자격 확인 및 독점 콘텐츠 액세스 부여', section2List3: '커뮤니티 포인트 및 참여도 추적', section2List4: '업데이트 및 기회에 대해 의사소통', section3Title: '3. 정보 공유', section3Content: '다음의 경우를 제외하고 Power Grinders 외부의 회사, 조직 또는 개인과 개인정보를 공유하지 않습니다:', section3List1: '귀하의 동의가 있는 경우', section3List2: '법적 이유', section3List3: '권리, 재산 또는 안전 보호', section4Title: '4. 데이터 보안', section4Content: '귀하의 개인정보를 보호하기 위해 적절한 보안 조치를 시행합니다.', section5Title: '5. 귀하의 권리', section5Content: '귀하는 다음과 같은 권리가 있습니다:', section5List1: '개인 데이터 액세스', section5List2: '데이터 수정 요청', section5List3: '데이터 삭제 요청', section5List4: '데이터 처리 반대', section6Title: '6. 문의하기', section6Content: '이 개인정보 처리방침에 대해 질문이 있으시면 커뮤니티 채널을 통해 문의하십시오.' },
    terms: { title: '서비스 약관', lastUpdated: '최종 업데이트: 2025년 11월 15일', backToHome: '홈으로 돌아가기', section1Title: '1. 약관 동의', section1Content: 'Power Grinders 서비스에 액세스하고 사용함으로써 귀하는 본 계약의 조건 및 규정을 준수하는 데 동의합니다.', section2Title: '2. 회원 자격', section2Content: 'Power Grinders 회원 자격은 제한적이고 독점적입니다:', section2List1: '최대 45명의 회원으로 제한', section2List2: '신청 검토 프로세스 필요', section2List3: '커뮤니티 가이드라인 위반 시 회원 자격 취소 가능', section2List4: 'NFT 구매에 대한 환불 없음', section3Title: '3. 커뮤니티 가이드라인', section3Content: '회원으로서 귀하는 다음에 동의합니다:', section3List1: '다른 커뮤니티 회원 존중', section3List2: '커뮤니티 외부에서 기밀 alpha 또는 정보 공유 금지', section3List3: '성실하게 참여', section3List4: '스팸, 사기 또는 악의적인 활동 금지', section4Title: '4. 지적 재산', section4Content: 'NFT 아트워크, 로고 및 브랜드 자료를 포함한 모든 콘텐츠는 Power Grinders 또는 그 라이선스 제공자의 재산입니다.', section5Title: '5. NFT 소유권', section5Content: 'Power Grinders NFT를 구매하면:', section5List1: 'NFT를 소유하고 양도하거나 판매할 수 있습니다', section5List2: '커뮤니티 액세스는 NFT 소유권과 연결됩니다', section5List3: 'NFT를 판매하면 커뮤니티 액세스가 새 소유자에게 이전됩니다', section5List4: '개인적인 목적으로 아트워크를 사용할 수 있는 제한적 라이선스를 받습니다', section6Title: '6. 포인트 시스템', section6Content: '포인트 시스템은 게임화 및 커뮤니티 참여를 위한 것입니다. 포인트는 금전적 가치가 없습니다.', section7Title: '7. 면책 조항', section7Content: 'Power Grinders는 정보와 커뮤니티 액세스를 제공하지만:', section7List1: '재무 조언을 제공하지 않습니다', section7List2: '투자 수익을 보장하지 않습니다', section7List3: '개별 거래 결정에 대해 책임지지 않습니다', section7List4: '암호화폐 거래는 상당한 위험을 수반합니다', section8Title: '8. 책임 제한', section8Content: 'Power Grinders는 서비스 사용 또는 사용 불가능으로 인한 간접적, 우발적, 특별, 결과적 또는 징벌적 손해에 대해 책임지지 않습니다.', section9Title: '9. 약관 변경', section9Content: '당사는 언제든지 이 약관을 수정할 권리를 보유합니다.', section10Title: '10. 문의', section10Content: '이 서비스 약관에 대한 질문은 공식 커뮤니티 채널을 통해 문의하십시오.' },
  },
  it: {
    nav: {
      home: 'Home',
      gallery: 'Galleria',
      leaderboard: 'Classifica',
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
      owner: 'Proprietario',
      mintAddress: 'Indirizzo Mint',
      viewOnSolscan: 'Visualizza su Solscan',
      nftNumber: '#{number} di {total}',
      statusDiamondHanded: 'MANI DI DIAMANTE',
      statusListed: 'IN VENDITA',
      statusStaked: 'IN STAKING',
      statusHodled: 'HODLATO',
      badgeUnique: '1/1 UNICO',
      badgeVerified: '✓ VERIFICATO',
      badgeOwned: '👑 TUO',
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
      loading: 'Caricamento...',
      noBanner: 'Nessun banner impostato',
      website: 'Sito web',
      connectedVia: 'Collegato tramite:',
      mySolanaWallets: 'I Miei Wallet Solana',
      addWallet: 'Aggiungi Wallet',
      noWallets: 'Nessun wallet Solana collegato',
      noWalletsDesc: 'Aggiungi un wallet Solana per vedere i tuoi NFT della collezione',
      connectWallet: 'Collega Wallet',
      wallet: 'Wallet',
      copy: 'Copia',
      nftsOwned: 'NFT Posseduti',
      noNftsYet: 'Non possiedi ancora NFT di questa collezione',
      youOwn: 'Possiedi',
      nft: 'NFT',
      nfts: 'NFT',
      fromCollection: 'di questa collezione',
      startEarning: 'Inizia a guadagnare punti essendo attivo nella comunità',
      walletsConnected: 'Wallet Collegati',
      noWalletsConnected: 'Nessun wallet collegato',
      walletLinked: 'wallet Solana collegato',
      walletsLinked: 'wallet Solana collegati',
      myNftsCollection: 'I Miei NFT della Collezione',
      loadingNfts: 'Caricamento dei tuoi NFT...',
      noNftsFound: 'Nessun NFT trovato',
      noNftsDesc: 'Non possiedi NFT della collezione Power Grinders',
      activityFeed: 'Feed Attività',
      comingSoon: 'Prossimamente...',
      backToGallery: 'Torna alla Galleria',
    },
    leaderboard: {
      title: 'Classifica',
      subtitle: 'I migliori membri di Power Grinders classificati per punti e attività della comunità',
      loading: 'Caricamento classifica...',
      comingSoon: 'Classifica in Arrivo',
      comingSoonDesc: 'Il sistema punti sarà attivato presto. Inizia a interagire con la comunità!',
      rank: 'Posizione',
      user: 'Utente',
      nfts: 'NFTs',
      points: 'Punti',
    },
    common: {
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo',
      close: 'Chiudi',
      save: 'Salva',
      cancel: 'Annulla',
    },
    privacy: { title: 'Informativa sulla Privacy', lastUpdated: 'Ultimo aggiornamento: 15 novembre 2025', backToHome: 'Torna alla Home', section1Title: '1. Informazioni che Raccogliamo', section1Content: 'Power Grinders raccoglie informazioni per fornire servizi migliori ai nostri utenti.', section1List1: 'Informazioni che ci fornisci', section1List2: 'Informazioni dall\'uso dei nostri servizi', section1List3: 'Indirizzi wallet che connetti alla nostra piattaforma', section1List4: 'Dati di attività dal coinvolgimento comunitario', section2Title: '2. Come Usiamo le Informazioni', section2Content: 'Utilizziamo le informazioni raccolte per i seguenti scopi:', section2List1: 'Fornire, mantenere e migliorare i nostri servizi', section2List2: 'Verificare l\'iscrizione e concedere l\'accesso a contenuti esclusivi', section2List3: 'Tracciare punti e coinvolgimento della comunità', section2List4: 'Comunicare con te riguardo aggiornamenti e opportunità', section3Title: '3. Condivisione delle Informazioni', section3Content: 'Non condividiamo le tue informazioni personali con aziende, organizzazioni o individui al di fuori di Power Grinders tranne nei seguenti casi:', section3List1: 'Con il tuo consenso', section3List2: 'Per motivi legali', section3List3: 'Per proteggere diritti, proprietà o sicurezza', section4Title: '4. Sicurezza dei Dati', section4Content: 'Implementiamo misure di sicurezza appropriate per proteggere le tue informazioni personali.', section5Title: '5. I Tuoi Diritti', section5Content: 'Hai il diritto di:', section5List1: 'Accedere ai tuoi dati personali', section5List2: 'Richiedere la correzione dei tuoi dati', section5List3: 'Richiedere la cancellazione dei tuoi dati', section5List4: 'Opporti al trattamento dei tuoi dati', section6Title: '6. Contattaci', section6Content: 'Se hai domande su questa Informativa sulla Privacy, contattaci attraverso i nostri canali comunitari.' },
    terms: { title: 'Termini di Servizio', lastUpdated: 'Ultimo aggiornamento: 15 novembre 2025', backToHome: 'Torna alla Home', section1Title: '1. Accettazione dei Termini', section1Content: 'Accedendo e utilizzando i servizi di Power Grinders, accetti e acconsenti ad essere vincolato dai termini e dalle disposizioni di questo accordo.', section2Title: '2. Iscrizione', section2Content: 'L\'iscrizione a Power Grinders è limitata ed esclusiva:', section2List1: 'Limitata a un massimo di 45 membri', section2List2: 'Processo di revisione della domanda richiesto', section2List3: 'L\'iscrizione può essere revocata per violazioni delle linee guida comunitarie', section2List4: 'Nessun rimborso per acquisti NFT', section3Title: '3. Linee Guida Comunitarie', section3Content: 'Come membro, accetti di:', section3List1: 'Rispettare gli altri membri della comunità', section3List2: 'Non condividere alpha confidenziali o informazioni al di fuori della comunità', section3List3: 'Partecipare in buona fede', section3List4: 'Non impegnarti in spam, truffe o attività malevole', section4Title: '4. Proprietà Intellettuale', section4Content: 'Tutti i contenuti, inclusi artwork NFT, loghi e materiali di branding, sono proprietà di Power Grinders o dei suoi licenzianti.', section5Title: '5. Proprietà NFT', section5Content: 'Quando acquisti un NFT Power Grinders:', section5List1: 'Possiedi l\'NFT e puoi trasferirlo o venderlo', section5List2: 'L\'accesso alla comunità è legato alla proprietà dell\'NFT', section5List3: 'Vendere il tuo NFT trasferisce l\'accesso alla comunità al nuovo proprietario', section5List4: 'Ricevi una licenza limitata per utilizzare l\'artwork per scopi personali', section6Title: '6. Sistema Punti', section6Content: 'Il sistema punti è per la gamification e il coinvolgimento comunitario. I punti non hanno valore monetario.', section7Title: '7. Disclaimer', section7Content: 'Power Grinders fornisce informazioni e accesso alla comunità ma:', section7List1: 'Non fornisce consulenza finanziaria', section7List2: 'Non garantisce ritorni sugli investimenti', section7List3: 'Non è responsabile delle decisioni di trading individuali', section7List4: 'Il trading di criptovalute comporta rischi sostanziali', section8Title: '8. Limitazione di Responsabilità', section8Content: 'Power Grinders non sarà responsabile per danni indiretti, incidentali, speciali, consequenziali o punitivi derivanti dal tuo uso o impossibilità di utilizzare il servizio.', section9Title: '9. Modifiche ai Termini', section9Content: 'Ci riserviamo il diritto di modificare questi termini in qualsiasi momento.', section10Title: '10. Contatto', section10Content: 'Per domande su questi Termini di Servizio, contattaci attraverso i nostri canali comunitari ufficiali.' },
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      gallery: 'Galeri',
      leaderboard: 'Lider Tablosu',
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
      owner: 'Sahip',
      mintAddress: 'Mint Adresi',
      viewOnSolscan: 'Solscan\'de Görüntüle',
      nftNumber: '#{number} / {total}',
      statusDiamondHanded: 'ELMAS ELLER',
      statusListed: 'LİSTELENDİ',
      statusStaked: 'STAKE EDİLDİ',
      statusHodled: 'HODL',
      badgeUnique: '1/1 BENZERSİZ',
      badgeVerified: '✓ DOĞRULANMİŞ',
      badgeOwned: '👑 SENİN',
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
      loading: 'Yükleniyor...',
      noBanner: 'Banner ayarlanmadı',
      website: 'Web sitesi',
      connectedVia: 'Bağlantı yolu:',
      mySolanaWallets: 'Solana Cüzdanlarım',
      addWallet: 'Cüzdan Ekle',
      noWallets: 'Bağlı Solana cüzdanı yok',
      noWalletsDesc: 'Koleksiyondan NFT\'lerinizi görmek için bir Solana cüzdanı ekleyin',
      connectWallet: 'Cüzdan Bağla',
      wallet: 'Cüzdan',
      copy: 'Kopyala',
      nftsOwned: 'Sahip Olunan NFT\'ler',
      noNftsYet: 'Henüz bu koleksiyondan NFT\'niz yok',
      youOwn: 'Sahibisiniz',
      nft: 'NFT',
      nfts: 'NFT',
      fromCollection: 'bu koleksiyondan',
      startEarning: 'Toplulukta aktif olarak puan kazanmaya başlayın',
      walletsConnected: 'Bağlı Cüzdanlar',
      noWalletsConnected: 'Bağlı cüzdan yok',
      walletLinked: 'Solana cüzdanı bağlı',
      walletsLinked: 'Solana cüzdanları bağlı',
      myNftsCollection: 'Koleksiyondan NFT\'lerim',
      loadingNfts: 'NFT\'leriniz yükleniyor...',
      noNftsFound: 'NFT bulunamadı',
      noNftsDesc: 'Power Grinders koleksiyonundan NFT\'niz yok',
      activityFeed: 'Aktivite Akışı',
      comingSoon: 'Yakında...',
      backToGallery: 'Galeriye Dön',
    },
    leaderboard: {
      title: 'Lider Tablosu',
      subtitle: 'Topluluk puanları ve aktiviteye göre sıralanan en iyi Power Grinders üyeleri',
      loading: 'Lider tablosu yükleniyor...',
      comingSoon: 'Lider Tablosu Yakında',
      comingSoonDesc: 'Puan sistemi yakında aktif olacak. Toplulukla etkileşime geçmeye başla!',
      rank: 'Sıra',
      user: 'Kullanıcı',
      nfts: 'NFT\'ler',
      points: 'Puanlar',
    },
    common: {
      loading: 'Yükleniyor...',
      error: 'Hata',
      success: 'Başarılı',
      close: 'Kapat',
      save: 'Kaydet',
      cancel: 'İptal',
    },
    privacy: { title: 'Gizlilik Politikası', lastUpdated: 'Son Güncelleme: 15 Kasım 2025', backToHome: 'Ana Sayfaya Dön', section1Title: '1. Topladığımız Bilgiler', section1Content: 'Power Grinders, kullanıcılarımıza daha iyi hizmetler sunmak için bilgi toplar.', section1List1: 'Bize sağladığınız bilgiler', section1List2: 'Hizmetlerimizi kullanımınızdan elde edilen bilgiler', section1List3: 'Platformumuza bağladığınız cüzdan adresleri', section1List4: 'Topluluk katılımından elde edilen aktivite verileri', section2Title: '2. Bilgileri Nasıl Kullanırız', section2Content: 'Topladığımız bilgileri aşağıdaki amaçlar için kullanırız:', section2List1: 'Hizmetlerimizi sağlamak, sürdürmek ve geliştirmek', section2List2: 'Üyeliği doğrulamak ve özel içeriğe erişim sağlamak', section2List3: 'Topluluk puanlarını ve katılımı izlemek', section2List4: 'Güncellemeler ve fırsatlar hakkında sizinle iletişim kurmak', section3Title: '3. Bilgi Paylaşımı', section3Content: 'Aşağıdaki durumlar dışında kişisel bilgilerinizi Power Grinders dışındaki şirketler, kuruluşlar veya bireylerle paylaşmayız:', section3List1: 'Onayınız ile', section3List2: 'Yasal nedenlerle', section3List3: 'Hakları, mülkiyeti veya güvenliği korumak için', section4Title: '4. Veri Güvenliği', section4Content: 'Kişisel bilgilerinizi korumak için uygun güvenlik önlemleri uyguluyoruz.', section5Title: '5. Haklarınız', section5Content: 'Aşağıdaki haklara sahipsiniz:', section5List1: 'Kişisel verilerinize erişim', section5List2: 'Verilerinizin düzeltilmesini talep etme', section5List3: 'Verilerinizin silinmesini talep etme', section5List4: 'Verilerinizin işlenmesine itiraz etme', section6Title: '6. Bize Ulaşın', section6Content: 'Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen topluluk kanallarımız aracılığıyla bizimle iletişime geçin.' },
    terms: { title: 'Hizmet Şartları', lastUpdated: 'Son Güncelleme: 15 Kasım 2025', backToHome: 'Ana Sayfaya Dön', section1Title: '1. Şartların Kabulü', section1Content: 'Power Grinders hizmetlerine erişerek ve kullanarak, bu anlaşmanın şartlarına ve hükümlerine bağlı kalmayı kabul ediyorsunuz.', section2Title: '2. Üyelik', section2Content: 'Power Grinders üyeliği sınırlı ve özeldir:', section2List1: 'Maksimum 45 üye ile sınırlı', section2List2: 'Başvuru inceleme süreci gerekli', section2List3: 'Topluluk kurallarının ihlali durumunda üyelik iptal edilebilir', section2List4: 'NFT satın alımları için iade yok', section3Title: '3. Topluluk Kuralları', section3Content: 'Bir üye olarak, aşağıdakileri kabul ediyorsunuz:', section3List1: 'Diğer topluluk üyelerine saygı göstermek', section3List2: 'Topluluk dışında gizli alpha veya bilgi paylaşmamak', section3List3: 'İyi niyetle katılmak', section3List4: 'Spam, dolandırıcılık veya kötü niyetli faaliyetlerde bulunmamak', section4Title: '4. Fikri Mülkiyet', section4Content: 'NFT sanat eserleri, logolar ve marka malzemeleri dahil tüm içerik Power Grinders veya lisans verenlerinin mülkiyetindedir.', section5Title: '5. NFT Sahipliği', section5Content: 'Bir Power Grinders NFT satın aldığınızda:', section5List1: 'NFT\'ye sahip olursunuz ve onu transfer edebilir veya satabilirsiniz', section5List2: 'Topluluk erişimi NFT sahipliğine bağlıdır', section5List3: 'NFT\'nizi satmak, topluluk erişimini yeni sahibine aktarır', section5List4: 'Sanat eserini kişisel amaçlar için kullanmak üzere sınırlı bir lisans alırsınız', section6Title: '6. Puan Sistemi', section6Content: 'Puan sistemi oyunlaştırma ve topluluk katılımı içindir. Puanların parasal değeri yoktur.', section7Title: '7. Sorumluluk Reddi', section7Content: 'Power Grinders bilgi ve topluluk erişimi sağlar ancak:', section7List1: 'Finansal tavsiye sağlamaz', section7List2: 'Yatırım getirisi garantisi vermez', section7List3: 'Bireysel işlem kararlarından sorumlu değildir', section7List4: 'Kripto para ticareti önemli risk içerir', section8Title: '8. Sorumluluk Sınırlaması', section8Content: 'Power Grinders, hizmeti kullanımınız veya kullanamamanız sonucunda ortaya çıkan dolaylı, tesadüfi, özel, sonuçsal veya cezai zararlardan sorumlu olmayacaktır.', section9Title: '9. Şartlarda Değişiklikler', section9Content: 'Bu şartları herhangi bir zamanda değiştirme hakkını saklı tutarız.', section10Title: '10. İletişim', section10Content: 'Bu Hizmet Şartları hakkında sorularınız için, lütfen resmi topluluk kanallarımız aracılığıyla bizimle iletişime geçin.' },
  },
  pt: {
    nav: {
      home: 'Início',
      gallery: 'Galeria',
      leaderboard: 'Classificação',
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
      owner: 'Proprietário',
      mintAddress: 'Endereço Mint',
      viewOnSolscan: 'Ver no Solscan',
      nftNumber: '#{number} de {total}',
      statusDiamondHanded: 'MÃOS DE DIAMANTE',
      statusListed: 'À VENDA',
      statusStaked: 'EM STAKING',
      statusHodled: 'HODLADO',
      badgeUnique: '1/1 ÚNICO',
      badgeVerified: '✓ VERIFICADO',
      badgeOwned: '👑 SEU',
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
      loading: 'Carregando...',
      noBanner: 'Sem banner configurado',
      website: 'Website',
      connectedVia: 'Conectado via:',
      mySolanaWallets: 'Minhas Carteiras Solana',
      addWallet: 'Adicionar Carteira',
      noWallets: 'Nenhuma carteira Solana conectada',
      noWalletsDesc: 'Conecte suas carteiras Solana para rastrear sua propriedade de NFT e atividade na blockchain.',
      connectWallet: 'Conectar Carteira',
      wallet: 'Carteira',
      copy: 'Copiar',
      nftsOwned: 'NFTs Possuídos',
      noNftsYet: 'Nenhum NFT ainda',
      youOwn: 'Você possui',
      nft: 'NFT',
      nfts: 'NFTs',
      fromCollection: 'da coleção',
      startEarning: 'Comece a ganhar pontos se envolvendo com nossa comunidade!',
      walletsConnected: 'Carteiras Conectadas',
      noWalletsConnected: 'Nenhuma carteira conectada',
      walletLinked: 'carteira vinculada',
      walletsLinked: 'carteiras vinculadas',
      myNftsCollection: 'Minha Coleção de NFTs',
      loadingNfts: 'Carregando NFTs...',
      noNftsFound: 'Nenhum NFT encontrado',
      noNftsDesc: 'Você ainda não possui nenhum NFT da coleção Power Grinders.',
      activityFeed: 'Feed de Atividades',
      comingSoon: 'Em Breve',
      backToGallery: 'Voltar para Galeria',
    },
    leaderboard: {
      title: 'Tabela de Classificação',
      subtitle: 'Principais membros do Power Grinders classificados por pontos e atividade na comunidade',
      loading: 'Carregando tabela de classificação...',
      comingSoon: 'Tabela de Classificação Em Breve',
      comingSoonDesc: 'O sistema de pontos será ativado em breve. Comece a interagir com a comunidade!',
      rank: 'Posição',
      user: 'Usuário',
      nfts: 'NFTs',
      points: 'Pontos',
    },
    common: {
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
      close: 'Fechar',
      save: 'Salvar',
      cancel: 'Cancelar',
    },
    privacy: { title: 'Política de Privacidade', lastUpdated: 'Última atualização: 15 de novembro de 2025', backToHome: 'Voltar para Home', section1Title: '1. Informações que Coletamos', section1Content: 'Power Grinders coleta informações para fornecer melhores serviços aos nossos usuários.', section1List1: 'Informações que você nos fornece', section1List2: 'Informações do uso de nossos serviços', section1List3: 'Endereços de carteira que você conecta à nossa plataforma', section1List4: 'Dados de atividade do engajamento comunitário', section2Title: '2. Como Usamos as Informações', section2Content: 'Usamos as informações que coletamos para os seguintes propósitos:', section2List1: 'Fornecer, manter e melhorar nossos serviços', section2List2: 'Verificar associação e conceder acesso a conteúdo exclusivo', section2List3: 'Rastrear pontos e engajamento da comunidade', section2List4: 'Comunicar com você sobre atualizações e oportunidades', section3Title: '3. Compartilhamento de Informações', section3Content: 'Não compartilhamos suas informações pessoais com empresas, organizações ou indivíduos fora da Power Grinders, exceto nos seguintes casos:', section3List1: 'Com seu consentimento', section3List2: 'Por razões legais', section3List3: 'Para proteger direitos, propriedade ou segurança', section4Title: '4. Segurança de Dados', section4Content: 'Implementamos medidas de segurança apropriadas para proteger suas informações pessoais.', section5Title: '5. Seus Direitos', section5Content: 'Você tem o direito de:', section5List1: 'Acessar seus dados pessoais', section5List2: 'Solicitar correção de seus dados', section5List3: 'Solicitar exclusão de seus dados', section5List4: 'Opor-se ao processamento de seus dados', section6Title: '6. Entre em Contato', section6Content: 'Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através de nossos canais comunitários.' },
    terms: { title: 'Termos de Serviço', lastUpdated: 'Última atualização: 15 de novembro de 2025', backToHome: 'Voltar para Home', section1Title: '1. Aceitação dos Termos', section1Content: 'Ao acessar e usar os serviços da Power Grinders, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.', section2Title: '2. Associação', section2Content: 'A associação à Power Grinders é limitada e exclusiva:', section2List1: 'Limitada a 45 membros no máximo', section2List2: 'Processo de revisão de aplicação necessário', section2List3: 'A associação pode ser revogada por violações das diretrizes comunitárias', section2List4: 'Sem reembolsos para compras de NFT', section3Title: '3. Diretrizes Comunitárias', section3Content: 'Como membro, você concorda em:', section3List1: 'Respeitar outros membros da comunidade', section3List2: 'Não compartilhar alpha confidencial ou informações fora da comunidade', section3List3: 'Participar de boa fé', section3List4: 'Não se envolver em spam, golpes ou atividades maliciosas', section4Title: '4. Propriedade Intelectual', section4Content: 'Todo o conteúdo, incluindo arte NFT, logotipos e materiais de marca, são propriedade da Power Grinders ou de seus licenciadores.', section5Title: '5. Propriedade de NFT', section5Content: 'Quando você compra um NFT da Power Grinders:', section5List1: 'Você possui o NFT e pode transferi-lo ou vendê-lo', section5List2: 'O acesso à comunidade está vinculado à propriedade do NFT', section5List3: 'Vender seu NFT transfere o acesso à comunidade para o novo proprietário', section5List4: 'Você recebe uma licença limitada para usar a arte para fins pessoais', section6Title: '6. Sistema de Pontos', section6Content: 'O sistema de pontos é para gamificação e engajamento comunitário. Os pontos não têm valor monetário.', section7Title: '7. Isenção de Responsabilidade', section7Content: 'Power Grinders fornece informações e acesso à comunidade, mas:', section7List1: 'Não fornece consultoria financeira', section7List2: 'Não garante retornos de investimento', section7List3: 'Não é responsável por decisões de negociação individuais', section7List4: 'A negociação de criptomoedas envolve riscos substanciais', section8Title: '8. Limitação de Responsabilidade', section8Content: 'Power Grinders não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do seu uso ou incapacidade de usar o serviço.', section9Title: '9. Alterações nos Termos', section9Content: 'Reservamo-nos o direito de modificar estes termos a qualquer momento.', section10Title: '10. Contato', section10Content: 'Para perguntas sobre estes Termos de Serviço, entre em contato conosco através de nossos canais comunitários oficiais.' },
  },
};

export function getTranslation(lang: Language): TranslationKeys {
  return translations[lang] || translations.en;
}
