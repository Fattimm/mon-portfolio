# 🚀 Mon Portfolio - Développeuse Fullstack

Portfolio moderne et responsive avec architecture modulaire (SOLID principles).

## ✨ Fonctionnalités

- 🌗 **Thème clair/sombre** avec transition fluide
- 📱 **100% Responsive** (mobile, tablette, desktop)
- ⚡ **Navigation smooth scroll** entre les sections
- 🎨 **Design moderne** avec gradients et animations
- 📧 **Formulaire de contact** fonctionnel
- 🧩 **Architecture modulaire** - Composants séparés et réutilisables
- 📝 **Données centralisées** - Facile à personnaliser

## 📂 Structure du projet

```
mon-portfolio/
├── public/
├── src/
│   ├── components/          # Tous les composants
│   │   ├── Navbar.jsx       # Navigation
│   │   ├── Hero.jsx         # Section principale
│   │   ├── About.jsx        # À propos
│   │   ├── Skills.jsx       # Compétences
│   │   ├── Projects.jsx     # Projets
│   │   ├── Contact.jsx      # Formulaire de contact
│   │   └── Footer.jsx       # Pied de page
│   ├── data/
│   │   └── portfolioData.js # 📝 TOUTES VOS DONNÉES ICI !
│   ├── App.jsx              # Composant principal (propre)
│   ├── main.jsx             # Point d'entrée React
│   └── index.css            # Styles globaux
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Personnalisation facile !

### 1️⃣ **Modifier vos informations personnelles**

Ouvrez le fichier `src/data/portfolioData.js` et modifiez :

```javascript
export const personalInfo = {
  name: "Votre Nom",                    // ✏️ Votre nom
  title: "Votre Titre",                  // ✏️ Votre titre
  avatar: "👩‍💻",                        // ✏️ Votre photo/emoji
  socialLinks: {
    github: "https://github.com/vous",   // ✏️ Votre GitHub
    linkedin: "https://linkedin.com/in/vous", // ✏️ Votre LinkedIn
    email: "mailto:vous@email.com"       // ✏️ Votre Email
  }
}
```

### 2️⃣ **Modifier vos compétences**

Dans le même fichier `src/data/portfolioData.js` :

```javascript
export const skills = {
  frontend: ['React', 'Vue.js', 'TypeScript'],  // ✏️ Vos technos frontend
  backend: ['Node.js', 'Python', 'Django'],     // ✏️ Vos technos backend
  mobile: ['React Native', 'Flutter'],          // ✏️ Vos technos mobile
  tools: ['Git', 'Docker', 'AWS']               // ✏️ Vos outils
};
```

### 3️⃣ **Ajouter/Modifier vos projets**

Toujours dans `src/data/portfolioData.js` :

```javascript
export const projects = [
  {
    title: 'Mon Projet',                        // ✏️ Titre
    description: 'Description du projet...',    // ✏️ Description
    tech: ['React', 'Node.js'],                 // ✏️ Technologies
    github: 'https://github.com/vous/projet',   // ✏️ Lien GitHub
    demo: 'https://demo.com',                   // ✏️ Lien démo
    image: '🚀'                                 // ✏️ Emoji ou URL d'image
  },
  // Ajoutez plus de projets ici...
];
```

### 4️⃣ **Ajouter une vraie photo**

Option 1 - Image locale :
```javascript
// Dans portfolioData.js
avatar: "/photo.jpg"  // Mettez votre photo dans le dossier public/
```

Option 2 - Image en ligne :
```javascript
avatar: "https://votre-image.com/photo.jpg"
```

Puis dans `src/components/Hero.jsx`, modifiez :
```jsx
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
  <img 
    src={personalInfo.avatar} 
    alt={personalInfo.name}
    className="w-full h-full object-cover"
  />
</div>
```

## 🛠️ Installation

### 1. Créer le projet

```bash
mkdir mon-portfolio
cd mon-portfolio
```

### 2. Créer la structure de dossiers

```bash
mkdir src
mkdir src/components
mkdir src/data
```

### 3. Copier tous les fichiers

Copiez les fichiers suivants dans leur emplacement :

**Racine du projet :**
- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`
- `.gitignore`
- `README.md`

**Dans `src/` :**
- `main.jsx`
- `App.jsx`
- `index.css`

**Dans `src/components/` :**
- `Navbar.jsx`
- `Hero.jsx`
- `About.jsx`
- `Skills.jsx`
- `Projects.jsx`
- `Contact.jsx`
- `Footer.jsx`

