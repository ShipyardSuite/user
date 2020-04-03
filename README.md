![GitHub last commit (branch)](https://img.shields.io/github/last-commit/shipyardsuite/user/develop?color=3cafe2&style=flat-square)
![Docker Image Version (latest by date)](https://img.shields.io/docker/v/shipyardsuite/user?color=3cafe2&sort=date&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/shipyardsuite/user?color=3cafe2&style=flat-square)
![Maintenance](https://img.shields.io/maintenance/yes/2020?color=3cafe2&style=flat-square)
![GitHub](https://img.shields.io/github/license/shipyardsuite/user?color=3cafe2&style=flat-square)

# user

User management service

---

## Environment variables

| Name                  | Type     | Default | Description                       |
| --------------------- | -------- | ------- | --------------------------------- |
| **SERVICE_NAME:**     | `String` | user    | Microservice name.                |
| **SERVICE_PORT:**     | `Number` | 3009    | Microservice port.                |
| **DATABASE_URL:**     | `String` |         | Database url.                     |

## API

| Type | URL             | Body                                        | Query               | Response              | Description                                             |
| ---- | ----------------| ------------------------------------------- | ------------------- | --------------------- | ------------------------------------------------------- |
| GET  | `/api/status`   |                                             |                     | **online**: `boolean` | Testing service connection.                             |
| PUT  | `/api/update`   |                                             |                     |                       | Update user informations.                               |
| GET  | `/api/token`    |                                             | **token**: `String` |                       | Get user informations by session token.                 |
| GET  | `/api/id`       |                                             | **token**: `id`     |                       | Get user informations by user-id.                       |
| GET  | `/api/all`      |                                             |                     |                       | Get all users.                                          |

## Usage

**LOCAL**: create a `.env` file, with the specified variables and run `docker-compose up -d --build`.

## License

This project is released under the [Apache version 2](LICENSE) license.

