import React from 'react';
import Styles from './index.module.css';

import Form from '../form';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faLinkedin,
    faGithubSquare
} from '@fortawesome/free-brands-svg-icons';

const Contact = ({id}) => (
    <section id={id} className={Styles.contactContainer}>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <span className={Styles.contactTitle}>Socials</span>
                    <p>You can find me in the following places...</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a
                                href="https://github.com/m1ch34lj0hns0n"
                                rel="noopener noreferrer"
                                className={Styles.link}
                                target="_blank"
                            >
                                <FontAwesomeIcon size="2x" icon={faGithubSquare} />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                href="https://www.linkedin.com/in/michaelbenjohnson/"
                                rel="noopener noreferrer"
                                className={Styles.link}
                                target="_blank"
                            >
                                <FontAwesomeIcon size="2x" icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm">
                    <Form />
                </div>
            </div>
        </div>
    </section>
);

export default Contact;