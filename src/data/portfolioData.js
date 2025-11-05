export const profile = {
    name: "YOUNES HALMI",
    title: "Étudiant en 3ème année de BUT Informatique",
    description: "Je suis à la recherche d'une alternance pour renforcer mes compétences en programmation et contribuer activement aux projets d'une équipe dynamique.",
    email: "youneshalmi8@gmail.com",
    phone: "07 58 53 65 72",
    github: "#", // Remplacez par votre lien GitHub
    linkedin: "#", // Remplacez par votre lien LinkedIn
};

export const skills = {
    languages: [
        "PHP", "Python", "Java", "C#", "JavaScript", "SQL", "PL/SQL", "HTML/CSS", "Dart"
    ],
    frameworks: [
        "React", "React Native", "Laravel (en cours)", "Tailwind CSS", "JUNIT", "POO", "MVC"
    ],
    tools: [
        "VS Code", "Power BI", "Kafka", "Zookeeper", "NodeJS", "MySQL", "Pandas", "NumPy", "Matplotlib"
    ],
};

export const projects = [
    {
        title: "Addiction (Application Mobile)",
        description: "Application mobile (Flutter) qui accompagne les personnes en sevrage en utilisant l'analyse de données et des recommandations personnalisées basées sur l'IA.",
        technologies: ["Flutter", "Dart", "IA", "Analyse de données"],
        githubLink: "#", // Lien GitHub du projet
        color: "border-primary",
    },
    {
        title: "Gestion de Réservations Immobilières",
        description: "Développement d'un logiciel en Python pour l'enregistrement des propriétaires, avec un backend Node.js et un frontend affichant les disponibilités via un calendrier.",
        technologies: ["Python", "Node.js", "Backend/Frontend", "SQL"],
        githubLink: "#",
        color: "border-indigo-500",
    },
    {
        title: "Flexitrip (PMR)",
        description: "Application mobile en React Native pour la création de trajets multimodaux pour Personnes à Mobilité Réduite (PMR).",
        technologies: ["React Native", "JavaScript", "Covoiturage"],
        githubLink: "#",
        color: "border-red-500",
    },
    {
        title: "Site Web Taxons & MySQL",
        description: "Conception d'un site web dynamique permettant de rechercher des taxons à partir d'une API et d'une base de données MySQL.",
        technologies: ["PHP", "MySQL", "API"],
        githubLink: "#",
        color: "border-yellow-500",
    },
];

export const experiences = [
    {
        company: "Latmos CNRS",
        title: "Développeur",
        duration: "3 mois 2 semaines (2025)",
        description: "Développement d'une application de suivi des besoins projet et à l'amélioration des applications existantes afin d'optimiser le fonctionnement du laboratoire.",
        iconClass: "fas fa-code",
        color: "bg-primary",
    },
    {
        company: "GM BÂTIMENT",
        title: "Stage - Développeur Web",
        duration: "2 mois (2024)",
        description: "Digitalisation des processus de l'entreprise et gestion des techniciens via des solutions PHP pour automatiser les tâches, améliorer la communication interne et optimiser le suivi des interventions.",
        iconClass: "fas fa-laptop-code",
        color: "bg-indigo-500",
    },
];