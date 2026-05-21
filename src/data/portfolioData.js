// src/data/portfolioData.js

export const skills = {
  frontend: ["React.js", "Angular", "Tailwind CSS", "TypeScript", "HTML5", "CSS3", "JavaScript"],
  backend: ["Node.js", "Express.js", "Laravel", "Django", "API RESTful"],
  mobile: [ "Dart"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Firebase"],
  outils: ["Git", "GitHub", "Cloudinary", "Figma", "Postman", "VS Code"],
  methodologies: ["SOLID", "MVC", "Analyse fonctionnelle", "Documentation technique"],
  softSkills: [
    "Travail en équipe et collaboration interfonctionnelle",
    "Sens de l'analyse et résolution de problèmes",
    "Adaptabilité et autonomie",
    "Apprentissage continu et curiosité technique",
  ],
};

export const experiences = [
  {
    title: "Stage Pédagogique",
    company: "Orange Finances Mobiles Sénégal",
    location: "Dakar, Sénégal",
    period: "12/2024 – 05/2025",
    description: [
      "Contribution à la mise en place et à la réalisation d'une application de gestion de campagne marketing.",
    ],
    technologies: ["Laravel", "React"],
  },
  {
    title: "Gestion Pédagogique - API académique",
    company: "Sonatel Academy",
    location: "Dakar, Sénégal",
    period: "2024",
    description: [
      "API RESTful pour la gestion pédagogique",
      "Architecture MVC évolutive et stockage cloud intégré",
      "Centralisation des données et suivi des apprenants",
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Firebase", "Cloudinary"],
  },
  {
    title: "Réseau Social Tailleurs - Plateforme communautaire",
    company: "Sonatel Academy",
    location: "Dakar, Sénégal",
    period: "2024",
    description: [
      "API pour un réseau social professionnel",
      "Partage de créations avec stockage cloud",
      "Mise en avant des talents et interactions entre professionnels",
    ],
    technologies: ["Node.js", "TypeScript", "Prisma", "MongoDB", "Cloudinary"],
  },
  {
    title: "Gestion Transaction - Services financiers",
    company: "Sonatel Academy",
    location: "Dakar, Sénégal",
    period: "2024",
    description: [
      "Développement d'une application de gestion des transactions",
      "Implémentation du transfert d'argent et achats sécurisés",
    ],
    technologies: ["Angular", "Node.js", "Prisma", "Neon", "TypeScript", "Tailwind"],
  },
];

export const education = [
  {
    degree: "Licence en Développement et Administration d'Application",
    school: "Université Alioune Diop de Bambey",
    location: "Bambey, Sénégal",
    period: "en cours",
    description: "",
  },
  {
    degree: "Certificat Professionnel de Spécialisation en Développement Web/Mobile",
    school: "École du Code Sonatel Academy (ECSA)",
    location: "Dakar, Sénégal",
    period: "11/2024",
    description: "",
  },
  {
    degree: "Baccalauréat",
    school: "Lycée de Mbao",
    location: "Dakar, Sénégal",
    period: "2019",
    description: "",
  },
  {
    degree: "BFEM",
    school: "École Privée Ama Coumba Seck",
    location: "Dakar, Sénégal",
    period: "2015",
    description: "",
  },
];

export const references = [
  {
    name: "Birane Baila Wane",
    title: "Coach en Développement Web/Mobile — Architecte Logiciel",
    company: "Orange Digital Center",
    email: "douvewane85@gmail.com",
    phone: "777669595",
    relationship: "Encadrant",
  },
  {
    name: "Aly Tall Niang",
    title: "Formateur en Développement Web/Mobile",
    company: "Orange Digital Center",
    email: "niangalytall@gmail.com",
    phone: "+221 771825414",
    relationship: "Formateur",
  },
];

export const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
];

export const navLinks = ["accueil", "apropos", "experience", "competences", "formation", "projets", "contact"];