/*
get /users
get /users/:uuid
post /users
put /users/:uuid
delete /users/:uuid
*/

import { NextFunction, Request, Response, Router } from 'express';
import statusCodes from 'http-status-codes';
import userRepository from '../repositories/user.repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(statusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;
    const user = await userRepository.findById(uuid);
    res.status(statusCodes.OK).send(user);
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);
    res.status(statusCodes.CREATED).send(uuid);
});

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    await userRepository.update(modifiedUser);
    res.sendStatus(statusCodes.OK)
});

usersRoute.delete('/users/:uuid', async (req: Request, res: Response, next: NextFunction) => {
    const { uuid } = req.params;
    await userRepository.remove(uuid);
    res.sendStatus(statusCodes.OK);
});

export default usersRoute;


