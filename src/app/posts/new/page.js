import Image from "next/image";

import logger from "@/logger";
import styles from "./page.module.css";
import db from "../../../../prisma/db";
import slugify from "@sindresorhus/slugify";

import { SubmitButton } from "@/components/SubmitButton";
import { DiscardButton } from "@/components/DiscardButton";
import defaultBanner from "./default-banner.png";

async function createPost(formData) {
    try {
        const author = await db.user.findFirst({
            where: {
                username: 'anabeatriz_dev'
            }
        });

        await db.post.create({
            cover: 'https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/otimizacao-de-performance-no-react.png',
            title: formData.get('title'),
            slug: slugify(formData.get('title')),
            body: formData.get('body'),
            markdown: formData.get('markdown'),
            authorId: author.id
        });
    } catch (e) {
        logger.error("Falha ao criar novo post");
    }
}

const PageNewPost = () => {
  return (
    <div className={styles.main}>
        <form className={styles.form} action="#">
            <div className={styles.header}>
                <figure className={styles.banner}>
                    <Image src={defaultBanner} alt={`Capa do novo post`}/>
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
                    <input type="text" name="title" placeholder="Insira o titulo do projeto"/>
                </div>
                <div className={styles.bodyContent}>
                    <span>Nome do projeto</span>
                    <textarea rows={2} name="body" />
                </div>
                <div className={styles.bodyContent}>
                    <span>Código</span>
                    <textarea rows={8} name="markdown" />
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
