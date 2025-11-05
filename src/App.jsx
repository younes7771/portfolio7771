// src/App.jsx
import React from 'react';
import './App.css'; // Importez votre fichier CSS
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaLaptopCode } from 'react-icons/fa';
import { profile, projects, skills, experiences } from './data/portfolioData';

// --- Composants Modulaires ---

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-content app-container">
            <a href="#" className="navbar-logo">Younes.dev</a>
            <div className="hidden md:block">
                {['projets', 'competences', 'experiences', 'contact'].map(id => (
                    <a key={id} href={`#${id}`} className="navbar-link">
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <section id="profil" className="hero-section">
        <img src="/younes_photo.png" alt="Photo de Younes Halmi" className="hero-photo" 
             onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/160x160/059669/FFFFFF?text=YH" }}/>
        <h1 className="hero-title">{profile.name}</h1>
        <h2 className="hero-subtitle">{profile.title}</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 2rem auto', color: '#cbd5e0' }}>
            {profile.description}
        </p>
        <div className="social-links">
            <a href={`mailto:${profile.email}`} className="social-link"><FaEnvelope /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="social-link"><FaPhone /></a>
        </div>
    </section>
);

const ProjectCard = ({ project }) => (
    <div className="project-card" style={{ borderColor: project.color }}>
        <h4>{project.title}</h4>
        <p style={{ color: '#a0aec0', marginBottom: '1rem', minHeight: '60px' }}>
            {project.description}
        </p>
        <div className="flex flex-wrap" style={{marginBottom: '1rem'}}>
            {project.technologies.map((tech, index) => (
                <span key={index} className="badge">{tech}</span>
            ))}
        </div>
        <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-link"
        >
            <FaGithub style={{marginRight: '0.5rem'}} /> Voir le Dépôt GitHub
        </a>
    </div>
);

const Projects = () => (
    <section id="projets" style={{marginBottom: '5rem'}} className="app-container">
        <h3 className="section-title">Projets Professionnels 💡</h3>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </section>
);

const Skills = () => (
    <section id="competences" style={{marginBottom: '5rem'}} className="app-container">
        <h3 className="section-title">Compétences Techniques 🛠️</h3>
        <div style={{marginBottom: '2rem'}}>
            <h4 style={{fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1rem'}}>Langages & Frameworks</h4>
            <div className="tech-badges-group">
                {[...skills.languages, ...skills.frameworks].map((skill, index) => (
                    <span key={index} className="tech-badge">{skill}</span>
                ))}
            </div>
        </div>
        <div>
            <h4 style={{fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1rem'}}>Outils & Data</h4>
            <div className="tech-badges-group">
                {skills.tools.map((skill, index) => (
                    <span key={index} className="tech-badge">{skill}</span>
                ))}
            </div>
        </div>
    </section>
);

const Experience = () => (
    <section id="experiences" style={{marginBottom: '5rem'}} className="app-container">
        <h3 className="section-title">Parcours Professionnel 💼</h3>
        <ol className="timeline">                  
            {experiences.map((exp, index) => (
                <li key={index} className="timeline-item">            
                    <span className="timeline-icon" style={{ backgroundColor: exp.color }}>
                        {exp.iconClass === 'fas fa-code' ? <FaCode size={12} color="white"/> : <FaLaptopCode size={12} color="white"/>}
                    </span>
                    <h4 className="timeline-title">{exp.title} - {exp.company}</h4>
                    <time className="timeline-time">{exp.duration}</time>
                    <p className="timeline-description">{exp.description}</p>
                </li>
            ))}
        </ol>
    </section>
);

const Contact = () => (
    <section id="contact" style={{textAlign: 'center', padding: '3rem', backgroundColor: 'var(--color-card-bg)', borderRadius: '0.75rem', maxWidth: '800px', margin: '0 auto'}} className="app-container">
        <h3 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem'}}>Intéressé par mon profil pour une alternance ?</h3>
        <p style={{color: '#a0aec0', marginBottom: '1.5rem'}}>
            N'hésitez pas à me contacter pour discuter de vos projets.
        </p>
        <a href={`mailto:${profile.email}`} className="contact-button">
            Contactez-moi par Email
        </a>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Younes Halmi - Développé avec React et CSS Natif.</p>
    </footer>
);


function App() {
    return (
        <div className="App-root">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;