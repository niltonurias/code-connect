import Link from 'next/link';
import logger from "@/logger";
import styles from "./page.module.css";
import {CardPost} from "@/components/CardPost";
import db from '../../prisma/db';

const LIMIT_PER_PAGE = 4;

async function getAllPosts(page, searchTerm) {
  try {
    const where = {}

    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: 'insensitive'
      }
    }

    const [posts, count] = await db.$transaction([
      db.post.findMany({
        where: where,
        take: LIMIT_PER_PAGE,
        skip: (page-1) * LIMIT_PER_PAGE,
        include: { author: true },
        orderBy: { createdAt: 'desc' }
      }),
      db.post.count({where: where})
    ]);

    const previousPage = page > 1 ? page - 1 : null;
    const nextPage =  Math.ceil(count / LIMIT_PER_PAGE) > page ? page + 1 : null;

    return { data: posts, prev: previousPage, next: nextPage};
  } catch(e) {
    logger.error('Falha ao obter posts', { error: e });
    return { data: null, prev: null, next: null };
  }
}

export default async function Home({searchParams}) {
  const currentPage = parseInt(searchParams?.page || 1);
  const searchTerm = searchParams?.q;
  const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm);

  return (
    <main className={styles.grid}>
      {posts?.map(post => <CardPost key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={{ pathname: '/', query: { page: prev, q: searchTerm } }}>Página anterior</Link>}
        {next && <Link href={{ pathname: '/', query: { page: next, q: searchTerm } }}>Próxima pagina</Link>}
      </div>
    </main>
  );
}
