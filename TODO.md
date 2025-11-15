# 📋 TODO - NFT Gallery Project

**Fecha de creación**: 2025-11-13
**Estado del proyecto**: Fase 1 - MVP Básico

---

## 🔴 CORRECCIONES URGENTES (Antes de continuar)

### ✅ COMPLETADO
- [x] Crear CLAUDE.md con best practices
- [x] Auditar código existente

### ❌ PENDIENTE - Correcciones Críticas

#### 1. **Conflicto en layout.tsx**
**Problema**: El archivo [layout.tsx](src/app/layout.tsx) contiene código de múltiples componentes mezclados (Navbar + Profile page)

**Acción**:
- [ ] Separar el código de perfil (líneas 33-158) a su propio archivo `src/app/profile/page.tsx`
- [ ] Limpiar el layout.tsx dejando solo el layout principal
- [ ] Actualizar imports en Navbar

**Prioridad**: 🔴 CRÍTICA

---

#### 2. **Navbar.tsx desactualizado**
**Problema**: Existe duplicación. El Navbar en `src/components/Navbar.tsx` NO usa Dynamic Labs, pero el código correcto está en el layout.tsx

**Acción**:
- [ ] Reemplazar `src/components/Navbar.tsx` con la versión correcta que usa `useDynamicContext`
- [ ] Verificar imports correctos

**Prioridad**: 🔴 CRÍTICA

---

#### 3. **Falta configuración de Dynamic Labs**
**Problema**: No existe `NEXT_PUBLIC_DYNAMIC_ENV_ID` en `.env.local`

**Acción**:
- [ ] Crear cuenta en https://app.dynamic.xyz/
- [ ] Crear nuevo proyecto
- [ ] Configurar proveedores sociales (Discord, Telegram, Twitter)
- [ ] Copiar Environment ID
- [ ] Añadir a `.env.local`: `NEXT_PUBLIC_DYNAMIC_ENV_ID=xxx`

**Prioridad**: 🔴 CRÍTICA

---

#### 4. **Estructura de carpetas públicas**
**Problema**: No existen carpetas para imágenes de NFTs

**Acción**:
- [ ] Crear `public/nfts/` para imágenes 1000x1000
- [ ] Crear `public/thumbnails/` para miniaturas 400x400
- [ ] Añadir placeholder `public/hero.jpg` (1920x1080)
- [ ] Limpiar SVGs por defecto de Next.js si no se usan

**Prioridad**: 🟡 ALTA

---

#### 5. **Base de datos Supabase vacía**
**Problema**: Las tablas no existen en Supabase

**Acción**:
- [ ] Conectarse a Supabase: https://fkpqwnsdqduuqxvajale.supabase.co
- [ ] Crear tabla `nfts` (ver esquema en CLAUDE.md)
- [ ] Crear tabla `users` (ver esquema en CLAUDE.md)
- [ ] Crear tabla `nft_wallets` (ver esquema en CLAUDE.md)
- [ ] Configurar Row Level Security (RLS) básica
- [ ] Crear índices para optimización

**Prioridad**: 🔴 CRÍTICA

---

#### 6. **Falta página de perfil independiente**
**Problema**: El código existe pero está dentro del layout.tsx

**Acción**:
- [ ] Crear archivo `src/app/profile/page.tsx`
- [ ] Mover código del layout.tsx a este archivo
- [ ] Verificar que funciona correctamente

**Prioridad**: 🟡 ALTA

---

#### 7. **Falta página 404 personalizada**
**Problema**: Existe `not-found.tsx` pero puede estar incompleto

**Acción**:
- [ ] Revisar `src/app/not-found.tsx`
- [ ] Añadir diseño consistente con el resto de la app

**Prioridad**: 🟢 MEDIA

---

## 📊 ROADMAP COMPLETO

### **FASE 1: MVP Básico** (2-3 días)

#### Sprint 1.1: Correcciones y Setup ✋ **ESPERANDO VALIDACIÓN**
- [ ] Ejecutar todas las correcciones urgentes (arriba)
- [ ] Instalar dependencias: `npm install`
- [ ] Verificar que el proyecto corre: `npm run dev`
- [ ] Probar todas las rutas
- [ ] Commitear código limpio a Git

**Tiempo estimado**: 4 horas

---

