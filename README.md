# Apollo + Prisma Starter Project

This is a boilerplate starter project for using Prisma as the ORM backed by a MySQL server on docker and Apollo server as the middleware layer for handling authentication/authorization and locking down the Prisma server

## How to use
1. Install everything with `npm i`
2. Copy `starter.env.default`into `config` dir and make `dev.env` and `prod.env` files
3. Change the config values in config dir `.env` files
4. Start the Prisma servers if they are not running already by running `docker-compose up -d` from `prisma` directory
5. Update the `prisma/datamodel.prisma` file to match your schema 
6. From `prisma` directory, deploy with `prisma deploy -e ../config`
7. Update `typeDefs.js` with your frontend facing data schema
8. Start Apollo server with `npm run dev` or `npm run prod`

## Debugging
- Run Apollo server with `npm run debug`