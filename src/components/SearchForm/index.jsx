import { Button } from '../Button';
import styles from './search-form.module.css';

export const SearchForm = () => {
    return (
        <form className={styles.form} action='/'>
            <div className={styles.inputIcons}>
                <i class="material-symbols-outlined">search</i>
                <input name="q" className={styles.input} placeholder="Digite o que você procura" />
            </div>
            <Button><span class="material-symbols-outlined">search</span></Button>
        </form>
    );
};