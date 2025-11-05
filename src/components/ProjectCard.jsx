import React from 'react';
import { FaGithub } from 'react-icons/fa'; // N'oublie pas d'installer react-icons : npm install react-icons

const ProjectCard = ({ project }) => {
    return (
        <div className={`bg-gray-800 p-6 rounded-xl shadow-2xl transition transform hover:scale-[1.02] hover:shadow-primary/50 duration-300 border-t-4 ${project.color}`}>
            <h4 className="text-2xl font-bold mb-3 text-primary">{project.title}</h4>
            <p className="text-gray-400 mb-4 h-20 overflow-hidden">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="badge">{tech}</span>
                ))}
            </div>
            <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-text-light hover:text-primary transition flex items-center"
            >
                <FaGithub className="mr-2" /> Voir le Dépôt GitHub
            </a>
        </div>
    );
};

export default ProjectCard;