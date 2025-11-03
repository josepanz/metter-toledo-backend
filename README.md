<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# <p> <span align="rigth"><a href="https://www.mt.com/py/es/home.html" target="blank"><img src="https://www.mt.com//etc.clientlibs/mt/images/clientlibs/static/resources/mt-logo-top-01.svg" width="100" height="50" style="background-color:white;" alt="Metter Toledo Logo" /></a><span> Metter-Toledo Backend</p>


API en NestJS para integrar con dispositivos Metter-Toledo (IND360), exponer endpoints para captura de peso y configuración de componentes, y persistir datos en PostgreSQL vía Prisma.

## Resumen

- Backend construido con NestJS.
- Persistencia con Prisma (PostgreSQL).
- Endpoints documentados con Swagger en runtime.
- Prefijo global de la API: `/metter-toledo-backend/api`.

## Requisitos

- Node.js 22.x (imagen Docker usa `node:22-alpine`).
- pnpm (se recomienda usar la versión del proyecto).
- PostgreSQL accesible y configurado en `DATABASE_URL`.

Consulta [package.json](package.json) para dependencias y scripts.

## Configuración (local)

1. Copiar plantilla de environment:
   cp .env.template .env
   Edita `.env` y ajusta:
   - `DATABASE_URL`
   - `METTER_TOLEDO_BASE_URL`
     (.env de ejemplo: [.env.template](.env.template))

2. Instalar dependencias:

```bash
pnpm install
```

3. Generar cliente Prisma:

```bash
pnpm exec prisma generate
```

4. Aplicar migraciones (opcional según flujo):
   - Si quieres ejecutar las migraciones incluidas:

     ```bash
     pnpm exec prisma migrate deploy
     ```

   - Para desarrollo local con sincronización:

     ```bash
     pnpm exec prisma db push
     ```

5. (Opcional) Cargar seed:

   ```bash
   pnpm run seed
   ```

6. Compilar y ejecutar:
   - Desarrollo (watch):

   ```bash
   pnpm run start:dev
   ```

   - Producción:

   ```bash
   pnpm run build
   ```

   ```bash
   pnpm run start:prod
   ```

## Prisma

- Esquema: [prisma/schema.prisma](prisma/schema.prisma)
- Migración de ejemplo: [prisma/migrations/20251023185657_init_and_create_measurement_table/migration.sql](prisma/migrations/20251023185657_init_and_create_measurement_table/migration.sql)
- Comandos útiles:
  - Generar cliente: pnpm exec prisma generate
  - Ejecutar migraciones en despliegue: pnpm exec prisma migrate deploy
  - Push esquema (dev): pnpm exec prisma db push

## Documentación Swagger

- La UI de Swagger está disponible en runtime en:
  /metter-toledo-backend/api/docs
  (configurada en [src/main.ts](src/main.ts))

## Endpoints principales

1. Example API

- Controlador: [`ExampleApiController`](src/api/example/controllers/example-api.controller.ts) — [src/api/example/controllers/example-api.controller.ts](src/api/example/controllers/example-api.controller.ts)
- Rutas:
  - POST /example (v1) — crear un Example (invoque el servicio que persiste via Prisma)
  - GET /example (v1) — listar ejemplos
- DTOs usados: ver [src/api/example/dtos](src/api/example) y controlador.

2. Metter-Toledo (Toledo)

- Controlador: [`MetterToledoController`](src/api/metter-toledo/controllers/metter-toledo.controller.ts) — [src/api/metter-toledo/controllers/metter-toledo.controller.ts](src/api/metter-toledo/controllers/metter-toledo.controller.ts)
- Servicios principales:
  - [`MetterToledoService`](src/api/metter-toledo/services/metter-toledo.service.ts) — [src/api/metter-toledo/services/metter-toledo.service.ts](src/api/metter-toledo/services/metter-toledo.service.ts)
  - [`Ind360Service`](src/modules/ind360/services/ind360.service.ts) — realiza las llamadas HTTP al dispositivo/servicio IND360 — [src/modules/ind360/services/ind360.service.ts](src/modules/ind360/services/ind360.service.ts)
  - Persistencia:
    - [`MeasurementService`](src/modules/measurement/measurement.service.ts) -> [`MeasurementRepository`](src/modules/measurement/repository/measurement.repository.ts)
    - [`DeviceComponentService`](src/modules/device-component/device-component.service.ts)
- Rutas:
  - GET /toledo/weight (v1)
    - Acción: solicita datos de peso a IND360 via [`Ind360Service`](src/modules/ind360/services/ind360.service.ts), mapea la respuesta y persiste múltiples registros en la tabla `measurement` usando [`MeasurementService`](src/modules/measurement/measurement.service.ts).
    - Respuesta: devuelve la respuesta original de IND360 (tipo: IInd360MeasurementWeightResponse).
    - Implementación de persistencia: ver método `captureAndSaveWeight` en [`MetterToledoService`](src/api/metter-toledo/services/metter-toledo.service.ts).
  - GET /toledo/device-config (v1)
    - Acción: solicita configuración de transacción del componente del dispositivo y persiste/configura `device_component` (ver método `getAndSaveDeviceConfig` en [`MetterToledoService`](src/api/metter-toledo/services/metter-toledo.service.ts)).
    - Respuesta: IInd360ConfigTransactionDeviceComponentResponse y DTOs en [src/api/metter-toledo/dtos/responses](src/api/metter-toledo/dtos/responses).

3. Healthcheck

- Controlador: [`HealthController`](src/modules/health/health.controller.ts) — [src/modules/health/health.controller.ts](src/modules/health/health.controller.ts)
- Ruta: GET /healthcheck (v1)
  - Valida conexión a DB y heap memory; devuelve versión (lee `package.json`).

## Modelos (Prisma)

- Definidos en: [prisma/schema.prisma](prisma/schema.prisma)
  - Example
  - Measurement
  - DeviceComponent

## Arquitectura / Repositorios

- Patrón base: [`PrismaBaseRepository`](src/core/database/prisma-base.repository.ts) y [`PrismaBaseService`](src/common/services/base/prisma-base.service.ts)
  - [`PrismaBaseRepository`](src/core/database/prisma-base.repository.ts)
  - [`PrismaBaseService`](src/common/services/base/prisma-base.service.ts)

## Docker / CI

- Dockerfile preparado para build multi-stage (usa Node 22): [Dockerfile](Dockerfile)
- Pipeline GitLab ejemplo: [.gitlab-ci.yml](.gitlab-ci.yml)

## Notas finales

- Comprueba variables en `.env` antes de ejecutar.
- Swagger es la forma más rápida para revisar contratos, DTOs y ejemplos en runtime.
- Para ver o extender comportamientos de persistencia y endpoints revisa:
  - [`src/api/metter-toledo/services/metter-toledo.service.ts`](src/api/metter-toledo/services/metter-toledo.service.ts)
  - [`src/modules/measurement/measurement.repository.ts`](src/modules/measurement/repository/measurement.repository.ts)
  - [`prisma/schema.prisma`](prisma/schema.prisma)
