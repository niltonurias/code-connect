'use client'

import styles from "./material-icon-with-text.module.css";

export const MaterialIconWithText = ({children, icon}) => {
    return (
        <div className={styles.icon}>
            <span className={"material-symbols-outlined"}>{icon}</span>
            <p>{children}</p>
        </div>
    );
};