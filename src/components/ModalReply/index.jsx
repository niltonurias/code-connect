'use client'

import { useRef } from "react";
import { Modal } from "../Modal";
import { SubmitButton } from "../SubmitButton";
import { Comment } from "../Comment";
import { postReply } from "@/actions/comment";

import styles from "./modal-reply.module.css";

export const ModalReply = ({ action, comment }) => {
    const modalRef = useRef(null);
    const submitReplyComment = postReply.bind(null, comment);

    return (
        <>
            <Modal ref={modalRef}>
                <div className={styles.body}>
                    <form action={submitReplyComment} onSubmit={() => modalRef.current.closeModal()}>
                        <Comment comment={comment} />
                        <div className={styles.divider}></div>
                        <textarea required rows={8} name="text" placeholder="Digite aqui..." />
                        <div className={styles.footer}>
                            <SubmitButton>
                                Responder
                            </SubmitButton>
                        </div>
                    </form>
                </div>
            </Modal>

            <button className={styles.btn} onClick={() => modalRef.current.openModal()}>
                Responder
            </button>
        </>
    );
}