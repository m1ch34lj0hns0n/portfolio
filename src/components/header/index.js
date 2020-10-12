import React, { useState } from 'react';
import Styles from './index.module.css';

const Header = () => {

    const [mouseCords, setMouseCords] = useState({x: 0, y: 0});

    const onMouseMove = e => {
        setMouseCords({x: e.pageX / 4, y: e.pageY / 4});
    }

    return (
        <header
            role="banner"
            onMouseMove={e => onMouseMove(e)}
            className={Styles.header}
        >
            <h1
                className={Styles.headerTitle}
                style={{
                    backgroundPositionX: `${mouseCords.x}%`,
                    backgroundPositionY: `${mouseCords.y}%`
                }}
            >
                Mike Johnson
            </h1>
            <h2 className={Styles.headerSubTitle}>
                Software Development Engineer
            </h2>
        </header>
    );
};

export default Header;