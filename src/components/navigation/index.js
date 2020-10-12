import React from 'react';
import styles from './index.module.css'

const navigation = () => (
    <div className="fixed-top">
        <button
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={['navbar-toggler', styles.navigationToggle].join(' ')}
        >
            <span className={styles.navigationIcon} />
        </button>
    </div>
);

export default navigation;