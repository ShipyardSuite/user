![CircleCI](https://img.shields.io/circleci/build/github/ShipyardSuite/user/develop?label=build%20%28develop%29&logo=circleci&style=flat-square)
![CircleCI](https://img.shields.io/circleci/build/github/ShipyardSuite/user/master?label=build%20%28master%29&logo=circleci&style=flat-square)
![Docker Image Version (latest by date)](https://img.shields.io/docker/v/shipyardsuite/user?logo=docker&logoColor=ffffff&sort=date&style=flat-square)
![Codecov branch](https://img.shields.io/codecov/c/github/ShipyardSuite/user/develop?label=coverage&logo=codecov&logoColor=ffffff&style=flat-square)
![Codacy branch grade](https://img.shields.io/codacy/grade/ea58325a7d9a4dfd973be73484374dfd/develop?label=code%20quality%20&logo=codacy&style=flat-square)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/shipyardsuite/user/develop?logo=github&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/shipyardsuite/user?logo=github&style=flat-square)
![GitHub](https://img.shields.io/github/license/shipyardsuite/user?style=flat-square)

# nodejs-service-template

service template for nodejs applications.

## Environment variables

| Name                  | Type     | Default | Description                       |
| --------------------- | -------- | ------- | --------------------------------- |
| **SERVICE_NAME:**     | `String` | user    | Microservice name.                |
| **SERVICE_PORT:**     | `Number` | 3009    | Microservice port.                |
| **DATABASE_URL:**     | `String` |         | Database url.                     |

## API

| Type | URL             | Body                                        | Query               | Response              | Description                                             |
| ---- | ----------------| ------------------------------------------- | ------------------- | --------------------- | ------------------------------------------------------- |
| GET  | `/api/hello`   |                                             |                     | **success**: `boolean` | Testing service connection.                             |
| PUT  | `/api/update`   |                                             |                     |                       | Update user informations.                               |
| GET  | `/api/token`    |                                             | **token**: `String` |                       | Get user informations by session token.                 |
| GET  | `/api/id`       |                                             | **token**: `id`     |                       | Get user informations by user-id.                       |
| GET  | `/api/all`      |                                             |                     |                       | Get all users.                                          |

## Usage

**LOCAL**: create a `.env` file, with the specified variables and run `docker-compose up -d --build`.

## License

This project is released under the [Apache version 2](LICENSE) license.
