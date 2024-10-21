'use server';

import db from "../../../prisma/db";
import { revalidatePath } from "next/cache";

export async function incrementThumbsUp(post) {
    await db.post.update({
        where: {
            id: post.id
        },
        data: {
            likes: {
                increment: 1
            }
        }
    });

    revalidatePath('/');
    revalidatePath(`/${post.slug}`);
}