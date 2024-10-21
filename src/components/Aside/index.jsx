import Image from 'next/image';
import Link from 'next/link';
import styles from './aside.module.css';
import logo from './logo.png';
import { Button } from '../Button';
import { MaterialIconWithText } from '../icons/MaterialIconWithText';
import { LinkButton } from '../LinkButton';

export const Aside = () => {

    return (<aside className={styles.aside}>
            <Link href="/">
                <Image src={logo} alt="Logo da Code Connect"/>
            </Link>
            <div className={styles.menu}>
                <Link href={"/posts/new"} className={styles.btn}>
                    Publicar
                </Link>
                <LinkButton href="/">
                    <MaterialIconWithText icon={"feed"}>Feed</MaterialIconWithText>
                </LinkButton>

                <LinkButton href="#">
                    <MaterialIconWithText icon={"account_circle"}>Perfil</MaterialIconWithText>
                </LinkButton>

                <LinkButton href="#">
                    <MaterialIconWithText icon={"info"}>Sobre nós</MaterialIconWithText>
                </LinkButton>

                <LinkButton href="#">
                    <MaterialIconWithText icon={"logout"}>Sair</MaterialIconWithText>
                </LinkButton>
            </div>
        </aside>)
};