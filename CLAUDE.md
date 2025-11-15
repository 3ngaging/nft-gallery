# CLAUDE.md - Guía de Desarrollo para NFT Gallery

## 📋 Visión del Proyecto

**NFT Gallery** es una aplicación web para mostrar una colección de +100 NFTs con sistema de puntos basado en actividad comunitaria en Discord, Telegram y Twitter.

---

## 🎯 Objetivos Principales

1. **Landing Page atractiva** con imagen hero 1920x1080
2. **Galería visual** de los NFTs de la colección
3. **Páginas de detalle** de cada NFT (1000x1000px) con info completa
4. **Sistema de autenticación social** vía Matrix.io (Discord, Telegram, Twitter)
5. **Sistema de puntos** trackeable mediante bots de comunidad
6. **Tracking de wallets** conectadas a cada NFT

---

## 🏗️ Arquitectura Tecnológica

### **Frontend Web**
- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion
- **UI Icons**: Lucide React

### **Backend & Base de Datos**
- **BaaS**: Supabase
  - PostgreSQL (base de datos)
  - Storage (imágenes de NFTs)
  - Real-time subscriptions
  - Row Level Security (RLS)

### **Autenticación**
- **Proveedor**: Dynamic Labs (Matrix.io)
- **Métodos**: Discord, Telegram, Twitter
- **Sin wallet**: Evitar fricción y percepción de rug

### **Sistema de Puntos (Futuro)**
- **Bots externos** (Discord, Telegram, Twitter)
- **Webhooks** hacia Supabase
- **API Routes** en Next.js para recibir eventos

---

## 📁 Estructura del Proyecto

```
nft-gallery/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landing page
│   │   ├── gallery/
│   │   │   └── page.tsx            # Galería de NFTs
│   │   ├── nft/
│   │   │   └── [id]/
│   │   │       └── page.tsx        # Detalle de NFT
│   │   ├── profile/
│   │   │   └── page.tsx            # Perfil de usuario
│   │   ├── leaderboard/
│   │   │   └── page.tsx            # Ranking de puntos
│   │   └── api/
│   │       ├── webhooks/
│   │       │   ├── discord/route.ts
│   │       │   ├── telegram/route.ts
│   │       │   └── twitter/route.ts
│   │       └── points/route.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── NFTCard.tsx
│   │   ├── WalletList.tsx
│   │   └── PointsDisplay.tsx
│   └── lib/
│       ├── supabase.ts             # Cliente Supabase
│       ├── dynamic.tsx             # Config Dynamic Labs
│       └── points.ts               # Lógica de puntos
├── public/
│   ├── nfts/                       # Imágenes 1000x1000
│   ├── thumbnails/                 # Miniaturas 400x400
│   └── hero.jpg                    # Hero 1920x1080
├── CLAUDE.md                       # Este archivo
├── TODO.md                         # Lista de tareas
└── .env.local                      # Variables de entorno
```

---

## 🗄️ Esquema de Base de Datos (Supabase)

