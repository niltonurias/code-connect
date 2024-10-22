import { redirect } from 'next/navigation';
import db from '../../../../prisma/db';
import styles from './page.module.css';
import logger from '@/logger';

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

const PageProfile = ({ params }) => {
    const user = findByUsername(params.username);
    return (
        <>
        </>
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