import db from '../db';
import User from '../models/user.model';

class UserRepository {

    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT  UUID, USERNAME
            FROM    APPLICATION_USER
        `;

        const { rows } = await db.query<User>(query);
        return rows || [];
    }

    async findById(uuid: string): Promise<User> {
        try {
            const query = `
                SELECT  UUID, USERNAME
                FROM    APPLICATION_USER
                WHERE   UUID = $1
            `;

            const values = [uuid]
            const { rows } = await db.query<User>(query, values);
            const [user] = rows;

            return user;
        } catch(err) {
            console.log(err)
            throw err;
        }

    }

    async create(user: User): Promise<string> {

        const query = `
            INSERT  INTO APPLICATION_USER (USERNAME, PASSWORD)
            VALUES  ($1, crypt($2, 'my_salt'))
            RETURNING UUID
        `;

        const values = [user.username, user.password]
        const { rows } = await db.query<{ uuid: string }>(query, values);
        const [ newUser ] = rows;
        return newUser.uuid;
    }

    async update(user: User): Promise<void> {
        const query = `
            UPDATE  APPLICATION_USER
            SET 
                    USERNAME = $1,
                    PASSWORD = crypt($2,'my_salt')
            WHERE   UUID = $3
        `;

        const values = [user.username, user.password, user.uuid];
        await db.query(query, values);
    }

    async remove(uuid: string): Promise<void> {
        const query = `
            DELETE 
            FROM APPLICATION_USER
            WHERE UUID = $1
        `;
        
        const values = [uuid];
        await db.query(query, values);
    }

}

export default new UserRepository;