#### Sprint 1.2: Preparar Assets 🎨
- [ ] Conseguir/crear imagen hero (1920x1080)
- [ ] Preparar las 45 imágenes de NFTs
  - [ ] Versión completa: 1000x1000px
  - [ ] Versión thumbnail: 400x400px
  - [ ] Formato: WebP o PNG optimizado
  - [ ] Nombrado consistente: `nft-001.webp`, `nft-002.webp`, etc.
- [ ] Optimizar todas las imágenes (compresión)
- [ ] Subir a carpetas correspondientes en `public/`

**Tiempo estimado**: 3 horas

---

#### Sprint 1.3: Popular Base de Datos 📦
- [ ] Crear script de seed: `scripts/seed-nfts.ts`
- [ ] Insertar datos de los 45 NFTs en Supabase
  - [ ] token_id (1-45)
  - [ ] name ("NFT Collection #001", etc.)
  - [ ] description
  - [ ] image_url
  - [ ] thumbnail_url
  - [ ] traits (opcional, JSON)
- [ ] Verificar que los datos se ven correctamente en Supabase
- [ ] Probar que la galería carga las imágenes

**Tiempo estimado**: 2 horas

---

#### Sprint 1.4: Configurar Autenticación 🔐
- [ ] Configurar Dynamic Labs completamente
- [ ] Probar login con Discord
- [ ] Probar login con Telegram
- [ ] Probar login con Twitter
- [ ] Verificar que los datos del usuario se guardan en Supabase
- [ ] Probar logout
- [ ] Probar página de perfil

**Tiempo estimado**: 3 horas

---

#### Sprint 1.5: Polish UI/UX ✨
- [ ] Revisar responsive en móvil
- [ ] Añadir loading states
- [ ] Añadir error states
- [ ] Mejorar animaciones
- [ ] Optimizar performance (Lighthouse)
- [ ] Probar en diferentes navegadores
- [ ] Añadir meta tags SEO
- [ ] Añadir favicon personalizado

**Tiempo estimado**: 4 horas

---

#### Sprint 1.6: Testing & Deploy 🚀
- [ ] Testing manual completo
- [ ] Corregir bugs encontrados
- [ ] Deploy a Vercel
- [ ] Configurar variables de entorno en Vercel
- [ ] Probar en producción
- [ ] Compartir con testers

**Tiempo estimado**: 3 horas

**TOTAL FASE 1**: ~19 horas

---

### **FASE 2: Sistema de Usuarios Completo** (3-4 días)

#### Sprint 2.1: Perfil Avanzado
- [ ] Ampliar perfil de usuario
  - [ ] Avatar personalizable
  - [ ] Bio/descripción
  - [ ] Links sociales
  - [ ] NFTs favoritos
- [ ] Editar perfil
- [ ] Ver perfil de otros usuarios
- [ ] Lista de usuarios registrados

**Tiempo estimado**: 6 horas

---

#### Sprint 2.2: Conexión Wallets-NFTs
- [ ] Crear página para conectar wallet a NFT
- [ ] Validar ownership en blockchain (opcional)
- [ ] Sistema para que usuarios reclamen NFTs
- [ ] Ver qué usuarios tienen cada NFT
- [ ] Notificaciones cuando alguien conecta wallet

**Tiempo estimado**: 8 horas

---

#### Sprint 2.3: Estadísticas Básicas
- [ ] Total de usuarios registrados
- [ ] Total de NFTs reclamados
- [ ] Usuarios más activos
- [ ] Dashboard de admin (básico)

**Tiempo estimado**: 4 horas

**TOTAL FASE 2**: ~18 horas

---

### **FASE 3: Sistema de Puntos** (1-2 semanas)

#### Sprint 3.1: Infraestructura de Puntos
- [ ] Finalizar diseño del sistema de puntos
- [ ] Crear tablas en Supabase:
  - [ ] `point_events`
  - [ ] `point_rules`
- [ ] Crear funciones helper para puntos
- [ ] Sistema de cálculo de puntos
- [ ] Triggers automáticos en Supabase

**Tiempo estimado**: 6 horas

---

