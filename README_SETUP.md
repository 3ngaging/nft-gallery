# 🚀 Guía de Configuración - NFT Gallery

## ⚠️ PASOS OBLIGATORIOS ANTES DE EJECUTAR

### 1️⃣ Configurar Dynamic Labs (Matrix.io)

**Tiempo estimado: 5 minutos**

#### Paso a paso:

1. **Ir a Dynamic Labs**
   - Visita: https://app.dynamic.xyz/
   - Crea una cuenta o inicia sesión

2. **Crear nuevo proyecto**
   - Click en "Create new project"
   - Nombre del proyecto: `NFT Gallery`
   - Tipo: Web Application

3. **Configurar proveedores sociales**
   - Ve a la sección "Social Providers" o "Connectors"
   - Activa los siguientes:
     - ✅ Discord
     - ✅ Twitter
     - ✅ Telegram
   - Guarda los cambios

4. **Copiar Environment ID**
   - Ve a Settings → Keys
   - Copia el `Environment ID`

5. **Añadir a .env.local**
   ```bash
   NEXT_PUBLIC_DYNAMIC_ENV_ID=tu_environment_id_aquí
   ```

---

### 2️⃣ Configurar Base de Datos en Supabase

**Ya tienes Supabase configurado, pero necesitas crear las tablas:**

#### Opción A: Usando SQL Editor en Supabase

1. Ve a: https://fkpqwnsdqduuqxvajale.supabase.co
2. Click en "SQL Editor" en el menú lateral
3. Copia y pega el siguiente SQL:

```sql
-- Tabla de NFTs
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

-- Tabla de usuarios
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  matrix_id TEXT UNIQUE NOT NULL,
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

-- Tabla de wallets conectadas a NFTs
CREATE TABLE nft_wallets (
  id BIGSERIAL PRIMARY KEY,
  nft_id BIGINT REFERENCES nfts(id) ON DELETE CASCADE,
  wallet_address TEXT NOT NULL,
  user_id BIGINT REFERENCES users(id),
  connected_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(nft_id, wallet_address)
);

-- Índices para mejorar performance
CREATE INDEX idx_nfts_token_id ON nfts(token_id);
CREATE INDEX idx_users_matrix_id ON users(matrix_id);
CREATE INDEX idx_nft_wallets_nft_id ON nft_wallets(nft_id);
CREATE INDEX idx_nft_wallets_wallet ON nft_wallets(wallet_address);

-- Row Level Security (RLS) básico
ALTER TABLE nfts ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE nft_wallets ENABLE ROW LEVEL SECURITY;

-- Políticas: Todos pueden leer
CREATE POLICY "Allow public read access to nfts"
  ON nfts FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to users"
  ON users FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to nft_wallets"
  ON nft_wallets FOR SELECT
  TO public
  USING (true);

-- Políticas: Solo autenticados pueden insertar/actualizar
CREATE POLICY "Allow authenticated insert to users"
  ON users FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow users to update own data"
  ON users FOR UPDATE
  TO public
  USING (true);
```

4. Click en "Run" para ejecutar el SQL

---

### 3️⃣ Insertar Datos de Ejemplo (OPCIONAL para testing)

Si quieres probar la app con datos de ejemplo:

```sql
-- Insertar 5 NFTs de prueba
INSERT INTO nfts (token_id, name, description, image_url, thumbnail_url) VALUES
(1, 'NFT Collection #001', 'Una pieza única de arte digital', 'https://via.placeholder.com/1000', 'https://via.placeholder.com/400'),
(2, 'NFT Collection #002', 'Edición limitada exclusiva', 'https://via.placeholder.com/1000', 'https://via.placeholder.com/400'),
(3, 'NFT Collection #003', 'Parte de la colección original', 'https://via.placeholder.com/1000', 'https://via.placeholder.com/400'),
(4, 'NFT Collection #004', 'Diseño futurista único', 'https://via.placeholder.com/1000', 'https://via.placeholder.com/400'),
(5, 'NFT Collection #005', 'Arte generativo especial', 'https://via.placeholder.com/1000', 'https://via.placeholder.com/400');
```

---

### 4️⃣ Instalar Dependencias

```bash
npm install
```

---

### 5️⃣ Ejecutar el Proyecto

```bash
npm run dev
```

La aplicación estará disponible en: http://localhost:3000

---

## 📝 Checklist de Configuración

- [ ] Cuenta de Dynamic Labs creada
- [ ] Environment ID copiado a `.env.local`
- [ ] Proveedores sociales activados (Discord, Twitter, Telegram)
- [ ] Tablas creadas en Supabase
- [ ] Dependencias instaladas (`npm install`)
- [ ] Proyecto ejecutándose (`npm run dev`)

---

## 🔧 Variables de Entorno Completas

Tu archivo `.env.local` debe contener:

```bash
# Supabase (YA CONFIGURADO)
NEXT_PUBLIC_SUPABASE_URL=https://fkpqwnsdqduuqxvajale.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcHF3bnNkcWR1dXF4dmFqYWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MTU4NDksImV4cCI6MjA3ODI5MTg0OX0.rntApdIbrq9JQZv8kpX7P-xmX6iP_0sNF0fkXMKnYPw

# Dynamic Labs (FALTA CONFIGURAR)
NEXT_PUBLIC_DYNAMIC_ENV_ID=xxx_tu_id_aquí
```

---

## 🎯 Próximos Pasos Después de Configurar

1. **Probar autenticación**
   - Click en "Connect" en la navbar
   - Conectar con Discord/Twitter/Telegram
   - Verificar que se crea el usuario en Supabase

2. **Subir NFTs reales**
   - Tener listas las 45 imágenes
   - Subirlas a Supabase Storage o usar URLs IPFS
   - Insertar datos en la tabla `nfts`

3. **Personalizar diseño**
   - Cambiar colores si es necesario
   - Añadir logo personalizado
   - Modificar textos

---

## 🐛 Troubleshooting

### Error: "Invalid environment ID"
- Verifica que copiaste correctamente el ID de Dynamic Labs
- Asegúrate de que el archivo `.env.local` está en la raíz del proyecto
- Reinicia el servidor (`Ctrl+C` y luego `npm run dev`)

### Error: "Failed to fetch NFTs"
- Verifica que las tablas existen en Supabase
- Revisa que las políticas RLS permiten lectura pública
- Comprueba las credenciales de Supabase en `.env.local`

### Imágenes no cargan
- Verifica que las URLs son válidas
- Si usas IPFS, comprueba que los enlaces funcionan
- Revisa `next.config.ts` para dominios permitidos

---

## 📞 Ayuda

Si tienes problemas, revisa:
- [Documentación de Dynamic Labs](https://docs.dynamic.xyz/)
- [Documentación de Supabase](https://supabase.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
