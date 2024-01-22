// Mapper for env variables
export const db = {
    name : process.env.DB_NAME ||'',
    user : process.env.DB_USER || '',
    password : process.env.DB_PASSWORD || '',
    host : process.env.DB_HOST || '',
    port : process.env.DB_PORT || ''
};

export const port = process.env.PORT;