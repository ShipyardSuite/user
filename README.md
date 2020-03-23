# user

Shipyard Microservice

---

## Environment variables

| Name                  | Type     | Default | Description                       |
| --------------------- | -------- | ------- | --------------------------------- |
| **SERVICE_NAME:**     | `String` | user    | Microservice name.                |
| **SERVICE_PORT:**     | `Number` | 3005    | Microservice port.                |
| **DATABASE_URL:**     | `String` |         | Database url.                     |

## API

| Type | URL                 | Body                                        | Query                     | Response              | Description                                             |
| ---- | ------------------- | ------------------------------------------- | ------------------------- | ------------------------------------------ | ---------------------------------- |
| GET  | `/api/status`       |                                             |                           | **online**: `boolean`                      | Testing service connection.        |
| GET  | `/api/token/:token` |                                             |                           | **success**: `boolean`, **data**: `object` | Get User by token.                 |
| GET  | `/api/id/:id`       |                                             |                           | **success**: `boolean`, **data**: `object` | Get User by id.                    |
| PUT  | `/api/update`       |                                             |                           | **success**: `boolean`                     | Update User.                       |
| GET  | `/api/all`          |                                             |                           | **success**: `boolean`, **data**: `object` | Get all Users.                     |

## Usage
 
**LOCAL**: create a `.env` file, with the specified variables and run `docker-compose up -d --build`.

## License

This project is released under the [Apache version 2](LICENSE) license.

