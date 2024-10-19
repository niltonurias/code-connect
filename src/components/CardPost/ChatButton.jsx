'use client'

import { IconButton } from "../IconButton";
import { Spinner } from "../Spinner";
import { Chat } from "../icons/Chat";

import { useFormStatus } from 'react-dom';

export const ChatButton = () => {
    const { pending } = useFormStatus();
    return (
        <IconButton disable={pending}>
            { pending ? <Spinner /> : <Chat /> }
        </IconButton>
    );
}