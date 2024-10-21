import { MaterialIconWithText } from "../icons/MaterialIconWithText";
import styles from "./no-post-found.module.css";

export const NoPostFound = async () => {
    return (
        <div className={styles.main}>
            <span className={"material-symbols-outlined"}>search_off</span>
            <p>Nenhum resultado encontrado para sua busca, tente um termo diferente.</p>
        </div>
    );
}