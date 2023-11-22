# Nest Foundation

This app showcases building blocks and essential concepts behind creating your own enterprise-grade applications with NestJS.

1. Build a real-world REST API application
2. Database integration with TypeORM
3. Dependency Injection
4. Application Configuration
5. Other Building Blocks
6. Generating OpenAPI Specification
7. Testing

## Get started

1. Make sure you have docker installed on your local machine.
2. Duplicate the `.env.example` file and rename it to `.env`.

```bash
# Install dependencies
$ npm install

# setup postgres database with docker
$ docker compose up
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Test the app using Postman

Import the file `NestFoundation.postman_collection` in your Postman. It will add a new collection name `Nest Foundation` in your workspace.

## License

Nest is [MIT licensed](LICENSE).
