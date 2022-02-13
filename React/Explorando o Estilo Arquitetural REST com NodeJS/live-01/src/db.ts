import { Pool } from 'pg';

const connectionString = 'postgres://sprxrjiu:u6ZkVL0pCFYTe3n2CdFLVKlVCrvD_Klq@motty.db.elephantsql.com/sprxrjiu';
const db = new Pool({ connectionString });

export default db;