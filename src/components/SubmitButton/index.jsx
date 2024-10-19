'use client';

import { useFormStatus } from "react-dom";
import { ArrowForward } from "../icons/ArrowForward";
import { Button } from "../Button";
import { Spinner } from "../Spinner";

export const SubmitButton = ({ children }) => {
    const { pending } =  useFormStatus();
    return (
        <Button aria-disabled={pending} type="submit">
            { pending ? <Spinner /> : 
                <>{children}&nbsp;<ArrowForward /></>
            }
        </Button>
    );
}