import Image from 'next/image';
import Link from 'next/link';

import styles from './cardpost.module.css';

import { Avatar } from '@/components/Avatar';
import { incrementThumbsUp, postComment } from '@/actions';
import { ThumbsUpButton } from './ThumbsUpButton';
import { ModalComment } from '../ModalComment';

export const CardPost = ({ post, highlight }) => {

    const submitThumbsUp = incrementThumbsUp.bind(null, post);
    const submitPostComment = postComment.bind(null, post);

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
                            {post.comments.length}
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