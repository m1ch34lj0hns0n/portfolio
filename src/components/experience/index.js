import React from 'react';
import Styles from './index.module.css';

import reedLogo from './logos/reed-logo.png';
import adestraLogo from './logos/adestra-logo.png';
import redeyeLogo from './logos/redeye-logo.png';

const experience = [
    {
        company: 'reed.co.uk',
        logo: reedLogo,
        title: 'Software Development Engineer',
        fromDate: 'Dec 2019',
        toDate: 'Present',
        description: '<p>Responsible for client-side development of new features for reed products, whilst maintaining existing products.</p><ul><li>Develop single page applications using React and vanilla JavaScript ES6 whilst implementing state management when required. Ensuring tests are written and E2E tests are updated.</li><li>Maintain existing/legacy applications using Knockout, jQuery & Razor (C#) on the client-side. Occasionally work with the server-side .NET C#.</li><li>Implementation of multi-variant tests using Adobe Target</li><li>SEO & performance optimisation</li>'
    },
    {
        company: 'reed.co.uk',
        logo: reedLogo,
        title: 'Junior Front End Developer',
        fromDate: 'Jul 2016',
        toDate: 'Nov 2019'
    },
    {
        company: 'reed.co.uk',
        logo: reedLogo,
        title: 'Web/Email Developer',
        fromDate: 'Apr 2015',
        toDate: 'Jun 2016',
        description: '<p>Responsible for the development of both email and land page marketing campaigns.</p><ul><li>Develop email templates using both HTML/CSS whilst ensuring compatiblity across email clients.</li><li>Develop landing pages using for marketing campaigns, using HTML, CSS including frameworks such as Bootstrap, JavaScript including liberies such as jQuery. Ensure landing pages are tested across varying browsers.</li></ul>'
    },
    {
        company: 'reed.co.uk',
        logo: reedLogo,
        title: 'Junior Web/Email Developer',
        fromDate: 'Dec 2014',
        toDate: 'May 2015'
    },
    {
        company: 'Redeye International',
        logo: redeyeLogo,
        title: 'Email Marketing Executive',
        fromDate: 'Jun 2014',
        toDate: 'Nov 2015',
        description: '<p>Managing standard & behavioural email campaigns on behalf of major international brands.</p><ul><li>Having day-to-day contact with clients and internal departments to manage their email marketing campaigns.</li><li>Manage campaign targeting, optimisation, transmission, delivery and the response/reporting.</li><li>Develop and manipulate HTML emails. This can include working on responsive landing pages e.g. email sign up pages.</li>'
    },
    {
        company: 'reed.co.uk',
        logo: reedLogo,
        title: 'Junior Web/Email Developer',
        fromDate: 'Mar 2014',
        toDate: 'Jul 2015',
        description: '<p>Temperary three month contract.</p>'
    },
    {
        company: 'Adestra',
        logo: adestraLogo,
        title: 'Support Representative',
        fromDate: 'Jul 2012',
        toDate: 'Feb 2015',
        description: '<p>Providing excellent client handling skills whilst liaising with clients on a day to day basis; ensuring email campaigns are delivered effectively and to deadline.</p><ul><li>Providing excellent support to users of email marketing platform.</li><li>Resolving problems using several inbound channels such as telephone, email and the online chat tool within our platform.</li><li>Resolving a range of issues from simple functionality issues, through to more involved problems that require investigation and liaison with colleagues, both within the team and other teams across the organisation.</li></ul>'
    }
]

const Experience = () => {

    const experiences = experience.map(exp => (
        <article className={[Styles.timelineBlock, 'row'].join(' ')}>
            <div className={Styles.timelinePoint} />
            <div className={Styles.timelineContent}>
                <img src={exp.logo} alt={exp.company} />
                <h3>{exp.title}</h3>
                <small>{`${exp.fromDate} - ${exp.toDate}`}</small>
                {exp.description && (
                    <p dangerouslySetInnerHTML={{__html: exp.description}} />
                )}
            </div>
        </article>
    ))

    return (
        <section className={Styles.experienceContainer}>
            <div class="container">{experiences}</div>
        </section>
    );
};

export default Experience;