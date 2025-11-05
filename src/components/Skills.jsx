import React from 'react';
import { skills } from '../data/portfolioData';

const SkillGroup = ({ title, skillList }) => (
    <div>
        <h4 className="text-2xl font-semibold mb-4 text-primary">{title}</h4>
        <div className="flex flex-wrap gap-3">
            {skillList.map((skill, index) => (
                <span key={index} className="tech-badge">{skill}</span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="competences" className="mb-20">
            <h3 className="text-4xl font-bold border-b-4 border-primary pb-3 mb-10 text-text-light">Compétences Techniques 🛠️</h3>
            <div className="space-y-8">
                <SkillGroup title="Langages & Frameworks" skillList={[...skills.languages, ...skills.frameworks]} />
                <SkillGroup title="Outils & Data" skillList={skills.tools} />
            </div>
        </section>
    );
};

export default Skills;