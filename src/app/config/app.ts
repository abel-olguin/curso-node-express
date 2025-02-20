export const {
               PORT:               port = 3000,
               DB_HOST:            dbHost,
               DB_PORT:            dbPort,
               DB_USERNAME:        dbUsername,
               DB_PASSWORD:        dbPassword,
               DB_DATABASE:        dbName,
               DB_SCHEMA:          dbSchema,
               JWT_SECRET:         jwtSecret,
               JWT_REFRESH_SECRET: jwtRefreshSecret,
             } = process.env;