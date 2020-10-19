import React, { useState } from 'react';
import { Link } from "react-scroll";

import styles from './index.module.css';

import experiences from '../../routes';

const Navigation = () => {

    const [toggleNavigation, setToggleNavigation] = useState(false);
    const toggledOnNavigationClass = toggleNavigation ? styles.navigationToggleOpen : null

    const navigationLinks = experiences.map(route => (
        <li role="presentation" key={route.name}>
            <Link
                smooth={true}
                duration={500}
                role="menuitem"
                title={route.name}
                to={route.name.toLowerCase()}
                className={styles.navigationLink}
                href={`#${route.name.toLowerCase()}`}
                onClick={() => setToggleNavigation(false)}
            >
                {route.name}
            </Link>
        </li>  
    ))

    return (
        <div className={['fixed-top', toggledOnNavigationClass].join(' ')} >
            <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setToggleNavigation(prevValue => !prevValue)}
                className={['navbar-toggler', styles.navigationToggle].join(' ')}
            >
                <span className={styles.navigationIcon} />
            </button>
            {toggleNavigation && (
                <nav role="navigation" className={styles.navigationMenu}>
                    <ul role="menubar" className={styles.navigationList}>
                        {navigationLinks}
                    </ul>
                </nav>
            )}
        </div>
    )
};

export default Navigation;