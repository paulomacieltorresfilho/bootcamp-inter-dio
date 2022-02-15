import { Pool } from 'pg';

const connectionString = process.env.POSTGRES_DB;
const db = new Pool({ connectionString });

export default db;
