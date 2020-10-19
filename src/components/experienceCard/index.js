import React from 'react';
import Styles from './index.module.css';

const ExperienceCard = ({props}) => {
    const {logo, company, title, fromDate, toDate, description} = props;
    
    return (
        <article className={[Styles.timelineBlock, 'row'].join(' ')}>
            <div className={Styles.timelinePoint} />
            <div className={Styles.timelineContent}>
                <img src={logo} height="35" width="100" alt={company} />
                <h3>{title}</h3>
                <small>{`${fromDate} - ${toDate}`}</small>
                {description && (
                    <p dangerouslySetInnerHTML={{__html: description}} />
                )}
            </div>
        </article>
    )
};

export default ExperienceCard;