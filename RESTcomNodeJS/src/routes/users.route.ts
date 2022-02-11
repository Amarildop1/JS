import { Router, Request, Response, NextFunction } from "express";

const usersRoute = Router();

usersRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
    const users = [ { name: "John" } ];
    res.status(200).send(users);
});

usersRoute.get("/users/:id", (req: Request, res: Response, next: NextFunction) => {
    const idUser = req.params.id;
    res.status(200).send( { idUser } );
});


export default usersRoute;