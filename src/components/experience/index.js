import React from 'react';
import Styles from './index.module.css';

import experiences from './experiences';

const Experience = ({id}) =>  (
    <section id={id} className={Styles.experienceContainer}>
        <div className="container">
            {
                experiences.map((exp, index) => (
                    <article key={index} className={[Styles.timelineBlock, 'row'].join(' ')}>
                        <div className={Styles.timelinePoint} />
                        <div className={Styles.timelineContent}>
                            <img src={exp.logo} height="35" width="100" alt={exp.company} />
                            <h3>{exp.title}</h3>
                            <small>{`${exp.fromDate} - ${exp.toDate}`}</small>
                            {exp.description && (
                                <p dangerouslySetInnerHTML={{__html: exp.description}} />
                            )}
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
);

export default Experience;