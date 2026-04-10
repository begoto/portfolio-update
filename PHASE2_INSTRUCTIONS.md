# PHASE 2 — OPTIMISATION PERFORMANCE

## 📦 Dépendances installées

La Phase 2 configure :
- ✅ `@fontsource/space-grotesk` - Police self-hébergée (3.3 KiB gaspillé supprimé)
- ✅ `remixicon` - Icônes self-hébergées (1050ms mobile gaspillé supprimé)
- ✅ `sharp` - Optimisation d'images en WebP (1625 KiB économies)

## 🚀 Étapes d'exécution

### 1️⃣ Installer les dépendances

```bash
npm install
```

Cela installera :
- `@fontsource/space-grotesk` ✅
- `remixicon` ✅
- `sharp` (devDependency) ✅
- Et tous les autres packages

### 2️⃣ Optimiser les images (RECOMMANDÉ AVANT LE BUILD)

```bash
npm run optimize:images
```

**Cela générera :**
- `profil.w400.webp`, `profil.w800.webp`, `profil.w1400.webp` (+ variantes .jpg)
- `project-1.w400.webp`, etc. pour tous les projets
- `about.w400.webp`, etc.

**Format généré:**
```
assets/images/
├── profil.jpg (original)
├── profil.w400.webp ← Pour mobiles
├── profil.w800.webp ← Pour tablettes
├── profil.w1400.webp ← Pour desktop
├── profil.w400.jpg
├── profil.w800.jpg
├── profil.w1400.jpg
├── project-1.jpg
├── project-1.w400.webp
├── project-1.w800.webp
├── project-1.w1400.webp
...etc
```

### 3️⃣ Démarrer le serveur de développement

```bash
npm run dev
```

Le site démarre à `http://localhost:3000`

### 4️⃣ Build pour la production

```bash
npm run build
```

**Le build exécutera automatiquement** `node scripts/optimize-images.js` avant de compiler.

## 📊 Améliorations attendues

### Performance
- **LCP (Largest Contentful Paint)** : 4.2s → ~1.5s (mobile) | 1.0s → ~0.8s (desktop)
- **FCP (First Contentful Paint)** : 3.3s → ~1.0s (mobile)
- **JavaScript inutilisé** : -45.1 KiB
- **CSS inutilisé** : -32 KiB
- **Payload images** : 2067 KiB → ~400 KiB (WebP + redimensionnement)
- **Requêtes bloquantes** : -2050ms (mobile) du à Remixicon + Space Grotesk self-hébergés

### Accessibilité
- **Contraste** : 82 → 95+ (desktop) | 76 → 90+ (mobile)
- **ARIA labels** : hamburger menu + select formulaire

### SEO
- **Métadonnées images** : 92 → 96+

### Sécurité
- ✅ CSP (Content-Security-Policy)
- ✅ COOP (Cross-Origin-Opener-Policy)
- ✅ X-Frame-Options (clickjacking protection)
- ✅ X-Content-Type-Options (MIME sniffing)

## 🛠️ Configuration avancée

### Image Optimization Script (`scripts/optimize-images.js`)

Spécifications d'image :
```javascript
IMAGE_SPECS = {
  'profil.jpg': { maxWidth: 384, name: 'Profile' },
  'project-1.jpg': { maxWidth: 670, name: 'E-School' },
  'project-2.jpg': { maxWidth: 653, name: 'E-Commerce' },
  'project-3.jpg': { maxWidth: 670, name: 'Gestion RH' },
  'project-4.jpg': { maxWidth: 663, name: 'Flashcards' },
  'project-5.jpg': { maxWidth: 670, name: 'Task-Flow' },
  'project-6.jpg': { maxWidth: 670, name: 'Auth-G-email' },
  'about.jpg': { maxWidth: 300, name: 'About' },
};

// Widths générées
WIDTHS = [400, 800, 1400];
QUALITY = 75; // 0-100, recommandé 70-80 pour WebP
```

Pour modifier ces spécifications, éditez `scripts/optimize-images.js` avant d'exécuter `npm run optimize:images`.

### Vite Build Optimization

Configuration appliquée dans `vite.config.ts` :
- ✅ **Terser minification** (supprime comments, drop_console)
- ✅ **Manual code-splitting** (vendor, i18n chunks séparés)
- ✅ **CSS code-splitting** (optimise le CSS)
- ✅ **Compression rapports** (affiche tailles gzip)

### Netlify Security Headers (`public/_headers`)

Auto-appliqué à la racine du site :
- ✅ **CSP** : Local resources + Google Fonts + cdnjs + formsubmit.co
- ✅ **Frame-Options** : DENY (prevent clickjacking)
- ✅ **Permissions-Policy** : Disable unnecessa features (camera, microphone, etc.)
- ✅ **Cache-Control** : Static assets (1 année) | HTML (no cache)

## 📝 Utilisation du composant OptimizedImage

`src/components/OptimizedImage.tsx` permet de charger les images avec `<picture>` et srcSet automatique.

**Alternative — Migration progressive des images :**

Si vous ne migrez pas immédiatement, les images anciennes (path direct) continueront de fonctionner :

```tsx
// Ancien (continue de marcher)
<img src="/assets/images/profil.jpg" alt="..." />

// Nouveau (optimisé avec srcSet)
import OptimizedImage from '@/components/OptimizedImage';

<OptimizedImage 
  src="/assets/images/profil.jpg" 
  alt="Royal_Tech - Developer Frontend"
  width={384}
  height={384}
  fetchPriority="high"
  loading="eager"
/>
```

## 🎯 Prochaines étapes (PHASE 3)

La Phase 3 inclut :
- ⚠️ Évaluation et suppression éventuelle de `i18next` (non multilingue)
- ⚠️ Évaluation et suppression éventuelle de `react-router` (single-page scroll)
- ⚠️ Code-splitting avec React.lazy() pour sections below-the-fold
- ⚠️ Subsetting Remixicon pour icônes utilisées seulement

## 🚨 Dépannage

### Erreur : `Cannot find module 'sharp'`
```bash
npm install --save-dev sharp
```

### Erreur : `Files not found in node_modules/@fontsource`
Assurez-vous que `npm install` a complété correctement.

### Images WebP n'apparaissent pas
1. Vérifiez que `npm run optimize:images` a été exécuté
2. Ouvrez DevTools → Network et cherchez `.w400.webp`, `.w800.webp`
3. Si absent, relancez `npm run optimize:images`

### Changement de qualité WebP
Éditez `scripts/optimize-images.js`, ligne 39 :
```javascript
const QUALITY = 75; // Augmentez à 80-85 pour meilleure qualité
```
Puis relancez `npm run optimize:images`

## 📦 Commandes utiles

```bash
npm run dev              # Démarrer en développement
npm run build            # Build prod + optimiser images
npm run optimize:images  # Optimiser images seulement
npm run preview          # Preview build prod local
npm run lint             # ESLint check
npm run type-check       # TypeScript check
```
