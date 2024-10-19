import styles from './icon-button.module.css';

export const IconButton = ({ children, ...rest}) => {
    return (
        <button {...rest} className={styles.btn}>
            {children}
        </button>
    );
}