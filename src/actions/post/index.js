'use server';

import db from "../../../prisma/db";
import slugify from "@sindresorhus/slugify";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

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

export async function create(formData) {
    const author = await db.user.findFirst({
        where: { username: 'anabeatriz_dev' }
    });


    const post = await db.post.create({
        data: {
            cover: 'https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/otimizacao-de-performance-no-react.png',
            title: formData.get('title'),
            slug: slugify(formData.get('title')),
            body: formData.get('body'),
            markdown: formData.get('markdown'),
            authorId: author.id
        }
    });

    revalidatePath('/');
    redirect(`/posts/${post.slug}`);
}