declare namespace NodeJS {
    interface ProcessEnv {
        DB_NAME: string;
        DB_USER: string;
        DB_PASSWORD: string;
        DB_PORT: string;
        DB_HOST : string;
        PORT : string;
    }
}