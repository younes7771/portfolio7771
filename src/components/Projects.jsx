import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => {
    return (
        <section id="projets" className="mb-20">
            <h3 className="text-4xl font-bold border-b-4 border-primary pb-3 mb-10 text-text-light">Projets Professionnels 💡</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;