import { NextFunction, Request, Response, Router } from 'express';
import statusCodes from 'http-status-codes';

const statusRoute = Router();

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(statusCodes.OK).send({ foo: 'sucesso!' });
})

export default statusRoute;