### **Tabla: `nfts`**
```sql
CREATE TABLE nfts (
  id BIGSERIAL PRIMARY KEY,
  token_id INTEGER UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  traits JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### **Tabla: `users`**
```sql
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  matrix_id TEXT UNIQUE NOT NULL,  -- ID de Dynamic/Matrix
  username TEXT,
  email TEXT,
  discord_id TEXT,
  discord_username TEXT,
  telegram_id TEXT,
  telegram_username TEXT,
  twitter_id TEXT,
  twitter_username TEXT,
  total_points INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_activity TIMESTAMPTZ DEFAULT NOW()
);
```

### **Tabla: `nft_wallets`**
```sql
CREATE TABLE nft_wallets (
  id BIGSERIAL PRIMARY KEY,
  nft_id BIGINT REFERENCES nfts(id),
  wallet_address TEXT NOT NULL,
  user_id BIGINT REFERENCES users(id),
  connected_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(nft_id, wallet_address)
);
```

### **Tabla: `point_events`**
```sql
CREATE TABLE point_events (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users(id),
  event_type TEXT NOT NULL,  -- 'message', 'reaction', 'retweet', etc.
  platform TEXT NOT NULL,     -- 'discord', 'telegram', 'twitter'
  points INTEGER NOT NULL,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### **Tabla: `point_rules`**
```sql
CREATE TABLE point_rules (
  id BIGSERIAL PRIMARY KEY,
  event_type TEXT NOT NULL,
  platform TEXT NOT NULL,
  points INTEGER NOT NULL,
  description TEXT,
  active BOOLEAN DEFAULT true,
  UNIQUE(event_type, platform)
);
```

---

## 🎨 Best Practices

### **Código**
- ✅ Usar TypeScript estricto (`strict: true`)
- ✅ Componentes funcionales con hooks
- ✅ `'use client'` solo cuando sea necesario (estado, eventos, hooks)
- ✅ Server Components por defecto para mejor performance
- ✅ Nombres descriptivos en español para variables de negocio
- ✅ Comentarios en español para lógica compleja
- ✅ Evitar `any`, usar tipos específicos

### **Estilos**
- ✅ Tailwind CSS con clases utilitarias
- ✅ Usar variables CSS para colores de marca
- ✅ Responsive-first (mobile → desktop)
- ✅ Dark mode por defecto
- ✅ Animaciones sutiles con Framer Motion

### **Performance**
- ✅ Optimizar imágenes con Next.js Image
- ✅ Lazy loading para galería
- ✅ Pagination o infinite scroll para grandes listas
- ✅ Cachear datos de Supabase cuando sea posible
- ✅ Usar thumbnails en galería, full size en detalle

### **Seguridad**
- ✅ Variables de entorno para credenciales
- ✅ Row Level Security (RLS) en Supabase
- ✅ Validar webhooks con signatures
- ✅ Rate limiting en API routes
- ✅ Sanitizar inputs de usuario

### **Git**
- ✅ Commits descriptivos en inglés
- ✅ Branches por feature (`feature/gallery`, `feature/points-system`)
- ✅ NO commitear `.env.local`
- ✅ Usar `.gitignore` correctamente

---

## 🔐 Variables de Entorno

Crear archivo `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...

# Dynamic Labs (Matrix.io)
NEXT_PUBLIC_DYNAMIC_ENV_ID=xxx

# API Keys para Webhooks (generar secretos)
DISCORD_WEBHOOK_SECRET=xxx
TELEGRAM_WEBHOOK_SECRET=xxx
TWITTER_WEBHOOK_SECRET=xxx

# URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🎯 Sistema de Puntos - Diseño

### **Eventos que dan puntos:**

| Plataforma | Acción | Puntos |
|------------|--------|--------|
| Discord | Mensaje en chat | 5 |
| Discord | Reacción | 2 |
| Discord | Participar en voz | 10/hora |
| Discord | Invitar usuario | 50 |
| Telegram | Mensaje | 5 |
| Telegram | Compartir contenido | 15 |
| Twitter | Tweet mencionando | 20 |
| Twitter | Retweet | 10 |
| Twitter | Like | 3 |

### **Multiplicadores:**
- NFT holder: x2
- Early supporter: x1.5
- Streak diario: +10% por día

### **Flujo de Puntos:**
1. Usuario realiza acción en plataforma
2. Bot detecta evento
3. Bot envía webhook a `/api/webhooks/[platform]`
4. API valida webhook y calcula puntos
5. Supabase actualiza `users.total_points` y crea `point_events`
6. Frontend actualiza en tiempo real (Supabase subscriptions)

---

## 🚀 Fases de Desarrollo

### **Fase 1: MVP Básico** ✅ (EN PROGRESO)
- Landing page
- Galería de NFTs
- Páginas de detalle
- Autenticación con Dynamic

### **Fase 2: Sistema de Usuarios**
- Perfil de usuario
- Conectar cuentas sociales
- Mostrar puntos básicos

### **Fase 3: Sistema de Puntos**
- Bots de Discord/Telegram/Twitter
- Webhooks y API routes
- Leaderboard
- Sistema de recompensas

### **Fase 4: Features Avanzadas**
- Notificaciones en tiempo real
- Badges y achievements
- Histórico de puntos
- Analytics

---

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build
npm run start

# Linting
npm run lint

# Supabase local (opcional)
npx supabase start
npx supabase db reset
```

---

## 📝 Notas Importantes

1. **Matrix.io vs Dynamic Labs**: Matrix.io usa Dynamic Labs como provider
2. **No usar wallets**: Priorizar autenticación social para reducir fricción
3. **Imágenes**: Preparar 2 versiones (thumbnail 400x400, full 1000x1000)
4. **Bots**: Desarrollar en paralelo a la web (puede ser proyecto separado)
5. **Testing**: Probar con usuarios reales antes de lanzar puntos

---

## 🎨 Paleta de Colores

```css
/* Tailwind Config */
{
  purple: {
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    900: '#581c87',
  },
  pink: {
    600: '#db2777',
  },
  blue: {
    400: '#60a5fa',
    900: '#1e3a8a',
  }
}
```

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Dynamic Labs Docs](https://docs.dynamic.xyz)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

**Última actualización**: 2025-11-13
**Versión**: 1.0.0
