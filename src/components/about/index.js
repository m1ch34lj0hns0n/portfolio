import React from 'react';
import styles from './index.module.css';
import me from './me.jpg';

const About = () => (
    <section className={styles.aboutContainer}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <span className={styles.aboutTitle}>About</span>
                </div>
            </div>
            <div className="row flex-row-reverse">
                <div className={['col-sm', styles.meContainer].join(' ')}>
                    <img
                        src={me}
                        className={[styles.meImage, 'mb-4 mb-lg-0'].join(' ')}
                        alt="Mike Johnson, software development engineer"
                    />
                </div>
                <div className="col-12 col-lg-9">
                    <p>Hey, I'm Michael. A self taught developer with 4+ years experience. I currently reside in Cambridgeshire and work for <a href="https://reed.co.uk" target="_blank" rel="noopener noreferrer" className={styles.reedLogo}>reed.co.uk</a> as a software development engineer.</p>
                    <p>I predominantly work on the client-side using HTML, CSS & JavaScript along with varying frameworks such as Bootstrap and ReactJS for creating rich user experiences. I also have experience with backend technologies such as C# .NET & NodeJS.</p>
                    <p>When away from VSCode you can catch me collecting vinyl, <span className={styles.failing}>attempting</span> failing to learn guitar or out socialising at the local with chums.</p>
                </div>
            </div>
        </div>
    </section>
);

export default About;