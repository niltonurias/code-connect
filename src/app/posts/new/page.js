import Image from "next/image";
import styles from "./page.module.css";
import defaultBanner from "./default-banner.png";

import { SubmitButton } from "@/components/SubmitButton";
import { DiscardButton } from "@/components/DiscardButton";
import { create } from "@/actions/post";

const PageNewPost = () => {
    const submitPost = create.bind(null);

    return (
        <div className={styles.main}>
            <form className={styles.form} action={submitPost}>
                <div className={styles.header}>
                    <figure className={styles.banner}>
                        <Image src={defaultBanner} alt={`Capa do novo post`} />
                    </figure>
                    <div className={styles.upload}>
                        <input type="file" id="cover" name="cover" hidden accept=".png,.jpg,.jpeg" />
                        <button>Carregar imagem</button>
                        <p className={styles.fileName}>image_projeto.png</p>
                    </div>
                </div>

                <h1>Novo projeto</h1>

                <div className={styles.body}>
                    <div className={styles.bodyContent}>
                        <span>Nome do projeto</span>
                        <input type="text" name="title" required placeholder="Insira o titulo do projeto" />
                    </div>
                    <div className={styles.bodyContent}>
                        <span>Descrição</span>
                        <textarea rows={2} name="body" required />
                    </div>
                    <div className={styles.bodyContent}>
                        <span>Código</span>
                        <textarea rows={8} name="markdown" required />
                    </div>
                </div>

                <div className={styles.footer}>
                    <DiscardButton>Descartar</DiscardButton>
                    <SubmitButton>Publicar</SubmitButton>
                </div>
            </form>
        </div>
    );
};

export default PageNewPost;
