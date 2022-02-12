/*
get /users
get /users/:uuid
post /users
put /users/:uuid
delete /users/:uuid
*/

import { Router, Request, Response, NextFunction } from 'express';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users:object[] = [{ userName: 'Paulo Maciel' }];
    res.status(200).send(users);
} );

usersRoute.get('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {


    res.sendStatus(200);
} );

export default usersRoute;


