import pg from "pg";

const client = pg.Client(process.env.DATABASE_URL);
await client.connect();

export default client;
