/*
get /users
get /users/:uuid
post /users
put /users/:uuid
delete /users/:uuid
*/

import { NextFunction, Request, Response, Router } from 'express';
import statusCodes from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users: object[] = [{ userName: 'Paulo Maciel' }];
    res.status(statusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;

    res.status(statusCodes.OK).send({ uuid })
});


usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    console.log(req.body);
    res.status(statusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;

    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;

    res.status(statusCodes.OK).send(modifiedUser);
});

usersRoute.delete('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    const { uuid } = req.params;
    res.sendStatus(statusCodes.OK);
});

export default usersRoute;


