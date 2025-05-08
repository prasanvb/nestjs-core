# NestJS Core Basics

## About NestJS

- NestJS comes with battery included parts for each server operations

  - Controllers - Handling HTTP req/res
  - services - Handling data access and business logic
  - Modules - Groups together code
  - Pipes - Validates incoming data
  - Filters - Handles errors that occur during request handling
  - Guards - Handles authentication
  - Interceptors - adds extra logic to incoming request or outgoing response
  - repositories - Handles data stored in a DB

## Getting project running

- Initiate NPM and Install dependencies `npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2`
- Set up `tsconfig.json`
- Run `npx ts-node-dev src/main.ts` to execute

### Dependencies and their functions

- `@nestjs/common`- Contains vast majority of functions, classes, etc, that we need from Nest
- `@nestjs/core` - Core Nest factory functions
- `@nestjs/platform-express` - Lets Nest use Express JS for handling HTTP requests (default). Instead we can also use Fastify
- `reflect-metadata` - Helps make decorators work

### NestJs Naming convention

- One class per file (some exceptions)
- Class names should include the kind of thing we are creating
- Name of class and name of the file should always match up
- Filename template: name.type_of_thing.ts - `app.modules.ts`, `app.controller.ts`
