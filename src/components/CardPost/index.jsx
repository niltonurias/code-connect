import Image from 'next/image';
import Link from 'next/link';

import styles from './cardpost.module.css';

import { Avatar } from '@/components/Avatar';
import { ThumbsUpButton } from './ThumbsUpButton';
import { ModalComment } from '../ModalComment';

import { incrementThumbsUp } from '@/actions/post';
import { postComment } from '@/actions/comment';
import db from '../../../prisma/db';

export const CardPost = async ({ post, highlight }) => {

    const submitThumbsUp = incrementThumbsUp.bind(null, post);
    const submitPostComment = postComment.bind(null, post);
    const countComments = await db.comment.count({ where: { postId: post.id } });

    return (
        <article className={`${styles.card} ${!highlight ? '' : styles.highlight}`}>
            <header className={styles.header}>
                <figure style={{ height: highlight ? 300 : 133}}>
                    <Image src={post.cover} fill alt={`Capa do post de titulo ${post.title}`}/>
                </figure>
            </header>

            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link href={`/posts/${post.slug}`} className={styles.link}>Ver detalhes</Link>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footerButtons}>
                    <form action={submitThumbsUp}>
                        <ThumbsUpButton />
                        <p>
                            {post.likes}
                        </p>
                    </form>
                    <div>
                        <ModalComment action={submitPostComment}/>
                        <p>
                            {countComments}
                        </p>
                    </div>
                </div>
                <div>
                    <Avatar name={post.author.username} imageSrc={post.author.avatar} />
                </div>
            </footer>
        </article>
    )
};