import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";

async function getPostBySlug(slug) {
  try {
    const post = await db.post.findFirst({
      where: { slug: slug },
      include: { author: true }
    });

    if (!post) {
      throw new NotFoundException(`Post com o slug ${slug} não foi encontrado`);
    }

    let processedContent = await remark().use(html).process(post.markdown);
    post.markdown = processedContent.toString();

    return post;
  } catch(e) {
    if (e instanceof NotFoundException) {
      redirect('/not-found');
      return;
    }

    logger.error('Falha ao obter post com o slug', { slug, error: e });
  }
}

const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return (
    <div className={styles.body}>
        <CardPost post={post} highlight/>
        <h3>Código:</h3>
        <div className={styles.code} dangerouslySetInnerHTML={{ __html: post.markdown }}></div>
    </div>
  );
};

class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default PagePost;