#### Sprint 3.2: API Webhooks
- [ ] Crear `/api/webhooks/discord/route.ts`
- [ ] Crear `/api/webhooks/telegram/route.ts`
- [ ] Crear `/api/webhooks/twitter/route.ts`
- [ ] Validación de signatures
- [ ] Rate limiting
- [ ] Logging de eventos
- [ ] Testing de endpoints

**Tiempo estimado**: 10 horas

---

#### Sprint 3.3: Bot de Discord
**Opción A**: Proyecto separado en Node.js
**Opción B**: Integrar en monorepo

- [ ] Setup Discord Bot (discord.js)
- [ ] Comandos básicos:
  - [ ] `/points` - Ver puntos propios
  - [ ] `/leaderboard` - Top 10
  - [ ] `/link` - Conectar cuenta
- [ ] Eventos que dan puntos:
  - [ ] Mensajes en canales permitidos
  - [ ] Reacciones
  - [ ] Tiempo en voz
- [ ] Enviar eventos al webhook
- [ ] Deploy del bot

**Tiempo estimado**: 12 horas

---

#### Sprint 3.4: Bot de Telegram
- [ ] Setup Telegram Bot (node-telegram-bot-api)
- [ ] Comandos básicos
- [ ] Eventos que dan puntos
- [ ] Enviar eventos al webhook
- [ ] Deploy del bot

**Tiempo estimado**: 8 horas

---

#### Sprint 3.5: Integración Twitter/X
**Nota**: Twitter API es más compleja y costosa

- [ ] Evaluar alternativas (webhooks vs polling)
- [ ] Implementar tracking de:
  - [ ] Menciones
  - [ ] Retweets
  - [ ] Likes
- [ ] Enviar eventos al webhook

**Tiempo estimado**: 10 horas

---

#### Sprint 3.6: Frontend de Puntos
- [ ] Componente `PointsDisplay`
- [ ] Página de Leaderboard (`/leaderboard`)
- [ ] Histórico de puntos del usuario
- [ ] Gráficas de progreso
- [ ] Badges y achievements
- [ ] Notificaciones de puntos ganados

**Tiempo estimado**: 12 horas

**TOTAL FASE 3**: ~58 horas

---

### **FASE 4: Features Avanzadas** (Futuro)

#### Backlog
- [ ] Sistema de recompensas (canjear puntos)
- [ ] Notificaciones push
- [ ] Chat en tiempo real
- [ ] Marketplace de NFTs
- [ ] Staking de NFTs
- [ ] Governance/votaciones
- [ ] Mobile app (React Native)
- [ ] Analytics avanzado
- [ ] Multi-idioma (i18n)

---

## 🎯 SIGUIENTE ACCIÓN INMEDIATA

**⚠️ ANTES DE CONTINUAR, NECESITO TU APROBACIÓN:**

1. ¿Estás de acuerdo con este plan?
2. ¿Quieres modificar algo del roadmap?
3. ¿Prefieres separar los bots en proyectos diferentes o todo en uno?
4. ¿Ya tienes las 45 imágenes de NFTs preparadas?
5. ¿Quieres que empiece con las correcciones urgentes?

---

## 📝 Notas

### Decisiones de Arquitectura Pendientes:

**A. ¿Bots en proyecto separado o monorepo?**
- **Opción 1**: Proyecto separado (recomendado)
  - ✅ Más organizado
  - ✅ Deploy independiente
  - ✅ Tecnologías específicas
  - ❌ Más repos que mantener

- **Opción 2**: Monorepo con Turborepo/Nx
  - ✅ Todo en un lugar
  - ✅ Compartir código
  - ❌ Más complejo

**B. ¿Cómo hostear los bots?**
- Railway.app (recomendado, fácil y barato)
- Heroku
- VPS (Digital Ocean, Linode)
- Serverless (AWS Lambda, Vercel Functions)

**C. ¿Storage de imágenes?**
- **Opción 1**: Public folder de Next.js (simple, para MVP)
- **Opción 2**: Supabase Storage (recomendado para producción)
- **Opción 3**: CDN externo (Cloudinary, Vercel Blob)

---

## 🔗 Links Útiles

- **Supabase Dashboard**: https://fkpqwnsdqduuqxvajale.supabase.co
- **Dynamic Labs**: https://app.dynamic.xyz/
- **Proyecto**: http://localhost:3000

---

**🚦 Estado**: ESPERANDO VALIDACIÓN DEL USUARIO
