import { ArrowBack } from '@/components/icons/ArrowBack'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@/components/Heading'

import style from './not-found/not-found.module.css'
import banner from './not-found/404.png'

export default function NotFound() {
    return (
        <div className={style.container}>
            <Image src={banner} alt="Imagem de recurso não encontrado"/>
            <Heading>Ops! Página não encontrada.</Heading>
            <p className={style.text}>Você pode voltar ao feed e continuar buscando projetos incríveis!</p>
            <Link href="/">
                Voltar ao feed <ArrowBack color='#81FE88'/>
            </Link>
        </div>
    );
}