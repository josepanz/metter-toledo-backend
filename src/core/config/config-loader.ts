import { registerAs } from '@nestjs/config';

export const APP_CONFIG = registerAs('config', () => {
  return {
    env: process.env.NODE_ENV,
    baseUrl: process.env.BASE_URL,
    apiconfig: {
      port: Number(process.env.PORT),
    },
    logger: {
      seqUrl: process.env.SEQ_URL,
      seqEnabled: process.env.SEQ_ENABLED === 'true',
    },
    project: {
      name: process.env.PROJECT_NAME,
      description: process.env.PROJECT_DESCRIPTION,
    },
    metterToledo: {
      baseUrl: process.env.METTER_TOLEDO_BASE_URL,
    },
  };
});

export type AppConfigType = typeof APP_CONFIG;
