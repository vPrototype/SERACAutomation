import { config as dotenvConfig } from 'dotenv';
import { Helper } from '../utils/Helpers';

//Por default nos vamos a dev pero puedes ejecutar de la siguiente manera
//npm run test:dev <-- Ambiente dev
//npm run test:stage <-- Ambiente stage
dotenvConfig({ path: `.env.${process.env.NODE_ENV || 'dev'}` });

//Asignar sus propiedades
interface Config {
  browserConfig: {
    headless: boolean;
    viewport: { width: number; height: number };
    timeout: number;
  };
  urls: {
    Login_Url: string;
    Home_Url: string;
    UserModule_SubUser_Url: string;
    UserModule_SubProfile_Url: string;
    
  };
  credentials: {
    adminUser: string;
    adminPass: string;
  };
}

//Insertar valores a la propiedades
export const config: Config = {
  browserConfig: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    timeout: 30000,
  },
  urls: {
    Login_Url: process.env.SERAC!,
    Home_Url: process.env.SERAC_HOME!,
    UserModule_SubUser_Url: process.env.SERAC_USER_MODULE_SUBMODULE_USER!,
    UserModule_SubProfile_Url: process.env.SERAC_USER_MODULE_SUBMODULE_PROFILE!,
  },
  credentials: {
    adminUser: process.env.ADMIN_EMAIL!,
    adminPass: process.env.ADMIN_PASSWORD!
  },
};
