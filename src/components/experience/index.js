import React from 'react';
import Styles from './index.module.css';

import ExperienceCard from '../experienceCard';
import experiences from './experiences';

const Experience = ({id}) => {

    const experienceCards = experiences.map((exp, index) => <ExperienceCard key={index} props={exp} />)

    return (
        <section id={id} className={Styles.experienceContainer}>
            <div className="container">
                {experienceCards}
            </div>
        </section>
    )
};

export default Experience;