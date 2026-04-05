import { Pool } from "pg";

const globalForPool = globalThis as unknown as {
  pgPool: Pool | undefined;
};

export const db =
  globalForPool.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 10,
    idleTimeoutMillis: 30000,
  });

if (process.env.NODE_ENV !== "production") globalForPool.pgPool = db;
