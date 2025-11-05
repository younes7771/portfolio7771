import React from 'react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experiences" className="mb-20">
            <h3 className="text-4xl font-bold border-b-4 border-primary pb-3 mb-10 text-text-light">Parcours Professionnel 💼</h3>
            
            <ol className="relative border-l border-gray-700">                  
                {experiences.map((exp, index) => (
                    <li key={index} className="mb-10 ml-6">            
                        <span className={`absolute flex items-center justify-center w-6 h-6 ${exp.color} rounded-full -left-3 ring-8 ring-secondary`}>
                            {/* Les icônes Fa ou i.e. pour Font Awesome doivent être installées ou utilisées via React-icons */}
                            <i className={`${exp.iconClass} text-sm text-white`}></i>
                        </span>
                        <h4 className="flex items-center mb-1 text-xl font-semibold text-text-light">{exp.title} - {exp.company}</h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{exp.duration}</time>
                        <p className="mb-4 text-base font-normal text-gray-300">
                            {exp.description}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Experience;