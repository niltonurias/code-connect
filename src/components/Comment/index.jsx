import Image from "next/image";
import styles from "./comment.module.css";

export const Comment = ({ comment }) => {
    return (
        <section className={styles.comment}>
            <div className={styles.section}>
                <div className={styles.userInfo}>
                    <Image src={comment.author.avatar} width={32} height={32} alt={`Avatar do(a) ${comment.author.name}`} />
                    <strong>
                        @{comment.author.username}
                    </strong>
                </div>
                <p>{comment.text}</p>
            </div>
        </section>
    );
}