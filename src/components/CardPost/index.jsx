import Image from 'next/image';
import Link from 'next/link';

import styles from './cardpost.module.css';

import { Avatar } from '@/components/Avatar';
import logger from '@/logger';

export const CardPost = ({ post, highlight }) => {
    return (
        <Link href={`/posts/${post.slug}`} className={styles.link}>
            <article className={`${styles.card} ${!highlight ? '' : styles.highlight}`}>
                <header className={styles.header}>
                    <figure style={{ height: highlight ? 300 : 133}}>
                        <Image src={post.cover} fill alt={`Capa do post de titulo ${post.title}`}/>
                    </figure>
                </header>

                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>

                <footer className={styles.footer}>
                    <div>
                        
                    </div>
                    <div>
                        <Avatar name={post.author.username} imageSrc={post.author.avatar} />
                    </div>
                </footer>
            </article>
        </Link>
    )
};