'use client'

import { useRef } from "react";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { Chat } from "../icons/Chat";
import styles from "./modal-comment.module.css";
import { SubmitButton } from "../SubmitButton";

export const ModalComment = ({ action }) => {
    const modalRef = useRef(null);

    return (
        <>
            <Modal ref={modalRef}>
                <div className={styles.body}>
                    <form action={action} onSubmit={() => modalRef.current.closeModal()}>
                        <h2>Deixe seu comentário sobre o post:</h2>
                        <textarea required rows={8} name="text" placeholder="Digite aqui..." />
                        <div className={styles.footer}>
                            <SubmitButton>
                                Comentar
                            </SubmitButton>
                        </div>
                    </form>
                </div>
            </Modal>

            <IconButton onClick={() => modalRef.current.openModal()}>
                <Chat />
            </IconButton>
        </>
    );
}