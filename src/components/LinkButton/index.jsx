'use client';

import Link from 'next/link';
import styles from './link-button.module.css';
import { usePathname } from 'next/navigation';

export const LinkButton = ({ children, href}) => {
    const pathname = usePathname();
    return (
        <div className={styles.btn}>
            <Link href={href} className={pathname === href ? styles.btnActive : undefined}>
                {children}
            </Link>
        </div>
    );
}