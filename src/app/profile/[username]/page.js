import { redirect } from 'next/navigation';
import Image from 'next/image';
import db from '../../../../prisma/db';
import styles from './page.module.css';
import logger from '@/logger';
import { Button } from '@/components/Button';

async function findByUsername(username) {
    try {
        const user = await db.user.findFirst({
          where: { username }
        });
    
        if (!user) {
          throw new NotFoundException(`Usuário com o username ${username} não foi encontrado`);
        }
    
        return user;
      } catch (e) {
        if (e instanceof NotFoundException) {
          redirect("/not-found");
          return;
        }
    
        logger.error("Falha ao obter usuário com o username", { username, error: e });
      }
}

const PageProfile = async ({ params }) => {
    const user = await findByUsername(params.username);
    return (
        <main className={styles.main}>
            <div className={styles.profile}>
                <figure className={styles.avatar}>
                    <Image src={user.avatar} fill alt={`Avatar do usuário ${user.username}`} />
                </figure>
                <div className={styles.userContainer}>
                    <div className={styles.userBasicInfo}>
                        @{user.username}
                        <Button>Seguir</Button>
                    </div>
                    <div className={styles.userInfo}>
                        <div>{user.name}</div>
                        <div className={styles.biography}>{user.biography}</div>
                        <div>
                            <p><span>{user.projects?.length ?? 0}</span> Projetos</p>
                            <p><span>{user.followers?.length ?? 0}</span> Conexões</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.projects}>

            </div>
        </main>
    );
}

class NotFoundException extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }

export default PageProfile;