**Dans `src/data/` :**
- `portfolioData.js`

### 4. Installer et lancer

```bash
npm install
npm run dev
```

Ouvrez http://localhost:5173 🎉

## 🚀 Déploiement

### Sur Render.com (Gratuit et recommandé)

```bash
# 1. Initialiser Git
git init
git add .
git commit -m "Portfolio initial avec architecture modulaire"

# 2. Créer un repo GitHub
# Allez sur github.com/new

# 3. Pusher le code
git remote add origin https://github.com/VOTRE-USERNAME/mon-portfolio.git
git branch -M main
git push -u origin main

# 4. Sur render.com
# - New Static Site
# - Connecter GitHub
# - Build Command: npm install && npm run build
# - Publish Directory: dist
# - Deploy!
```

### Sur Vercel (Alternative rapide)

```bash
npm install -g vercel
vercel
```

### Sur Netlify (Alternative)

```bash
npm run build
# Glissez-déposez le dossier dist/ sur netlify.com
```

## 🎨 Avantages de cette architecture

### ✅ **Séparation des responsabilités (SOLID)**
- Chaque composant a une seule responsabilité
- Facile à maintenir et déboguer
- Code réutilisable

### ✅ **Données centralisées**
- Toutes vos infos dans un seul fichier : `portfolioData.js`
- Pas besoin de chercher dans tout le code
- Modification ultra-rapide

### ✅ **Composants indépendants**
- Chaque section est un composant séparé
- Facile d'ajouter, supprimer ou réorganiser
- Testable individuellement

### ✅ **Scalable**
- Ajoutez facilement de nouvelles sections
- Créez de nouveaux composants sans toucher aux autres
- Parfait pour faire évoluer le portfolio

## 📝 Exemples de modifications courantes

### Ajouter une nouvelle section "Blog"

1. Créez `src/components/Blog.jsx`
2. Ajoutez les données dans `src/data/portfolioData.js`
3. Importez dans `src/App.jsx`
4. Ajoutez `<Blog darkMode={darkMode} />`

### Changer les couleurs du thème

Dans les composants, remplacez :
- `purple-500` par votre couleur (ex: `blue-500`)
- `pink-500` par votre couleur secondaire

### Ajouter des animations

Installez Framer Motion :
```bash
npm install framer-motion
```

Utilisez dans vos composants :
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  Contenu
</motion.div>
```

## 🧪 Commandes disponibles

```bash
npm run dev      # Lancer en mode développement
npm run build    # Créer le build de production
npm run preview  # Prévisualiser le build
```

## 🐛 Résolution de problèmes

### Les composants ne s'affichent pas
```bash
# Vérifiez que tous les fichiers sont bien placés
# Vérifiez les imports dans App.jsx
```

### Erreur d'import
```bash
# Vérifiez les chemins relatifs (../ ou ./)
# Exemple: import { skills } from '../data/portfolioData'
```

### Le thème ne change pas
```bash
# Vérifiez que darkMode est bien passé en props
# Exemple: <Hero darkMode={darkMode} />
```

## 📚 Technologies utilisées

- **React 18** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes et légères
- **Architecture modulaire** - Composants séparés (SOLID)

## 🎯 Prochaines améliorations possibles

- [ ] Connecter le formulaire à EmailJS ou Formspree
- [ ] Ajouter un blog avec Markdown
- [ ] Intégrer Google Analytics
- [ ] Ajouter des animations avec Framer Motion
- [ ] Mode multilingue (FR/EN)
- [ ] Section témoignages/avis
- [ ] Intégration d'un CMS (Strapi, Contentful)
- [ ] Tests unitaires avec Jest/Vitest

## 💡 Conseils professionnels

1. **Personnalisez d'abord** avant de déployer
2. **Utilisez de vraies images** de vos projets
3. **Ajoutez des liens fonctionnels** vers GitHub et démos
4. **Optimisez les images** avant de les ajouter
5. **Testez sur mobile** avant de déployer
6. **Ajoutez un README** dans vos repos GitHub
7. **Mettez à jour régulièrement** votre portfolio

## 📞 Support

Des questions ? Besoin d'aide pour personnaliser ?
- Consultez la documentation React : https://react.dev
- Documentation Tailwind : https://tailwindcss.com
- Documentation Vite : https://vitejs.dev

---

**Créé avec ❤️ et une architecture propre !**

🌟 Si ce template vous aide, partagez-le !