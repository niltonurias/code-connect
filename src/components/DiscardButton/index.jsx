'use client';

import styles from './discard-button.module.css';
import Link from 'next/link';

export const DiscardButton = ({ children }) => {
    return (
        <div className={styles.btn}>
            <Link href="/">
                {children}&nbsp;<span className={'material-symbols-outlined'}>delete</span>
            </Link>
        </div>
    );
}