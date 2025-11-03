import { registerAs } from '@nestjs/config';
import * as path from 'path';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pkg = require(path.join(process.cwd(), 'package.json'));

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
      name: process.env.PROJECT_NAME ?? pkg?.name,
      description: process.env.PROJECT_DESCRIPTION ?? pkg?.description,
      version: pkg?.version ?? '1',
    },
    metterToledo: {
      baseUrl: process.env.METTER_TOLEDO_BASE_URL,
    },
  };
});

export type AppConfigType = typeof APP_CONFIG;
